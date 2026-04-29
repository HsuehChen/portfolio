// PhotoStack.jsx — the workspace with stack / scatter / pinned modes

const PHOTO_W = 240;
const PHOTO_H = 340; // caption area + 5:6 image

// deterministic pseudo-random per id
function hashRand(id, salt = 0) {
  let h = 2166136261 >>> 0;
  const s = String(id) + '|' + salt;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  // return in [0, 1)
  return (h % 10000) / 10000;
}

function buildLayouts(projects, stageW, stageH) {
  // Center the stack on the stage
  const homeCx = stageW * 0.5;
  const homeCy = stageH * 0.5;
  const scatterCx = stageW * 0.5;
  const scatterCy = stageH * 0.5;

  // Stack: overlapping deck
  const stackRots = [-6, 3, -2, 5, -3];
  const stackOffsets = [
    { dx: -8, dy: -6 },
    { dx: 4,  dy: 4 },
    { dx: -2, dy: 10 },
    { dx: 10, dy: -2 },
    { dx: -4, dy: -10 },
  ];

  const stack = {};
  const scatter = {};
  projects.forEach((p, i) => {
    const off = stackOffsets[i % stackOffsets.length];
    stack[p.id] = {
      x: homeCx - PHOTO_W / 2 + off.dx,
      y: homeCy - PHOTO_H / 2 + off.dy,
      rot: stackRots[i % stackRots.length],
    };

    // Scattered: arranged around the centered stack — a loose ring of photos
    const zones = [
      { cx: -0.30, cy: -0.18, jx: 0.04, jy: 0.06, rot: [-12, -4] },
      { cx:  0.26, cy: -0.22, jx: 0.06, jy: 0.06, rot: [  3, 12] },
      { cx: -0.28, cy:  0.20, jx: 0.06, jy: 0.06, rot: [ -8,  0] },
      { cx:  0.28, cy:  0.18, jx: 0.06, jy: 0.06, rot: [  4, 14] },
      { cx:  0.00, cy: -0.30, jx: 0.06, jy: 0.04, rot: [ -6,  6] },
    ];
    const z = zones[i % zones.length];
    const r1 = hashRand(p.id, 1);
    const r2 = hashRand(p.id, 2);
    const r3 = hashRand(p.id, 3);
    const spread = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--spread')) || 1;
    const x = scatterCx + (z.cx + (r1 - 0.5) * z.jx) * stageW * spread - PHOTO_W / 2;
    const y = scatterCy + (z.cy + (r2 - 0.5) * z.jy) * stageH * spread - PHOTO_H / 2;
    const rot = z.rot[0] + r3 * (z.rot[1] - z.rot[0]);
    scatter[p.id] = { x, y, rot };
  });
  return { stack, scatter, home: { x: homeCx - PHOTO_W * 0.9, y: homeCy - PHOTO_H * 0.8, w: PHOTO_W * 1.8, h: PHOTO_H * 1.6 } };
}

