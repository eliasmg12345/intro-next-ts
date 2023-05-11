'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link"

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
    const pathname = usePathname();


    return (
        <Link className={pathname === href ? 'underline text-blue-500' : null} href={href} key={text}>
            {text}
        </Link>
    )
}
