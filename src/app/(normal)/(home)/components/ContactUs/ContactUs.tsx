"use client";
import Heading from "@/components/Shared/Heading";
import validate from "@/utils/validate";
import MessageSchema from "@/validation/message.validation";
import { Form } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target?.value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {

    e.preventDefault();
    
    setLoading(true);

    const { valid, errors } = validate(data, MessageSchema);

    if (!valid) {
      setLoading(false);
      errors?.forEach((error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      });
      return;
    }

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_API + "/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json();

    setLoading(false);

    if(responseData.success) {
      toast.success(responseData.message, {
        position: "top-center"
      });
    } else {
      toast.error(responseData.message, {
        position: "top-center"
      });
    }

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
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
