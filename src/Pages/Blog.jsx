import blogImage1 from '../assets/blogImage1.png';
import blogImage2 from '../assets/blogImage2.png';
import blogImage3 from '../assets/blogImage3.png';
import blogImage4 from '../assets/blogImage4.png';
import blogImage5 from '../assets/blogImage5.png';
import Article from '../Components/Article';

const data = [
  { img: blogImage2, id: 2 },
  { img: blogImage3, id: 3 },
  { img: blogImage4, id: 4 },
  { img: blogImage5, id: 5 },
];

const Blog = () => {
  return (
    <div
      className="p-8 w-full  bg-bg-body md:px-16 md:py-8 lg:px-24 lg:py-36"
      id="#blog"
    >
      <h1 className="mb-28 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-100 to-gradient-text-200 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="grid grid-rows-1 md:grid-rows-2 md:grid-flow-col gap-7">
        <Article
          img={blogImage1}
          width="row-span-2 w-full h-full"
          text="text-3xl lg:text-4xl"
          margin="mt-44"
        />

        {data.map((data) => (
          <Article
            img={data.img}
            width="w-full h-full"
            margin="mt-8"
            text="text-lg lg:text-xl"
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
//w-[327px]
//w-[417px]
