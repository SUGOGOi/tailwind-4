const _06_Size = () => {
  return (
    <div className="h-screen flex mt-14">
      <div className="bg-amber-200 w-50 h-50 hover:size-100 text-xl text-center">
        Box 1 w-50 h-50
      </div>
      <div className="bg-amber-300 size-50 hover:size-100 text-xl text-center">
        Box 2 using size-50
      </div>

      <div className="bg-amber-400 min-size-20 size-30  hover:size-100 text-xs text-center">
        Box 3 using size-30, min/max only work with height and width
      </div>

      <div className="bg-amber-500 size-1/5 hover:size-100 text-xl text-center">
        Box 4 using size-1/5, 1/5 of width and 1/5 of height(not exact square)
      </div>

      <div className="bg-amber-600  size-fit hover:size-100  text-3xl text-center">
        Box 5 size-fit
      </div>

      <div className="bg-amber-700  size-[100px] hover:size-100  text-3xl text-center">
        Box 6 size-px
      </div>
    </div>
  );
};

export default _06_Size;
