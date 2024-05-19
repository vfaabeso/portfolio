import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <header className="bg-slate-700 text-white px-4 py-4 text-center">
      <nav className="flex justify-between">
        <p className="px-4 text-xl">Farrel Beso</p>
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
