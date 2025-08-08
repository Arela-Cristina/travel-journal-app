import { useState } from 'react';
import { usePosts } from '../Context/PostContext'; 

export default function PostForm() {
  const { addPost } = usePosts();

  const [formData, setFormData] = useState({
    foto_url: '',
    video_url: '',
    place: '',
    latitude: '',
    longitude: '',
    description: '',
    mood_state: '',
    spent: '',
    tags: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { tags, ...rest } = formData;

    const postData = {
      ...rest,
      spent: parseFloat(formData.spent),
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      tags: tags.split(',').map(tag => tag.trim())
    };

    const added = await addPost(postData);

    if (!added) {
      setMessage('❌ Errore mentre si salvava il post');
    } else {
      setMessage('✅ Post salvato con successo!');
      setFormData({
        foto_url: '',
        video_url: '',
        place: '',
        latitude: '',
        longitude: '',
        description: '',
        mood_state: '',
        spent: '',
        tags: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Nuova etapa del viaggio</h2>

      <input type="text" name="foto_url" placeholder="Foto URL" value={formData.foto_url} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <input type="text" name="video_url" placeholder="Video URL" value={formData.video_url} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <input type="text" name="place" placeholder="Luogo" value={formData.place} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <input type="text" name="latitude" placeholder="Latitudine" value={formData.latitude} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <input type="text" name="longitude" placeholder="Longitudine" value={formData.longitude} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <textarea name="description" placeholder="Descrizione" value={formData.description} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <input type="text" name="mood_state" placeholder="Stato d'animo" value={formData.mood_state} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <input type="number" name="spent" placeholder="Spesa" value={formData.spent} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />
      <input type="text" name="tags" placeholder="Tags (formato: '','')" value={formData.tags} onChange={handleChange} className="w-full mb-4 p-2 rounded border" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Salva</button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
}