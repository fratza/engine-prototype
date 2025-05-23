import React from 'react';
import styled from 'styled-components';

const QRCodeContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  background-color: white;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const QRImage = styled.img`
  width: 100px;
  height: 100px;
  display: block;
`;

const QRCode = ({ url }) => {
  // Encode the URL for use in the QR code API
  const encodedUrl = encodeURIComponent(url);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodedUrl}`;

  return (
    <QRCodeContainer>
      <QRImage src={qrCodeUrl} alt="QR Code" />
    </QRCodeContainer>
  );
};

export default QRCode;
