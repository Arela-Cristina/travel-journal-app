import './App.css'
import { useEffect } from 'react'
import { supabase } from './supabase/posts'
import  PostForm  from  '../src/components/PostForm'



function App() {

  useEffect(() => {
    const insertPost = async () => {
      const newPost = {
        foto_url: 'https://mi-foto.com/foto.jpg',
        lugar: 'Barcelona, España',
        description: 'Fui a la playa 🏖️',
        mood_state: 'feliz',
        spend: 30,
        tags: ['playa', 'verano'],
      }

      const { data, error } = await supabase
        .from('posts')
        .insert([newPost])

      if (error) console.error('Error insertando post:', error)
      else console.log('Post insertado correctamente:', data)
    }

    insertPost()
  }, [])

  return (
    <>
      <div className='bg-gray-100 p-4'>
        <h1 className='text-xl font-bold'>Travel Journal App</h1>
      </div>
      <PostForm />

    </>

  )
}

export default App
