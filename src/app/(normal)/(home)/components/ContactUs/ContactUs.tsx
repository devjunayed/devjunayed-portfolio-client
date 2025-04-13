import Heading from "@/components/Shared/Heading";
import { Form } from "antd";
import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto">
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
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-slate-800 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-slate-800 text-white"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-md bg-slate-800 text-white h-32 resize-none"
            ></textarea>
            <button className="text-white border-2 p-3 rounded-md">Send</button>
          </div>
        </Form>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
