import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);



  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
            isVisible ? "opacity-100 block" : "opacity-0 hidden"
          }
          inline-flex items-center p-3 rounded-full shadow-sm text-primary-500 bg-secondary-500 transition-opacity hover:bg-secondary-400`}
      >
        <BsChevronUp aria-hidden="true" className="h-6 w-6" title="Back to Top" strokeWidth={0.5} />
      </button>
    </div>
  );
};

export default ScrollToTop;
