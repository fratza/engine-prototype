import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

// Get S3 configuration from environment variables
const S3_BUCKET_NAME = process.env.REACT_APP_S3_BUCKET_NAME;
const S3_REGION = process.env.REACT_APP_S3_REGION || 'us-east-1';
const DEFAULT_IMAGE_KEY = process.env.REACT_APP_DEFAULT_IMAGE_KEY || 'default/news-placeholder.jpg';

// Initialize S3 client
const s3Client = new S3Client({
  region: S3_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

/**
 * Generates an image key based on headline ID or uses a default
 * @param {string} headlineId - The ID of the headline
 * @returns {string} - S3 object key for the image
 */
const getImageKey = (headlineId) => {
  return `news/${headlineId}.jpg`;
};

/**
 * Fetches an image from S3 bucket for a headline
 * @param {string} headlineId - The ID of the headline
 * @returns {Promise<string>} - URL of the image
 */
export const getImageFromS3 = async (headlineId) => {
  try {
    // First try to get an image specific to this headline
    const imageKey = getImageKey(headlineId);
    
    try {
      // Check if the image exists in S3
      await s3Client.send(new GetObjectCommand({
        Bucket: S3_BUCKET_NAME,
        Key: imageKey,
      }));
      
      // If no error was thrown, the image exists, return its URL
      return `https://${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${imageKey}`;
    } catch (error) {
      // If specific image doesn't exist, use default image
      console.log(`Specific image not found for headline ${headlineId}, using default`);
      return `https://${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${DEFAULT_IMAGE_KEY}`;
    }
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    throw error;
  }
};
