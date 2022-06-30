import {useState, useEffect, useRef, createElement, ReactNode} from "react"
import Button from "./Button"
import { CarouselData } from "./CarouselData"

const images = CarouselData

const Carousel = () => {
  const ilen = images.length

  const [imageIndex, setImageIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(imageIndex)
  const [modalBoxOpen, setModalBoxOpen] = useState(false)
  const [paginationDots, setPaginationDots] = useState<ReactNode | null>(null)
  const paginationRef = useRef<HTMLDivElement | null>(null)

  // LEFT MAIN RIGHT as HTMLImageElement
  const leftFrameElement = useRef<HTMLImageElement | null>(null)
  const mainFrameElement = useRef<HTMLImageElement | null>(null)
  const rightFrameElement = useRef<HTMLImageElement | null>(null)

  const setImages = (i: number) => {
    if (mainFrameElement.current) {
      mainFrameElement.current.style.opacity = '0.9'

      var current = iCheck(i)
      
      mainFrameElement.current.src = images[current].image
      mainFrameElement.current.alt = images[current].title

      if (leftFrameElement.current && rightFrameElement.current) {
        var before = iCheck(i - 1)
        var after = iCheck(i + 1)

        leftFrameElement.current.src = images[before].image
        leftFrameElement.current.alt = images[before].title
        rightFrameElement.current.src = images[after].image
        rightFrameElement.current.alt = images[after].title
      }
    }

    setTimeout(
      () => {
        if (mainFrameElement.current) mainFrameElement.current.style.opacity = '1'
      },
      200
    )

  }

  // Index adjuster
  const iCheck = (i: number) => {
    if (i < 0) return ilen - 1
    else if (i > ilen - 1) return 0
    return i
  }

  useEffect(() => {
    const dots = []
    for (let i = 0; i < ilen; i++) {
      dots[i] = createElement(
        'div',
        {
          key: `dot${i + 1}`,
          className: `w-3 h-3 bg-neutral-700 rounded-full ${i === currentImageIndex ? 'opacity-100' : 'opacity-50'} cursor-pointer hover:opacity-100 mx-1`,
          onClick: () => {
            setImageIndex(i)
          }
        }
      )
    }
    setPaginationDots(dots.map(d => {
      return <>{d}</>
    }))
  }, [paginationDots])

  useEffect(() => {
    setCurrentImageIndex(iCheck(imageIndex))
  }, [imageIndex])

  useEffect(() => {
    document.body.style.overflow = modalBoxOpen ? 'hidden' : 'auto'
  }, [modalBoxOpen])
  

  useEffect(() => {
    const setActiveDot = (i: Number) => {
      if (paginationRef.current && paginationRef.current.children.length > 0) {
        let count = 0
        Array.from(paginationRef.current.children).forEach(pagedots => {
          if (count !== i) {
            pagedots.classList.remove('opacity-100')
            pagedots.classList.add('opacity-50')
          } else {
            pagedots.classList.remove('opacity-50')
            pagedots.classList.add('opacity-100')
          }
          console.log(`${i} ${count}`);
          count++
        });
      }
    }

    setImages(currentImageIndex)
    setActiveDot(currentImageIndex)
    setImageIndex(currentImageIndex)
  }, [currentImageIndex])

  return (
    <>
      <div className="w-full h-52 sm:h-80 flex justify-center items-center">
        <img ref={leftFrameElement} src="" alt=""
             className="object-cover object-center absolute w-6/12 h-36 sm:h-64 hidden sm:flex justify-center items-center bg-neutral-100 rounded-lg shadow-black hover:cursor-pointer transition-all opacity-50 left-0"
             onClick={() => setImageIndex(imageIndex - 1)} />
        <div className="absolute w-full sm:w-10/12 h-52 sm:h-80 flex items-center bg-neutral-100 rounded-lg overflow-hidden z-10">
          <img ref={mainFrameElement} src="" alt=""
               className="object-cover object-center w-full h-full flex justify-center items-center rounded-lg shadow-black hover:cursor-pointer transition-all"/>
          <div className="absolute w-full h-full flex flex-col justify-center items-center bg-black/75 opacity-0 hover:opacity-100 hover:cursor-pointer duration-300 transition-opacity"
            onClick={() => setModalBoxOpen(true)}>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{images[currentImageIndex].title}</h2>
              <p className="text-base sm:text-lg text-neutral-400 -mb-8">View details</p>
          </div>
          <div
            className="absolute bg-neutral-900/75 text-neutral-50 text-2xl font-['Poppins'] rounded-r-full hover:bg-neutral-900 hover:cursor-pointer transition-all duration-100 p-4 -ml-3 z-20 left-0"
            onClick={() => setImageIndex(imageIndex - 1)}>{'<'}</div>
          <div
            className="absolute bg-neutral-900/75 text-neutral-50 text-2xl font-['Poppins'] rounded-l-full hover:bg-neutral-900 hover:cursor-pointer transition-all duration-100 p-4 -mr-3 z-20 right-0"
            onClick={() => setImageIndex(imageIndex + 1)}>{'>'}</div>
        </div>
        <img ref={rightFrameElement} src="" alt=""
             className="object-cover object-center absolute w-6/12 h-36 sm:h-64 hidden sm:flex justify-center items-center bg-neutral-100 rounded-lg shadow-black hover:cursor-pointer transition-all opacity-50 right-0"
             onClick={() => setImageIndex(imageIndex + 1)} />
        <div ref={paginationRef} id="pagination" className="absolute flex z-20 bottom-5">{paginationDots}</div>
      </div>

      {/* Modal Box */}
      <div className={`${modalBoxOpen ? '' : 'hidden'} fixed w-screen h-screen bg-black/80 flex justify-center items-center rounded-lg top-0 left-0 z-50`}
        onClick={() => setModalBoxOpen(false)}>
        <div className="h-full sm:h-fit text-center overflow-y-auto px-4 lg:px-0 py-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            {images[currentImageIndex].title}
          </h2>
          <div className="hl mx-auto"></div>
          <p className="text-sm lg:text-base text-neutral-400 max-w-[30rem] lg:max-w-[48rem] mt-6">
            {images[currentImageIndex].desc}
          </p>
          <div>
            <Button type="button" href={images[currentImageIndex].link} variant="primary" size="large" isCustom={true} className="mt-6 mx-auto">Experience Now</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
