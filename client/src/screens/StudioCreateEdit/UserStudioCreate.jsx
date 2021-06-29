import { useState } from "react";
import "./StudioCreateEdit.css";
import Button from "react-bootstrap/Button";

function UserStudioCreate(props) {
  const [formData, setFormData] = useState({
    business_name: "",
    location: "",
    blurb: "",
    image_url: "",
    format: "",
  });

  const { business_name, location, blurb, image_url } = formData;
  const { handleCreateStudio } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="studio-create-edit-div">
      <h2>
        Welcome!
        <br />
        Let's build your profile.
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateStudio(formData);
        }}
      >
        <div className="input-div">
          <input
            type="text"
            placeholder="Studio Name"
            name="business_name"
            value={business_name}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Where are you located?"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <textarea
            type="text"
            placeholder="Tell us about your gym or studio.."
            name="blurb"
            value={blurb}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Insert image URL here"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </div>
        <label>Formats:</label>
        <div className="checkbox-container">
          <div className="checkbox-div">
            <input
              type="checkbox"
              name="format"
              id="yoga"
              value="yoga"
              onClick={handleChange}
            />
            <label for="yoga">Yoga</label>
          </div>
          <div className="checkbox-div">
            <input
              type="checkbox"
              name="format"
              id="cardio"
              value="cardio"
              onClick={handleChange}
            />
            <label for="cardio">Cardio</label>
          </div>
          <div className="checkbox-div">
            <input
              type="checkbox"
              name="format"
              id="weight-lifting"
              value="weight-lifting"
              onClick={handleChange}
            />
            <label for="weight-lifting">Weight Lifting</label>
          </div>
        </div>

        {/* <p>Clients can contact you here:</p>
        <p>**studio owner email**</p> */}
        {/* once submitted direct user to their studio's detail page */}
        <Button id="done-button" type="submit">
          DONE!
        </Button>
      </form>
    </div>
  );
}

export default UserStudioCreate;
