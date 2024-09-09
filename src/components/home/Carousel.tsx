
export default function Carousel() {
  return (
    <div>
      <div className="flex  justify-center items-center py-8 md:py-12 md:flex-row flex-col lg:py-0 lg:px-0 px-4 md:px-6 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-0">
        <div className="2xl:w-2/3 relative">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/carousel_7_img_1.png"
            alt="boy in hat"
          />
          <div className="flex flex-col justify-start items-start absolute bottom-6 left-4 md:bottom-8 lg:bottom-20 lg:left-20">
            <p className="text-base leading-none text-white">Basics</p>
            <h1 className="text-xl mt-3 lg:mt-4 md:text-2xl lg:text-4xl font-semibold leading-9 text-white">
              Hats &amp; Scarves
            </h1>
            <a
              className="md:mt-6 underline-offset-2 mt-4 lg:mt-4 text-base font-medium leading-4 hover:underline text-white"
              href="javascript:void(0)"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="2xl:w-2/3 relative">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/carousel_7_img-2.png"
            alt="boy in black"
          />
          <div className="flex flex-col justify-start items-start absolute bottom-6 left-4 md:bottom-8 lg:bottom-20 lg:left-20">
            <p className="text-base leading-none text-white">Basics</p>
            <h1 className="text-xl mt-3 lg:mt-4 md:text-2xl lg:text-4xl font-semibold leading-9 text-white">
              Everyday Essentials
            </h1>
            <a
              className="md:mt-6 underline-offset-2 mt-4 lg:mt-4 text-base font-medium leading-4 hover:underline text-white"
              href="javascript:void(0)"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
