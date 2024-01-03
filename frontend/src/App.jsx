import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      const response = await axios.get(`https://crud-app-rho-cyan.vercel.app/api/students`);
      console.log(response);
    };
    fetch_data();
  }, []);

  return (
    <div className="p-5">
      <button type="button" className="btn btn-primary">
        Add Student
      </button>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Fee</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.student_name}</td>
                <td>{item.course}</td>
                <td>{item.fee}</td>
                <td>{item.year}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Update
                  </button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
