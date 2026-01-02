"use client";

import { Phone, Mail, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Title */}
      <div className="border-2 border-white">
        <h1 className="text-5xl text-white font-bold md:text-6xl lg:text-8xl text-center my-3">
          CONTACT
        </h1>
      </div>

      {/* Content */}
      <div className="mt-6">
        <p className="text-white text-4xl">
          Feel <b>free</b> to contact me!
        </p>

        <p className="text-white mt-3">
          Feel free to <b>reach out </b>to me <b>anytime</b> through any of the contact
          options provided below. I’m always happy to connect and will do my
          best to respond as quickly as possible. Apologies in advance if my
          response is a bit slow. Here is my contact information for your
          convenience.
        </p>

        {/* Contact List */}
        <div className="my-10 px-6 space-y-3">
          <div className="flex items-center">
            <Phone className="w-5 h-5 md:w-10 md:h-10 text-white" />
            <a
              href="https://wa.me/6282244413825"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ml-3 text-base hover:underline md:text-2xl"
            >
              +62 822-4441-3825
            </a>
          </div>

          <div className="flex items-center">
            <Mail className="w-5 h-5 md:w-10 md:h-10 text-white" />
            <a
              href="mailto:matthew.kevin03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ml-3 text-base hover:underline md:text-2xl"
            >
              matthew.kevin03@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <Linkedin className="w-5 h-5 md:w-10 md:h-10 text-white" />
            <a
              href="https://www.linkedin.com/in/matthew-kevin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ml-3 text-base hover:underline md:text-2xl"
            >
              www.linkedin.com/in/matthew-kevin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
