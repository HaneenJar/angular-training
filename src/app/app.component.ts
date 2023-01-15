import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
//   styles:[`
//     .kk{
//       color:red
//     }
// `  ]
})
export class AppComponent {
  gender:string=''
  DataArray:any[]=[]
  title = 'trainning-app';
  binding:any;
  name:string="haneen"
  position:String="computer Engineer"
xxx:any;

@ViewChild('someInput') someInput!: ElementRef;

  onAdd(){
    this.DataArray.push(
{
  name:this.name,
  position:this.position,
  gender:this.gender
}
    )
  }
}
