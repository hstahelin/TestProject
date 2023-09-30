import { useState } from "react";

function SubmitForm() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "" });

  function updateForm(e) {
    const fieldName = e.target.name;
    const value = e.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: value };
    });
    // setFormData((currData) => {
    //   currData[fieldName] = value;
    //   return { ...currData };
    // });
  }

  return (
    <div>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstname}
        onChange={updateForm}
        id="firstname"
        name="firstname"
      />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastname}
        onChange={updateForm}
        id="lastname"
        name="lastname"
      />
      <button>Submit</button>
    </div>
  );
}

export default SubmitForm;
