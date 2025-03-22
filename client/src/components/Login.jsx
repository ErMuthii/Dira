import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, SelectItem } from "@heroui/react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
  });

  // List of Kenyan schools for the dropdown
  const kenyanSchools = [
    { label: "Karen C Primary", value: "uon" },
    { label: "Muthaiga Primary School", value: "ku" },
    { label: "Strathmore School", value: "su" },
    { label: "St.Georges Primary School", value: "mu" },
    {
      label: "Hospital Hill Primary School",
      value: "jkuat",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For presentation, just log the data and navigate
    console.log("Form submitted:", formData);
    navigate("/assessmentintro");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#fef9ef" }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Dira</h2>
          <p className="text-gray-600 mt-2">
            Sign in to start your career assessment journey
          </p>
        </div>

        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            isRequired
            label="First Name"
            labelPlacement="outside"
            name="firstName"
            placeholder="Enter your first name"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            errorMessage="Please enter your first name"
          />

          <Input
            isRequired
            label="Last Name"
            labelPlacement="outside"
            name="lastName"
            placeholder="Enter your last name"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            errorMessage="Please enter your last name"
          />

          <Select
            isRequired
            label="Institution"
            labelPlacement="outside"
            name="institution"
            placeholder="Select your institution"
            selectionMode="single"
            selectedKeys={[formData.institution]}
            onChange={(e) => {
              setFormData({
                ...formData,
                institution: e.target.value,
              });
            }}
          >
            {kenyanSchools.map((school) => (
              <SelectItem key={school.value} value={school.value}>
                {school.label}
              </SelectItem>
            ))}
          </Select>

          <Input
            isRequired
            label="Email Address"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            errorMessage="Please enter a valid email address"
          />

          <div className="mt-4 flex justify-center">
            <Button
              color="primary"
              type="submit"
              className="flex justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Login & Start Assessment
            </Button>
          </div>
        </Form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            By continuing, you agree to Dira's Terms of Service and Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
