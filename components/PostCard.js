'use client'

import Card from "./Card"
import Avatar from "./Avatar"
import { useContext, useState } from "react"
import Link from "next/link"
import ReactTimeAgo from "react-time-ago"
import { UserContext } from "@/contexts/UserContext"

export default function PostCard({content,created_at,photos, profiles:authorProfile}) {
  const {profile:myProfile} = useContext(UserContext);

    return (
        <Card >
          <div className="flex gap-3">
            <div>
              <Link href={'/Profile'}>
               <span className="cursor-pointer">
               <Avatar url={authorProfile?.avatar}/>
               </span>
               </Link>
            </div>
            <div className="grow">
              <p>
                <Link href={'/Profile/'+authorProfile?.id}>
                 <span className="text-semibold hover:underline cursor-pointer"> {authorProfile?.name} </span> 
                </Link> 
                shared a post
              </p>
              <p className="text-gray-500 text-sm">
                <ReactTimeAgo date={created_at} />
              </p>
            </div>
          </div> 

          <div>
            <p className="my-3 text-sm">{content}</p>
            {photos?.length > 0 && (
          <div className="flex gap-4">
            {photos.map(photo => (
              <div key={photo} className="">
                <img src={photo} className="rounded-md" alt=""/>
              </div>
            ))}
          </div>
        )}
            {/* <div className="rounded-md overflow-hidden">
            <img src="https://media.istockphoto.com/id/1458297519/photo/old-white-church.webp?b=1&s=170667a&w=0&k=20&c=T20djB7eYkRXiej4PZn-1wEmYGzfwBkvhSpUSZPZxck=" alt=""></img>
            </div> */}
          </div>

          <div className="mt-5 flex gap-8">
            <button className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
             72
            </button>
            <button className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            11
            </button>
            <button className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            4
            </button>
          </div>

          <div className="flex mt-4 gap-3">
            <div>
              <Avatar url={myProfile?.avatar}/>
            </div>
            <div className="border grow rounded-full relative">
            <textarea className="w-full block p-2 px-4 h-12 rounded-full overflow-hidden" placeholder="Leave a comment here!"/>
            <button className="absolute top-3 right-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            </button>
            </div>
          </div>
        </Card>
    )
}