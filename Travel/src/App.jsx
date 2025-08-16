import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostProvider from './Context/PostContextProvider';
import OutletLayout from './Pages/OutletLayout';
import Home from './Pages/Home';
import PostList from './Pages/PostList';
import PostForm from './Pages/PostForm'
import PostDetail from './Pages/PostDetail';


function App() {



  return (
    <>
      <PostProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<OutletLayout />}>
              <Route index element={<Home />} />
              <Route path="Lista-dei-Post" element={<PostList />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="Log-In" element={<PostForm />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </PostProvider>


    </>

  )
}

export default App
