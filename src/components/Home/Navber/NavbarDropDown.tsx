"use client";

import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

const NavbarDropdown = () => {
  let userPath: string;
  const router = useRouter();

  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);
  };

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger onClick={(e: any) => e.preventDefault()}>
          <Avatar
            className="cursor-pointer border-2 border-green-600"
            src={user?.image}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="user-info">
            <div className="flex gap-2">
              {/* <Avatar src={user?.profilePhoto} /> */}
              <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
              </div>
            </div>
          </DropdownItem>

          <DropdownItem onClick={handleNavigation} key="dashboard">
            My Dashboard
          </DropdownItem>
          <DropdownItem
            key="logout"
            className="text-danger"
            color="danger"
            onClick={() => handleLogout()}
          >
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
