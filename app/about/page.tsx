import {
  Monitor,
  Smartphone,
  Server,
  Bot,
  UsersRound,
  Wrench,
  Laptop,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* TITLE */}
      <div className="border-2 border-white mb-9">
        <h1 className="text-5xl text-white font-bold md:text-6xl lg:text-8xl text-center my-3">
          ABOUT ME
        </h1>
      </div>

      {/* TECHNICAL SKILLS */}
      <h2 className="flex items-center gap-3 text-3xl text-white font-bold md:text-4xl mb-6">
        TECHNICAL SKILLS
        <Wrench className="w-9 h-9" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard
          title="Web Development"
          icon={Monitor}
          items={["Laravel", "Next.js", "React", "Tailwind CSS"]}
        />
        <SkillCard
          title="Mobile App Development"
          icon={Smartphone}
          items={["Flutter", "Dart", "Kotlin"]}
        />
        <SkillCard
          title="Backend & Cloud"
          icon={Server}
          items={["MySQL", "AWS", "Firebase"]}
        />
        <SkillCard
          title="Applied Artificial Intelligence"
          icon={Bot}
          items={["Python", "Time Series Forecasting", "LSTM"]}
        />
      </div>

      <hr className="my-6 border-white" />

      {/* SOFT SKILLS */}
      <h2 className="flex items-center gap-3 text-3xl text-white font-bold md:text-4xl mb-6">
        SOFT SKILLS
        <UsersRound className="w-9 h-9" />
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <SoftSkill
          title="Problem Solving"
          desc="Able to analyze problems and propose effective technical solutions."
        />
        <SoftSkill
          title="Critical Thinking"
          desc="Skilled in evaluating multiple approaches before making decisions."
        />
        <SoftSkill
          title="Teamwork"
          desc="Experienced in collaborating within team-based development projects."
        />
        <SoftSkill
          title="Leadership"
          desc="Capable of taking initiative and guiding teams toward shared goals."
        />
        <SoftSkill
          title="Time Management"
          desc="Able to manage priorities and meet project deadlines effectively."
        />
        <SoftSkill
          title="Communication"
          desc="Comfortable communicating technical ideas clearly and effectively."
        />
      </ul>

      <hr className="my-6 border-white" />

      {/* ADDITIONAL SKILLS */}
      <h2 className="flex items-center gap-3 text-3xl text-white font-bold md:text-4xl mb-6">
        ADDITIONAL SKILLS
        <Laptop className="w-9 h-9" />
      </h2>

      <div className="flex flex-wrap gap-3">
        {[
          "Microsoft Word",
          "Microsoft Excel",
          "Canva",
          "PowerPoint",
          "Figma",
        ].map((skill) => (
          <span
            key={skill}
            className="
              border border-white/50
              text-white
              px-4
              py-1.5
              rounded-full
              text-sm
              font-medium
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}

function SkillCard({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: any;
}) {
  return (
    <div
      className="
        bg-cyan-900
        border border-white/50
        rounded-2xl
        p-6
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-7 h-7 text-white" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="bg-white text-cyan-900 text-xs font-bold px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SoftSkill({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="
      bg-cyan-900
      border border-white/50
      rounded-xl
      p-5
      shadow-sm
      hover:shadow-md
      transition
    ">
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-sm text-white/90">{desc}</p>
    </li>
  );
}
