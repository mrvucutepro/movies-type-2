import React from "react";

export default function CollectionFilm({
  children,
  mainTitle,
}: {
  children: React.ReactNode;
  mainTitle: string;
}) {
  return (
    <>
      <div className="mb-4 bg-[#00C8FA] text-white font-semibold leading-6 p-4 rounded-lg">
        {mainTitle}
      </div>
      {children}
    </>
  );
}
