import React from 'react';
import Button from '../Base/Button';

export default function Episode() {
  return (
    <div className="flex gap-4 m-4 p-4 items-center bg-[#313131] rounded-sm">
      <span>Episode</span>
      <Button label="abc" className="bg-[#EA1616] rounded-sm" />
      <Button label="abc" className="bg-[#191919]  rounded-sm" />
    </div>
  );
}
