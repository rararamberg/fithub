import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ClassEdit(props) {
  const [formData, setFormData] = useState({
    schedule_time: "",
    class_name: "",
  });
  const { id } = useParams();

  const { schedule_time, class_name } = formData;
  const { hahandleUpdateFitClass, handleDeleteFitClass } = props;

  // useEffect(() => {
  //   const preFillFormData = () => {
  //     const singleClass = fitClasses.
  //   };
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Switch it up..</h2>
      <form>{/* where user can update time and class name shown */}</form>
    </div>
  );
}

export default ClassEdit;
