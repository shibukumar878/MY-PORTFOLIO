import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElData = new FormData();
    formElData.append("access_key", "b2824756-2d28-4a02-b3cb-92af9e047852");
    formElData.append("name", formData.name);
    formElData.append("email", formData.email);
    formElData.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formElData
    });

    const result = await response.json();

    if (result.success) {
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600">Contact Me</h2>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
