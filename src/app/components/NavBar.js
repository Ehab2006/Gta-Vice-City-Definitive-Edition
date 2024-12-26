import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar content-center grid lg:grid-cols-2 md:grid-cols-1 text-neutral-content">
      <div className="flex lg:justify-start justify-center">
        <Link href={"/"} className="text-xl">
          <Image
            alt="Gta vice city definitive edition - logo's brand"
            src={"https://i.ibb.co/Gvtf80M/icon.png"}
            width={200}
            height={200}
            quality={100}
          ></Image>
        </Link>
      </div>
      <div className="flex lg:justify-end justify-center">
        <ul className="menu menu-horizontal px-1 flex justify-center">
          <li>
            <Link href={"/"} className="text-lg font-bold text-shadow-pink">
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/download"}
              className="text-lg font-bold text-shadow-pink"
            >
              Download
            </Link>
          </li>
          <li>
            <Link
              href={"/features"}
              className="text-lg font-bold text-shadow-pink"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href={"/requirements"}
              className="text-lg font-bold text-shadow-pink"
            >
              Requirements
            </Link>
          </li>
          <li className="text-lg font-bold text-shadow-pink">
            <details>
              <summary>Support</summary>
              <ul className="bg-black p-2 z-50">
                <li>
                  <Link href={"/faq"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}
