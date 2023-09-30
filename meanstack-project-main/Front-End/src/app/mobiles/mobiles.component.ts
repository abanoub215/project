import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent implements OnInit {
  allMobiles: any[]=[];

  constructor(private mobserv: MobilesService) {}

  ngOnInit(): void {
    this.mobserv.getAllMobiles().subscribe({
      next:(data)=>{
        console.log(data);
        this.allMobiles = data;
      },
    });
  }

  toggleDetails(Mobileid: number) {
    for (const item of this.allMobiles) {
      if (item.id == Mobileid) {
        item.toggledetails = !item.toggledetails;
      }
    }
  }
}
