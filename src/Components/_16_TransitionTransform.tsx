const _16_TransitionTransform = () => {
  return (
    <div className="h-screen">
      <h1 className="bg-zinc-900 text-2xl text-zinc-400 text-center p-5 w-full">
        TRANSITION AND TRANSFORM
      </h1>
      <div className="flex mt-5 ml-5 justify-around flex-wrap">
        <div className="bg-zinc-900 text-2xl p-2 m-3 text-zinc-500 rounded-md border-3 border-zinc-900 hover:bg-zinc-500 hover:text-zinc-900  transition duration-1000">
          Login
        </div>

        <div className="bg-zinc-900 text-2xl p-2 m-3 text-zinc-500 rounded-md transition duration-1000 hover:opacity-50">
          Login
        </div>

        <div className="bg-zinc-900 text-2xl p-2 m-3 text-zinc-500 rounded-md transition duration-1000 hover:rotate-360">
          Login
        </div>

        <div className="bg-zinc-900 text-2xl p-2 m-3 text-zinc-500 rounded-md transition duration-1000 hover:scale-150">
          Login
        </div>

        <div className="bg-zinc-900 text-2xl p-2 m-3 text-zinc-500 rounded-md transition duration-1000 hover:scale-x-150">
          Login
        </div>

        <div className="bg-zinc-900 text-2xl p-2 m-3 text-zinc-500 rounded-md transition duration-1000 hover:scale-y-150">
          Login
        </div>

        <div className="bg-zinc-900 text-2xl p-2 m-3 text-zinc-500 rounded-md transition duration-1000 hover:scale-y-150 hover:scale-x-50">
          Login
        </div>
      </div>

      <div className="size-70 bg-red-300 m-10 rounded-2xl transition duration-1000 hover:scale-120 hover:rotate-45"></div>
    </div>
  );
};

export default _16_TransitionTransform;
