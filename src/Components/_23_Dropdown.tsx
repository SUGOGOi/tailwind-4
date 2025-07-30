const _23_Dropdown = () => {
  return (
    <div className="mt-14 bg-zinc-300 flex justify-center items-center h-screen size-full">
      <div className="Dropdown p-3 relative group bg-zinc-800 rounded text-zinc-400 cursor-pointer">
        <h1>Dropdown</h1>
        <ul className="absolute hidden group-hover:grid grid-cols-1 md:grid-cols-2 gap-x-2 bg-zinc-400 text-zinc-200 mt-3 mr-10  rounded w-50 md:w-80 max-h-[60vh] overflow-y-auto z-50 ">
          <li className="block px-3 py-3 hover:bg-zinc-300 hover:text-zinc-600 transition duration-300 ease-in-out">
            item 1
          </li>
          <li className="block px-3 py-3 hover:bg-zinc-300 hover:text-zinc-600 transition duration-300 ease-in-out">
            item 2
          </li>
          <li className="block px-3 py-3 hover:bg-zinc-300 hover:text-zinc-600 transition duration-300 ease-in-out">
            item 3
          </li>

          <li className="block px-3 py-3 hover:bg-zinc-300 hover:text-zinc-600 transition duration-300 ease-in-out">
            item 4
          </li>
        </ul>
      </div>
    </div>
  );
};

export default _23_Dropdown;
