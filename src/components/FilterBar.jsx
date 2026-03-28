import './FilterBar.css';

function FilterBar({ filter, onFilterChange }) {
    return (
        <div className='filter-bar'>
            <button className={filter === 'all' ? 'active' : ''} onClick={() => onFilterChange('all')}>Toutes</button>
            <button className={filter === 'active' ? 'active' : ''} onClick={() => onFilterChange('active')}>Actives</button>
            <button className={filter === 'completed' ? 'active' : ''} onClick={() => onFilterChange('completed')}>Complétées</button>
        </div>
    )
}

export default FilterBar;