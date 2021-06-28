
function Search(props) {
  const { handleSearch } = props
  
  return (
    <form className="search-form" onSubmit={(e)=> {e.preventDefault()}}>
      <input
        className="search-bar"
        name="search"
        placeholder="Search"
        type="text"
        value={props.value}
        onChange={(e)=> handleSearch(e)}
      />
    </form>
  )
}

export default Search
