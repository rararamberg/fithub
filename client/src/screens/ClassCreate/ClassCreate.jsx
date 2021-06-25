import { useState } from "react";

function ClassCreate() {
  const [formData, setFormData] = useState({
    schedule_time: "",
    class_name: "",
  });

  const { schedule_time, class_name } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Class Create Page</h2>
      <form>
        <input
          type="date"
          name="schedule_time"
          value={schedule_time}
          onChange={handleChange}
        />
        <input
          type="time"
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
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ClassCreate;
