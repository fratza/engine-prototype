import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private bucketName = environment.s3.bucketName;
  private region = environment.s3.region;
  private defaultImageKey = environment.s3.defaultImageKey;

  constructor() {}

  /**
   * Generates an image key based on headline ID or uses a default
   * @param headlineId - The ID of the headline
   * @returns S3 object key for the image
   */
  private getImageKey(headlineId: string): string {
    return `news/${headlineId}.jpg`;
  }

  /**
   * Fetches an image from S3 bucket for a headline
   * @param headlineId - The ID of the headline
   * @returns Observable with the URL of the image
   */
  getImageFromS3(headlineId: string): Observable<string> {
    const imageKey = this.getImageKey(headlineId);
    
    // In a browser environment, we'll just construct the URL directly
    // and assume the image exists. In a real application, you would need
    // to check if the image exists, but for this demo we'll simplify it.
    const imageUrl = `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${imageKey}`;
    
    // For demo purposes, we'll use a default image for certain IDs
    if (headlineId === '6') {
      // Use default image for headline ID 6 (which doesn't have an image in the API)
      return of(`https://${this.bucketName}.s3.${this.region}.amazonaws.com/${this.defaultImageKey}`);
    }
    
    return of(imageUrl);
  }
}
