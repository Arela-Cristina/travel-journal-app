import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OutletLayout from './Pages/OutletLayout';
import Home from './Pages/Home';
import PostList from './Pages/PostList';
import PostForm from './Pages/PostForm'


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OutletLayout />}>
            <Route index element={<Home />} />
            <Route path="Lista-dei-Post" element={<PostList />} />
            <Route path="Log-In" element={<PostForm />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
