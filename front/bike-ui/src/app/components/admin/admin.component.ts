import { Component, OnInit } from '@angular/core';
import { IBike } from 'src/app/models/bike';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public bikes: any;

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe({
      next: (data) => {
        this.bikes = data;
      },
      error: (err) => console.error(err),
      complete: () => console.log('Bikes loaded'),
    });
  }
}
