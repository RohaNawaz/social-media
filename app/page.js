'use client'

import Card from '@/components/Card'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import PostFormCard from '../components/PostFormCard'
import { useSession } from '@supabase/auth-helpers-react'
import LoginPage from './login/page'

export default function Home() {

   const session = useSession();
   console.log(session);
   
   if (!session) {
    return <LoginPage />
   }

  return (
    <Layout>
      <PostFormCard />
        <PostCard />

        
    </Layout>
  )
}
