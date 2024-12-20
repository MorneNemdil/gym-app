'use client'

import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from './footer'


const MobileNavbar = (props: MobileNavbarProps) => {
    const pathName = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent className='border-none bg-white' side='left'>
                    <Link
                        href='/'
                        className='flex curser-pointer items-center gap-1 px-4'
                    >
                        <Image src="/icons/logo.svg" width={34} height={34} alt='logo' />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1 ml-2'>App Name</h1>
                    </Link>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map(x => {
                                    const isCurrentPage = pathName === x.route || pathName.startsWith(x.route + "/")

                                    return (
                                        <SheetClose asChild key={x.route}>
                                            <Link
                                                href={x.route}
                                                key={x.label}
                                                className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isCurrentPage })}
                                            >
                                                <Image
                                                    src={x.imgURL}
                                                    alt={x.label}
                                                    className={cn({ 'brightness-[3] invert-0': isCurrentPage })}
                                                    width={20}
                                                    height={20}
                                                />
                                                <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isCurrentPage })}>
                                                    {x.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                USER
                            </nav>
                        </SheetClose>
                        <Footer user={props.user} type='mobile'/>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNavbar