'use client'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UseContext } from '@/app/context/UseContext'
import axios from 'axios'

const Users = () => {
    const [User, SetUser] = useState()
    const { storeData, setStoreData } = UseContext()
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users', {
                    signal: controller.signal,
                });
                SetUser(response?.data.users)
               
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    console.error('Something went wrong:', error);
                }
            }
        };

        fetchData();


        return () => {
            controller.abort();
        };
    }, []);



    const handleClick = (e) => {
        const { item, index } = e
        localStorage.setItem('user', JSON.stringify(item))
        setStoreData(item)  // Update the context state

    }

    return (
        <div>
            {
                User?.map((item, index) => 
                 
             
                   (
                        <div key={index} onClick={() => handleClick({ index, item })} className={`w-full font-medium flex gap-x-2 items-center p-3  cursor-pointer h-20 rounded my-2 select-none ${storeData?.firstName
                            === item.firstName
                            && "bg-zinc-800 text-white "}`} >
                            <Avatar className='size-9'>
                                <AvatarImage src={item.image}/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <h1>{item.firstName } {item.lastName}</h1>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Users