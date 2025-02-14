'use client';

// import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useMovie } from '@/hooks/useMoviesContext';
import ListCategory from '@/component/ListCategory';
import CategoryDetail from '@/component/CategoryDetail';

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { setCategory, category } = useMovie();

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      const categoryId = parseInt(resolvedParams.id);

      setCategory({
        id: categoryId,
        name: categoryId === 0 ? 'Home' : `${category?.name}`,
      });
    };

    fetchParams();
  }, [params, setCategory, category?.name]);

  return category?.id === 0 ? (
    <ListCategory />
  ) : (
    <CategoryDetail id={Number(category?.id)} name={category?.name ?? ''} />
  );
}
