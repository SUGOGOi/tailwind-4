const MarginPadding = () => {
  return (
    <div className="mt-14">
      {/* generate padding/margin class dynamically -v4 */}

      <span className="bg-amber-500 mt-10 ml-10 pl-10 pt-10 block text-white">
        Span with Margin and Padding
      </span>
      <h1 className="bg-blue-950 text-white p-13 m-13">Heading Tag 1</h1>
      <h1 className="bg-blue-900 text-white px-10  ">Heading Tag 2</h1>
      <h1 className="bg-blue-800 text-white  py-10 ">Heading Tag 3</h1>
      <h1 className="bg-blue-700 text-white  mx-10">Heading Tag 4</h1>
      <h1 className="bg-blue-600 text-white  my-10">Heading Tag 5</h1>
      <h1 className="bg-blue-500 text-white  pt-10 mt-10">Heading Tag 6</h1>
      <h1 className="bg-blue-400 text-white  pl-10 ml-10">Heading Tag 7</h1>
      <h1 className="bg-blue-300 text-white  pr-10 mr-10 text-right">
        Heading Tag 8
      </h1>
      <h1 className="bg-blue-200 text-white  pb-10 mb-10 ">Heading Tag 9</h1>

      <h1 className="text-white bg-cyan-400 p-[3px] m-[3px]">1PX heading</h1>
    </div>
  );
};

export default MarginPadding;
