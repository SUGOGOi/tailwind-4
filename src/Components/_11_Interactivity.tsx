const _11_Interactivity = () => {
  return (
    <div className="flex mt-14">
      <div className="">
        <p className="mt-3 ml-3">simple</p>
        <button className="pt-1 pb-1 pl-3 pr-3 pb m-3 bg-zinc-900 text-zinc-500 rounded-sm">
          Login
        </button>
      </div>

      <div className="">
        <p className="mt-3 ml-3">hover</p>
        <button className="pt-1 pb-1 pl-3 pr-3 pb m-3 bg-zinc-900 text-zinc-500 rounded-sm hover:bg-zinc-700 hover:text-zinc-300">
          Login
        </button>
      </div>

      <div className="">
        <p className="mt-3 ml-3">focus</p>
        <button className="pt-1 pb-1 pl-3 pr-3 pb m-3 bg-zinc-900 text-zinc-500 rounded-sm focus:bg-zinc-700 focus:text-zinc-300">
          Login
        </button>
      </div>

      <div className="">
        <p className="mt-3 ml-3">active</p>
        <button className="pt-1 pb-1 pl-3 pr-3 pb m-3 bg-zinc-900 text-zinc-500 rounded-sm active:bg-zinc-700 active:text-zinc-300">
          Login
        </button>
      </div>

      <div className="group">
        <p className="mt-3 ml-3">Group hover</p>

        <h1 className="m-3 group-hover:text-blue-700">Hover me</h1>
        <a className="m-3 group-hover:text-blue-700" href="">
          Hover me
        </a>
      </div>
    </div>
  );
};

export default _11_Interactivity;
