export default function Navbar() {
  return (
    <header className="bg-slate-700 text-white px-4 py-4 text-center">
      <nav>
        <ul>
          <li className="inline mx-4">
            <a href="#home">Home</a>
          </li>
          <li className="inline mx-4">
            <a href="#about">About</a>
          </li>
          <li className="inline mx-4">
            <a href="#projects">Projects</a>
          </li>
          <li className="inline mx-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
