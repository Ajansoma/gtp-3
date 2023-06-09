import groupImage from '../assets/groupImage.png';
import headerImage from '../assets/headerImage.png';

const Header = () => {
  return (
    <div className="justify-between items-center p-8 md:px-16 md:py-8 lg:px-24 lg:py-8  xl:grid grid-cols-2">
      <div className="">
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-100 to-gradient-text-200  mb-8 text-4xl md:text-5xl lg:text-6xl lg:tracking-tighter">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <div className="text-text-100 mb-8 text-base md:text-lg lg:text-xl">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </div>
        <div>
          <div className="flex text-sm bg-bg-input md:text-xl">
            <input
              className="rounded-bl rounded-tl bg-bg-input h-[60px] focus:outline-none  text-text-100 placeholder:text-text-400 ml-8 placeholder:mt-6 w-full"
              placeholder="Your Email Address"
              type="email"
            />
            <button className="h-[60px] w-44 md:w-60 bg-text-300 text-sm font-bold rounded-br rounded-tr text-white p-2  md:text-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-9 flex flex-col items-center lg:flex-row lg:gap-3 mb-8 xl:mb-0">
          <img src={groupImage} alt="group Image" className="w-44 h-9" />
          <div className="text-xs text-white font-medium sm:text-sm">
            1,600 people requested access a visit in last 24 hours
          </div>
        </div>
      </div>
      <div className="grid">
        <img
          src={headerImage}
          alt="header Image"
          className="w-full h-full xl:w-[667px] xl:h-[700px]  object-contain justify-self-end"
        />
      </div>
    </div>
  );
};

export default Header;
