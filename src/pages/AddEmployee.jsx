import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createEmployee, getEmployee, updateEmployee } from "../services";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddEmployee = () => {
  const { id } = useParams();
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    if (id) {
      updateEmployee(id, values)
        .then((response) => {
          edited();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createEmployee(values)
        .then((response) => {
          added();
          resetForm();
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setInitialValues({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
          });
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const added = () => toast("Employee created successfully!");
  const edited = () => toast("Employee details updated successfully!");

  return (
    <div className=" mt-5" style={{ width: "50%", margin: "20px auto" }}>
      <h2 className="mb-5">{id ? "Edit" : "Add"} Employee</h2>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            {id ? "Edit" : "Add"} Employee
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddEmployee;
