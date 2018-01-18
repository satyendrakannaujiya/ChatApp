import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { IonicNativePlugin } from '@ionic-native/core';
// import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chat",
  templateUrl: "chat.html"
})
export class ChatPage {
  username: string = "";
  message: string = "";
  s;
  messages: object[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.username = this.navParams.get("username");
    console.log(this.navParams);
    this.db
      .list("/chat")
      .valueChanges()
      .subscribe(data => {
        this.messages = data;
        // console.log(data);
        // data.map(ele => {
        //   this.messages.push(ele);
        //   console.log(ele.message);
        // });
      });
  }
  sendMessage() {
    this.db
      .list("/chat")
      .push({
        username: this.username,
        message: this.message
      })
      .then(
        () => {
          //ddjfdjf
        },
        err => {
          console.log("rejectedt");
        }
      );
    this.message = "";
  }
  ionViewWillLeave() {
    console.log("user is about to go");
    this.s.unsubscribe();
    this.db.list("/chat").push({
      specialMessage: true,
      message: `${this.username} has left the chat`
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ChatPage");
    this.db.list("/chat").push({
      specialMessage: true,
      message: `${this.username} has joined the chat`
    });
  }
}
