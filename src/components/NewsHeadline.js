import React from 'react';
import styled from 'styled-components';
import FallbackImage from './FallbackImage';
import QRCode from './QRCode';

// Device breakpoints
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

// Media queries
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

const HeadlineCard = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
`;

const HeadlineContent = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 30px;
  
  @media ${device.tablet} {
    padding: 20px;
  }
  
  @media ${device.mobileL} {
    padding: 15px;
  }
`;

const TitleContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid white;
  border-radius: 8px;
  padding: 15px 30px;
  max-width: 90%;
  width: auto;
  margin-bottom: 20px;
  
  @media ${device.tablet} {
    padding: 12px 20px;
    max-width: 95%;
  }
  
  @media ${device.mobileL} {
    padding: 10px 15px;
    max-width: 100%;
    margin-bottom: 10px;
    border-width: 1px;
  }
`;

const HeadlineTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media ${device.laptop} {
    font-size: 2rem;
  }
  
  @media ${device.tablet} {
    font-size: 1.8rem;
  }
  
  @media ${device.mobileL} {
    font-size: 1.4rem;
  }
  
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
`;

const HeadlineContainer = styled.div`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const NewsHeadline = ({ title, imageUrl, url }) => {
  return (
    <HeadlineCard>
      <HeadlineContainer>
        {imageUrl ? (
          <BackgroundImage imageUrl={imageUrl} />
        ) : (
          <FallbackImage />
        )}
        <HeadlineContent>
          <TitleContainer>
            <HeadlineTitle>{title}</HeadlineTitle>
          </TitleContainer>
        </HeadlineContent>
      </HeadlineContainer>
      {/* QR code in the bottom right */}
      <QRCode url={url} />
    </HeadlineCard>
  );
};

export default NewsHeadline;
