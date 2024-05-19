import Card from "./Card";

export default function SkillSection() {
  return (
    <section id="skills" className="p-8 mx-0.5">
      <p className="text-center font-bold text-3xl p-4">Skills</p>
      <hr />
      <div className="flex justify-center p-4 flex-col lg:flex-row">
        <Card
          title="Web Programming"
          details="MERN Stack, with a strong emphasis on backend development."
        />
        <Card
          title="Mobile Programming"
          details="Flutter Development, able to perform both frontend and backend rapidly."
        />
        <Card
          title="Reinforcement Learning"
          details="Tabular RL, programs the algorithms by hand as a method of learning."
        />
      </div>
    </section>
  );
}
