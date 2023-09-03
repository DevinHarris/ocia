'use client'

import type { Metadata } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import Editor from '@/components/Editor'

// export const metadata: Metadata = {
//     title: "New Post - OCIA"
// }

export default function NewPage() {

    const { register } = useForm();


    return (
        <div className='w-screen bg-black text-white h-screen grid grid-cols-4'>
            <div className="newPostContainer col-start-2 col-end-4 py-20">
                <span className='newPostTag text-lg'>New Post</span>
                <h1 className='newPostTitle text-4xl py-5 font-bold tracking-wide'>What this is all about.</h1>

                <div className='newPostEditiorContainer my-6'>
                    <Editor />
                </div>
                
            </div>
        </div>
    )
}