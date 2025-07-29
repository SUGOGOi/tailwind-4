const Navbar = () => {
  return (
    <nav className="w-full h-15 fixed top-0 left-0">
      <ul className="bg-black w-full h-l5 text-white m-0 flex [&>*]:flex items-center text-2xl">
        <li>
          <a className="p-3 hover:bg-zinc-800 " href="/">
            Home
          </a>
        </li>

        <li className=" p-3 relative group">
          <a href="#" className="hover:text-gray-300">
            Content
          </a>
          <ul className="absolute hidden group-hover:grid grid-cols-1 md:grid-cols-2 gap-x-2 bg-white text-black mt-11 rounded shadow-lg w-70 md:w-100 max-h-[70vh] overflow-y-auto z-50">
            {[
              { href: "/02colors", text: "Colors" },
              { href: "/03marginPadding", text: "Margin And Padding" },
              { href: "/04width", text: "Width" },
              { href: "/05height", text: "Height" },
              { href: "/06size", text: "Size" },
              { href: "/07position", text: "Position" },
              { href: "/08container", text: "Container" },
              { href: "/09background", text: "Background" },
              { href: "/10filterimage", text: "Filter Image" },
              { href: "/11-interactivity", text: "Interactivity" },
              { href: "/12-mediaquery", text: "Media Query" },
              { href: "/13-column", text: "Column" },
              { href: "/14-flex", text: "Flex" },
              { href: "/15-grid", text: "Grid" },
              {
                href: "/16-transition-transform",
                text: "Transition & Transform",
              },
              { href: "/17-animation", text: "Animation" },
              { href: "/18-breakpoint", text: "Breakpoint" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
