import { Briefcase, GraduationCap, LucideIcon } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      {/* TITLE */}
      <div className="border-2 border-white mb-9">
        <h1 className="text-5xl text-white font-bold md:text-6xl lg:text-8xl text-center my-3">
          RESUME
        </h1>
      </div>

      {/* EDUCATION */}
      <SectionTitle title="EDUCATION" icon={GraduationCap} />

      <ResumeBlock
        label="HIGH SCHOOL"
        title="SMA Kristen Petra 1"
        description="During my high school years, I pursued the Science (MIPA) major, which provided me with a solid foundation in mathematics and natural sciences. This experience was crucial in helping me develop the technical skills I needed for my future career. Through various subjects, I discovered my interests and strengths, which ultimately guided me in choosing my college major. I became aware of my passion for technology and programming, leading me to enroll in a program that aligns with my career aspirations."
      />

      <ResumeBlock
        label="COLLEGE"
        title="Petra Christian University"
        description="I am currently pursuing a degree in Informatics at Petra Christian University, where I have gained a comprehensive education in both technical and non-technical aspects. Throughout my studies, I have delved deep into various areas of computer science, including programming, data structures, algorithms, and full-stack development. These experiences have allowed me to build a strong foundation in hard skills essential for a career in IT. Additionally, I have developed crucial soft skills such as teamwork, problem-solving, and communication, which are invaluable in professional settings. My time in university has been instrumental in shaping my abilities and preparing me for the challenges of the tech industry."
      />

      <hr className="my-6 border-white" />

      {/* EXPERIENCE */}
      <SectionTitle title="EXPERIENCE" icon={Briefcase} />

      <ResumeBlock
        label="INTERNSHIP"
        title="Software Engineer Intern at PT. Cipta Insan Aktif (CIA)"
        description={[
          "Developed CustomerHub, a customer relationship management system used by 50+ active users to streamline customer interactions and data management.",
          "Collaborated in developing a customizable company profile website integrated with a Content Management System (CMS), enabling non-technical users to manage content efficiently.",
          "Worked in a team of developers to build an Asset Management System for tracking and managing company assets accurately and systematically.",
        ]}
      />
    </>
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
    <h1 className="flex items-center gap-2 text-3xl text-white font-bold md:text-4xl mb-3 mt-9">
      {title}
      <Icon className="w-10 h-10 ml-2" />
    </h1>
  );
}

function ResumeBlock({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string | string[];
}) {
  return (
    <div>
      <div className="bg-white my-3 inline-block">
        <h5 className="text-base text-cyan-900 font-bold md:text-xl lg:text-2xl px-3">
          {label}
        </h5>
      </div>

      <h5 className="text-white text-2xl font-bold">{title}</h5>

      {Array.isArray(description) ? (
        <ul className="list-disc list-inside text-white text-base mb-3 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-white text-justify mb-3">{description}</p>
      )}
    </div>
  );
}
