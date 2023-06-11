import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="p-8 bg-bg-footer md:px-16 md:py-8 lg:px-24 lg:py-8 m-h-[950px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex justify-center mb-28 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-100 to-gradient-text-200 text-4xl sm:text-5xl leading-[50px] lg:text-6xl">
          Do you want to step in to the future before others
        </h1>
        <button className="border border-white h-16 w-52 flex justify-center items-center mb-40">
          <div className="text-white text-center"> Request Early Access</div>
        </button>
      </div>
      <div className="flex flex-col gap-10  sm:flex sm:flex-row">
        <div className="flex flex-col basis-1/3">
          <img src={logo} alt="logo" className="w-28" />
          <p className="text-xs mt-7 text-white">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="flex justify-between w-full">
          <ul className="text-xs text-white">
            <h5 className="text-sm mb-9 font-extrabold">Links</h5>
            <li className="flex flex-col gap-3">
              <a href="#home">Overons</a>
              <a href="#home">Social Media</a>
              <a href="#home">Counters</a>
              <a href="#home">Contact</a>
            </li>
          </ul>
          <ul className="text-xs text-white">
            <h5 className="text-sm mb-9 font-extrabold">Links</h5>
            <li className="flex flex-col gap-3">
              <a href="#home">Overons</a>
              <a href="#home">Social Media</a>
              <a href="#home">Counters</a>
              <a href="#home">Contact</a>
            </li>
          </ul>
          <ul className="text-xs text-white">
            <h5 className="text-sm mb-9 font-extrabold">Links</h5>
            <li className="flex flex-col gap-3">
              <a href="#home">Overons</a>
              <a href="#home">Social Media</a>
              <a href="#home">Counters</a>
              <a href="#home">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      Footer
    </div>
  );
};

export default Footer;
