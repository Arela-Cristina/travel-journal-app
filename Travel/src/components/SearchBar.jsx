import { useState } from "react";

export default function SearchBar({ onFilter }) {
    const [text, setText] = useState("");
    const [mood, setMood] = useState("");
    const [radius, setRadius] = useState("");
    const [tags, setTags] = useState("");

    const handleFilter = () => {
        onFilter({ text, mood, radius, tags });
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 shadow rounded-lg">
            <input
                type="text"
                placeholder="Cerca posto..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border p-2 rounded w-full sm:w-auto"
            />

            <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="">Estado de ánimo</option>
                <option value="Contenta">Contenta</option>
                <option value="triste">Triste</option>
                <option value="Molto Contenta">Molto Contenta</option>
            </select>

            <input
                type="number"
                placeholder="Rango (km)"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="border p-2 rounded w-full sm:w-auto"
            />

            <input
                type="text"
                placeholder="Tags (ej: playa,montaña)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="border p-2 rounded w-full sm:w-auto"
            />

            <button
                onClick={handleFilter}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Filtra
            </button>
        </div>
    );
}