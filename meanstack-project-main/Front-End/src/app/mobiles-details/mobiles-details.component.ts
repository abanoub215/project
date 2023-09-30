
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobilesService } from '../mobiles.service';

@Component({
  selector: 'app-mobiles-details',
  templateUrl: './mobiles-details.component.html',
  styleUrls: ['./mobiles-details.component.css']
})
export class MobilesDetailsComponent implements OnInit {
  mobile:any;
  constructor(
    private route: ActivatedRoute,private mobServ:MobilesService 
  ) {}
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.mobServ.getMobileById(id).subscribe({next: (data) =>{
      console.log(data);
      this.mobile=data;
  },
});
  }
}

