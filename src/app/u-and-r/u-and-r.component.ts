import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-u-and-r',
  templateUrl: './u-and-r.component.html',
  styleUrls: ['./u-and-r.component.css'],
})
export class UAndRComponent implements OnInit {
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
          label: 'URBAN',
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
