import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    {name:'Buisness Analytics',value:'21'},
    {name:'Technologies',value:'20'},
    {name:'Database Analytics',value:'11'},
    {name:'Artificial Intellegence',value:'15'},
    {name:'Machine Learning',value:'16'},
    {name:'Covid-19 Analytics',value:'41'},
  ]

  programs = [
    'In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.',
    'In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.',
    'In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.',
  ]

}
