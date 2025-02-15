"use client"; // If using App Router

import React, { useState } from "react";

const page = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.success);
        setForm({ name: "", contact: "", message: "" });
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24">
      <form onSubmit={handleSubmit}>
        <div className="m-10 shadow-lg shadow-black mx-64 bg-white dark:bg-gray-900 py-5">
          <div className="font-bold text-2xl text-center">Contact Us</div>
          <div className="mx-14 my-5">
            <div className="text-xl m-2 font-bold">Name</div>
            <input
              className="mx-4 w-1/2 h-10 rounded-md p-2 dark:bg-[#00000066]"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <div className="text-xl m-2 font-bold">Contact Details</div>
            <input
              className="mx-4 w-1/2 h-10 rounded-md px-2 dark:bg-[#00000066]"
              type="text"
              name="contact"
              placeholder="Enter your mobile number or email address"
              value={form.contact}
              onChange={handleChange}
              required
            />

            <div className="text-xl m-2 font-bold">Message</div>
            <textarea
              className="mx-4 w-1/2 h-32 rounded-md px-2 py-1 dark:bg-[#00000066] resize-none overflow-y-auto"
              name="message"
              placeholder="Enter your message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center p-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>

          {success && <p className="text-green-500 text-center">{success}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default page
