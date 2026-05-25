import Image from "next/image";
import Link from "next/link"
import logo from "@/public/logo.png";

export default function Navigation() {
  return (
    <header className=" bg-gray-600 w-full fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-2">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            height={55}
            width={55}
            src={logo}
            alt="Logo"
            quality={100}
            className="rounded-full"
          />

          <h1 className="text-2xl font-bold tracking-wide text-white">
            The Wild Oasis
          </h1>
        </div>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-10 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full shadow-lg">
          <li>
            <Link
              href="/cabins"
              className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium"
            >
              Cabins
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/account"
              className="bg-yellow-400 text-black px-5 py-2 rounded-full hover:bg-yellow-300 transition-all duration-300 font-semibold"
            >
              Guest Area
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}