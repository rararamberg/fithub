import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../../components/Search";
import FilterBy from "../../components/FilterBy";
import "./Studios.css";

function Studios(props) {
  const { studios } = props;

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult(studios)
  }, [studios]);
  
  const handleFilter = (type) => {
    const results = studios.filter((studio) =>
      studio.format.includes(type)
    );
    setSearchResult(results);
  };
  
  const handleSearch = (event) => {
    const results = studios.filter((studio) =>
      studio.business_name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    // setApplySort(true);
  };
  return (
    <div className="all-studios-div">
      <div className="filter-components-container">
        <FilterBy handleFilter={handleFilter} setSearchResult={setSearchResult} studios={studios}/>
        <Search handleSearch={handleSearch}/>
      </div>
      {searchResult.map((studio) => (
        <div className="studio-box" key={studio.id}>
          <div className="studio-image">
            <img src={studio.image_url} alt={studio.business_name} />
          </div>
          <div className="short-studio-info">
            <Link to={`/studios/${studio.id}`}>
              <h3>{studio.business_name}</h3>
            </Link>
            <p>
              <em>{studio.location}</em>
            </p>
            <p>{studio.blurb}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Studios;
