import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navbarEl = (
    <div className="flex">
      <ul className="flex items-center text-white text-lg gap-4 font-meduim capitalize cursor-pointer invisible lg:visible">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#wgpt3">What is GPT-3?</a>
        </li>
        <li>
          <a href="#possibilities">Open AI</a>
        </li>
        <li>
          <a href="#features">Case Studies</a>
        </li>
        <li>
          <a href="#blog">Library</a>
        </li>
      </ul>
      <div className="flex justify-end items-center text-white text-lg font-meduim capitalize cursor-pointer gap-4">
        <div>Sign in</div>
        <button className="bg-text-300 rounded-[5px] px-4 py-2">Sign up</button>
      </div>
    </div>
  );

  const handleMenu = function () {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between md:px-24 md:py-8">
      <div className="flex justify-start flex-1 items-center">
        <div className="mr-8">
          <img src={logo} alt={logo} className="h-4 w-16" />
        </div>
        <nav>{menu}</nav>
        <div onClick={handleMenu} className="cursor-pointer">
          {!toggleMenu && <RiCloseLine color="#fff" size={27} />}
          {toggleMenu && <RiMenu3Line color="#fff" size={27} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
