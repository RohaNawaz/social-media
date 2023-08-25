'use client'

import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import PostFormCard from '../components/PostFormCard'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import LoginPage from './login/page'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserContext } from '@/contexts/UserContext'

export default function Home() {
  const supabase = useSupabaseClient();
   const [posts, setPosts] = useState([]);
   const session = useSession();
   const [profile,setProfile] = useState(null);

  useEffect(() => {
    fetchPosts();
   if(!session?.user?.id) {
    return;
   }
   supabase.from('profiles')
    .select()
    .eq('id', session.user.id)
    .then(result => {
        console.log(result)
        if(result.data.length) {
            setProfile(result.data[0]);
        }
    })
 },[session?.user?.id]);

 function fetchPosts() {
  supabase.from('posts')
  .select('id, content, created_at, photos,profiles(id, avatar, name)')
  .is('parent', null)
  .order('created_at', {ascending: false})
  .then(result => {
    console.log('posts', result)
    setPosts(result.data);
  })  
 }
   
   if (!session) {
    return <LoginPage />
   }

  return (
    <Layout>
      <UserContext.Provider value={{profile}}>
      <PostFormCard onPost={fetchPosts} />
      {posts?.length > 0 && posts.map(post => (
         <PostCard key={post.created_at} {...post}/> 
      ))}  
      </UserContext.Provider> 
    </Layout>
  )
}
