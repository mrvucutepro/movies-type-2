"use client";
import icon_camera from "@/assets/icons/icon-camera.svg";
import icon_home from "@/assets/icons/icon-home.svg";
import icon_movie from "@/assets/icons/icon-movie.svg";
import icon_showmore from "@/assets/icons/icon-show-more.svg";
import icon_watching from "@/assets/icons/icon-watching.svg";
import logo from "@/assets/images/logo.svg";
import { getCategoryMovies } from "@/services/movies";
import { ICategoriesFooter } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MenuCategoryMobile from "../MenuCategory/MenuCategoryMobile";

const Category = ({ category }: { category: ICategoriesFooter }) => {
  const router = useRouter();

  const handleNavigate = () => {
    if (!category.link) return;
    router.push(`${category.link}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="flex flex-col gap-1 text-xl leading-6 font-normal justify-center items-center relative"
    >
      <div className="relative w-6 h-6">
        <Image src={category.image} alt={category.title} fill />
      </div>
      <span>{category.title}</span>
    </div>
  );
};
export default function Footer() {
  const [categories, setCategories] = useState<ICategoriesFooter[]>([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categories = await getCategoryMovies();
        setCategories(categories);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCategory();
  }, []);
  const selectedCategories = categories
    .filter((category) => [1, 7, 2].includes(category.id))
    .map((category) => {
      switch (category.id) {
        case 1:
          return {
            ...category,
            title: "드라마",
            image: icon_movie,
            link: `/${category.name.replace("/", "-")}-${category.id}`,
          };
        case 7:
          return {
            ...category,
            title: "예능",
            image: icon_watching,
            link: `/${category.name.replace("/", "-")}-${category.id}`,
          };
        case 2:
          return {
            ...category,
            title: "영화",
            image: icon_camera,
            link: `/${category.name.replace("/", "-")}-${category.id}`,
          };
        default:
          return category;
      }
    });
  selectedCategories.unshift({
    title: "홈",
    image: icon_home,
    link: "/",
    id: 0,
    name: "home",
  });

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="px-4">
      <div className="border-t-[1px] border-solid border-[#505050] md:p-6 px-6 pt-6 pb-[100px]">
        <div className="flex flex-col md:p-6  gap-4 text-xl font-medium leading-6">
          <div className="relative w-[95px] h-5">
            <Image src={logo} alt="logo" fill />
          </div>
          <span>MOA TV 다시보기 서비스 입니다</span>
          <p>
            {`MOA TV 링크 제공 사이트입니다. 이 웹 사이트에는 음악, 비디오, 멀티미디어 파일을 저장하지 않습니다. 또한 이 사이트에서 제공 되는 콘텐츠는 링크 된 콘텐츠 이므로`}{" "}
            <br />
            {`저작권, 적법성, 정확성, 규정 준수 또는 기타 측면에 대해 TV888 책임이 없습니다.저작권 등 법적 문제가 있는 경우 적절한 미디어 파일 소유자 또는 호스팅 업체에 문의하십시오.`}
            <br />
            {`연락처: @telegaram`}
          </p>
          <span className="text-base leading-5">{`Copyright © 티비몬 All right reserved.`}</span>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex items-center  md:hidden gap-8 sm:gap-14 bg-black justify-between py-3 px-4 z-50">
        {selectedCategories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
        <div
          onClick={handleShowMore}
          className="flex flex-col gap-1 text-xl leading-6 font-normal justify-center items-center relative cursor-pointer"
        >
          <div className="relative w-6 h-6">
            <Image src={icon_showmore} alt="show more" fill />
          </div>
          <span>기타</span>
        </div>
        {showMore && (
          <MenuCategoryMobile
            setShowMore={setShowMore}
            listCategory={categories.filter(
              (category) => ![1, 7, 2].includes(category.id)
            )}
          />
        )}
      </div>
    </div>
  );
}
