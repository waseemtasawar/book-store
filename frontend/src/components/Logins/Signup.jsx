import React, { useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5"; // Import close icon from react-icons

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility state

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    // Name Check
    if (!formData.name) newErrors.name = "Name is required";

    // Username Check
    if (!formData.username) newErrors.username = "Username is required";

    // Email Check (Basic format validation)
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegx.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password Check (basic length validation)
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (!formData.passwordConfirm) {
      newErrors.passwordConfirm = "Password confirmation is required.";
    } else if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    setSuccessMessage("");

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        formData
      );
      console.log(response);
      setSuccessMessage("Signup successful!");
    } catch (err) {
      setError({ api: err.response?.data?.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  if (!isModalOpen) return null; // If modal is closed, return nothing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 max-w-lg relative">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-t-lg text-white text-center">
          <h2 className="text-2xl font-semibold">Create Account</h2>
          {/* Close icon */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-blue-400 text-2xl" // Increased size and color set explicitly
          >
            <IoClose />
          </button>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {error.name && (
                <div className="text-red-500 text-xs">{error.name}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {error.username && (
                <div className="text-red-500 text-xs">{error.username}</div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {error.email && (
              <div className="text-red-500 text-xs">{error.email}</div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {error.password && (
                <div className="text-red-500 text-xs">{error.password}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {error.passwordConfirm && (
                <div className="text-red-500 text-xs">
                  {error.passwordConfirm}
                </div>
              )}
            </div>
          </div>

          {error.api && <div className="text-red-500 text-xs">{error.api}</div>}

          {successMessage && (
            <div className="text-green-500 text-sm">{successMessage}</div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
