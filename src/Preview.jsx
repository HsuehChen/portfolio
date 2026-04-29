// Preview.jsx — project preview overlay (click-through confirmation)

function Preview({ project, onClose, onView }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;
  return (
    <div className="preview-scrim" onClick={onClose}>
      <div className="preview-card" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="preview-close" onClick={onClose} aria-label="Close preview">
          <img src="assets/icons/close.svg" width="20" height="20" alt="" />
        </button>
        <div className="preview-img">
          <img src={project.coverPreview || project.cover} alt={project.title} />
        </div>
        <div className="preview-body">
          <div className="preview-eyebrow">Case study {project.num} · {project.kind}</div>
          <h2>{project.title}</h2>
          <p className="preview-sub">{project.subtitle}</p>
          <p className="preview-summary">{project.summary}</p>
          <div className="preview-meta">
            <div><div className="eyebrow">Role</div><div className="v">{project.role.split(' \u00B7 ')[0]}</div></div>
            <div><div className="eyebrow">Team</div><div className="v">{project.team}</div></div>
            <div><div className="eyebrow">Timeline</div><div className="v">{project.duration}</div></div>
            <div><div className="eyebrow">Year</div><div className="v">{project.year}</div></div>
          </div>
          <div className="preview-actions">
            <button className="btn btn-primary btn-icon" onClick={() => onView(project.id)}>
              <span>View project</span>
              <img src="assets/icons/arrow-right.svg" alt="" />
            </button>
            <button className="btn btn-ghost" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Preview = Preview;
