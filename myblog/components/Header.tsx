import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profilepic from "../public/images/profilepic.jpg";
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const {data:session} = useSession();
  
  return (
    <div className='w-full h-16 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-8'>
        <div className="max-w-7xl h-full mx-auto flex justify-between items-center ">
          <Link href="/">
          <div className='flex items-center w-10 h-10 rounded-full'>
            <Image width={70} height={70} src={profilepic} alt="logoDark" className='rounded-full border-[2px] border-secondaryColor'/>
            <span className="text-xl font-[700] px-2 hover:text-secondaryColor">MyBlog</span>
          
         </div>  
         </Link>
         <div>
            <ul className='hidden lg:inline-flex gap-10 uppercase text-md font-semibold pl-40'>
            <li className="headerLi">
             <Link href="/">Home</Link>
           </li>
           <li className="headerLi">
             <Link href="#postSection">Posts</Link>
           </li>
           <li className="headerLi">
             <Link href="/post/world-travel/#postSection">Pages</Link>
           </li>        
           <li className="headerLi">
             <Link href="/contact">Contact</Link>
           </li>
           </ul>
                  </div>
            <div className="flex items-center gap-8 text-lg">
               <div className="flex items-center gap-1">
                    <Image
                    className='w-8 h-8 rounded-full'
                    src={
                      session ?
                      session?.user!.image! :
                      "/images/profilepic.jpg"}
                    alt="logo"
                    width={32}
                    height={32}
                    />
                    <p className="text-sm font-[600]">
                      {session ? session?.user!.name : "Hello Stranger"}
                    </p>
                </div> 

{
  session ? ( <button onClick={()=>signOut()}
  className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-bold hover:text-white rounded-md hover:bg-bgColor transition-all durtion-300 active:bg-yellow-600">
    Sign Out
  </button> ) : (
             <button onClick={()=>signIn()}
    className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-bold hover:text-white rounded-md hover:bg-bgColor transition-all durtion-300 active:bg-yellow-600">
    Sign In
    </button>
  )
  }
         </div>
        </div>
    </div>
  )
}

export default Header;