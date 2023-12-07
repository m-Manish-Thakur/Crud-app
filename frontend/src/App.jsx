import React from "react";

const App = () => {
  return (
    <div className="p-5">
      <button type="button" class="btn btn-primary">
        Add Student
      </button>
      <table>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Fee</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Manish Thakur</td>
          <td>BCA</td>
          <td>20,000</td>
          <td>2021-24</td>
          <td>
            <button type="button" class="btn btn-primary">
              Update
            </button>
            <button type="button" class="btn btn-danger" style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>Manish Thakur</td>
          <td>BCA</td>
          <td>20,000</td>
          <td>2021-24</td>
          <td>
            <button type="button" class="btn btn-primary">
              Update
            </button>
            <button type="button" class="btn btn-danger" style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default App;
