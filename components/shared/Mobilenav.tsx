"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <header className="header p-4">
      <Link
        href="/"
        className="flex justify-between items-center gap-2 md:py-2 w-full"
      >
        <Image
          src="/assets/images/logo-text.jpg"
          alt="logo"
          width={180}
          height={28}
        />
        <nav className="flex gap-4 p-2">
          <SignedIn>
            <Sheet>
              <SheetTrigger>
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent className="sheet-content sm:w-64">
                <>
                  <Image
                    src="/assets/images/logo-text.svg"
                    alt="logo"
                    width={152}
                    height={23}
                  />
                  <ul className="header-nav_elements">
                    {navLinks.map((link) => {
                      const isActive = link.route === pathname;
                      return (
                        <li
                          key={link.route}
                          className={`${
                            isActive && "gradient-text"
                          } p-18 flex whitespace-nowrap text-dark-700`}
                        >
                          <Link
                            className="sidebar-link cursor-pointer"
                            href={link.route}
                          >
                            <Image
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                            />
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="cursor-pointer gap-2 p-4">
                      <UserButton afterSignOutUrl="/" showName />
                    </li>
                  </ul>
                </>
              </SheetContent>
            </Sheet>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </Link>
    </header>
  );
};

export default Mobilenav;
