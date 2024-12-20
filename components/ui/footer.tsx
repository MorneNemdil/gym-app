'use client'
import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
    const router = useRouter();

    const handleSignInClicked = () => {
        router.push('/sign-in')
    }
 
    const handleLogout = async () => {
        await logoutAccount();
    }

    return (
        <footer className='footer'>
            {user ?
                <div className='flex items-center gap-3'>
                    <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
                        <p className='text-xl font-bold text-gray-700'>
                            {user?.name[0]}
                        </p>
                    </div>
                    <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
                        <h1 className='text-14 truncate font-normal text-gray-700 font-semibold'>
                            {user?.name}
                        </h1>
                        <p className='text-14 truncate font-normal text-gray-600'>
                            {user?.email}
                        </p>
                    </div>
                    <div className='footer_image' onClick={handleLogout}>
                        <Image src={"icons/logout.svg"} fill alt='jsm' />
                    </div>
                </div>
                : <div className='flex items-center gap-3 border-2 rounded-lg px-8 w-full justify-center'>
                    <Button className='text-gray-900' onClick={handleSignInClicked}>Sign In</Button>
                </div>
            }
        </footer>
    )
}

export default Footer