const About = () => {
  return (
    <div
      className="px-4 md:px-6 lg:px-12 xl:px-24 min-h-screen bg-[#081b29] text-white flex items-center justify-center"
      id="about"
    >
      <div className=" grid md:grid-cols-2 gap-4 ">
        <div className="mb-8 mt-16 md:mb-0 md:mt-0 flex items-center justify-center">
          <img
            className="w-3/4 lg:w-3/5 rounded-full border"
            src="https://i.postimg.cc/j2q9MBrd/no-bg11-removebg-preview.png"
            alt="profile image"
          />
        </div>

        <div className="mb-12 md:mb-0 p-5 pt-0">
          <h2 className="text-white pb-5 text-4xl text-center  lg:mb-12 flex">
            About Me
          </h2>

          <p className="mb-6">
            As a MERN Stack developer, I specialize in MongoDB, Express.js,
            React, and Node.js Crafting robust and dynamic applications is my
            forte. From the database to the user interface, I'm here to
            streamline the process, optimize performance, and deliver an
            exceptional digital experience.
          </p>

          <p>
            Reliability and Structure: Punctuality is not just a habit; it's a
            reflection of my commitment. With a judging trait, I bring structure
            and order to both my personal and professional life. You can rely on
            me to meet deadlines, honor commitments, and contribute to a
            well-organized environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
