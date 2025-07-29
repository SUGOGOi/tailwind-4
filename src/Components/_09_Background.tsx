const _09_Background = () => {
  return (
    <div className="mt-14">
      <div className="bg-red-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain ">
        BG
      </div>

      <div className="gradient bg-gradient-to-t to-blue-500 from-yellow-500 size-50"></div>
      <div className="gradient bg-gradient-to-b to-blue-500 from-yellow-500 size-50"></div>
      <div className="flex">
        <div className="gradient bg-gradient-to-tl to-blue-500 from-pink-500 size-50"></div>
        <div className="gradient bg-gradient-to-tr to-blue-500 from-pink-500 size-50"></div>
      </div>

      <div className="size-50 m-20 shadow-zinc-900 shadow-2xl bg-red-500"></div>
      <div className="size-50 m-20 shadow-zinc-500  shadow-inner"></div>
    </div>
  );
};

export default _09_Background;
