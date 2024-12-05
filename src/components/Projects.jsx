import { useState } from "react";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageGroup, setCurrentImageGroup] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  const imageGroups = {
    ecommerce: [
      "/e1.png",
      "/e2.png",
      "/e3.png",
      "/e4.png",
      "/main.png",
      "/e6.png",
      "/e7.png",
      "/e8.png",
      "/e9.png",
      "/e10.png",
      "/e11.png",
      "/e12.png",
      "/e13.png",
      "/e14.png",
      "/e15.png",
      "/e16.png",
      "/e17.png",
      "/myorder.png",
      "/e19.png",
      "/e20.png",
      "rate.png",
    ],
    threadsClone: ["/t1.png", "/t2.png", "/t3.png", "/t4.png"],
    learn: ["/learn.png"],
    foodApp: [
      "/food_1.png",
      "/food_2.png",
      "/food_3.png",
      "/food_4.png",
      "/food_5.png",
      "/food_6.png",
      "/food_7.png",
      "/food_8.png",
      "/food_9.png",
      "/food_10.png",
      "/food_11.png",
      "/food_12.png",
      "/food_13.png",
      "/food_14.png",
      "/food_15.png",
      "/food_16.png",
      "/food_17.png",
      "/food_18.png",
      "/food_19.png",
      "/food_20.png",
      "/food_21.png",
      "/food_22.png",
      "/food_23.png",
      "/food_24.png",
      "/food_25.png",
      "/food_27.png",
      "/food_28.png",
      "/food_29.png",
      "/food_30.png",
      "/food_31.png",
      "/food_32.png",
      "/food_33.png",
      "/food_34.png",
      "/food_35.png",
      "/food_36.png",
      "/food_37.png",
      "/food_38.png",
      "/food_39.png",
      "/food_40.png",
      "/food_41.png",
      "/food_42.png",
      "/food_43.png",
    ],
  };

  const openModal = (images) => {
    setCurrentImageGroup(images);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickImageGroup = (imageGroupKey) => {
    openModal(imageGroups[imageGroupKey]);
  };

  const handleImageClick = (image) => {
    window.open(image, "_blank");
  };

  // Handle image load
  const handleImageLoad = () => {
    setLoading(false); // Once the image is loaded, set loading to false
  };

  return (
    <div
      id="projects"
      className="mt-20 sm:mt-40 p-4 w-full relative top-[2800px] lg:top-[2400px]"
    >
      <div className="mb-8 text-center">
        <h2 className="mb-5 text-blue-500 font-bold text-4xl sm:text-5xl md:text-6xl">
          Some Projects
        </h2>
        <p className="text-gray-600 font-light text-lg">
          Here are some of my projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
        <div
          className="p-4 rounded-md bg-white shadow-lg backdrop-blur-sm bg-opacity-10 border border-opacity-20 cursor-pointer text-center"
          onClick={() => handleClickImageGroup("ecommerce")}
        >
          <h3 className="text-gray-600 font-bold text-xl mb-4">
            E-commerce Project
          </h3>
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
              </div>
            )}
            <img
              className="rounded-md"
              src={imageGroups.ecommerce[0]}
              alt="E-commerce Project"
              onLoad={handleImageLoad} 
            />
          </div>
        </div>

        <div
          className="p-4 rounded-md bg-white shadow-lg backdrop-blur-sm bg-opacity-10 border border-opacity-20 cursor-pointer text-center"
          onClick={() => handleClickImageGroup("foodApp")}
        >
          <h3 className="text-gray-600 font-bold text-xl mb-4">
            Food App Project
          </h3>
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
              </div>
            )}
            <img
              className="rounded-md"
              src={imageGroups.foodApp[0]}
              alt="Food App Project"
              onLoad={handleImageLoad} 
            />
          </div>
        </div>
      </div>

     
      <div
        className="p-4 rounded-md bg-white shadow-lg backdrop-blur-sm bg-opacity-10 border border-opacity-20 cursor-pointer text-center"
        onClick={() => handleClickImageGroup("learn")}
      >
        <h3 className="text-gray-600 font-bold text-xl mb-4">
          Online Courses Project
        </h3>
        <img
          className="rounded-md"
          src={imageGroups.learn[0]}
          alt="Learn Project"
        />
      </div>

      <div
        className="p-4 rounded-md bg-white shadow-lg backdrop-blur-sm bg-opacity-10 border border-opacity-20 cursor-pointer text-center"
        onClick={() => handleClickImageGroup("threadsClone")}
      >
        <h3 className="text-gray-600 font-bold text-xl mb-4">
          Threads Clone Project
        </h3>
        <img
          className="rounded-md"
          src={imageGroups.threadsClone[1]}
          alt="Threads Clone Project"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
          <div className="bg-gray-200 rounded-lg p-4 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-black text-xl font-semibold">
                Project Images
              </h2>
              <button onClick={closeModal} className="text-black text-xl">
                X
              </button>
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto"
              style={{ maxHeight: "70vh", overflowY: "auto" }}
            >
              {currentImageGroup.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className="cursor-pointer rounded-md hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
