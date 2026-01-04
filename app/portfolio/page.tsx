"use client";

import { useEffect, useState } from "react";
import {
  MonitorSmartphone,
  Paintbrush,
  Bot,
  Gamepad,
  LucideIcon,
  X,
} from "lucide-react";

const FILTERS = ["ALL", "FULL_STACK", "AI", "UI_DESIGN", "GAME_DEV"] as const;

type FilterType = (typeof FILTERS)[number];

type Project = {
  image: string;
  title: string;
  tech: string[];
  shortDesc: string;
  fullDesc: string;
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const fullStackProjects: Project[] = [
    {
      image: "/images/vibetix.jpg",
      title: "VibeTix",
      tech: ["AWS", "LARAVEL"],
      shortDesc:
        "A cloud-based concert ticket booking web application built on AWS, designed for scalability and high availability using Elastic Load Balancer, Auto Scaling, and serverless reporting with AWS Lambda.",
      fullDesc:
        "In this project, I developed a cloud-based concert ticket booking website using AWS infrastructure to ensure scalability and high availability. The system was designed to handle high traffic by implementing AWS Elastic Load Balancer and Auto Scaling, allowing it to automatically adapt to traffic spikes during peak demand periods. I also utilized AWS Lambda functions to generate automated monthly transaction and sales reports, improving operational efficiency. For data and asset management, Amazon S3 was integrated to securely store static assets and report files, while Amazon RDS was used for reliable relational database management. Overall, the system architecture was carefully designed to be scalable, fault-tolerant, and cost-efficient, making it suitable for real-world production environments.",
    },
  ];

  const aiProjects: Project[] = [
    {
      image: "/images/thesis.png",
      title:
        "Stock Investment Recommendation System for Danantara-Affiliated Companies",
      tech: ["LARAVEL", "PYTHON", "DEEP LEARNING"],
      shortDesc:
        "A stock investment recommendation system that uses LSTM-based time-series prediction to generate buy, hold, and sell signals.",
      fullDesc:
        "This project is my undergraduate thesis, where I developed a system that provides buy, hold, and sell investment recommendations to users based on stock price predictions generated using a Long Short-Term Memory (LSTM) model. The system aims to assist users in making more informed investment decisions by leveraging time-series prediction techniques.",
    },
    {
      image: "/images/delivery.jpg",
      title: "Swarm Intelligence for Optimizing Goods Delivery Schedule",
      tech: ["PYTHON"],
      shortDesc:
        "A logistics optimization system that applies swarm intelligence algorithms, including Particle Swarm Optimization (PSO) and Ant Colony Optimization (ACO), to optimize delivery routes and cargo management.",
      fullDesc:
        "In this project, I utilized swarm intelligence algorithms such as PSO (Particle Swarm Optimization) and ACO (Ant Colony Optimization) to develop a delivery system for a logistics company. The goal of this system is to optimize route selection and cargo management to maximize profits.",
    },
  ];

  const uiProjects: Project[] = [
    {
      image: "/images/adsi.png",
      title: "Football Player Recruitment System",
      tech: ["FIGMA"],
      shortDesc:
        "A web-based football player recruitment system featuring a user-friendly interface designed in Figma, supported by a structured database and clear system documentation.",
      fullDesc:
        "In this project, I developed a football player recruitment system. I built the website along with its database and designed the interface using Figma. While designing the UI, I focused on ensuring that the website would be user-friendly for individuals from diverse backgrounds. Additionally, I learned to use documentation tools such as activity diagrams and use case diagrams to structure the project effectively.",
    },
    {
      image: "/images/pratamahub.png",
      title: "PratamaHub",
      tech: ["FIGMA"],
      shortDesc:
        "A community-focused application designed to address real-world challenges through intuitive features and a user-friendly interface.",
      fullDesc:
        "In this project, I learned to address the challenges faced by a community. The solutions I offered are embedded within the features of the application. As a result, I focused on creating an application that is not only visually appealing but also user-friendly, ensuring ease of use for all users.",
    },
  ];

  const gameProjects: Project[] = [
    {
      image: "/images/LastChefStanding.jpeg",
      title: "The Last Chef Standing",
      tech: ["JAVA"],
      shortDesc:
        "A Java-based game project that applies core Object-Oriented Programming (OOP) principles, including encapsulation, inheritance, polymorphism, and abstraction.",
      fullDesc:
        "This is my first game project, where I employed Object-Oriented Programming (OOP) concepts, including encapsulation, inheritance, polymorphism, and abstraction. In addition to developing the game, I was responsible for designing the in-game menu. Throughout this process, I also learned how to create class diagrams to better structure the game's design.",
    },
  ];

  return (
    <>
      {/* TITLE */}
      <div className="border-2 border-white mb-9">
        <h1 className="text-5xl text-white font-bold md:text-6xl lg:text-8xl text-center my-3">
          PORTFOLIO
        </h1>
      </div>

      {/* FILTER */}
      <div className="flex gap-3 overflow-x-auto whitespace-nowrap px-2 pb-2 scrollbar-hide">
        <FilterPill
          label="All"
          active={activeFilter === "ALL"}
          onClick={() => setActiveFilter("ALL")}
        />
        <FilterPill
          label="Full Stack"
          active={activeFilter === "FULL_STACK"}
          onClick={() => setActiveFilter("FULL_STACK")}
        />
        <FilterPill
          label="Artificial Intelligence"
          active={activeFilter === "AI"}
          onClick={() => setActiveFilter("AI")}
        />
        <FilterPill
          label="UI Design"
          active={activeFilter === "UI_DESIGN"}
          onClick={() => setActiveFilter("UI_DESIGN")}
        />
        <FilterPill
          label="Game Development"
          active={activeFilter === "GAME_DEV"}
          onClick={() => setActiveFilter("GAME_DEV")}
        />
      </div>

      {(activeFilter === "ALL" || activeFilter === "FULL_STACK") && (
        <>
          <SectionTitle
            title="Full Stack Development"
            icon={MonitorSmartphone}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <hr className="my-6 border-white" />
        </>
      )}

      {(activeFilter === "ALL" || activeFilter === "AI") && (
        <>
          <SectionTitle title="Artificial Intelligence" icon={Bot} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {aiProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <hr className="my-6 border-white" />
        </>
      )}

      {(activeFilter === "ALL" || activeFilter === "UI_DESIGN") && (
        <>
          <SectionTitle title="User Interface Design" icon={Paintbrush} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {uiProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <hr className="my-6 border-white" />
        </>
      )}

      {(activeFilter === "ALL" || activeFilter === "GAME_DEV") && (
        <>
          <SectionTitle title="Game Development" icon={Gamepad} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {gameProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <hr className="my-6 border-white" />
        </>
      )}
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer hover:scale-x-105
        ${
          active
            ? "bg-white text-cyan-900 shadow-md"
            : "bg-cyan-800 text-white/90 border border-white/40"
        }`}
    >
      {label}
    </button>
  );
}

function SectionTitle({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <h1 className="flex items-center gap-2 text-3xl text-white font-bold md:text-4xl mb-3 mt-6">
      {title}
      <Icon className="w-10 h-10 ml-2" />
    </h1>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* CARD */}
      <div className="bg-cyan-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4 flex flex-col flex-1">
          {/* TECH */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-white text-cyan-900 text-xs font-bold px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          {/* TITLE */}
          <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>

          {/* SHORT DESC */}
          <p className="text-white/90 text-sm line-clamp-3 mb-4 text-justify">
            {project.shortDesc}
          </p>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="mt-auto bg-white text-cyan-900 font-bold py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
          >
            See Detail
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-3 md:px-6">
          {/* MODAL CARD */}
          <div
            className="
              bg-cyan-900
              w-full md:max-w-2xl
              rounded-2xl
              shadow-xl
              max-h-[90vh]
              flex flex-col
              animate-slideUp
            "
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <h3 className="text-white font-bold text-base md:text-lg">
                {project.title}
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-full transition hover:bg-white/90 group cursor-pointer
                "
              >
                <X className="w-5 h-5 text-white group-hover:text-cyan-900" />
              </button>
            </div>

            {/* BODY (SCROLLABLE) */}
            <div className="p-4 space-y-4 overflow-y-auto scrollbar-hide">
              <div className="w-full aspect-video bg-black/20 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                />
              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-white text-cyan-900 text-xs font-bold px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <p className="text-white text-sm leading-relaxed text-justify">
                {project.fullDesc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
