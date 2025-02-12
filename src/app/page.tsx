'use client';
import Header from '@/component/Header';
import NavBar from '@/component/NavBar';

import { useState } from 'react';
import { CategoryType } from '@/libs/type';
import Content from '@/component/Content';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  return (
    <>
      <Header />
      <div className="flex">
        <NavBar onCategorySelect={setSelectedCategory} />
        <Content selectedCategory={selectedCategory} />
      </div>
    </>
  );
}
