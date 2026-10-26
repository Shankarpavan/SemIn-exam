import { useState } from "react";

function App() {
  const [complaint, setComplaint] = useState("");
  const [complaints, setComplaints] = useState([]);

  function addComplaint() {
    if (complaint.trim() === "") return;

    setComplaints([...complaints, complaint]);
    setComplaint("");
  }

  return (
    <div>
      <h1>Complaint Box</h1>

      <input
        type="text"
        placeholder="Enter your complaint"
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
      />

      <button onClick={addComplaint}>Submit</button>

      <h2>Complaints</h2>

      {complaints.map((item, index) => (
        <p key={index}>
          {index + 1}. {item}
        </p>
      ))}
    </div>
  );
}
export default App
