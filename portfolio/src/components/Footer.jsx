export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-700 text-white text-center p-8 w-full"
    >
      <div className="flex place-content-between items-center flex-col md:flex-row gap-2">
        <div className="text-center md:text-left">
          <p>farrelbeso@gmail.com</p>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/farrel-beso-9347512b5/"
          >
            Linkedin Account
          </a>
        </div>

        <div className="text-center md:text-right gap-2">
          <p>&copy; 2024 Farrel Beso</p>
          <p className="text-gray-100 text-sm">
            Laptop Icon created by{" "}
            <a
              className="hover:underline"
              href="https://www.flaticon.com/free-icons/laptop"
            >
              Vectors Market - Flaticon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
