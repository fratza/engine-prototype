import { Component, OnInit } from '@angular/core';
import { EngineApiService } from './services/engine-api.service';
import { Headline } from './models/headline.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headline: Headline | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(private engineApiService: EngineApiService) {}

  ngOnInit(): void {
    this.loadRandomHeadline();
  }

  loadRandomHeadline(): void {
    this.loading = true;
    this.error = null;

    this.engineApiService.getRandomHeadline().subscribe({
      next: (headline) => {
        this.headline = headline;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading headline:', err);
        this.error = 'Failed to load news headline. Please try again later.';
        this.loading = false;
      }
    });
  }
}
