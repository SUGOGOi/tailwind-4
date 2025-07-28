const Navbar = () => {
  return (
    <ul className="bg-black text-white m-0 flex [&>*]:flex">
      <li>
        <a className="p-3 hover:bg-zinc-800 " href="#">
          Home
        </a>
      </li>
      <li>
        <a className="p-3 hover:bg-zinc-800 " href="#">
          News
        </a>
      </li>
      <li>
        <a className="p-3 hover:bg-zinc-800 " href="#">
          Contact
        </a>
      </li>
      <li>
        <a className="p-3 hover:bg-zinc-800 " href="#">
          About
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
