

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-12 py-5 bg-[#1B2316] shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img
          src="assets/logo.png"
          alt="FloraVision Logo"
          className="h-8 w-8 rounded"
        />
        <span className="font-extrabold text-xl text-white tracking-wide">
          FloraVision.
        </span>
      </div>
      <div className="flex space-x-8">
        <a className="text-white/90 text-xl tracking-wide hover:text-green-300 duration-150 cursor-pointer"
          style={{ fontFamily: "cursive" }}>
          Home
        </a>
        <a className="text-white/90 text-xl tracking-wide hover:text-green-300 duration-150 cursor-pointer"
          style={{ fontFamily: "cursive" }}>
          Plants Type
        </a>
        <a className="text-white/90 text-xl tracking-wide hover:text-green-300 duration-150 cursor-pointer"
          style={{ fontFamily: "cursive" }}>
          More
        </a>
        <a className="text-white/90 text-xl tracking-wide hover:text-green-300 duration-150 cursor-pointer"
          style={{ fontFamily: "cursive" }}>
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white/80 hover:text-green-400 duration-150">
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
        <img
          src="/assets/bag.png"
          alt="Cart/Bag"
          className="h-6 w-6"
        />
        <button className="text-white/80 hover:text-green-400 duration-150">
          <span role="img" aria-label="menu">
            <a>
              ☰
            </a>
          </span>
        </button>
      </div>
    </nav>
  );
}
