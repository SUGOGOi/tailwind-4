const _08_Container = () => {
  return (
    <>
      <div className="bg-amber-600 ">
        <ul className="flex justify-end [&>*]:p-4 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="bg-amber-500 container mx-auto text-3xl text-center">
        Container class
      </div>
      <div className="text-center bg-amber-400 container mx-auto text-2xl">
        Container class
      </div>
    </>
  );
};

export default _08_Container;
