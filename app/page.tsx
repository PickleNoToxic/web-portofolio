import Image from "next/image"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <h1 className="text-3xl text-white font-bold md:text-4xl">
        HI THERE!
      </h1>

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
          Hi, I'm Matthew! I'm a third-year Informatics student at Petra Christian University with a strong interest in full-stack development. I have hands-on experience building web applications using Laravel and Next.js, and mobile applications with Flutter. I'm passionate about creating efficient, scalable, and user-friendly applications, and I'm eager to expand my knowledge and expertise through internships and work opportunities.
        </p>
      </div>

      {/* What I Do */}
      <h1 className="text-3xl text-white font-bold md:text-4xl">
        What I Do?
      </h1>

      <div className="flex flex-wrap my-3 items-stretch justify-center">
        {/* Frontend */}
        <ServiceCard
          image="/images/website.svg"
          title="Frontend Developer"
          description="I have a strong command of modern web technologies, including HTML, CSS, and JavaScript. I excel in creating responsive and visually appealing user interfaces (UI) that enhance user experience across various devices."
        />

        {/* Backend */}
        <ServiceCard
          image="/images/database.svg"
          title="Backend Developer"
          description="I have a strong foundation in server-side programming and database management. I am proficient in various programming languages such as PHP, Java, and Python, enabling me to design and implement efficient APIs and robust server architectures."
        />

        {/* QA */}
        <ServiceCard
          image="/images/quality.svg"
          title="Quality Assurance"
          description="I am passionate about ensuring the highest standards of quality in software development. I possess a strong understanding of testing methodologies, including manual and automated testing, and I excel in identifying defects and areas for improvement."
        />
      </div>
    </div>
  )
}

function ServiceCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="basis-full lg:basis-1/3 p-2 flex justify-center">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow h-full">
        <Image
          src={image}
          alt={title}
          width={128}
          height={128}
          className="mx-auto mb-2"
        />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-gray-700 text-justify">
          {description}
        </p>
      </div>
    </div>
  )
}
