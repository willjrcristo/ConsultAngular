import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent implements OnInit {

  consults;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log("consults.component.ngOnInit");
    this.apiService.getConsults().subscribe((data)=>{
      console.log(data);
      this.consults = data;
    });
  }

}
