import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-m-and-f',
  templateUrl: './m-and-f.component.html',
  styleUrls: ['./m-and-f.component.css'],
})
export class MAndFComponent implements OnInit {
  dists: any[] = [];
  basicData: any;

  constructor(private masterService: TableServiceService) {}

  ngOnInit(): void {
    this.masterService.getdata().subscribe(
      (data: any) => {
        this.dists = data;
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );

    this.basicData = {
      labels: [
        '10:00 AM',
        '11:00 AM',
        '12:00 AM',
        '1:00 PM',
        '2:00 PM',
        '3:00 PM',
        '4:00 PM',
        '5:00 PM',
        '6:00 PM',
      ],
      datasets: [
        {
          label: 'MALE',
          backgroundColor: '#42A5F5',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 97],
        },
        {
          label: 'FEMALE',
          backgroundColor: '#FFA726',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 97],
        },
      ],
    };
  }
}
