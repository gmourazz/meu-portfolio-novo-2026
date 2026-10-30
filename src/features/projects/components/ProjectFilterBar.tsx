export type ProjectView = 'grid' | 'list';

type Props = {
  filters: { id: string; label: string }[];
  filter: string;
  onFilter: (id: string) => void;
  view: ProjectView;
  onView: (view: ProjectView) => void;
  labels: { grid: string; list: string };
};

/** Barra de filtros por categoria e alternância entre grade e lista. */
export function ProjectFilterBar({ filters, filter, onFilter, view, onView, labels }: Props) {
  return (
    <div className="pj-bar-wrap">
      <div className="pj-bar">
        <div className="pj-filters">
          {filters.map(f => (
            <button key={f.id} type="button" className={filter === f.id ? 'is-on' : undefined} aria-pressed={filter === f.id} onClick={() => onFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="pj-views">
          <button type="button" className={view === 'grid' ? 'is-on' : undefined} aria-pressed={view === 'grid'} onClick={() => onView('grid')}>{labels.grid}</button>
          <button type="button" className={view === 'list' ? 'is-on' : undefined} aria-pressed={view === 'list'} onClick={() => onView('list')}>{labels.list}</button>
        </div>
      </div>
    </div>
  );
}
