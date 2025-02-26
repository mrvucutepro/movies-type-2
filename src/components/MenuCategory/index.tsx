"use client";
import { getCategoryMovies } from "@/services/movies";
import { ICategories } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MenuCategory() {
  const param = useParams();
  const [categoryActive, setCategoryActive] = useState(
    typeof param?.category === "string" ? param.category.split("-").pop() : 0
  );

  const router = useRouter();
  const [categories, setCategories] = useState<ICategories[]>([]);
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
  useEffect(() => {
    setCategoryActive(
      typeof param?.category === "string" ? param.category.split("-")?.pop() : 0
    );
  }, [param]);
  return (
    <div className="hidden md:flex absolute top-[100px] z-40 left-4 bg-[#3A3A3A] rounded-2xl py-3 px-4  flex-col gap-3 items-center text-center">
      {[{ name: "Home", id: 0 }, ...categories]?.map((category) => (
        <div
          onClick={() => {
            if (category.id === 0) {
              return router.push("/");
            }
            router.push(`/${category.name.replace("/", "-")}-${category.id}`);
          }}
          key={category.id}
          className="relative group cursor-pointer"
        >
          <p
            className={`font-medium text-base leading-5 group-hover:text-[#00C8FA] transition-colors duration-300 ${
              Number(categoryActive) === category.id
                ? "text-[#00C8FA]"
                : "text-white"
            }`}
          >
            {category.name}
          </p>
          {Number(categoryActive) === category.id && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00C8FA]"></span>
          )}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C8FA] group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </div>
      ))}
    </div>
  );
}
