import Link from "next/link";
import { useRouter } from "next/navigation";
// import { NavLink, useNavigate } from "react-router-dom";

const NavbarLinks = () => {
  const router = useRouter();

  const handleScroll = (sectionId: string) => {
    router.push("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="flex gap-4">
      <button
        className="hover:text-[#108ee9] text-base"
        onClick={() => handleScroll("banner")}
      >
        Home
      </button>
      <button
        className="hover:text-[#108ee9] text-base"
        onClick={() => handleScroll("skill")}
      >
        Skill
      </button>
      <button
        className="hover:text-[#108ee9] text-base"
        onClick={() => handleScroll("projects")}
      >
        Projects
      </button>
      <button
        className="hover:text-[#108ee9] text-base"
        onClick={() => handleScroll("educational")}
      >
        Educational
      </button>
      <button
        className="hover:text-[#108ee9] text-base"
        onClick={() => handleScroll("about")}
      >
        About
      </button>
      <button
        className="hover:text-[#108ee9] text-base"
        onClick={() => handleScroll("contact")}
      >
        Contact
      </button>
      <Link className="mt-2" href="/blogs">
        Blogs
      </Link>
    </div>
  );
};

export default NavbarLinks;
