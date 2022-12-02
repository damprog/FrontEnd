import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
  import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

declare var paypal: any;

  @Component({
    selector: 'app-paypal-payments',
    templateUrl: './paypal-payments.component.html',
    styleUrls: ['./paypal-payments.component.css']
  })
  export class PaypalPaymentsComponent implements OnInit {
    @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
    
    @Input() package:any;

    product:any;
    description:any;
    // product = {
    //   price: this.package.Price,
    //   description: 'Pakiet podstawowy oferuje spersonalizowany plan treningowy',
    //   img: '../../assets/img/main-bg.jpg'
    // }

    paidFor = false;


    constructor(){}

    ngOnInit() {

      this.checkDescription();

      this.product = {
        price: this.package.Price,
        packageName: this.package.PackageName,
        description: this.description
        // img: '../../assets/img/main-bg.jpg'
      }

      paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement)
    }

    checkDescription(){
      if(this.package.PackageName=="Podstawowy"){
        this.description='Pakiet podstawowy oferuje spersonalizowany plan treningowy';
      }
      else if(this.package.PackageName=="Rozszerzony"){
        this.description='Pakiet rozszerzony oferuje spersonalizowany plan treningowy oraz odpowiednio dobraną dietę';
      }else if(this.package.PackageName=="Rozszerzony+"){
        this.description='Pakiet rozszerzony+ oferuje spersonalizowany plan treningowy oraz odpowiednio dobraną dietę. Dodatkowo pakiet ten obejmuje usługę konsultacji z trenerem personalnym. Usługa obejmuje miesiąc czasu. Konsultacje mogą rozjaśnić informacje dotyczące treningu, diety oraz kształcą z zakresu zdrowia.';
      }
    }

  }

    