import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <header className="bg-slate-700 text-white px-4 py-4 text-center">
      <nav>
        <ul>
          <NavbarButton link="home" linkName="Home" />
          <NavbarButton link="about" linkName="About" />
          <NavbarButton link="projects" linkName="Projects" />
          <NavbarButton link="contact" linkName="Contact" />
        </ul>
      </nav>
    </header>
  );
}
