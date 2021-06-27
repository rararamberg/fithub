import { Link } from "react-router-dom";
import "./Studios.css";

function Studios(props) {
  const { studios } = props;

  return (
    <div className="all-studios-div">
      <h3>Studios page</h3>
      {studios.map((studio) => (
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
