import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsHeadline from "./components/NewsHeadline";
import { fetchRandomHeadline } from "./services/newsService";
import { getImageFromS3 } from "./services/s3Service";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #000;
`;

const HeadlineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: #fff;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #e53935;
  font-size: 1.2rem;
  margin-top: 50px;
`;

function App() {
  const [headline, setHeadline] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRandomHeadline = async () => {
    try {
      setLoading(true);

      // Fetch a random headline directly from the API
      let selectedHeadline = await fetchRandomHeadline();

      // If headline doesn't have an image URL, use a default image
      if (!selectedHeadline.imageUrl) {
        try {
          // Try to fetch from S3 first
          const s3ImageUrl = await getImageFromS3(selectedHeadline.id);
          selectedHeadline = { ...selectedHeadline, imageUrl: s3ImageUrl };
        } catch (err) {
          console.error("Error fetching image from S3:", err);
          // Use a default image URL if S3 fails
          selectedHeadline = {
            ...selectedHeadline,
            imageUrl:
              "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          };
        }
      }

      setHeadline(selectedHeadline);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching headline:", err);
      setError("Failed to load news headline. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomHeadline();
  }, []);

  return (
    <AppContainer>
      {loading && <LoadingMessage>Loading headline...</LoadingMessage>}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && headline && (
        <HeadlineContainer>
          <NewsHeadline
            title={headline.title}
            imageUrl={headline.imageUrl}
            url={headline.url}
          />
        </HeadlineContainer>
      )}
    </AppContainer>
  );
}

export default App;
