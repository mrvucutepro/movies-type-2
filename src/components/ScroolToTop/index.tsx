"use client";
import icon_scroll from "@/assets/icons/icon-scrool-to-top.svg";
import useScroll from "@/hook/useScrool";
import Image from "next/image";

const ScrollToTop = () => {
  const scrollY = useScroll();
  const heightY = 300;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed px-4 md:right-4 bottom-24 md:bottom-12 z-50">
      {scrollY > heightY && (
        <div onClick={scrollToTop} className="cursor-pointer">
          <Image src={icon_scroll} width={31} height={31} alt="icon" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