function PhotoStack({ projects, onOpen, pinned, setPinned, stackOrder, setStackOrder, stickers, setStickers, stickersOn, reducedMotion }) {
  const stageRef = React.useRef(null);
  const [stageSize, setStageSize] = React.useState({ w: 900, h: 640 });
  const [hovering, setHovering] = React.useState(false);
  const [zTop, setZTop] = React.useState(10);
  const [draggedId, setDraggedId] = React.useState(null);
  const [dropTargetVisible, setDropTargetVisible] = React.useState(false);

  // measure
  React.useEffect(() => {
    if (!stageRef.current) return;
    const ro = new ResizeObserver(entries => {
      const b = entries[0].contentRect;
      setStageSize({ w: b.width, h: b.height });
    });
    ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  const layouts = React.useMemo(() => buildLayouts(projects, stageSize.w, stageSize.h), [projects, stageSize.w, stageSize.h]);

  // Derived: which photos are pinned?
  const isPinned = (id) => !!pinned[id];

  // Sort: pinned photos rendered in their own z order; stacked photos use stackOrder
  const orderedIds = React.useMemo(() => {
    const pinnedIds = Object.keys(pinned).sort((a, b) => (pinned[a].z || 0) - (pinned[b].z || 0));
    const stackIds = stackOrder.filter(id => !isPinned(id));
    return [...stackIds, ...pinnedIds]; // top = later in array
  }, [pinned, stackOrder]);

  // Home drop zone — pinned photo dropped here snaps back to stack
  const inHome = (x, y) => {
    const h = layouts.home;
    // x, y here is top-left of photo
    const cx = x + PHOTO_W / 2;
    const cy = y + PHOTO_H / 2;
    return cx >= h.x && cx <= h.x + h.w && cy >= h.y && cy <= h.y + h.h;
  };

  const handlePointerDown = (id) => {
    setDraggedId(id);
    setDropTargetVisible(isPinned(id) ? false : false);
    // bring to front
    if (isPinned(id)) {
      const newZ = zTop + 1;
      setZTop(newZ);
      setPinned(prev => ({ ...prev, [id]: { ...prev[id], z: newZ } }));
    } else {
      // reorder stack: this id becomes last (top)
      setStackOrder(prev => {
        const others = prev.filter(x => x !== id);
        return [...others, id];
      });
    }
  };

  const handleDragEnd = (id, newPos) => {
    setDraggedId(null);
    setDropTargetVisible(false);
    const droppedInHome = inHome(newPos.x, newPos.y);
    if (droppedInHome) {
      // Unpin — return to stack
      setPinned(prev => { const n = { ...prev }; delete n[id]; return n; });
      // Put at top of stack
      setStackOrder(prev => {
        const others = prev.filter(x => x !== id);
        return [...others, id];
      });
    } else {
      // Pin at this position
      const newZ = zTop + 1;
      setZTop(newZ);
      setPinned(prev => ({ ...prev, [id]: { x: newPos.x, y: newPos.y, rot: newPos.rot, z: newZ } }));
    }
  };

  const modeFor = (id) => {
    if (isPinned(id)) return 'pinned';
    if (hovering) return 'scattered';
    return 'stack';
  };

  const zFor = (id) => {
    if (isPinned(id)) return 100 + (pinned[id].z || 0);
    // stack order: later = higher
    const idx = stackOrder.indexOf(id);
    return 10 + idx;
  };

  const reset = () => {
    setPinned({});
    setStackOrder(projects.map(p => p.id));
  };

  const hasPinned = Object.keys(pinned).length > 0;

  return (
    <div
      ref={stageRef}
      className="stage"
      onPointerMove={(e) => {
        const h = layouts.home;
        const rect = stageRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const pad = 24;
        const inside = x >= h.x - pad && x <= h.x + h.w + pad && y >= h.y - pad && y <= h.y + h.h + pad;
        if (inside !== hovering) setHovering(inside);
      }}
      onPointerLeave={() => setHovering(false)}
      role="group"
      aria-label="Project photo album"
    >
      <div className="stage-eyebrow">Selected work</div>

      <div
        className={'stack-home' + (draggedId && isPinned(draggedId) ? ' is-target' : '')}
        style={{
          left: layouts.home.x,
          top: layouts.home.y,
          width: layouts.home.w,
          height: layouts.home.h,
        }}
      />

      <div className="stage-toolbar">
        <button type="button" onClick={reset} disabled={!hasPinned && !hovering}>Reset</button>
      </div>

      {orderedIds.map((id, i) => {
        const p = projects.find(x => x.id === id);
        if (!p) return null;
        const isTop = i === orderedIds.length - 1;
        return (
          <Photo
            key={p.id}
            project={p}
            index={i}
            total={projects.length}
            mode={modeFor(id)}
            stackPos={layouts.stack[id]}
            scatterPos={layouts.scatter[id]}
            pinnedPos={pinned[id]}
            stageSize={stageSize}
            zIndex={zFor(id)}
            isTop={isTop}
            reducedMotion={reducedMotion}
            onClick={() => onOpen(id)}
            onPointerDown={handlePointerDown}
            onDragEnd={handleDragEnd}
          />
        );
      })}

      {stickersOn !== false && (
        <Stickers
          stageSize={stageSize}
          accent={getComputedStyle(document.documentElement).getPropertyValue('--accent-50').trim() || '#FFC341'}
          stickers={stickers || {}}
          setStickers={setStickers}
          enabled={true}
        />
      )}
    </div>
  );
}

window.PhotoStack = PhotoStack;
