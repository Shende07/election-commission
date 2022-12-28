import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { TableServiceService } from '../table-service.service';
@Component({
  selector: 'app-ele',
  templateUrl: './ele.component.html',
  styleUrls: ['./ele.component.css'],
})
export class EleComponent implements OnInit {
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
        '6:00 PM'
      ],
      datasets: [
        {
          label: 'VOTING PERCENTAGE',
          backgroundColor: '#42A5F5',
          data: [10,20,30,40,50,60,70,80,97],
        }
      ],
    };
  }
}