import Feature from '../Components/Feature';

const WhatGPT = () => {
  return (
    <div className="p-8 md:px-16 md:py-8 lg:px-24 lg:py-8 bg-bg-body shadow-lg shadow-bg-bg-body-500/50 relative">
      <div className="w-full min-h-[695px] bg-bg-input p-8 md:px-16 py-16 lg:px-24">
        <div className="absolute w-32 h-32 bg-bg-filterB rounded-full left-24 top-9 filter blur-[60px]"></div>
        <div className="absolute w-52 h-52 bg-bg-filterA rounded-full right-28 bottom-10 filter blur-[100px]"></div>

        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by."
          className="gap-44 items-center lg:flex"
          titleSize="text-2xl"
          bodySize="text-base"
        />

        <div className="justify-between items-center mt-20 md:flex ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-100 to-gradient-text-200 font-extrabold text-3xl leading-[45px]">
            The possibilities are beyond <br /> your imagination
          </h1>
          <p className="text-text-300 text-base font-medium cursor-pointer mt-2 md:mt-0">
            Explore The Library
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 items-center mt-24 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of
              plate heard oh ought."
            className="flex flex-col"
            titleSize="text-2xl"
            bodySize="text-base"
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments"
            className="flex flex-col mt-8 md:mt-0"
            titleSize="text-2xl"
            bodySize="text-base"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b."
            className="flex flex-col mt-8 lg:mt-0"
            titleSize="text-2xl"
            bodySize="text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT;
