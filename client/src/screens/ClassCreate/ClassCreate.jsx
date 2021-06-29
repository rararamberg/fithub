import { useState } from "react";
import './ClassCreate.css'
import Button from 'react-bootstrap/Button';

function ClassCreate(props) {
  const [formData, setFormData] = useState({
    schedule_time: "",
    class_name: "",
  });

  const { schedule_time, class_name } = formData;
  const { handleCreateFitClass } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="class-create-div">
      <h2>What's new?</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateFitClass(formData);
        }}
      >
        <div className="input-container">
          <input
            type="datetime-local"
            name="schedule_time"
            value={schedule_time}
            onChange={handleChange}
          />
          <input
            type="text"
            name="class_name"
            value={class_name}
            onChange={handleChange}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default ClassCreate;
