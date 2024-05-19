import Card from "./Card";

export default function InterestSection() {
  return (
    <section id="about" className="p-8 mx-0.5">
      <p className="text-center font-bold text-2xl">Interests</p>
      <div className="flex justify-center p-4">
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
