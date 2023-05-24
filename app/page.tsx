import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="min-h-screen p-4">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl lg:text-5xl font-bold  mt-9 tracking-tighter">
          Surya Ashish
        </h1>
        <p className="text-sm md:text-base text-muted-foreground tracking-tight text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          iste nisi perferendis explicabo omnis, numquam vitae veniam eius error
          aspernatur a quia debitis distinctio aliquid? Laudantium impedit
          exercitationem dolores facilis ipsum doloribus similique, quae earum
          dicta quam natus, voluptate non qui excepturi alias iure nulla sunt
          autem beatae velit illum?
        </p>
        <div id="contacts" className="flex items-center gap-10">
          <SocialLinks />
          <Button variant={"link"}>
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1a8W2dA0Av1PVjwLA_0iIjA0YmQL3grSf/view?usp=share_link"
              }
            >
              View Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const SocialLinks = () => {
  return (
    <div className="flex items-center">
      <Link target="_blank" href="https://www.linkedin.com/in/surya-ashish/">
        <Image src="/linkedin.svg" alt="Linkedin" width={40} height={40} />
      </Link>
    </div>
  )
}
