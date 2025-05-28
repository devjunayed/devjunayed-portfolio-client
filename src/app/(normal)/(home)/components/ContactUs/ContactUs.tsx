"use client";
import Heading from "@/components/Shared/Heading";
import { Form } from "antd";
import React, { useState } from "react";

const ContactUs = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target?.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    console.log("Form submitted:", data);
    // Reset form fields
    setData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto min-h-96">
      <div className="mx-6">
        <Heading title="Contact Me" />
        <div>
          <div className="text-center text-white  my-10">
            <h1 className="text-3xl mb-2 font-mono">
              Drop me a <br /> line of message
            </h1>
            <p>let me know how can i assist you</p>
          </div>
          <Form>
            <div className="flex flex-col gap-4">
              <input
                name="name"
                value={data.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-slate-800 text-white"
              />
              <input
                name="email"
                value={data.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-slate-800 text-white"
              />
              <textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="p-3 rounded-md bg-slate-800 text-white h-32 resize-none"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="text-white border-2 p-3 rounded-md"
              >
                Send
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
