// Photo.jsx — single draggable polaroid photo

// framer-motion UMD exposes globals directly: `motion`, `useMotionValue`, etc.
const motion = window.motion || (window.Motion && window.Motion.motion);

function Photo({
  project,
  index,
  total,
  mode,           // 'stack' | 'scattered' | 'pinned'
  stackPos,       // { x, y, rot } — home position in stack
  scatterPos,     // { x, y, rot } — when hovering (scattered)
  pinnedPos,      // { x, y, rot } — when user has dragged out
  stageSize,      // { w, h }
  zIndex,
  onClick,
  onDragEnd,
  onPointerDown,
  onHover,
  isTop,
  reducedMotion
}) {
  const nodeRef = React.useRef(null);
  const dragState = React.useRef({ dragging: false, start: null, origin: null, moved: false });
  const [isDragging, setIsDragging] = React.useState(false);
  const [pos, setPos] = React.useState(() => {
    if (mode === 'pinned' && pinnedPos) return pinnedPos;
    if (mode === 'scattered' && scatterPos) return scatterPos;
    return stackPos;
  });

  // Animate position whenever the target changes (unless we're actively dragging)
  React.useEffect(() => {
    if (isDragging) return;
    const target =
      mode === 'pinned' && pinnedPos ? pinnedPos :
      mode === 'scattered' && scatterPos ? scatterPos :
      stackPos;
    setPos(target);
  }, [mode, stackPos, scatterPos, pinnedPos, isDragging]);

  // Pointer-based drag (works on mouse + touch)
  const onPointerDownHandler = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    const startX = e.clientX, startY = e.clientY;
    const origin = { ...pos };
    dragState.current = { dragging: true, start: { x: startX, y: startY }, origin, moved: false };
    setIsDragging(true);
    onPointerDown?.(project.id);

    const move = (ev) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragState.current.moved = true;
      setPos({ x: origin.x + dx, y: origin.y + dy, rot: origin.rot });
    };
    const up = (ev) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      setIsDragging(false);
      const moved = dragState.current.moved;
      dragState.current.dragging = false;
      if (!moved) {
        onClick?.(project.id);
      } else {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        onDragEnd?.(project.id, {
          x: origin.x + dx,
          y: origin.y + dy,
          rot: origin.rot
        });
      }
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const rotExtra = isDragging ? 0 : 0;
  const scale = isDragging ? 1.05 : 1;
  const transition = isDragging
    ? { type: 'tween', duration: 0 }
    : reducedMotion
      ? { duration: 0.01 }
      : { type: 'spring', stiffness: 180, damping: 22, mass: 0.8 };

  return (
    <motion.div
      ref={nodeRef}
      className={'photo' + (isDragging ? ' is-dragging' : '') + (isTop && mode === 'stack' ? ' is-top' : '')}
      style={{
        width: 'var(--photo-w, 220px)',
        zIndex,
        boxShadow: isDragging
          ? '0 8px 18px rgba(0,0,0,0.12), 0 28px 48px rgba(0,0,0,0.22)'
          : undefined,
      }}
      initial={false}
      animate={{
        x: pos.x,
        y: pos.y,
        rotate: pos.rot + rotExtra,
        scale,
      }}
      transition={transition}
      onPointerDown={onPointerDownHandler}
      onPointerEnter={() => onHover?.(project.id, true)}
      onPointerLeave={() => onHover?.(project.id, false)}
      role="button"
      tabIndex={0}
      aria-label={`Open project: ${project.title}`}
    >
      <div className="photo-accent" key="accent" aria-hidden="true" />
      <img
        className="photo-img"
        src={project.cover}
        alt={project.title}
        draggable={false}
      />
      <div className="photo-caption">
        <span className="num">{project.num} · {project.year}</span>
        <span className="ttl">{project.kind}</span>
      </div>
      <div className="photo-overlay" aria-hidden={mode !== 'scattered'}>
        <div className="eyebrow">{project.num} / {project.kind}</div>
        <div className="title">{project.title}</div>
        <div className="sub">{project.subtitle}</div>
      </div>
    </motion.div>
  );
}

window.Photo = Photo;
