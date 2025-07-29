const _05_Height = () => {
  return (
    <div className="h-screen mt-14">
      <div className="bg-zinc-900 text-zinc-500 text-2xl text-center p-2">
        Height
      </div>

      <div className="bg-green-200 h-10">Div 1</div>
      <div className="bg-green-300 h-20">Div 2</div>
      <div className="bg-green-400 h-[120px]">Div 3</div>
      {/* <div className="h-full bg-green-200 text-center text-2xl">
        <div className="bg-green-400 h-1/2 text-center text-2xl">1/2</div>
        <div className="bg-green-600 h-1/3 text-center text-2xl">1/3</div>
      </div> */}

      {/* <div className="bg-amber-500 h-dvh">h-dvh</div> */}
      {/* <div className="bg-pink-400 h-100 max-h-50">
        max-h-50 = 200px, h-100 = 400px will not work here
      </div> */}

      {/* <div className="bg-pink-400 h-10 min-h-50">
        min-h-50 = 200px, h-10 = 40px will not work here
      </div> */}

      {/* <div className="bg-pink-400 h-[200px] text-2xl text-center">
        height as px
      </div> */}
    </div>
  );
};

export default _05_Height;
