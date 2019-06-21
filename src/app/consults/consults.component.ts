import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ConsultsService } from './consults.service';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent implements OnInit {

  consults;

  constructor(private apiService: ApiService, private consultsService: ConsultsService) { }

  ngOnInit() {
    console.log("consults.component.ngOnInit");
    this.getConsults();
    this.consultsService.change.subscribe(() => {
      console.log("Refreshing...");
      this.getConsults();
    })
  }

  getConsults(){
    this.apiService.getConsults().subscribe((data)=>{
      console.log(data);
      this.consults = data;
    });
  }

}
