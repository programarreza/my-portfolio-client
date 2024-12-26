import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-white bg-[#0F212F] max-w-[2520px] mx-auto xl:px-16 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
