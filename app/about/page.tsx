import { Printer, UsersRound, Wrench } from "lucide-react"

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
      <h1 className="flex items-center gap-2 text-3xl text-white font-bold md:text-4xl mt-6 mb-3">
        TECHNICAL SKILLS
        <Wrench className="w-10 h-10 ml-2" />
      </h1>

      <SkillBar label="Web Development" percent={95} />
      <SkillBar label="Mobile App Development" percent={85} />
      <SkillBar label="Database Management" percent={85} />
      <SkillBar label="Applied Artificial Intelligence" percent={75} />

      <hr className="my-6 border-white" />

      {/* SOFT SKILLS */}
      <h1 className="flex items-center gap-2 text-3xl text-white font-bold md:text-4xl mt-6 mb-3">
        SOFT SKILLS
        <UsersRound className="w-10 h-10 ml-2" />
      </h1>

      <SkillBar label="Problem Solving" percent={95} />
      <SkillBar label="Critical Thinking" percent={90} />
      <SkillBar label="Teamwork" percent={95} />
      <SkillBar label="Leadership" percent={80} />
      <SkillBar label="Time Management" percent={90} />
      <SkillBar label="Communication" percent={80} />

      <hr className="my-6 border-white" />

      {/* DIGITAL SKILLS */}
      <h1 className="flex items-center gap-2 text-3xl text-white font-bold md:text-4xl mt-6 mb-3">
        DIGITAL SKILLS
        <Printer className="w-10 h-10 ml-2" />
      </h1>

      <SkillBar label="Microsoft Word" percent={85} />
      <SkillBar label="Canva & PowerPoint" percent={95} />
      <SkillBar label="Microsoft Excel" percent={75} />
      <SkillBar label="Figma" percent={80} />
    </>
  )
}

function SkillBar({
  label,
  percent,
}: {
  label: string
  percent: number
}) {
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{label}</span>
        <span className="text-sm font-medium text-white">{percent}%</span>
      </div>

      <div className="w-full bg-cyan-900 rounded-full h-3.5 mb-3 border-2 border-white">
        <div
          className="bg-white h-2.5 rounded-full border-2 border-cyan-900"
          style={{ width: `${percent}%` }}
        />
      </div>
    </>
  )
}