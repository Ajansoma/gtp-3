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
    <div className="p-8 bg-bg-body md:px-16 md:py-8 lg:px-24 lg:py-36">
      <h1 className="mb-28 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient-text-100 to-gradient-text-200">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="flex w-full">
        <Article
          img={blogImage1}
          width="w-[417px] mr-8"
          text="text-4xl"
          margin="mt-44"
        />
        <div className="grid grid-cols-2 gap-8">
          {data.map((data) => (
            <Article
              img={data.img}
              width="w-[327px] "
              margin="mt-6"
              text="text-xl"
              key={data.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
