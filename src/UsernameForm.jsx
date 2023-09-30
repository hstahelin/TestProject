import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("");

  function updateUser(e) {
    setUsername(e.target.value);
  }

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUser}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
