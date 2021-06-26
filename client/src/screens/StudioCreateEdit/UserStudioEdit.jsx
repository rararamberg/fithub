import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserStudioEdit(props) {
  const { userStudio, handleUpdateStudio } = props;

  const [formData, setFormData] = useState({
    business_name: "",
    location: "",
    blurb: "",
    image_url: "",
    format: "",
  });

  // do i need to pass params if I have userStudio id??
  const { id } = useParams();
  const { business_name, location, blurb, image_url, format } = formData;

  // console.log(userStudio.id);
  // console.log(id);

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({
        business_name: userStudio.business_name,
        location: userStudio.location,
        blurb: userStudio.blurb,
        image_url: userStudio.image_url,
        format: userStudio.format,
      });
    };
    if (userStudio) {
      prefillFormData();
    }
  }, [id, userStudio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Make some changes.</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateStudio(id, formData);
        }}
      >
        <input
          type="text"
          placeholder="Studio Name"
          name="business_name"
          value={business_name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Where are you located?"
          name="location"
          value={location}
          onChange={handleChange}
        />
        <br />
        <textarea
          type="text"
          placeholder="Tell us about your gym or studio.."
          name="blurb"
          value={blurb}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Insert image URL here"
          name="image_url"
          value={image_url}
          onChange={handleChange}
        />
        <br />
        <label>Format:</label>
        <div>
          <input
            type="checkbox"
            name="format"
            checked={format === "yoga"}
            id="yoga"
            value="yoga"
            onClick={handleChange}
          />
          <label htmlFor="yoga">Yoga</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="format"
            checked={format === "cardio"}
            id="cardio"
            value="cardio"
            onClick={handleChange}
          />
          <label htmlFor="cardio">Cardio</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="format"
            checked={format === "weight-lifting"}
            id="weight-lifting"
            value="weight-lifting"
            onClick={handleChange}
          />
          <label htmlFor="weight-lifting">Weight Lifting</label>
        </div>

        <p>Clients can contact you here:</p>
        <p>**studio owner email**</p>
        {/* once submitted direct user to their studio's detail page */}
        <button>DONE!</button>
      </form>
    </div>
  );
}

export default UserStudioEdit;
