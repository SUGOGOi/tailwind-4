//positions in css

const _07_Position = () => {
  return (
    <div className="mt-14">
      {/* <div className="bg-red-500 size-50 absolute bottom-0 right-0"></div>
      <div className="bg-green-500 size-50 absolute top-0 right-0"></div>
      <div className="bg-blue-500 size-50 absolute bottom-0 left-0"></div>
      <div className="bg-yellow-500 size-50 absolute top-0 left-0"></div> */}
      <div className="bg-cyan-300 size-100 relative">
        <div className="bg-red-500 size-20 absolute bottom-0 right-0"></div>
        <div className="bg-green-500 size-20 absolute top-0 right-0"></div>
        <div className="bg-blue-500 size-20 absolute bottom-0 left-0"></div>
        <div className="bg-yellow-500 size-20 absolute top-0 left-0"></div>
      </div>

      <div className="bg-blue-300 size-100">
        <h1 className="bg-blue-800 text-white fixed z-10">Sumsum Gogoi</h1>
      </div>

      <div className="bg-amber-200 size-100 relative">
        <div className="bg-amber-700 size-30 inset-30 absolute"></div>
      </div>
    </div>
  );
};

export default _07_Position;
