const DownloadBtn = () => {
  const fileUrl = "../../../public/md_shafikul_islam_resume.pdf";

  return (
    <div>
      <a download href={fileUrl} rel="noopener noreferrer" target="_blank">
        <button className="uppercase bg-[#00abf0]  p-2.5 rounded-md font-semibold t-2 hover:shadow-xl hover:shadow-cyan-500/50 hover:bg-[#0090f0]">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default DownloadBtn;
