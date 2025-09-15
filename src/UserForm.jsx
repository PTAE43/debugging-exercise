import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim().length < 3) {
      setError("กรุณาใส่ระบุอย่างน้อย 3 ตัวอักษรขึ้นไป");
      return;
    }
    alert(`Submitted: ${username}`);
    setUsername("");
    setError("");
    a
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </label>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
