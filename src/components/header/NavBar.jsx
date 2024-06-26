import { GrHomeRounded } from "react-icons/gr";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="grid-layout-mobile md:grid-layout sticky z-10 w-full top-0 left-0 shadow-sm">
      <a
        href=""
        className="h-[60px] text-2xl grid place-content-center bg-gray-800 text-white">
        <GrHomeRounded className="md:block hidden" />
      </a>
      <div className="flex justify-center items-center px-3 bg-gray-800 md:bg-white gap-3 sm:gap-[100px]">
        <ul className="flex items-center gap-3 sm:gap-[100px] font-semibold sm:text-xl md:text-black text-white">
          <li className="text-[#f06d48]">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#store">Shop</a>
          </li>
          <li>
            <a href="#footer">About</a>
          </li>
        </ul>

        <button className="bg-[#f06d48] rounded-full p-1">
          <IoMdSearch className="text-2xl text-white" />
        </button>
      </div>
      <a
        href=""
        className="h-[60px] text-3xl grid place-content-center bg-gray-800 text-white">
        <span className="relative">
          <LiaCartPlusSolid className="md:block hidden" />
          <div className="size-2 bg-red-500 rounded-full animate-pulse absolute top-0 -right-1 md:block hidden"></div>
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
