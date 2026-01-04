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
      <ol className="relative border-s border-white">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <div className="bg-white my-3 inline-block">
            <h5 className="text-base text-cyan-900 font-bold md:text-xl lg:text-2xl px-3">
              HIGH SCHOOL
            </h5>
          </div>
          <h5 className="text-white text-2xl font-bold">SMA Kristen Petra 1</h5>
          <time className="block mb-2 text-sm font-semibold text-white">
            July 2019 - June 2022
          </time>
          <p className="text-base font-normal text-white text-justify">
            During my high school years, I pursued the{" "}
            <b>Science (MIPA) major</b>, which provided me with a solid
            foundation in mathematics and natural sciences. This experience was
            crucial in helping me develop the technical skills I needed for my
            future career. Through various subjects, I discovered my interests
            and strengths, which ultimately guided me in{" "}
            <b>choosing my college major</b>. I became aware of my passion for{" "}
            <b>technology and programming</b>, leading me to enroll in a program
            that aligns with my career aspirations.
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <div className="bg-white my-3 inline-block">
            <h5 className="text-base text-cyan-900 font-bold md:text-xl lg:text-2xl px-3">
              COLLEGE
            </h5>
          </div>
          <h5 className="text-white text-2xl font-bold">
            Petra Christian University
          </h5>
          <time className="block mb-2 text-sm font-semibold text-white">
            July 2022 - Present
          </time>
          <p className="text-base font-normal text-white text-justify">
            I am currently pursuing a <b>degree in Informatics</b> at Petra
            Christian University, where I have gained a comprehensive education
            in both technical and non-technical aspects. Throughout my studies,
            I have explored <b>various areas</b> of computer science. Over
            time, my academic and project experiences have led me to develop a
            stronger interest and focus in <b>full-stack development</b>, where
            I work on building complete <b>web applications</b> from the frontend to
            the backend. These experiences have allowed me to build a solid
            foundation in essential hard skills for a career in IT.
            Additionally, I have developed <b>crucial soft skills</b> such as teamwork,
            problem-solving, and communication, which are invaluable in
            professional settings. My time in university has been instrumental
            in shaping my abilities and preparing me for the challenges of the
            tech industry.
          </p>
        </li>
      </ol>

      <hr className="my-6 border-white" />

      {/* EXPERIENCE */}
      <SectionTitle title="EXPERIENCE" icon={Briefcase} />

      <ol className="relative border-s border-white">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <div className="bg-white my-3 inline-block">
            <h5 className="text-base text-cyan-900 font-bold md:text-xl lg:text-2xl px-3">
              INTERNSHIP
            </h5>
          </div>
          <h5 className="text-white text-2xl font-bold">
            Software Engineer Intern at PT. Cipta Insan Aktif (CIA)
          </h5>
          <time className="block mb-2 text-sm font-semibold text-white">
            January 2025 - May 2025
          </time>
          <p className="text-base font-normal text-white text-justify">
            I contributed to the <b>development of multiple internal systems</b> to
            support the company’s operational activities, including:
          </p>
          <ul className="space-y-4 mt-2">
            <li className="flex items-start gap-4 text-white">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-cyan-900 flex items-center justify-center font-bold">
                1
              </div>
              <p className="leading-relaxed">
                Developed <b>CustomerHub</b>, a <b>customer relationship management system </b>
                used by 50+ active users to streamline customer interactions and
                data management.
              </p>
            </li>

            <li className="flex items-start gap-4 text-white">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-cyan-900 flex items-center justify-center font-bold">
                2
              </div>
              <p className="leading-relaxed">
                Collaborated in developing a customizable <b>company profile
                website</b> integrated with a <b>Content Management System (CMS)</b>,
                enabling non-technical users to manage content efficiently.
              </p>
            </li>

            <li className="flex items-start gap-4 text-white">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-cyan-900 flex items-center justify-center font-bold">
                3
              </div>
              <p className="leading-relaxed">
                Worked in a team of developers to build an <b>Asset Management
                System</b> for tracking and managing company assets accurately and
                systematically.
              </p>
            </li>
          </ul>
        </li>
      </ol>
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
