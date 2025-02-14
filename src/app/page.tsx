'use client';

import Content from '@/component/Content';
import { useMovie } from '@/hooks/useMoviesContext';

export default function Home() {
  const { category } = useMovie();
  return <Content selectedCategory={category} />;
}
