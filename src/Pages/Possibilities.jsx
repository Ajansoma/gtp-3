import FeatureImage from '../assets/FeatureImage.png';

const Possibilities = () => {
  return (
    <div
      className="p-8 md:px-16 md:py-8 lg:px-24 lg:py-8 bg-bg-body items-center  lg:flex gap-16"
      id="#possibilities"
    >
      <img
        src={FeatureImage}
        alt="Feature Image"
        className="h-3/4 w-3/4 lg:w-[546px] lg:h-[607.53px] object-contain"
      />
      <div className="mt-10 lg:mt-0">
        <p className="text-text-500 text-base font-medium mb-3">
          Request Early Access to Get Started
        </p>
        <h1 className="text-2xl leading-9 sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-100 to-gradient-text-200 mb-5">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-text-100 text-base">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-text-300 text-base font-medium cursor-pointer mt-8">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possibilities;
