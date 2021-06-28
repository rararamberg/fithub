

function FilterBy(props) {
  const {handleFilter} = props
  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <select className="filter-dropdown" onChange={(e) => handleFilter(e.target.value)}>
        <option value='' disabled selected>Filter By Format</option>
        <option value='yoga'>Yoga</option>
        <option value='cardio'>Cardio</option>
        <option value='weight-lifting'>Weight Lifting</option>
      </select>
    </form>
  )
}

export default FilterBy;
