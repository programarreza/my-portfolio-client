import Container from "@/src/components/Container";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

export default CommonLayout;
