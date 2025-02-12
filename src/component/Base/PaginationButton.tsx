interface PaginationButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  className?: string;
}

export default function PaginationButton({
  label,
  onClick,
  disabled = false,
  isActive = false,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 rounded font-bold h-10 w-10 ${
        disabled
          ? 'opacity-50 cursor-not-allowed bg-gray-300 text-black'
          : isActive
          ? 'bg-[#EA1616] text-white'
          : 'bg-[#313131] hover:bg-slate-600'
      }`}
    >
      {label}
    </button>
  );
}
