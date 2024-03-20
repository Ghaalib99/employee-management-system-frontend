import React, { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../services";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AllEmployees = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  // Function to handle adding a new employee
  const handleAddEmployee = () => {
    navigate("/add-employee");
  };

  // Function to handle editing an existing employee
  const handleEditEmployee = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  // Function to handle deleting an existing employee
  const handleDeleteEmployee = (id) => {
    deleteEmployee(id)
      .then((response) => {
        const updatedEmployees = employees.filter(
          (employee) => employee.id !== id
        );
        setEmployees(updatedEmployees);
        deleted();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleted = () => toast("Employee deleted successfully");

  return (
    <div className="container">
      <h1 className="mt-3 text-center mb-2">Employees</h1>
      <Toaster />
      <button
        className="btn btn-success btn-lg mb-3 ms-auto d-block"
        // onClick={() => navigate("/add-employee")}
        onClick={handleAddEmployee}
        mode="add"
      >
        Add Employee
      </button>
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-dark btn-lg me-2">View</button>
                <button
                  className="btn btn-success btn-lg me-2"
                  mode="edit"
                  // onClick={() => navigate("/edit-employee-details")}
                  onClick={() => handleEditEmployee(employee.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => handleDeleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployees;
