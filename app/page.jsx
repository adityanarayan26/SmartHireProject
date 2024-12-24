'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    if (window.location.pathname !== '/dashboard') {
      router.push('/dashboard')
    }
  }, [router])

  return (
    <div>Redirecting...</div>
  )
}

export default Page