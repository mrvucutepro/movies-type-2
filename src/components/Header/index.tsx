"use client";
import search_icon from "@/assets/icons/icon-search.svg";
import logo from "@/assets/images/logo.svg";
import { limitSearch } from "@/constants";
import useClickOutside from "@/hook/useClickOutSide";
import useDebounce from "@/hook/useDebounce";
import useScrollOpacity from "@/hook/useScroolOpacity";
import { getMovieCategories } from "@/services/movies";
import { IMovies } from "@/types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const menuRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const param = useParams();
  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState(
    Array.isArray(param.id) ? param.id[0] : param.id || ""
  );
  const debouncedValue = useDebounce(value, 300);
  const [pagination, setPagination] = useState<{
    page: number;
    limit: number;
  }>({
    page: 1,
    limit: limitSearch,
  });
  const [listMovie, setListMovie] = useState<{
    movies: IMovies[];
    total: number;
  }>({
    movies: [],
    total: 0,
  });
  const opacity = useScrollOpacity();
  const router = useRouter();
  const handleSearch = (value: string) => {
    // if (!value) {
    //   router.push("/");
    //   return;
    // }
    router.push(`/search/${decodeURIComponent(value as string)}`);
  };

  const totalPages = Math.ceil(listMovie.total / pagination.limit);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      if (pagination.page < totalPages) {
        setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
      }
    }
  };
  useClickOutside(menuRef, () => {
    setListMovie({ movies: [], total: 0 }); // Clear the movie list or close the menu
  });

  useEffect(() => {
    const fetchMovies = async () => {
      if (!debouncedValue) {
        setListMovie({ movies: [], total: 0 });
        return;
      }
      try {
        const movie = await getMovieCategories({
          ...pagination,
          search: decodeURIComponent(debouncedValue),
        });

        const newMovies = Array.isArray(movie.data?.movies)
          ? movie.data.movies
          : [];
        const total =
          typeof movie.data?.total === "number" ? movie.data.total : 0;

        setListMovie((prev) => ({
          movies: [...prev.movies, ...newMovies],
          total: total,
        }));
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchMovies();
  }, [pagination, debouncedValue]);
  useEffect(() => {
    if (listMovie.movies.length > 0) {
      setOpenMenu(true);
    }
  }, [listMovie.movies.length]);

  return (
    <div
      style={{ backgroundColor: `rgba(58, 58, 58, ${opacity})` }}
      className="bg-[#3A3A3A] z-50 gap-4 md:gap-0 h-[77px] px-4 left-0 right-0 top-0  md:rounded-[100px] md:h-[53px] fixed md:top-2 md:bottom-2 md:right-4 md:left-4 md:px-6 flex items-center justify-between"
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative w-[95px] h-5 md:w-[152px] md:h-[33px] flex-shrink-0 cursor-pointer"
      >
        <Image src={logo} alt="logo" fill />
      </div>
      <div className="flex gap-3 md:gap-[10px] items-center pr-4 md:pr-8">
        <div className="relative max-w-[270px] w-full h-[37px]">
          <input
            value={decodeURIComponent(value as string)}
            onChange={(e) => {
              //   if (e.target.value === "") {
              //     router.push("/");
              //   }
              setListMovie({ movies: [], total: 0 });
              setPagination({ page: 1, limit: 10 });
              setValue(e.target.value);
            }}
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(value);
              }
            }}
            className="w-full h-[37px] rounded-[35px] bg-[#323232] pl-4 pr-10 text-white focus:outline-none"
          />
          {value && (
            <div
              onClick={() => {
                setValue("");
                router.push("/");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              X
            </div>
          )}
          {listMovie?.movies?.length > 0 && openMenu && (
            <div
              ref={menuRef}
              onScroll={(e) => handleScroll(e)}
              className="absolute  mt-2 left-0 bg-[#3A3A3A] w-full max-h-[200px] overflow-y-auto rounded-md flex flex-col"
            >
              {listMovie?.movies?.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      router.push(
                        `/${item.categories[0].name.replace("/", "-")}/${
                          item.id
                        }`
                      );
                      setValue(item.title);
                      setOpenMenu(false);
                    }}
                    key={index}
                    className="flex gap-2 items-center cursor-pointer hover:bg-slate-800 px-4 py-2"
                  >
                    <Image
                      src={item.image}
                      alt="search-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-sm">{item.title}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div
          onClick={() => {
            handleSearch(value);
          }}
          className="relative w-5 h-5 cursor-pointer"
        >
          <Image src={search_icon} alt="search-icon" fill />
        </div>
      </div>
    </div>
  );
}
