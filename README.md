# News Headline App

This application displays news headlines with images as backgrounds. It fetches data from an API endpoint and displays the headlines with their corresponding images.

## Features

- Fetches news headlines from an API endpoint
- Displays headlines with images as backgrounds
- Falls back to S3 bucket images if the API doesn't provide image URLs
- Responsive design for various screen sizes

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure your S3 bucket details in `.env` file (see below)
4. Start the development server:
   ```
   npm start
   ```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_API_ENDPOINT=your_api_endpoint_url
REACT_APP_S3_BUCKET_NAME=your_s3_bucket_name
REACT_APP_S3_REGION=your_s3_region
REACT_APP_AWS_ACCESS_KEY_ID=your_aws_access_key
REACT_APP_AWS_SECRET_ACCESS_KEY=your_aws_secret_key
REACT_APP_DEFAULT_IMAGE_KEY=path/to/default/image.jpg
```

## Usage

The application will automatically fetch and display news headlines from the configured API endpoint. If the API response doesn't include image URLs for certain headlines, the app will fetch images from the configured S3 bucket.
