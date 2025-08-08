import { createContext, useContext } from 'react';

const PostContext = createContext(null)
export default PostContext;

export  function usePosts() {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('utilizzare usePost dentro di <PostProvider>');
    }
    return context;
}