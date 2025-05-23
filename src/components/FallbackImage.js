import React from 'react';
import styled from 'styled-components';

const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const FallbackImage = () => {
  return (
    <FallbackContainer>
      <div>Today's News</div>
    </FallbackContainer>
  );
};

export default FallbackImage;
