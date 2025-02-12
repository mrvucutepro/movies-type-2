import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MovieIcon from '@/assets/icons/ic_baseline-local-movies.png';
import CardMovie from '../CardMovie';
// import { paginate } from '@/libs/helpers/pagonationHelper';
import PaginationButton from '../Base/PaginationButton';
import { CategoryType, ITEMS_PER_PAGE, MovieType } from '@/libs/type';
import { handleFetchMovies } from '@/services/movie';

export default function CategoryDetail({ id, name }: CategoryType) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const buttonPerPage = 5;

  const fetchMovies = async (page: number, limit: number) => {
    try {
      const res = await handleFetchMovies(page, limit, id);
      if (res.success) {
        setMovies(res.data.movies);
        setTotalPages(Math.ceil(res.data.total / limit));
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage, ITEMS_PER_PAGE);
  }, [currentPage, id]);

  const getPageNumbers = () => {
    const startPage = (pageGroup - 1) * buttonPerPage + 1;
    const endPage = Math.min(startPage + buttonPerPage - 1, totalPages);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNextPageGroup = () => {
    if (pageGroup * buttonPerPage < totalPages) {
      setPageGroup(pageGroup + 1);
    }
  };

  const handlePrevPageGroup = () => {
    if (pageGroup > 1) {
      setPageGroup(pageGroup - 1);
    }
  };

  return (
    <div>
      <div className="mx-4">
        <div className="bg-black absolute left-0 w-10" />
        <div className="flex items-center gap-2 mt-4">
          <Image alt="" src={MovieIcon} height={20} />
          <span className="font-bold text-xl">{name}</span>
        </div>
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie, index) => (
            <CardMovie
              movieImage={movie.image}
              movieName={movie.title}
              key={index}
            />
          ))}
        </div>
        <div className="mt-24 flex justify-center items-center space-x-4">
          {pageGroup > 1 && (
            <PaginationButton
              label="<"
              onClick={handlePrevPageGroup}
              disabled={currentPage === 1 && pageGroup === 1}
            />
          )}

          {getPageNumbers().map((page) => (
            <PaginationButton
              key={page}
              label={page.toString()}
              isActive={page === currentPage}
              onClick={() => handlePageClick(page)}
              className={`px-3 py-2 rounded-lg ${
                page === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}

          {pageGroup * buttonPerPage < totalPages && (
            <PaginationButton
              label=">"
              onClick={handleNextPageGroup}
              disabled={currentPage === totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
