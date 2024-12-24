'use client'
import React from 'react'
import { UseContext } from '../context/UseContext'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  const { storeData, setStoreData } = UseContext()
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='w-full flex mt-2 rounded-tr border-b h-20 items-center justify-between px-3'>

      <div className='flex gap-x-2 items-center'>

        <Avatar className='size-10'>
          <AvatarImage src={storeData?.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {storeData?.firstName} {storeData?.lastName}
      </div>

      <Sheet>
        <SheetTrigger>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>

        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Profile</SheetTitle>
            <SheetDescription>
              <div className='flex flex-col items-center gap-y-4 justify-center'>
                <Avatar className='size-20'>
                  <AvatarImage src={storeData?.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col  items-center gap-y-1'>
                  <h1 className='text-2xl font-medium text-black'>{storeData?.firstName} {storeData?.lastName}</h1>
                  <h1>{storeData?.address.country} , {storeData?.address.city}</h1>
                  <h1>{storeData?.address.address}</h1>
                </div>
                <div className='w-full flex justify-between px-3 gap-x-2'>

                  <div className=' cursor-pointer flex flex-col justify-center items-center bg-zinc-200 px-5 py-2 text-black rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg> Call
                  </div>
                  <div className=' cursor-pointer flex flex-col justify-center items-center bg-zinc-200 px-5 py-2 text-black rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    Message
                  </div>
                  <div className=' cursor-pointer flex flex-col justify-center items-center bg-zinc-200 px-5 py-2 text-black rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    More
                  </div>

                </div>
                <div>
                  <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-[350px] space-y-2"
                  >
                    <div className="flex items-center justify-between space-x-4 ">
                      <h4 className="text-black text-lg font-medium uppercase">
                        Information
                      </h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>

                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <div className="text-black text-md border-b  py-3 font-sans ">
                      Username : {storeData?.username}
                    </div>
                    <div className="text-black text-md flex gap-x-2 border-b  py-3 font-sans">
                      Email : {storeData?.email}
                    </div>
                    <CollapsibleContent className="space-y-2">
                      <div className="text-black text-md border-b  py-3 font-sans ">
                      BirthDate : {storeData?.birthDate}
                      </div>
                      <div className="text-black text-md border-b  py-3 font-sans ">
                      BloodGroup : {storeData?.bloodGroup}
                      </div>
                      <div className="text-black text-md border-b  py-3 font-sans ">
                      University : {storeData?.university}
                      </div>
                      <div className="text-black text-md border-b  py-3 font-sans ">
                        Gender : {storeData?.gender}
                      </div>
                      <div className="text-black text-md border-b  py-3 font-sans ">
                        Phone : {storeData?.phone}
                      </div>

                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default Navbar