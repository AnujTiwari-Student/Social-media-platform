import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  BellDot,
  Briefcase,
  HomeIcon,
  MessagesSquare,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

async function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      {/* Logo */}
      <Image
        className="rounded-lg"
        src="https://rdsdigital.in/wp-content/uploads/2021/09/Top-8-Social-Media-Best-Practices-To-Boost-Your-Personal-Brand-1200x1200.webp"
        width={40}
        height={40}
        alt="logo"
      />

      {/* Search */}
      {/* SearchIcon */}
      <div className="flex-1 hidden md:flex">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-48 md:max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      {/* Search */}
      <SignedIn>
        <div className="flex-1 flex md:hidden">
          <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-36">
            <SearchIcon className="h-4 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent flex-1 outline-none"
            />
          </form>
        </div>
      </SignedIn>

      <div className="flex items-center space-x-4 px-6">
        <Link href="" className="icon hidden md:flex">
          <HomeIcon className="h-5 " />
          <p>Home</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <UsersIcon className="h-5" />
          <p>Friends</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <BellDot className="h-5" />
          <p>Notification</p>
        </Link>

        <Link href="" className="icon">
          <MessagesSquare className="h-5" />
          <p>Message</p>
        </Link>
        
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
