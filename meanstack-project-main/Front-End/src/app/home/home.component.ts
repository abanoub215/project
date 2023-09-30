import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allProducts: any[]=[]
  constructor(private homeProductServ: HomeService) {}

  ngOnInit(): void {
    this.homeProductServ.getAllProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.allProducts=data
      },
    });
  }

  toggleDetails(productId: number) {
    console.log(productId);
    for (const item of this.allProducts) {
      if (item.id == productId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }

  private searchval: string = '';

  search(productName: string) {
    this.homeProductServ.searchAllProducts(productName).subscribe({
      next: (data) => {
        
        this.allProducts = data.product;        
        console.log(data.product);
      },
    });
  }
  set searchValue(value: string) {
    this.searchval = value;
    this.search(value);
  }
}
