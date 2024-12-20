'use client';

import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = (props: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp
                decimal='.'
                prefix='£'
                decimals={2}
                end={props.amount}
            />
        </div>
    )
}

export default AnimatedCounter