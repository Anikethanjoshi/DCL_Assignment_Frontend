
function Header() {
  return (
    <header className="w-full px-[8%] py-5 flex flex-col md:flex-row justify-between items-center gap-5 bg-[#0f172a] sticky top-0 z-[1000] shadow-lg">

      {/* LOGO */}
      <img
        src="logo.jpg"
        alt="Logo"
        className="w-[140px] object-contain"
      />

      {/* NAVBAR */}
      <nav className="flex flex-wrap justify-center items-center gap-6">

        <a
          href="#home"
          className="text-white text-[16px] font-medium transition duration-300 hover:text-blue-400"
        >
          Home
        </a>

        <a
          href="#about"
          className="text-white text-[16px] font-medium transition duration-300 hover:text-blue-400"
        >
          About
        </a>

        <a
          href="#services"
          className="text-white text-[16px] font-medium transition duration-300 hover:text-blue-400"
        >
          Services
        </a>

        <a
          href="#course"
          className="text-white text-[16px] font-medium transition duration-300 hover:text-blue-400"
        >
          Course
        </a>

        <a
          href="#fee"
          className="text-white text-[16px] font-medium transition duration-300 hover:text-blue-400"
        >
          Fee Structure
        </a>

        <a
          href="#contact"
          className="text-white text-[16px] font-medium transition duration-300 hover:text-blue-400"
        >
          Contact
        </a>

        {/* BUTTON */}
        <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[8px] font-medium transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          Login
        </button>

      </nav>
    </header>
  );
}

export default Header;