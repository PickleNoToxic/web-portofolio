"use client";

import { Instagram, Github, Linkedin } from "lucide-react";

type SocialButtonProps = {
  href?: string;
  Icon: React.ComponentType<{ className?: string }>;
};

function SocialButton({ href = "#", Icon }: SocialButtonProps) {
  return (
    <button
      onClick={() => window.open(href, "_blank")}
      className="bg-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full outline-none hover:bg-cyan-800 hover:text-white transition cursor-pointer"
      type="button"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="relative pb-6">
      <div className="container mx-auto px-4">
        <hr className="my-6 border-white" />

        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">
              <b>Let's keep in touch!</b>
            </h4>

            <h5 className="text-lg mt-2 mb-2 text-white">
              Feel free to connect with me through the social media links below.
            </h5>

            <div className="mt-6 flex gap-2">
              <SocialButton
                href="https://www.instagram.com/matthew.kevin03/"
                Icon={Instagram}
              />
              <SocialButton href="https://linkedin.com/in/matthew-kevin" Icon={Linkedin} />
              <SocialButton href="https://github.com/PickleNoToxic" Icon={Github} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
