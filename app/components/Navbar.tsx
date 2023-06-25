import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
    const session = null
  return (
    <nav className="flex-between navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="flexible" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
            {NavLinks.map((link)=>(
                <Link href={link.href} key={link.key}>{link.text}</Link>
            ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?(
            <>
            user Photo 
            <Link href='/create-project'>Share work</Link>
            </>
        ): (
            <AuthProvider />
        )}

      </div>
    </nav>
  );
};

export default Navbar;
