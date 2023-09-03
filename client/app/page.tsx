'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PostType, PostTypes } from '@/types/PostType'


type Post = {
  postTitle: string
}

export default function Page() {

  const [postTitle, setPostTitle] = useState("");
  const [postType, setPostType] = useState("")
  const { register,  handleSubmit } = useForm();

  const onSubmit: SubmitHandler<Post> = (data) => {
   const { postTitle } = data;
   setPostTitle(postTitle)

  }
 

  return (
    <div className="landingContainer w-screen bg-black text-white text-center h-screen grid grid-cols-4 justify-items-center items-center">
      <div className="landingMain col-start-2 col-end-4">
        <h1 className="text-7xl font-black tracking-widest">OCIA</h1>
        <p className="text-xl font-medium my-5 tracking-wide">Because information <span className="line-through">should</span> <span className="underline">NEEDS</span> to be open and free for all.</p>
        <div className="landingForm">
          <p className="text-lg my-9">Get started by making a new topic or viewing current and previous posts.</p>
          <p>Please read the <Link href="/mission">Mission Statement.</Link> if you're new.</p>
          <form className='landingPostForm' onSubmit={handleSubmit(onSubmit)}>
            <input {...register('postTitle')} onKeyDown={e => onInput(e.target.v)} type='text' placeholder='Post Title' className="w-4/6 py-3 px-5 bg-slate-200 border border-white" />
            <select className='w-1/6 font-black bg-black border border-black py-3 mx-3' onChange={e => onPostType(e.target.value)}>
              {
                Object.keys(PostTypes).map(postType => 
                  <option key={postType} value={postType}>{postType}</option>
              )}
            </select>
            <div>
              <Link className="w-full my-5  border border-white py-3 inline-block" href="/new">Continue to editor</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}