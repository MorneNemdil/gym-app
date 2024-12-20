'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from './footer'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Sidebar = (props: SiderbarProps) => {
    const [user, setUser] = useState();
    const pathName = usePathname();

    useEffect(() => {
        const getUser = async () => {
            const loggedInUser = await getLoggedInUser();
            setUser(loggedInUser);
        }

        getUser();
    }, [])

    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link
                    href='/'
                    className='flex mb-12 curser-pointer items-center gap-2'
                >
                    <Image className='size-[24px] max-xl:size-14' src="/icons/logo.svg" width={34} height={34} alt='logo' />
                    <h1 className='sidebar-logo'>GymPlex</h1>
                </Link>
                {sidebarLinks.map(x => {
                    const isCurrentPage = pathName === x.route || pathName.startsWith(x.route + "/")

                    return (
                        <Link
                            href={x.route}
                            key={x.label}
                            className={cn('sidebar-link', { 'bg-bank-gradient': isCurrentPage })}
                        >
                            <div className='relative size-6'>
                                <Image
                                    src={x.imgURL}
                                    alt={x.label}
                                    fill
                                    className={cn({ 'brightness-[3] invert-0': isCurrentPage })}
                                />
                            </div>
                            <p className={cn('sidebar-label', { '!text-white': isCurrentPage })}>
                                {x.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
            {<Footer user={props.user} />}
        </section>
    )
}

export default Sidebar