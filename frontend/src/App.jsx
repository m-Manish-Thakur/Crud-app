import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "df8a1cf633aa05ef624d6331f6de8543";
        const baseUrl = "https://api.themoviedb.org/3";

        // Example: Get popular movies
        const endpoint = "/movie/popular";

        fetch(`${baseUrl}${endpoint}?api_key=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results); // Output the list of popular movies
          })
          .catch((error) => console.error("Error:", error));
        // const response = await axios.get("http://localhost:8000/");
        // setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setData([]); // Set data to an empty array in case of an error
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (e, _id) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8000/${_id}`);
      console.log(response.data);
      // Update state or perform other actions as needed
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

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
                  <button
                    type="button"
                    onClick={(e) => handleDelete(e, item._id)}
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
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
