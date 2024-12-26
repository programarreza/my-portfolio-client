
const DownloadBtn = () => {
  const fileUrl = "/md_shafikul_islam_resume.pdf";

  return (
    <div>
       <a href={fileUrl} target="_blank" download rel="noopener noreferrer">
        <button className="uppercase bg-[#00abf0]  p-2.5 rounded-md font-semibold t-2 hover:shadow-xl hover:shadow-cyan-500/50 hover:bg-[#0090f0]">
          Download Resume 
        </button>
      </a>
      
    </div>
  );
};

export default DownloadBtn;
