import { Component, OnInit } from '@angular/core';
import { About } from 'src/models/about.model';
import { Product } from 'src/models/product.model';
import { AboutService } from 'src/services/about.services';
import { ProductService } from 'src/services/product.services';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class HomePage implements OnInit {
  private productService: ProductService = new ProductService();

  public products: Product[] = [];

  private aboutService: AboutService = new AboutService();

  public about: About[] = [];

  constructor(
    private router: Router
) {}

  ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.about = this.aboutService.getAbout();
  }


  public onProductClick(prod: Product) {
    this.router.navigate(['/products']);
}

}
