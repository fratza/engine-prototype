export const environment = {
  production: false,
  apiEndpoint: "http://localhost:3001/api/news",
  engineApiUrl: "http://localhost:3001", // Add your engine-api URL here
  s3: {
    bucketName: "news-headlines-bucket",
    region: "us-east-1",
    defaultImageKey: "default/news-placeholder.jpg",
  },
};
