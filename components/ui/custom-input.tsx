'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils';
import { DatePicker } from './date-picker';

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <div className='flex w-full flex-col'>
                            {name === 'dateOfBirth'
                                ? <DatePicker
                                    date={field.value as Date}
                                    onDateChange={field.onChange}
                                />
                                : <Input
                                    placeholder={placeholder}
                                    className='input-class'
                                    type={name === 'password' || name === 'confirmPassword' 
                                        ? 'password' 
                                        : 'text'}
                                    {...field}
                                    value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
                                />}
                            <FormMessage className='form-message mt-2' />
                        </div>
                    </FormControl>
                </div>
            )}
        />
    )
}

export default CustomInput