import JsonEditor from '@/components/Json-editor'
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
  const user = await currentUser()

  if(!user){
    return redirect('/')
  }

  const loggedInUser = await prisma.user.findUnique({
    where : {
      clerkUserId : user.id
    }
  })

  if(!loggedInUser){
    await prisma.user.create({
      data : {
        clerkUserId : user.id,
        name :`${user.firstName} ${user.lastName}`,
        imageUrl : user.imageUrl,
        email : user.emailAddresses[0].emailAddress
      }
    })
  }

  return (
    <div>
      <div className='my-8'>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <p >manage your data and share with others</p>
      </div>
      <JsonEditor/>
    </div>
  )
}

export default page
