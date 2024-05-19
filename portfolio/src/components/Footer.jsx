export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-700 text-white text-center p-8 w-full flex place-content-between items-center"
    >
      <div className="text-left">
        <p>farrelbeso@gmail.com</p>
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/farrel-beso-9347512b5/"
        >
          Linkedin Account
        </a>
      </div>

      <p>&copy; 2024 Farrel Beso</p>
    </footer>
  );
}
