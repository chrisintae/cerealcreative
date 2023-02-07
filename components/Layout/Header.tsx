"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const router = useRouter();

  return (
    <header className="w-full fixed top-0 z-10">
      <div className="max-w-[2100px] flex justify-between py-2 px-4 mx-auto">
        <div>
          {path !== "/" && (
            <a className="cursor-pointer" onClick={() => router.back()}>
              _back
            </a>
          )}
        </div>
        <nav>
          <ul className="flex justify-end gap-4">
            <li>
              {path === "/client" ? (
                <NavLink label="Contact Us" path="/contact" />
              ) : (
                <NavLink label="Client Login" path="/client" />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const NavLink = ({ label, path }: any) => {
  return (
    <Link className="text-sm uppercase" href={path}>
      {label}
    </Link>
  );
};
