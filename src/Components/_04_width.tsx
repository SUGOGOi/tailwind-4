const _04_width = () => {
  return (
    <>
      {/* <h1 className="bg-green-400">H1 tag</h1> */}
      {/* <span className="bg-green-400">Span tag</span> */}
      <div className="bg-zinc-900 text-center text-zinc-500 text-2xl">
        Width
      </div>

      <div className="bg-pink-600 w-30 ">Div 1</div>
      <div className="bg-pink-400 w-30 max-w-10">Div 2</div>
      <div className="bg-pink-200 w-30 min-w-50">Div 3</div>

      <div className="bg-yellow-600 w-full">Div 4</div>
      <div className="bg-yellow-500 w-1/2">Div 5</div>
      <div className="bg-yellow-400 w-1/3">Div 6</div>
      <div className="bg-yellow-300 w-1/4">Div 7</div>

      <div className="bg-red-600 w-xs hover:w-xl">Div 8</div>
      <div className="bg-red-500 w-xl hover:w-2xl">Div 9</div>
      <div className="bg-red-400 w-2xl hover:w-3xl">Div 10</div>

      <div className="bg-cyan-700 w-[50px] hover:w-[90px]">Div 11</div>
      <div className="bg-cyan-500 w-[70px] hover:w-[110px]">Div 12</div>
      <div className="bg-cyan-300 w-[90px] hover:w-[130px]">Div 13</div>
    </>
  );
};

export default _04_width;
