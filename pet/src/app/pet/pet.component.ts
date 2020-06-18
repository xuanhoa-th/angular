import { Component } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
    petName = 'puppie';
    petImage = 'https://img.etimg.com/thumb/msid-72270042,width-1200,height-900,imgsize-623703,overlay-etpanache/photo.jpg'
  constructor() { }
  updateName(name){
    this.petName = name;
  }
 updateImage(image){
  this.petImage = image;
 }
  }


