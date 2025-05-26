import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QRCodeComponent implements OnInit, OnDestroy {
  @Input() url: string = '';
  qrCodeUrl: string = '';
  qrSize: string = '100x100';
  
  // Device breakpoints
  private readonly sizes = {
    mobileS: 320,
    mobileL: 425,
    tablet: 768
  };

  constructor() { }

  ngOnInit(): void {
    this.updateQRSize();
    this.generateQRCode();
  }

  ngOnDestroy(): void {
    // Clean up any resources if needed
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateQRSize();
    this.generateQRCode();
  }

  private updateQRSize(): void {
    const width = window.innerWidth;
    
    if (width <= this.sizes.mobileS) {
      this.qrSize = '50x50';
    } else if (width <= this.sizes.mobileL) {
      this.qrSize = '60x60';
    } else if (width <= this.sizes.tablet) {
      this.qrSize = '80x80';
    } else {
      this.qrSize = '100x100';
    }
  }

  private generateQRCode(): void {
    // Encode the URL for use in the QR code API
    const encodedUrl = encodeURIComponent(this.url);
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${this.qrSize}&data=${encodedUrl}`;
  }
}
