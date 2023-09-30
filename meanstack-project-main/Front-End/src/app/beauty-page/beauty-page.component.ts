import { Component, OnInit } from '@angular/core';
import { BeautyPageService } from '../beauty-page.service';

@Component({
  selector: 'app-beauty-page',
  templateUrl: './beauty-page.component.html',
  styleUrls: ['./beauty-page.component.css']
})
export class BeautyPageComponent implements OnInit {
  allBeautyProducts: any[]=[]
  constructor(private beautyProductServ: BeautyPageService) {}

  ngOnInit(): void {
    this.beautyProductServ.getAllBeautyProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.allBeautyProducts=data
      },
    });
  }

  toggleDetails(productId: number) {
    console.log(productId);
    for (const item of this.allBeautyProducts) {
      if (item.id == productId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }

  private searchval: string = '';

  search(productName: string) {
    this.beautyProductServ.searchAllBeautyProducts(productName).subscribe({
      next: (data) => {
        
        this.allBeautyProducts = data.product;        
        console.log(data.product);
      },
    });
  }
  set searchValue(value: string) {
    this.searchval = value;
    this.search(value);
  }
}
