const AsideBtn: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative z-10 flex w-full items-center justify-center p-5 before:absolute before:inset-0 before:z-[-2] before:bg-transparent before:transition-all before:duration-300 before:content-[''] hover:before:inset-0 hover:before:bg-cta sm:p-8"
    >
      {children}
    </button>
  );
};

export default AsideBtn;
