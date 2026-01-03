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

        <p className="text-white text-justify mt-3">
          Feel free to <b>reach out </b>to me <b>anytime</b> through any of the
          contact options provided below. I’m always happy to connect and will
          do my best to respond as quickly as possible. Apologies in advance if
          my response is a bit slow. Here is my contact information for your
          convenience.
        </p>

        {/* Contact List */}
        <div className="my-10 grid gap-5 md:grid-cols-2">
          {/* WHATSAPP */}
          <a
            href="https://wa.me/6282244413825"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-5 rounded-2xl border border-white/30 hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>

            <div className="ml-4">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                WhatsApp
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                +62 822-4441-3825
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:matthew.kevin03@gmail.com"
            className="flex items-center p-5 rounded-2xl border border-white/30 hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>

            <div className="ml-4">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                Email
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                matthew.kevin03@gmail.com
              </p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/matthew-kevin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-5 rounded-2xl border border-white/30 hover:bg-white/10 transition md:col-span-2"
          >
            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10">
              <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>

            <div className="ml-4">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                LinkedIn
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                linkedin.com/in/matthew-kevin
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
