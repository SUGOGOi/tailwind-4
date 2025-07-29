const _13_Column = () => {
  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-0">
        <h1 className="bg-red-300">Column Headng 1</h1>
        <h1 className="bg-blue-300">Column Headng 2</h1>
        <h1 className="bg-green-300">Column Headng 3</h1>
        <h1 className="bg-yellow-300">Column Headng 4</h1>
        <h1 className="bg-zinc-500">Column Headng 5</h1>
      </div>
      {/* columns will not works properly with div */}
      <h1 className="text-2xl text-center">MANUAL responsive</h1>
      <div className="columns-1 sm:columns-2 md:columns-3   mt-5 border border-red-500">
        <img
          src="/bg1.jpg"
          className="size-50  bg-no-repeat bg-center bg-contain"
        />
        <img
          src="/bg1.jpg"
          className="size-50  bg-no-repeat bg-center bg-contain"
        />
        <img
          src="/bg1.jpg"
          className="size-50  bg-no-repeat bg-center bg-contain"
        />
      </div>
      <h1 className="text-2xl text-center">AUTO responsive</h1>

      <div className="columns-3xs   mt-5 border border-zinc-900">
        <img
          src="/bg1.jpg"
          className="size-50  bg-no-repeat bg-center bg-contain"
        />
        <img
          src="/bg1.jpg"
          className="size-50  bg-no-repeat bg-center bg-contain"
        />

        <img
          src="/bg1.jpg"
          className="size-50  bg-no-repeat bg-center bg-contain"
        />
      </div>
    </>
  );
};

export default _13_Column;
