const _10_FilterImage = () => {
  return (
    <div className="">
      <h1 className=" m-5  text-2xl">Original</h1>
      <div className="bg-blue-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain"></div>

      <h1 className=" m-5  text-2xl">Blur</h1>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain blur-xs">
        Blur-xs
      </div>

      <h1 className=" m-5  text-2xl">Brightness</h1>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain brightness-50">
        Brightness 50%
      </div>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain brightness-80">
        Brightness 80%
      </div>

      <h1 className=" m-5  text-2xl">Contrast</h1>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain contrast-50">
        contrast 50%
      </div>

      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain contrast-150">
        contrast 150%
      </div>

      <h1 className=" m-5  text-2xl">Grayscale</h1>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain grayscale-50">
        Grayscale 50%
      </div>

      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain grayscale-125">
        Grayscale 125%
      </div>

      <h1 className=" m-5  text-2xl">Invert</h1>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain invert"></div>

      <h1 className=" m-5  text-2xl">Hue</h1>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain hue-rotate-100">
        hue-rotate-30
      </div>
      <div className="bg-amber-400 size-100 bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-contain hue-rotate-150">
        hue-rotate-150
      </div>
    </div>
  );
};

export default _10_FilterImage;
