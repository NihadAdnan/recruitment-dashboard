import { useState } from "react";
import axios from 'axios';

const NewJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/jobs", {
        title,
        description,
        location,
        requirements: requirements.split(',').map(req => req.trim())
      });
      if (res && res.data) {
        setSuccessMessage("Job created successfully");
        setTitle("");
        setDescription("");
        setLocation("");
        setRequirements("");
      }
    } catch (error) {
      setErrorMessage("Failed to create job");
      console.log(error)
    }
  };

  return (
   
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-100 p-8 rounded-md shadow-md">
          <h4 className="text-2xl font-semibold mb-4">CREATE NEW JOB</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter Job Title"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter Job Description"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Job Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter Job Location"
                required
              />
            </div>
            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Job Requirements</label>
              <input
                type="text"
                id="requirements"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter Job Requirements (comma-separated)"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">CREATE JOB</button>
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>

  );
};

export default NewJob;
