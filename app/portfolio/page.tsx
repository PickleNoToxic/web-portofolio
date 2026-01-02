import {
  MonitorSmartphone,
  Paintbrush,
  Bot,
  Gamepad,
  LucideIcon,
} from "lucide-react";

export default function PortfolioPage() {
  return (
    <>
      {/* TITLE */}
      <div className="border-2 border-white mb-9">
        <h1 className="text-5xl text-white font-bold md:text-6xl lg:text-8xl text-center my-3">
          PORTFOLIO
        </h1>
      </div>

      {/* Full Stack Development */}
      <SectionTitle title="Full Stack Development" icon={MonitorSmartphone} />

      <PortfolioTextItem
        tech={["AWS", "LARAVEL"]}
        title="VibeTix - Concert Ticket Booking Website (Cloud-Based Web Application)"
        description="In this project, I developed a cloud-based concert ticket booking website using AWS infrastructure to ensure scalability and high availability. The system was designed to handle high traffic by implementing AWS Elastic Load Balancer and Auto Scaling, allowing it to automatically adapt to traffic spikes during peak demand periods. I also utilized AWS Lambda functions to generate automated monthly transaction and sales reports, improving operational efficiency. For data and asset management, Amazon S3 was integrated to securely store static assets and report files, while Amazon RDS was used for reliable relational database management. Overall, the system architecture was carefully designed to be scalable, fault-tolerant, and cost-efficient, making it suitable for real-world production environments."
      />

      <hr className="my-6 border-white" />

      {/* AI */}
      <SectionTitle title="Artificial Intelligence" icon={Bot} />

      <PortfolioItem
        image="/images/thesis.png"
        tech={["LARAVEL", "PYTHON", "DEEP LEARNING"]}
        title="Stock Investment Recommendation System for Danantara-Affiliated Companies Using Long Short-Term Memory (LSTM)"
        description="This project is my undergraduate thesis, where I developed a system that provides buy, hold, and sell investment recommendations to users based on stock price predictions generated using a Long Short-Term Memory (LSTM) model. The system aims to assist users in making more informed investment decisions by leveraging time-series prediction techniques."
      />

      <PortfolioTextItem
        tech={["PYTHON"]}
        title="Swarm Intelligence for Optimizing Goods Delivery Schedule"
        description="In this project, I utilized swarm intelligence algorithms such as PSO (Particle Swarm Optimization) and ACO (Ant Colony Optimization) to develop a delivery system for a logistics company. The goal of this system is to optimize route selection and cargo management to maximize profits."
      />

      <hr className="my-6 border-white" />

      {/* UI DESIGN */}
      <SectionTitle title="User Interface Design" icon={Paintbrush} />

      <PortfolioItem
        image="/images/adsi.png"
        tech={["FIGMA"]}
        title="Football Player Recruitment System"
        description="In this project, I developed a football player recruitment system. I built the website along with its database and designed the interface using Figma. While designing the UI, I focused on ensuring that the website would be user-friendly for individuals from diverse backgrounds. Additionally, I learned to use documentation tools such as activity diagrams and use case diagrams to structure the project effectively."
      />

      <PortfolioItem
        image="/images/pratamahub.png"
        tech={["FIGMA"]}
        title="PratamaHub"
        description="In this project, I learned to address the challenges faced by a community. The solutions I offered are embedded within the features of the application. As a result, I focused on creating an application that is not only visually appealing but also user-friendly, ensuring ease of use for all users."
      />

      <hr className="my-6 border-white" />

      {/* GAME DEV */}
      <SectionTitle title="Game Development" icon={Gamepad} />

      <PortfolioItem
        image="/images/LastChefStanding.jpeg"
        tech={["JAVA"]}
        title="The Last Chef Standing"
        description="This is my first game project, where I employed Object-Oriented Programming (OOP) concepts, including encapsulation, inheritance, polymorphism, and abstraction. In addition to developing the game, I was responsible for designing the in-game menu. Throughout this process, I also learned how to create class diagrams to better structure the game's design."
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

function PortfolioItem({
  image,
  tech,
  title,
  description,
}: {
  image: string;
  tech: string[];
  title: string;
  description: string;
}) {
  return (
    <div className="mt-6">
      <div className="flex flex-col lg:flex-row items-center mb-6">
        <img
          src={image}
          alt={title}
          className="w-full max-w-sm h-auto rounded-lg mb-4 lg:mb-0 lg:mr-4"
        />

        <div className="flex-1">
          <div className="flex flex-wrap gap-2 my-3">
            {tech.map((item, index) => (
              <div key={index} className="bg-white inline-block">
                <h5 className="text-base text-cyan-900 font-bold md:text-xl lg:text-2xl px-3">
                  {item}
                </h5>
              </div>
            ))}
          </div>

          <h5 className="text-white text-2xl font-bold">{title}</h5>

          <p className="text-base text-white text-justify mb-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function PortfolioTextItem({
  tech,
  title,
  description,
}: {
  tech: string[];
  title: string;
  description: string;
}) {
  return (
    <div>
      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 my-3">
        {tech.map((item, index) => (
          <div key={index} className="bg-white inline-block">
            <h5 className="text-base text-cyan-900 font-bold md:text-xl lg:text-2xl px-3">
              {item}
            </h5>
          </div>
        ))}
      </div>

      {/* TITLE */}
      <h5 className="text-white text-2xl font-bold">{title}</h5>

      {/* DESCRIPTION */}
      <p className="text-base text-white text-justify mb-3">{description}</p>
    </div>
  );
}
