const _19_CustomPadding = () => {
  return (
    <div className="mt-14  h-screen ">
      <div className="bg-red-200 p-10">p-10:40px Original</div>
      <div className="bg-blue-200 p-2">p-2:200px Custom</div>
      <div className="bg-green-200 p-1">p-1:100px Custom</div>
      <div className="bg-yellow-200 p-c10">p-c10:500px Custom</div>
      <div className="bg-zinc-200 pt-c10 pl-c10">
        p-c10:500px top, left Custom
      </div>
    </div>
  );
};

export default _19_CustomPadding;
