import Feature from '../Components/Feature';

const Features = () => {
  return (
    <div className="relative">
      <div className="absolute w-40 h-40 bg-bg-filterC rounded-full left-0 top-9 filter blur-[60px] -z-5 "></div>
      <div className="p-8 md:px-16 md:py-8 lg:px-24 lg:py-8 bg-bg-body">
        <div className="grid  gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-100 to-gradient-text-200">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <div className="text-text-300 text-base font-medium cursor-pointer mt-4">
              Request Early Access to Get Started
            </div>
          </div>
          <div className="">
            <Feature
              title="Improving end distrusts instantly"
              text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
              className="grid grid-cols-2 gap-8 items-center mb-5"
              titleSize="text-base sm:text-lg -mt-5"
              bodySize="text-xs sm:text-sm"
            />
            <Feature
              title="Become the tended active"
              text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
              className="grid grid-cols-2 gap-8 items-center mb-5"
              titleSize="text-base sm:text-lg -mt-5"
              bodySize="text-xs sm:text-sm"
            />
            <Feature
              title="Message or am nothing"
              text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
              className="grid grid-cols-2 gap-8 items-center mb-5"
              titleSize="text-base sm:text-lg -mt-5"
              bodySize="text-xs sm:text-sm"
            />
            <Feature
              title="Really boy law county"
              text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush"
              className="grid grid-cols-2 gap-8 items-center mb-5"
              titleSize="text-lg  -mt-4  sm:text-lg "
              bodySize="text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
//filter blur-[282px]
