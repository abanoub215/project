import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeautyPageService } from '../beauty-page.service';

@Component({
  selector: 'app-beauty-product-details',
  templateUrl: './beauty-product-details.component.html',
  styleUrls: ['./beauty-product-details.component.css']
})
export class BeautyProductDetailsComponent implements OnInit {
  beautyProduct: any;
  constructor(
    private route: ActivatedRoute,
    private  beautyProductServ: BeautyPageService
  ) {}
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.beautyProductServ.getProductById(id).subscribe({
      next: (data) => {
        // console.log(data);
        this.beautyProduct = data;
      },
    });
  }
}
