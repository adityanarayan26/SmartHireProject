'use client'
import { AppSidebar } from "@/components/app-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import axios from "axios";
import { UseContext } from "../context/UseContext"
import { Send } from "lucide-react"

export default function Page() {
  const { storeData, setStoreData } = UseContext()
  const fileInputRef = useRef(null);

  const handleClick = () => {
    // Trigger the hidden file input's click event
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Perform further actions, such as uploading the file
    }
  };


  return (
    (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />

          </div>

          <div className="w-full">
            <Navbar />
          </div>
        </header>
        <div className="h-full flex flex-col justify-between  w-full  rounded-b " style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1674729243673-0b5e871a8a24?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
          <div>
            <div className="w-full flex justify-center pt-5">
              <h1 className="rounded px-2 py-1 bg-zinc-300 w-fit text-sm font-medium">Today</h1>
            </div>

            <div className="w-full flex justify-start pl-3 pt-10">
              <div className="w-1/2 flex bg-zinc-200 text-black font-medium  rounded-lg  p-3 gap-x-2">


                <Avatar className='size-9 bg-white'>
                  <AvatarImage src={storeData?.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates mollitia ipsam earum assumenda, numquam velit nemo. Distinctio hic fugit saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, saepe!
                </h1>
              </div>
            </div>

            <div className="w-full flex justify-end pr-3 pt-10">
              <div className="w-1/2 flex bg-indigo-400 text-black font-medium  rounded-lg  p-3 gap-x-2">



                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates mollitia ipsam earum assumenda, numquam velit nemo. Distinctio hic fugit saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, saepe!
                </h1>
                <Avatar className='size-9 bg-white'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="w-full h-fit bg-zinc-100 p-3 ">
            <div className="w-full flex justify-between pr-2">

              <input type="text" className="w-full text-md   outline-none border-none text-black bg-transparent h-7" placeholder={`message ${storeData?.firstName}`} />

              <Send className="text-zinc-400 cursor-pointer" />
            </div>
            <div className="w-full py-2">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the input
                onChange={handleFileChange}
              />
              <div className="cursor-pointer" onClick={handleClick}>


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </SidebarInset>
    </SidebarProvider>)
  );
}
