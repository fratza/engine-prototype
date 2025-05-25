import React from 'react';
import styled from 'styled-components';

// Device breakpoints
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px'
};

// Media queries
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`
};

const QRCodeContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  background-color: white;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media ${device.tablet} {
    bottom: 15px;
    right: 15px;
    padding: 4px;
  }
  
  @media ${device.mobileL} {
    bottom: 10px;
    right: 10px;
    padding: 3px;
  }
`;

const QRImage = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  
  @media ${device.tablet} {
    width: 80px;
    height: 80px;
  }
  
  @media ${device.mobileL} {
    width: 60px;
    height: 60px;
  }
  
  @media ${device.mobileS} {
    width: 50px;
    height: 50px;
  }
`;

const QRCode = ({ url }) => {
  // Encode the URL for use in the QR code API
  const encodedUrl = encodeURIComponent(url);
  
  // Responsive QR code size
  const getQRSize = () => {
    if (window.innerWidth <= parseInt(size.mobileS)) return '50x50';
    if (window.innerWidth <= parseInt(size.mobileL)) return '60x60';
    if (window.innerWidth <= parseInt(size.tablet)) return '80x80';
    return '100x100';
  };
  
  const [qrSize, setQrSize] = React.useState(getQRSize());
  
  // Update QR size on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setQrSize(getQRSize());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodedUrl}`;

  return (
    <QRCodeContainer>
      <QRImage src={qrCodeUrl} alt="QR Code" />
    </QRCodeContainer>
  );
};

export default QRCode;
