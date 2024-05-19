import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <header className="bg-slate-700 text-white px-4 py-4 text-center">
      <nav className="flex justify-between flex-col md:flex-row">
        <p className="px-6 py-4 text-xl md:py-0">Farrel Beso</p>
        <ul>
          <NavbarButton link="home" linkName="Home" />
          <NavbarButton link="skills" linkName="About" />
          <NavbarButton link="projects" linkName="Projects" />
          <NavbarButton link="footer" linkName="Contact" />
        </ul>
      </nav>
    </header>
  );
}
