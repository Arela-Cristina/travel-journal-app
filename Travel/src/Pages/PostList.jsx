import { usePosts } from '../Context/PostContext';
import { Link } from "react-router-dom";

export default function PostList() {
    const { posts, loading } = usePosts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {loading ? (
                <p className="col-span-full text-center text-gray-500">Caricamento...</p>
            ) : (
                posts.map((post) => (
                    <Link
                        to={`/post/${post.id}`}
                        key={post.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={post.foto_url}
                            alt={post.place}
                            className="w-full h-[300px] object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{post.place}</h2>
                            <p className="text-gray-600 text-sm">{post.description}</p>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
}