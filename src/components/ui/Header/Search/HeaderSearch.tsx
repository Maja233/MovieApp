const HeaderSearch: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <input
      className={`${isOpen ? 'animate-toBottom' : 'animate-toTop'} absolute inset-x-0 top-0 z-10 bg-secondary p-5 text-xl text-white outline-none placeholder:text-disabled`}
      placeholder="Select for a movie, tv show or person"
    />
  );
};
export default HeaderSearch;
