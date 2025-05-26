export const environment = {
  production: true,
  apiEndpoint: 'https://your-production-api.com/api/news',
  engineApiUrl: 'https://your-production-api.com', // Replace with your production API server URL
  s3: {
    bucketName: 'news-headlines-bucket',
    region: 'us-east-1',
    defaultImageKey: 'default/news-placeholder.jpg'
  }
};
