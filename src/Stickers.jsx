// Stickers.jsx — interactive draggable stickers that live on the workspace.
// Kept outside of PhotoStack so their state is scoped once and stored separately.

const motionS = window.motion || (window.Motion && window.Motion.motion);

// Defaults are positions in STAGE COORDS (percent of stage width/height) — resolved
// to px when the stage measures. Rotation is absolute degrees.
const STICKER_DEFS = [
  {
    id: 'name',
    kind: 'name',
    defaultPos: { xPct: 0.14, yPct: 0.12, rot: -6 },
    w: 200, h: 60,
    render: (accent) => (
      <div className="sticker sticker-name">
        <span className="sticker-name-first">Hsueh</span>
        <span className="sticker-name-last" style={{ background: accent }}>Chen</span>
      </div>
    )
  },
  {
    id: 'avatar',
    kind: 'avatar',
    defaultPos: { xPct: 0.86, yPct: 0.15, rot: 5 },
    w: 120, h: 120,
    render: () => (
      <div className="sticker sticker-avatar" aria-label="Hsueh Chen avatar">
        <img src="assets/avatar.png" alt="" className="sticker-avatar-photo" />
        <div className="sticker-avatar-tag">ME</div>
      </div>
    )
  },
  {
    id: 'tape',
    kind: 'tape',
    defaultPos: { xPct: 0.5, yPct: 0.08, rot: -12 },
    w: 160, h: 36,
    render: () => (
      <div className="sticker sticker-tape">
        <span>Portfolio · 2022–2025</span>
      </div>
    )
  },
  {
    id: 'star',
    kind: 'star',
    defaultPos: { xPct: 0.84, yPct: 0.8, rot: 14 },
    w: 92, h: 92,
    render: (accent) => (
      <div className="sticker sticker-star">
        <svg viewBox="0 0 100 100" width="92" height="92">
          <g transform="translate(50 50)">
            {[...Array(12)].map((_, i) => (
              <rect key={i} x="-3" y="-46" width="6" height="16" fill={accent}
                    transform={`rotate(${i * 30})`} />
            ))}
            <circle r="24" fill="#161616"/>
            <text textAnchor="middle" fontFamily="'IBM Plex Mono', monospace"
                  fontSize="10" fontWeight="700" fill={accent} y="3">NEW</text>
          </g>
        </svg>
      </div>
    )
  },
  {
    id: 'stamp',
    kind: 'stamp',
    defaultPos: { xPct: 0.14, yPct: 0.82, rot: -9 },
    w: 140, h: 60,
    render: () => (
      <div className="sticker sticker-stamp">
        <span className="sticker-stamp-year">2026</span>
        <span className="sticker-stamp-label">Sthlm</span>
      </div>
    )
  },
  {
    id: 'stamp2',
    kind: 'stamp',
    defaultPos: { xPct: 0.22, yPct: 0.9, rot: 6 },
    w: 140, h: 60,
    render: () => (
      <div className="sticker sticker-stamp sticker-stamp-taipei">
        <span className="sticker-stamp-year">2025</span>
        <span className="sticker-stamp-label">Taipei</span>
      </div>
    )
  },
  {
    id: 'stamp3',
    kind: 'stamp',
    defaultPos: { xPct: 0.32, yPct: 0.85, rot: -4 },
    w: 140, h: 60,
    render: () => (
      <div className="sticker sticker-stamp sticker-stamp-aalto">
        <span className="sticker-stamp-year">2023</span>
        <span className="sticker-stamp-label">Espoo</span>
      </div>
    )
  },
];

function Sticker({ def, pos, stageSize, accent, onDragEnd, onPointerDown, z }) {
  const dragRef = React.useRef({ moved: false });
  const [isDragging, setIsDragging] = React.useState(false);
  const [livePos, setLivePos] = React.useState(pos);

  React.useEffect(() => { if (!isDragging) setLivePos(pos); }, [pos.x, pos.y, pos.rot, isDragging]);

  const onPointerDownHandler = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    const sx = e.clientX, sy = e.clientY;
    const origin = { ...livePos };
    dragRef.current.moved = false;
    setIsDragging(true);
    onPointerDown?.(def.id);

    const move = (ev) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragRef.current.moved = true;
      setLivePos({ x: origin.x + dx, y: origin.y + dy, rot: origin.rot });
    };
    const up = (ev) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      setIsDragging(false);
      if (dragRef.current.moved) {
        onDragEnd?.(def.id, {
          x: origin.x + (ev.clientX - sx),
          y: origin.y + (ev.clientY - sy),
          rot: origin.rot
        });
      }
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <motionS.div
      className={'sticker-wrap' + (isDragging ? ' is-dragging' : '')}
      style={{
        position:'absolute',
        left: 0, top: 0,
        width: def.w,
        zIndex: z,
        cursor: 'grab',
      }}
      initial={false}
      animate={{
        x: livePos.x,
        y: livePos.y,
        rotate: livePos.rot,
        scale: isDragging ? 1.04 : 1,
      }}
      transition={isDragging
        ? { type:'tween', duration: 0 }
        : { type:'spring', stiffness: 200, damping: 22 }}
      onPointerDown={onPointerDownHandler}
    >
      {def.render(accent)}
    </motionS.div>
  );
}

function Stickers({ stageSize, accent, stickers, setStickers, enabled }) {
  const [zTop, setZTop] = React.useState(200);

  const resolvePos = React.useCallback((id) => {
    if (stickers[id]) return stickers[id];
    const def = STICKER_DEFS.find(d => d.id === id);
    return {
      x: def.defaultPos.xPct * stageSize.w - def.w / 2,
      y: def.defaultPos.yPct * stageSize.h - def.h / 2,
      rot: def.defaultPos.rot,
    };
  }, [stickers, stageSize.w, stageSize.h]);

  if (!enabled || stageSize.w < 10) return null;

  const onDragEnd = (id, newPos) => {
    const z = zTop + 1;
    setZTop(z);
    setStickers(prev => ({ ...prev, [id]: { ...newPos, z } }));
  };
  const onPointerDown = (id) => {
    const z = zTop + 1;
    setZTop(z);
    setStickers(prev => ({ ...prev, [id]: { ...(prev[id] || resolvePos(id)), z } }));
  };

  return (
    <>
      {STICKER_DEFS.map(def => {
        const p = resolvePos(def.id);
        const z = (stickers[def.id] && stickers[def.id].z) || 200;
        return (
          <Sticker key={def.id} def={def} pos={p} stageSize={stageSize} accent={accent}
                   z={z} onDragEnd={onDragEnd} onPointerDown={onPointerDown} />
        );
      })}
    </>
  );
}

window.Stickers = Stickers;
