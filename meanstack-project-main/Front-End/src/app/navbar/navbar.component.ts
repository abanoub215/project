import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  allProducts: any[] = [];
  private searchval: string = '';


  constructor(private navServ: NavbarService) {}

  ngOnInit(): void {
  }

  search(productName: string) {
    this.navServ.searchAllProducts(productName).subscribe({
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
