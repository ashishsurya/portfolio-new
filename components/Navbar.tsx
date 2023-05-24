import Image from "next/image"
import Link from "next/link"

import { ThemeToggle } from "./theme-toggle"

export const Navbar = () => {
  return (
    <nav className=" p-4 flex items-center border-b justify-between">
      <Image
        src="/me.jpeg"
        alt="myself"
        loading="lazy"
        width={50}
        height={50}
        className="rounded-full"
      />
      {/* <ul className="flex flex-1 font-semibold text-sm justify-center  items-center gap-4">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/projects"}>Projects</Link>
      </ul> */}
      <ThemeToggle />
    </nav>
  )
}
