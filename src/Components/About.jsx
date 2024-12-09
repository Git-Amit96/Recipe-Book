import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center px-6 lg:px-16">

      <div className="max-w-[1200px] w-full py-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">About Be<span className="text-yellow-500">Chef</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 text-justify">
        Welcome to our recipe book website, your ultimate destination for exploring, learning, and mastering the art of cooking! Created by a passionate fresher and recent postgraduate, this platform combines a strong foundation in technology with a love for culinary exploration. Drawing on my academic knowledge and enthusiasm for innovation, I aim to bring you delightful recipes and an engaging digital experience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1200px] w-full gap-12 mb-12">
        <div className="lg:w-1/2 max-w-[400px]">
          <img
            src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935819.png"
            alt="Chef at Work"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Meet the Creator
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-justify">
          As a fresher and recent postgraduate, I bring a strong foundation in front-end development and a passion for continuous learning. Leveraging my academic knowledge and projects, I aim to blend creativity and functionality to deliver engaging user experiences — whether it's through a seamless web interface or a step-by-step recipe guide!
          </p>
          <p className="text-lg text-gray-700 mb-6 text-justify">
            This recipe book is a reflection of my journey through coding and
            cooking, offering you delicious dishes explained step by step and
            served with love.
          </p>
          <a
            href="https://amit-portfolio-1221.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            View My Portfolio
          </a>
        </div>
      </div>

      <div className="bg-blue-500 w-full py-12 text-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            My Skills and Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Front-End Development",
              "Responsive Web Design",
              "HTML, CSS, JavaScript",
              "React.js & Redux",
              "UI/UX Design",
              "Tailwind CSS",
              "Backend Development",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MERN",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-yellow-300 text-black px-4 py-2 rounded-full shadow-lg text-center font-medium hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 text-center max-w-[1200px] w-full">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">
          Ready to Explore Delicious Dishes?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Dive into a world of flavors and learn how to make jaw-dropping
          recipes with ease. Whether you're a beginner or a pro, we've got
          something special for you.
        </p>
        <Link to="/">
        <div
          className="bg-blue-500 w-fit m-auto text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Browse Recipes
        </div>
        
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
