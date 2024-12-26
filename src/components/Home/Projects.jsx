import { IoMdOpen } from "react-icons/io";

const Projects = () => {
  return (
    <div className="px-4 md:px-6 lg:px-12 xl:px-24  bg-[#081b29] min-h-screen text-white " id="projects">
      <h2 className="text-white pb-12 text-4xl text-center pt-12 md:py-24 ">
        Latest Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* project-1 */}
        <div className="group  relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
          <div className=" border">
            <img
              className="h-[300px] w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
              src="https://i.postimg.cc/pdM5W5FQ/414964cd-bcd8-4353-809c-2c6991e0bf36.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%]  group-hover:translate-y-0 translate-all duration-500 ">
            <h1 className="text-3xl font-bold text-white">TaskNestle</h1>
            <p className="text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              This is an asset management project. Here HR can keep track of its
              employees and manage the accounts of assets properly
            </p>
            <a href="https://tasknestle.web.app/">
              <button className="rounded-full py-2 px-3.5 text-sm capitalize text-white">
                <IoMdOpen size={40} />
              </button>
            </a>
          </div>
        </div>

        {/* project-2 */}
        <div className="group  relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
          <div className=" border">
            <img
              className="h-[300px] w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
              src="https://i.postimg.cc/9QMjvt9J/18493511-5995587.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%] group-hover:translate-y-0 translate-all duration-500 ">
            <h1 className="text-3xl font-bold text-white">Remedy</h1>
            <p className="text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              It is a blog website where you can post blogs according to six
              categories. And you can keep the wishlist, you can update and
              delete your blog for later reading. And others can comment on the
              post.
            </p>
            <a href="https://remedy-d872a.web.app/">
              <button className="rounded-full py-2 px-3.5 text-sm capitalize text-white">
                <IoMdOpen size={40} />
              </button>
            </a>
          </div>
        </div>


        {/* project-3 */}
        <div className="group  relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
          <div className=" border">
            <img
              className="h-[300px] w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
              src="https://i.postimg.cc/90kh59Fw/image.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%] group-hover:translate-y-0 translate-all duration-500 ">
            <h1 className="text-3xl font-bold text-white">TechNexa</h1>
            <p className="text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
			It is a technology related project, here you can upload products according to category, see details and update and delete. You can add your favorite product to the card for later viewing
            </p>
            <a href="https://tasknestle.web.app/">
              <button className="rounded-full py-2 px-3.5 text-sm capitalize text-white">
                <IoMdOpen size={40} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
