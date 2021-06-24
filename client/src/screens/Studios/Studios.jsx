import { Link } from "react-router-dom";

function Studios(props) {
  const { studios } = props;

  return (
    <div>
      <h3>This is studios page</h3>
      {studios.map((studio) => (
        <Link key={studio.id} to={`/studios/${studio.id}`}>
          <div>
            <img src={studio.image_url} alt={studio.business_name} />
            <h3>{studio.business_name}</h3>
            <p>{studio.location} </p>
            <p>{studio.blurb}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Studios;
