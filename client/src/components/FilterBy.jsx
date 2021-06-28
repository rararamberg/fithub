
import DropdownButton  from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function FilterBy(props) {
  const { handleFilter, setSearchResult, studios } = props
  
  const filterFormat = (e) => {
    handleFilter(e);
  }
  // onChange={(e) => handleFilter(e.target.value)}
  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <DropdownButton id="dropdown-basic-button" title="Filter By Format">
        <Dropdown.Item eventKey='yoga' onSelect={filterFormat}>Yoga</Dropdown.Item>
        <Dropdown.Item eventKey='cardio' onSelect={filterFormat}>Cardio</Dropdown.Item>
        <Dropdown.Item eventKey='weight-lifting' onSelect={filterFormat}>Weight Lifting</Dropdown.Item>
        <Dropdown.Item onSelect={() => {setSearchResult(studios)}}>All</Dropdown.Item>
      </DropdownButton>
    </form>
  )
}

export default FilterBy;
