import HeaderSearch from './Search/HeaderSearch';

import { ArrowIcon } from '@/assets/icons/global';
const Header: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <header className="relative col-[2/3] row-[1]">
      <HeaderSearch isOpen={isOpen} />
      <div className="relative h-svh before:absolute before:inset-0 before:w-full before:bg-gradient-to-r before:from-black/70 before:from-100% before:to-black/[0%] before:content-[''] sm:h-[50svh] sm:before:from-black sm:before:from-40% md:before:from-30% lg:before:w-3/4">
        <img
          className="size-full object-cover "
          src="https://media.discordapp.net/attachments/1201541530234658886/1203845116079644672/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg?ex=65d29322&is=65c01e22&hm=6205147955d5918df31f5c44e7204f7a742534eaff03d6e7d84141fa891291cf&=&format=webp&width=704&height=396"
          alt=""
        />
        <div className="absolute inset-0 flex max-w-prose flex-col justify-center gap-5 p-10 text-white">
          <h1 className="text-5xl">Game of Thrones</h1>
          <div className="flex flex-wrap items-center gap-3 text-disabled">
            <p>22,586 Reviews</p>
            <p>Season 8</p>
            <p>2011</p>
            <p>Cert. TV-MA</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolore illum maxime vel
            ducimus architecto maiores excepturi exercitationem! Commodi, enim?
          </p>
          <button className="flex items-center self-start rounded-sm bg-secondaryDark px-6 py-2.5 font-semibold transition-colors duration-300 hover:bg-cta">
            <ArrowIcon className="size-7" />
            Watch Trailer
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
