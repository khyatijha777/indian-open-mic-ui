import React, { useState } from 'react';
import Header from '../Header/Header';
import { API_URL } from '../../constants';
console.log('🚀 ~ API_URL:', API_URL);

const Home = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('Envs: ', API_URL, process.env);
  console.log('🚀 ~ Home ~ API_URL:', API_URL);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setStatusMessage('❌ Please select a photo or video.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('caption', caption);

      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
      });

      if (response.ok) {
        setStatusMessage('✅ Upload successful!');
        setFile(null);
        setCaption('');
      } else {
        const data = await response.json();
        setStatusMessage(`❌ Upload failed: ${data.message || 'Server Error'}`);
      }
    } catch (error) {
      console.error('Upload Error:', error);
      setStatusMessage('❌ Upload failed. Please check your network or server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h1 style={{ textAlign: 'center' }}>Upload Photo/Video</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label>Choose a photo or video:</label>
            <br />
            <input type='file' accept='image/*,video/*' onChange={handleFileChange} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label>Caption:</label>
            <br />
            <input
              type='text'
              value={caption}
              onChange={handleCaptionChange}
              placeholder='Enter a caption...'
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: loading ? '#aaa' : '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
            }}
          >
            {loading ? 'Uploading...' : 'Submit'}
          </button>
        </form>

        {statusMessage && <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Home;
