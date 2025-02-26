"use client";
import { ICategoriesFooter } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function MenuCategoryMobile({
  listCategory,
  setShowMore,
}: {
  listCategory: ICategoriesFooter[];
  setShowMore: Dispatch<SetStateAction<boolean>>;
}) {
  const param = useParams();
  const [categoryActive, setCategoryActive] = useState(
    typeof param?.category === "string" ? param.category.split("-").pop() : 0
  );
  const router = useRouter();
  useEffect(() => {
    setCategoryActive(
      typeof param?.category === "string" ? param.category.split("-")?.pop() : 0
    );
  }, [param]);
  return (
    <div className="absolute right-4 bg-white shadow-lg z-10 w-[100px] bottom-[76px] flex flex-col gap-2 py-2 items-center">
      {listCategory.map((item) => {
        return (
          <p
            onClick={() => {
              router.push(`/${item.name.replace("/", "-")}-${item.id}`);
              setShowMore(false);
            }}
            key={item.id}
            className={`${
              Number(categoryActive) === item.id
                ? "text-[#00C8FA]"
                : "text-black"
            } font-medium text-base leading-5`}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
}
