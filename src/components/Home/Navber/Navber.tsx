"use client";

import { siteConfig } from "@/src/config/site";
import { useUser } from "@/src/context/user.provider";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import Link, { default as NextLink } from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../../icons";
import NavbarDropdown from "./NavbarDropDown";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const { user, setIsLoading: userLoading } = useUser();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <div
      className={`text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <NextUINavbar className="bg-transparent" maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <span className=""> Portfolio</span>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarBrand as="li" className=" max-w-fit">
          {/* content-2 */}
          <div className="navbar-end  flex items-center gap-8 font-medium text-lg ">
            <ul className="hidden lg:flex gap-4 justify-start ml-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      " mt-2", // Default text color set to white
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}

              <Link href="/dashboard">
                {user ? (
                  <div className="flex justify-center items-center gap-2">
                    <NavbarDropdown />
                  </div>
                ) : (
                  <Link href={"/login"}>
                    <p className="mt-2 cursor-pointer">login</p>
                  </Link>
                )}
              </Link>
            </ul>
          </div>
        </NavbarBrand>
      </NextUINavbar>
    </div>
  );
};
