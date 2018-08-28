import { Component, OnInit } from "@angular/core";
import { Folder } from "../models/folder.model";
import { AstMemoryEfficientTransformer } from "../../../node_modules/@angular/compiler";
import { assertDataInRangeInternal } from "../../../node_modules/@angular/core/src/render3/util";
@Component({
  selector: "app-folders",
  templateUrl: "./folders.component.html",
  styleUrls: ["./folders.component.css"]
})
export class FoldersComponent implements OnInit {
  public folders: Folder[] = [
    {
      title: "google",
      rank: 0,
      published: true,
      id: '151617',
      ip: "https://www.google.com",
      img: "https://pbs.twimg.com/profile_images/781203065454022674/DghC5a3s.jpg" 
    },
    {
      title: "facebook",
      rank: 1,
      published: true,
      id: '252627',
      ip: "https://www.facebook.com",
      img:"https://www.facebook.com/images/fb_icon_325x325.png"
    },
    {
      title: "yahoo",
      rank: 2,
      published: true,
      id: '353637',
      ip: "https://www.yahoo.com",
      img: "https://fr.ubergizmo.com/wp-content/uploads/2012/07/Yahoo-Y-logo-640.jpg"
    },
    {
      title: "twitter",
      rank: 3,
      published: true,
      id: '33637',
      ip: "https://www.twitter.com",
      img: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1259px-Twitter_Bird.svg.png"
    }
  ];

  public toDelete = false;
  public toConfirme = false;
  public toOpen = false;
  public clickedId : string;
  public clickedIp: string;
  constructor() {}
  ngOnInit() {}

   showDelete(clickedId) {
     this.toDelete = true;
     this.clickedId=clickedId;
    }
  showConfirme(clickedId:string) {
    this.toConfirme = true;
    this.clickedId=clickedId;
}
delete(clickedId:string) {
  this.folders= this.folders.filter((myTit) => myTit.id !== this.clickedId)
  this.toDelete=false;
  this.clickedId= null;
 }
 onNavigate(clickedIp:string){
  window.open(clickedIp); 
 }
showOpen(clickedIp){
this.toOpen=true;
 this.onNavigate(clickedIp)
}
}
