import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      data-aos="fade-up"
      className="container mx-auto px-4 sm:px-6 lg:px-24 mt-12 sm:mt-16 p-6 text-white rounded-md shadow-md"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold pb-12 sm:pb-16">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 w-full max-w-xl mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded-lg w-full border border-gray-500 bg-[#27272A] text-white focus:outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded-lg w-full border border-gray-500 bg-[#27272A] text-white focus:outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message here.."
          value={formData.message}
          onChange={handleChange}
          className="p-2 rounded-lg w-full border border-gray-500 bg-[#27272A] text-white focus:outline-none"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#18181B] mt-2 px-8 sm:px-12 py-2 sm:py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
