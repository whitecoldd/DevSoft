import { Product } from "src/models/product.model";

export class ProductService {
    getProducts(): Product[] {
        const prodArr: Product[] = [];

        prodArr.push({
            description: 'This is a sample product',
            name: 'PAPUA NEW GUINEA SIGRI MEDIUM SINGLE ORIGIN ROAST COFFEE',
            discountPrice: 4.95,
            price: 14.95,
            sku: 'prod-3',
            stock: 5,
            pictureUrls: ['./assets/prod3.png']
        });

        prodArr.push({
            description: 'This is a sample product',
            name: 'SUMATRA MANDHELING MEDIUM ROAST SINGLE ORIGIN COFFEE',
            discountPrice: 5.55,
            price: 15.55,
            sku: 'prod-2',
            stock: 5,
            pictureUrls: [
                './assets/prod2.png'
            ]
        });

        prodArr.push({
            description: 'This is a sample product',
            name: 'BALI BLUE MOON SINGLE ORIGIN DARK ROAST COFFEE',
            discountPrice: 6.95,
            price: 16.96,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                './assets/prod1.png'
            ]
        });


        return prodArr;
    }
}