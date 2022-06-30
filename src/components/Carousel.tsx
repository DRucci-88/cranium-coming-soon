import { ReactNode, useEffect, useState } from "react";
import Button from "./Button"
import { CarouselData } from "./CarouselData";

interface CarouselClass {
  className?: string
}

const Carousel = ({ className }: CarouselClass) => {

  const images = CarouselData;
  const startIndex = 0
  const endIndex = images.length - 1
  
  const [imgIndex, setImgIndex] = useState(startIndex)
  const [debounceImgIndex, setDebounceImgIndex] = useState(imgIndex)
  const [modalBoxOpen, setModalBoxOpen] = useState(false)
  const imgItems = [];
  const paginationDots: Array<ReactNode> = [];

  const setSlideTo = (param: number|string) => {
    setTimeout(() => {
      if (typeof param === 'number') setImgIndex(param)
      else if (param === 'prev') setImgIndex(debounceImgIndex - 1)
      else setImgIndex(debounceImgIndex + 1)
    }, 200)
  }

  for (let i = startIndex; i <= endIndex; i++) {
    imgItems[i] = (
      <>
        <div
          className={`duration-200 ease-in-out absolute inset-0 transition-all transform ${
            (debounceImgIndex === startIndex && i === endIndex) ? '-translate-x-full z-20' :
            (debounceImgIndex === endIndex && i === startIndex) ? 'translate-x-full z-20' :
            (i === debounceImgIndex) ? 'translate-x-0 z-30' :
            (i < debounceImgIndex) ? '-translate-x-full z-20' : 'translate-x-full z-20'
          }`}
          data-carousel-item={true}
        >
          <img
            src={images[i].image}
            alt={images[i].title}
            className="block absolute w-full bg-neutral-200 object-cover object-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute w-full h-full flex flex-col justify-center items-center bg-black/75 opacity-0 hover:opacity-100 hover:cursor-pointer duration-300 transition-opacity"
            onClick={() => setModalBoxOpen(true)}>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{images[debounceImgIndex].title}</h2>
              <p className="text-base sm:text-lg text-neutral-400 -mb-8">View details</p>
          </div>
        </div>

        {/* Modal Box */}
        <div className={`${modalBoxOpen ? '' : 'hidden'} fixed w-screen h-screen bg-neutral-900/50 flex justify-center items-center top-0 left-0 z-50`}
          onClick={() => setModalBoxOpen(false)}>
          <div className="h-full sm:h-fit text-center overflow-y-auto px-4 lg:px-0 py-8">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              {images[debounceImgIndex].title}
            </h2>
            <div className="hl mx-auto"></div>
            <p className="text-sm lg:text-base text-neutral-400 max-w-[30rem] lg:max-w-[48rem] mt-6">
              {images[debounceImgIndex].desc}
            </p>
            <div>
              <Button type="button" href={images[debounceImgIndex].link} newTab={true} variant="primary" size="large" isCustom={true} className="mt-6 mx-auto">Experience Now</Button>
            </div>
          </div>
        </div>
      </>
    )

    paginationDots[i] = (
      <button
        type="button"
        className={`w-3 h-3 rounded-full ${i === debounceImgIndex ? 'bg-neutral-900' : 'bg-neutral-900/50'}`}
        aria-current={i === debounceImgIndex ? "true" : "false"}
        onClick={() => {setSlideTo(i)}}
      ></button>
    )
  }

  useEffect(() => {
    console.log(`img ${imgIndex}`)
    if (imgIndex < startIndex) setDebounceImgIndex(endIndex)
    else if (imgIndex > endIndex) setDebounceImgIndex(0)
    else setDebounceImgIndex(imgIndex)
  }, [imgIndex])
  
  useEffect(() => {
    console.log(`deb ${debounceImgIndex}`)
    setImgIndex(debounceImgIndex)
  }, [debounceImgIndex])

  useEffect(() => {
    document.body.style.overflow = modalBoxOpen ? 'hidden' : 'auto'
  }, [modalBoxOpen])
  
  
  return (
    <>
      <div className={`${className ?? ''} w-full h-full`}>
        <div
          id="default-carousel"
          className="relative w-full h-full"
          data-carousel="static"
        >
          <div className="h-full overflow-hidden relative">
            {imgItems}
          </div>

          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {paginationDots}
          </div>

          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer focus:outline-none"
            onClick={() => setSlideTo('prev')}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-neutral-900/50 hover:bg-neutral-900">
              <span className="font-['Poppins'] text-neutral-50 sm:w-6 sm:h-6">
                {"<"}
              </span>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer focus:outline-none"
            onClick={() => setSlideTo('next')}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-neutral-900/50 hover:bg-neutral-900">
              <span className="font-['Poppins'] text-neutral-50 sm:w-6 sm:h-6">
                {">"}
              </span>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
