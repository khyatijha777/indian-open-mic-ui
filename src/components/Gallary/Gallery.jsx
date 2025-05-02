import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constants';


function Gallery() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        const publishedPosts = data.filter((post) => post.isPublished);
        setPosts(publishedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setLoading(false);
      });
  }, []);

  const renderMedia = (post) => {
    if (post.youtubeUrl?.trim()) {
      const videoId = post.youtubeUrl.split('v=')[1]?.split('&')[0];
      return (
        <iframe
          width="300"
          height="200"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          title={post.caption}
        />
      );
    } else if (post.mediaUrl?.trim().endsWith('.mp4')) {
      return (
        <video width="300" controls>
          <source src={post.mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (post.mediaUrl?.trim()) {
      return (
        <img
          src={post.mediaUrl}
          alt={post.caption}
          style={{ maxWidth: '300px', marginTop: '10px' }}
        />
      );
    }
    return <p>No media available.</p>;
  };

  if (loading) return <p>Loading posts...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gallery</h2>
      {posts.length === 0 ? (
        <p>No published posts found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '30px' }}>
              <strong>{post.caption}</strong>
              <br />
              <small>By: {post.user?.name || 'Anonymous'}</small>
              <div style={{ marginTop: '10px' }}>{renderMedia(post)}</div>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Gallery;
