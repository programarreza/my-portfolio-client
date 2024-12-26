"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarDropdown = () => {
  let userPath: string;
  const router = useRouter();
  //   const pathname = usePathname();
  //   const { user } = useLoggedUser();
  //   const dispatch = useAppDispatch();
  //   const cookies = new Cookies();

//   const handleLogout = () => {
//     // dispatch(logout());

//     router.push("/");
//   };

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  //   if (user?.role === "ADMIN") {
  //     userPath = "/admin-dashboard";
  //   } else if (user?.role === "VENDOR") {
  //     userPath = "/vendor-dashboard";
  //   } else if (user?.role === "CUSTOMER") {
  //     userPath = "/dashboard";
  //   }

  return (
    <div>
      <Dropdown>
        <DropdownTrigger onClick={(e: any) => e.preventDefault()}>
          <Avatar
            className="cursor-pointer border-2 border-green-600"
            src={"user?.profilePhoto"}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="user-info">
            <div className="flex gap-2">
              {/* <Avatar src={user?.profilePhoto} /> */}
              <div>
                <p>{"user?.name"}</p>
                <p>{"user?.email"}</p>
              </div>
            </div>
          </DropdownItem>

          <DropdownItem onClick={ handleNavigation} key="dashboard">My Dashboard</DropdownItem>
          <DropdownItem
            key="logout"
            className="text-danger"
            color="danger"
            // onClick={() => handleLogout()}
          >
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
