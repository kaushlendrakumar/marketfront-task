import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  appDetails = {
    notFoundImage: 'https://www.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg',
    userName: 'Kaushlendra',
    userAvtar: 'https://p7.hiclipart.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg',
    itemList: [
      {
        id:"1",
        projectName: "Purva Atmosphere",
        projectImg: "../../../../../assets/images/project1.jpg",
        projectLocation: "Thanisandra Road, Bangalore",
        startDate: "24 Sep' 19",
        priceRange: {
          minPrice: 56.20,
          maxPrice: 78.40,
        },
        priceUnit: 'L',
        plotList: [
          {
            id:"p1",
            plotName: "Plot 1",
            plotImg: "../../../../../assets/images/pl1.gif",
            plotLocation: "JP Nagar, 5th Phase",
            price: 56.20,
            priceUnit: 'L',
            unit: '2 BHK',
            area: '1000 sq ft',
            propertyType: 'Apartment',
            launchedDate: 'May 2019',
            ameneties: [
              {
                image: '../../../../../assets/images/ame/cafe.svg',
                name: 'Cafetaria'
              },
              {
                image: '../../../../../assets/images/ame/sports.svg',
                name: 'Sports Ground'
              },
              {
                image: '../../../../../assets/images/ame/gym.svg',
                name: 'Gym'
              }
            ],
            tax: 200,
            total: 56.20,
            isAvailable: true
          },
          {
            id:"p2",
            plotName: "Plot 2",
            plotImg: "../../../../../assets/images/pl2.jpeg",
            plotLocation: "JP Nagar, 5th Phase",
            price: 78.40,
            priceUnit: 'L',
            unit: '3 BHK',
            area: '3200 sq ft',
            propertyType: 'Apartment',
            launchedDate: 'May 2019',
            ameneties: [
              {
                image: '../../../../../assets/images/ame/cafe.svg',
                name: 'Cafetaria'
              },
              {
                image: '../../../../../assets/images/ame/sports.svg',
                name: 'Sports Ground'
              },
              {
                image: '../../../../../assets/images/ame/gym.svg',
                name: 'Gym'
              }
            ],
            tax: 200,
            total: 78.20,
            isAvailable: true
          }
        ]
      },
      {
        id:"2",
        projectName: "Provident Sunworth",
        projectImg: "../../../../../assets/images/project2.jpg",
        projectLocation: "Mysore Road, Bangalore",
        startDate: "24 Aug' 19",
        priceRange: {
          minPrice: 35.20,
          maxPrice: 56.40,
        },
        priceUnit: 'L',
        plotList: [
          {
            id:"p1",
            plotName: "Plot 1",
            plotImg: "../../../../../assets/images/pl3.jpg",
            plotLocation: "JP Nagar, 5th Phase",
            price: 56.20,
            priceUnit: 'L',
            unit: '2 BHK',
            area: '1200 sq ft',
            propertyType: 'Apartment',
            launchedDate: 'Jun 2019',
            ameneties: [
              {
                image: '../../../../../assets/images/ame/party.svg',
                name: 'Party Hall'
              },
              {
                image: '../../../../../assets/images/ame/library.svg',
                name: 'Library'
              },
              {
                image: '../../../../../assets/images/ame/gym.svg',
                name: 'Gym'
              }
            ],
            tax: 200,
            total: 56.40,
            isAvailable: true
          },
          {
            id:"p2",
            plotName: "Plot 2",
            plotImg: "../../../../../assets/images/pl2.jpeg",
            plotLocation: "JP Nagar, 5th Phase",
            price: 35.40,
            priceUnit: 'L',
            unit: '3 BHK',
            area: '3200 sq ft',
            propertyType: 'Apartment',
            launchedDate: 'May 2019',
            ameneties: [
              {
                image: '../../../../../assets/images/ame/cafe.svg',
                name: 'Cafetaria'
              },
              {
                image: '../../../../../assets/images/ame/sports.svg',
                name: 'Sports Ground'
              },
              {
                image: '../../../../../assets/images/ame/gym.svg',
                name: 'Gym'
              }
            ],
            tax: 200,
            total: 35.60,
            isAvailable: true
          }
        ]
      }
    ],
    selectedProject: '',
    selectedPlot: '',
    shippingDetails: {
      name: '',
      email: '',
      address: '',
      city: '',
      pin: '',
    },
    paymentDetails: {
      cardMethod: 'card',
      cardHolderName: '',
      cardNuber: '',
      exp: ''
    }
  }

  constructor(private router: Router) { }

  // start redirectToPage
  redirectToPage(destination) {
    switch (destination) {
      case 'plots':
        this.router.navigate(["/plots"]);
        break;
      case 'details':
        this.router.navigate(["/details"]);
        break;
      case 'payment':
        this.router.navigate(["/payment"]);
        break;
      case 'otp':
        this.router.navigate(["/otp"]);
        break;
      case 'success':
        this.router.navigate(["/success"]);
        break;
      default:
        this.router.navigate(["/"]);
    }
  }
  // end redirectToPage
  
}
