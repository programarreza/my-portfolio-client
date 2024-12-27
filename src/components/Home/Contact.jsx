"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { toast } from "sonner";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w1bwd28",
        "template_whgfeza",
        form.current,
        "r47p78wRwpxxE4GAT",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks for contacting ");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div
      className="min-h-screen bg-[#0F212F] px-4 md:px-6 lg:px-12 xl:px-44  text-center  py-8"
      id="contact"
    >
      <div>
        <h2 className="text-white py-6 text-3xl ">Contact Us </h2>
        <div className="grid md:grid-cols-2 gap-12 pb-3">
          <div className="rounded-md py-6 shadow-2xl bg-[#081b29f8] text-white">
            <div className="card-body">
              <MdEmail
                className="text-center flex mx-auto border rounded-full p-2"
                size={40}
              />

              <p className="mt-4">mdshafikulislam0130@gmail.com</p>
            </div>
          </div>

          <div className="py-6 rounded-md  shadow-2xl bg-[#081b29f8] text-white">
            <div className="card-body">
              <FaPhoneVolume
                className="text-center flex mx-auto border rounded-full p-2"
                size={40}
              />

              <p className="mt-4">+8801754-846487</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#162c46] p-6 rounded-lg shadow-2xl">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid md:grid-cols-2 gap-5 w-full text-center">
            <input
              required
              className="p-2 rounded-lg bg-[#081b29f8] text-white"
              name="user_name"
              placeholder="Name"
              type="text"
            />
            <input
              required
              className="p-2 rounded-lg bg-[#081b29f8] text-white"
              name="user_email"
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            required
            className="p-2 rounded-lg w-full mt-4 bg-[#081b29f8] text-white"
            name="user_subject"
            placeholder="Subject"
            type="text"
          />

          <textarea
            required
            className="w-full my-4 py-12 px-4 rounded-lg bg-[#081b29f8] text-white"
            name="message"
            placeholder="Your Message"
          />
          <button
            className="p-2 border rounded-md flex bg-[#081b29f8] text-white hover:bg-[#162c46]"
            type="submit"
            value="Send Message "
          >
            Send Message <SiMinutemailer className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
