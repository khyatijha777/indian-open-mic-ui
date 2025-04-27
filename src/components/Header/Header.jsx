import React from 'react';

const Header = () => {
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

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>KJ</span>
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
      </div>
    </header>
  );
};

export default Header;
