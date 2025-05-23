import React from 'react';
import styled from 'styled-components';
import FallbackImage from './FallbackImage';
import QRCode from './QRCode';

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
`;

const TitleContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid white;
  border-radius: 8px;
  padding: 15px 30px;
  max-width: 90%;
  width: auto;
  margin-bottom: 20px;
`;

const HeadlineTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
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
