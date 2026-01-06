import Image from "next/image";
import { Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <h1 className="text-3xl text-white font-bold md:text-4xl">HI THERE!</h1>

      <h1 className="text-5xl text-white font-bold md:text-6xl lg:text-8xl">
        I'M MATTHEW
      </h1>

      <div className="bg-white mt-3 inline-block">
        <h5 className="text-base text-cyan-900 font-bold md:text-xl lg:text-2xl px-3">
          FULL-STACK DEVELOPMENT ENTHUSIAST
        </h5>
      </div>

      <div className="my-6">
        <p className="text-white text-justify">
          Hi, I'm Matthew! I'm an <b>Informatics fresh graduate </b>from Petra
          Christian University with a strong interest in full-stack development.
          I have hands-on experience building <b>web applications </b>using Laravel and
          Next.js, and <b>mobile applications </b>with Flutter. I'm passionate about
          creating efficient, scalable, and user-friendly applications, and I'm
          eager to expand my knowledge and expertise through <b>internships and
          work opportunities</b>.
        </p>
      </div>

      {/* Tech Stack */}
      <h1 className="flex items-center gap-2 text-3xl text-white font-bold md:text-4xl">
        TECH STACK
        <Layers className="w-10 h-10 ml-2" />
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
        <TechStackItem image="/images/laravel.svg" title="Laravel" />
        <TechStackItem image="/images/next-js.png" title="Next.js" />
        <TechStackItem image="/images/flutter.png" title="Flutter" />
        <TechStackItem image="/images/react.png" title="React" />
        <TechStackItem image="/images/tailwind.png" title="Tailwind CSS" />
        <TechStackItem image="/images/python.png" title="Python" />
        <TechStackItem image="/images/aws.png" title="AWS" />
        <TechStackItem image="/images/firebase.png" title="Firebase" />
      </div>
    </div>
  );
}

function TechStackItem({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition text-cyan-900">
      <div className="w-16 h-16 flex items-center justify-center mb-3">
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <p className="text-cyan-900 font-semibold text-sm md:text-base text-center">
        {title}
      </p>
    </div>
  );
}
