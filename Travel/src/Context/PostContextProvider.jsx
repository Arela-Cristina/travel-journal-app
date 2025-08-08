import { useState, useEffect } from 'react';
import  PostContext    from './PostContext';
import { supabase } from '../supabase/posts';

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  //get
  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data);
    }
    setLoading(false);
  };

  //store
  const addPost = async (newPost) => {
    const { data, error } = await supabase
      .from('posts')
      .insert([newPost])
      .select();

    if (error) {
      console.error('Error adding post:', error);
      return null;
    }

    setPosts((prev) => [data[0], ...prev]);
    return data[0];
  };

  //deleted
  const deletePost = async (id) => {
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) {
      console.error('Error deleting post:', error);
    } else {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, loading, fetchPosts, addPost, deletePost }}
    >
      {children}
    </PostContext.Provider>
  );
}