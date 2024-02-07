import AsideBtn from './Buttons/AsideBtn';

import { SearchIcon, TvIcon, MovieIcon, HouseIcon } from '@/assets/icons/global';
const Aside: React.FC<{ toggleSearch: () => void }> = ({ toggleSearch }) => {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-10 col-[1/3] row-[3] flex justify-around border-r-2 border-r-bg bg-black text-white sm:static sm:col-[1] sm:row-[1/3] sm:flex-col sm:justify-normal">
      <AsideBtn onClick={() => ''}>
        <HouseIcon className="size-7 transition-transform duration-300 group-hover:scale-125" />
      </AsideBtn>
      <AsideBtn onClick={() => ''}>
        <MovieIcon className="size-7 transition-transform duration-300 group-hover:scale-125" />
      </AsideBtn>
      <AsideBtn onClick={() => ''}>
        <TvIcon className="size-7 transition-transform duration-300 group-hover:scale-125" />
      </AsideBtn>
      <AsideBtn onClick={toggleSearch}>
        <SearchIcon className="size-7 transition-transform duration-300 group-hover:scale-125" />
      </AsideBtn>
    </aside>
  );
};
export default Aside;
