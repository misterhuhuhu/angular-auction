import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor(private logger: LoggerService) {
  }

  getProduct(): Product {
    this.logger.log('服务注入进服务');
    return new Product(1, 'iPhone1', 99, '旧手机');
  }
}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public desc: string) {
  }
}
