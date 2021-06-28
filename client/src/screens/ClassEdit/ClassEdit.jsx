import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import './ClassEdit.css'

function ClassEdit(props) {
  const [formData, setFormData] = useState({
    schedule_time: "",
    class_name: "",
  });
  const { id } = useParams();

  const { schedule_time, class_name } = formData;
  const { userStudio, handleUpdateFitClass } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const singleClass = userStudio.fit_classes.find(
        (fitclass) => fitclass.id === Number(id)
      );
      setFormData({
        schedule_time: DateTime.fromISO(singleClass.schedule_time).toFormat("yyyy-MM-dd'T'hh:mm"),
        class_name: singleClass.class_name,
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
    <div className="class-edit-div">
      <h2>Switch it up..</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateFitClass(id, formData);
        }}
      >
        {/* where user can update time and class name shown */}
        <div className="input-container">
        <input
          type="datetime-local"
          name="schedule_time"
          defaultValue={schedule_time}
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
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default ClassEdit;
