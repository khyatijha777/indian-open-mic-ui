import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ✅ Reusable styled Link component
const StyledLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none',
      color: 'white',
      fontWeight: 500,
      fontSize: '16px',
      transition: 'opacity 0.2s',
    }}
    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.75')}
    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
  >
    {children}
  </Link>
);

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const displayName = user?.email?.split('@')[0] || 'User';

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: '#4CAF50',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      borderBottom: '2px solid #388E3C'
    }}>
      <div>India Open Mic</div>
      <div>


      <nav style={{ display: 'flex', gap: '24px' }}>
        <StyledLink to="/">Home</StyledLink>
        
        <StyledLink to="/my-videos">My Videos</StyledLink>
      </nav>

      </div>

      <div style={{ display: 'flex', alignItems: 'center' , gap:"5px"}}>
        <span style={{ marginRight: '8px' }}>{displayName ||""}</span>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'white',
          color: '#4CAF50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          👤
        </div>
        <button
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Logout
            </button>
      </div>
    </header>
  );
};

export default Header;
