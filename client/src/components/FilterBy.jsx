

function FilterBy(props) {
  const { handleFilter, setSearchResult } = props
  
  // onChange={(e) => handleFilter(e.target.value)}
  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <select className="filter-dropdown" >
        <option >Filter By All</option>
        <option value='yoga'>Yoga</option>
        <option value='cardio'>Cardio</option>
        <option value='weight-lifting'>Weight Lifting</option>
      </select>
    </form>
  )
}

export default FilterBy;
