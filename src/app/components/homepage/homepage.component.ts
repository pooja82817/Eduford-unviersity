import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  cards = data.course_cards
  
  cards2 = [
    {
      img:'assets/img/london.png',
      name:'LONDON',
      
    },
    {
      img:'assets/img/newyork.png',
      name:'NEWYORK',
      
    },
    {
      img:'assets/img/washington.png',
      name:'WASHINGTON',
      
    },
  ]
  cards3 = data.facilities_cards
  

  reviewCards = [
    {
      img:'assets/img/user1.jpg',
      name:'Anamika Saha',
      comment:'“Eduford is home to me not because of the fancy buildings like Healy Hall, or its prestigious reputation, but rather because of the university’s care for the whole person as each of us attempts to live our lives for others.”',
      stars:[
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fa-regular fa-star'
      ]
    },
    {
      img:'assets/img/user2.jpg',
      name:'Abhishek Roy',
      comment:'“It’s likely that you will come to love some of the most amazing souls this campus has to offer. That love may come in the form of friendships that you know will last forever.”',
      stars:[
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star-half-stroke'
      ]
    }
  ]

}
