import {cn} from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className={cn("px-8 md:px-16")}>

      <h1 className={cn("")}>Hello 👋</h1>
      <p className={cn("my-32 md:w-4/5 text-xl md:text-3xl text-justify")}>
        I am <strong className={cn("text-yellow-400")}>Surya Ashish</strong> , recent graduate from IIIT Kottayam,
        looking for internships/full time roles in software development field.
      </p>
      <div className={cn("flex md:items-center text-xl gap-2 flex-col md:flex-row")}>
        <pre>For contact : </pre>
        <Link href={"mailto:ashishsurya126@gmail.com"} className={cn("border-b-2 w-fit border-yellow-500 pb-1 ")}>ashishsurya126@gmail.com</Link>
      </div>
    </div>

  )
}

