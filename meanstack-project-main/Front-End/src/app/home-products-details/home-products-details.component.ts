import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-products-details',
  templateUrl: './home-products-details.component.html',
  styleUrls: ['./home-products-details.component.css'],
})
export class HomeProductsDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private homeProductServ: HomeService
  ) {}
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.homeProductServ.getProductById(id).subscribe({
      next: (data) => {
        // console.log(data);
        this.product = data;
      },
    });
  }
}
