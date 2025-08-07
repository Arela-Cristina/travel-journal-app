import { useState } from 'react'
import './App.css'
import { supabase } from './supabase/posts'

const newPost = {
  foto_url: 'https://mi-foto.com/foto.jpg',
  place: 'Barcelona, España',
  description: 'Fui a la playa 🏖️',
  mood_state: 'feliz',
  spend: 30,
  tags: ['spiaggia', 'state'],
}

function App() {


  const { data, error } = supabase
    .from('posts')
    .insert([newPost])

  if (error) console.error(error)
  else console.log('Fetch Realizado', data)

  return (

    <div className='bg-gray-100'>
      Hello World
    </div>
  )
}

export default App
