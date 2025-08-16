import { useParams } from "react-router-dom";
import { usePosts } from "../Context/PostContext";

export default function PostDetail() {

    const { id } = useParams();
    const { posts } = usePosts();

    // find the post whit the respective id
    const post = posts.find((p) =>  p.id === id);

    if (!post) {
        return <p className="text-center text-gray-500 mt-10">Post non trovato</p>;
    }

    return (

        <div className="max-w-3xl mx-auto p-6">
            <img
                src={post.foto_url}
                alt={post.place}
                className="w-full h-[400px] object-cover rounded-lg shadow"
            />
            <h1 className="text-2xl font-bold mt-4">{post.place}</h1>
            <p className="text-gray-700 mt-2">{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">
                Data di Pubblicazione: {new Date(post.created_at).toLocaleDateString()}
            </p>
        </div>
    );
}

