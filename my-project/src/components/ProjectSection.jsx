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
          title="Multi-user Todo App"
          details="A feature-rich application built with Flutter and Firebase, enabling multiple users to manage and collaborate on tasks seamlessly. The app supports real-time updates, user authentication, and task sharing."
          link="https://github.com/FarrelBeso/cmsc23_refactor/tree/mock-db"
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
