


'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from "next/link";
import { useState } from 'react';
import { anton } from "@/components/ui/fonts";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'About', href: '#About' },
    { name: 'Contact me', href: '#Contact' },
];

export default function NavLink() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
       /* <div className={`${anton.className}`}> how to set a secondary font in Tailwind CSS*/
        
        <div>
            <div className="flex justify-between items-center p-4 md:hidden">
                <div className="text-xl font-bold">Menu</div>
                <button
                    className="p-2 rounded-md focus:outline-none focus:ring"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <div className={clsx(
                "flex flex-col md:flex-row justify-center md:space-x-6",
                { "hidden": !menuOpen, "md:flex": true }
            )}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'p-4 hover:text-red-600',
                            {
                                '': pathname === link.href,
                            },
                        )}
                    >
                        <p className="text-xl">{link.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
