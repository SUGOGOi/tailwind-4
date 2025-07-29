const _12_MediaQuery = () => {
  return (
    <div className="h-screen">
      <div className="bg-cyan-200 h-full sm:bg-green-600 md:bg-red-500 lg:bg-amber-500 xl:bg-pink-400 ">
        <p className="ml-3">width less than 640: bg-cyan-200 </p>
        <p className="m-3">
          sm : width greater than or equal 640px: bg-green-600
        </p>
        <p className="m-3">
          md : width greater than or equal 768px: bg-red-500
        </p>
        <p className="m-3">
          lg : width greater than or equal 1024px: bg-amber-500
        </p>
        <p className="m-3">
          xl : width greater than or equal 1280px: bg-pink-400
        </p>
      </div>
    </div>
  );
};

export default _12_MediaQuery;
