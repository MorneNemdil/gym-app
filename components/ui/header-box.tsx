'use client';

import React from 'react'


const HeaderBox = (props: HeaderBoxProps) => {
    return (
        <div className='header-box'>
            <div>
                <h1 className='header-box-title'>
                    {props.title}
                    {props.type == 'greeting' && (
                        <span className='text-bankGradient'>&nbsp;{props.userName}</span>
                    )}
                </h1>
                <p className='header-box-subtext'>{props.subtext}</p>
            </div>
        </div>
    )
}

export default HeaderBox
