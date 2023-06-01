import Image from "next/image"
import Link from "next/link"

import { ThemeToggle } from "./theme-toggle"

export const Navbar = () => {
  return (
    <nav className=" p-8 flex items-center justify-end">
      <ThemeToggle />
    </nav>
  )
}
