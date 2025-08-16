import { usePosts } from '../Context/PostContext';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../Components/SearchBar'

export default function PostList() {
    const { posts, loading } = usePosts();

    const [filteredPosts, setFilteredPosts] = useState([]);
    const [sortBy, setSortBy] = useState("");

    const [sortDirection, setSortDirection] = useState("asc");

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);

    const handleFilter = ({ text, mood, radius, tags }) => {
        let filtered = [...posts];

        if (text) {
            filtered = filtered.filter((p) =>
                p.place.toLowerCase().includes(text.toLowerCase()) ||
                p.description.toLowerCase().includes(text.toLowerCase())
            );
        }

        if (mood) {
            filtered = filtered.filter((p) => p.mood_state === mood);
        }

        if (radius) {
            // Aquí necesitarías tener lat/lon en tus posts y calcular distancia.
            // De momento lo dejamos como placeholder
            console.log("Filtro por radio no implementado aún");
        }

        if (tags) {
            const tagsArray = tags.split(",").map((t) => t.trim().toLowerCase());
            filtered = filtered.filter((p) =>
                tagsArray.every((tag) => p.tags?.map(t => t.toLowerCase()).includes(tag))
            );
        }

        setFilteredPosts(filtered);
    };

    const handleSort = (criteria) => {
        let sorted = [...filteredPosts];
        let newDirection = "asc";

        // Si el usuario hace click en el mismo criterio → invertimos el orden
        if (sortBy === criteria) {
            newDirection = sortDirection === "asc" ? "desc" : "asc";
        }

        if (criteria === "spesa") {
            sorted.sort((a, b) =>
                newDirection === "asc" ? a.spent - b.spent : b.spent - a.spent
            );
        } else if (criteria === "date") {
            sorted.sort((a, b) =>
                newDirection === "asc"
                    ? new Date(a.created_at) - new Date(b.created_at) // más antiguo primero
                    : new Date(b.created_at) - new Date(a.created_at) // más reciente primero
            );
        } else if (criteria === "distance") {
            console.log("Ordenar por distancia pendiente");
        }

        setSortBy(criteria);
        setSortDirection(newDirection);
        setFilteredPosts(sorted);
    };


    return (
        <div>
            <SearchBar onFilter={handleFilter} />

            <div className="flex gap-2 p-4">
                <button
                    onClick={() => handleSort("spesa")}
                    className={`px-3 py-1 rounded ${sortBy === "spesa" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Ordenar por gasto
                </button>
                <button
                    onClick={() => handleSort("date")}
                    className={`px-3 py-1 rounded ${sortBy === "date" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Ordenar por fecha
                </button>
                <button
                    onClick={() => handleSort("distance")}
                    className={`px-3 py-1 rounded ${sortBy === "distance" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Ordenar por distancia
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {loading ? (
                    <p className="col-span-full text-center text-gray-500">Caricamento...</p>
                ) : (
                    filteredPosts.map((post) => (
                        <Link
                            to={`/post/${post.id}`}
                            key={post.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden block hover:shadow-lg transition"
                        >
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
        </div>
    );
}