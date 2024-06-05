import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="p-8 mx-0.5">
      <p className="text-center font-bold text-3xl p-4">
        Projects and Activities
      </p>
      <hr />
      <div className="flex justify-center p-4 flex-col lg:flex-row">
        <ProjectCard
          title="STALS"
          details="An information system that allows users to search, get information, review, and report hotels, apartments, bed space, dormitories, and transient spaces in Los Baños."
          link="https://github.com/cmsc128-e4l-23/STALS"
        />
        <ProjectCard
          title="elBigay"
          details="A mobile application using Flutter and Firebase for sending donations to organizations and donation drives. Has features such as SMS sending, QR Code scanning for donation confirmation, and image loading."
          link="https://github.com/amtw123456/Elbi-Donation-System-CMSC23-Project"
        />
        <ProjectCard
          title="Food Review System"
          details="An offline food reviewing system with a colorful and friendly CLI. Implemented in Javascript. Contains authentication for operations like creating a review and editing food establishment info."
          link="https://github.com/FarrelBeso/cmsc127project"
        />
        <ProjectCard
          title="Farm To Table"
          details="This project is an e-commerce platform designed to connect the Department of Agriculture (DA) with consumers directly. Contains modern and appealing UI. Can return sales reports within a given time period."
          link="https://github.com/millaizha/CMSC-100-Project"
        />
        <ProjectCard
          title="RL Implementation"
          details="An implementation of tabular reinforcement learning algorithms using Python, algorithms from the book 'Reinforcement Learning: An Introduction' for self-study purposes."
          link="https://github.com/vfaabeso/rl-studies"
        />
      </div>
    </section>
  );
}
