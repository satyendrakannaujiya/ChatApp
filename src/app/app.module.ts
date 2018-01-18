import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { ChatPage } from "../pages/chat/chat";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AngularFireModule } from "angularfire2";
import { IonicNativePlugin } from "@ionic-native/core";
import { Observable } from "rxjs/Observable";

import { AngularFireDatabaseModule } from "angularfire2/database";
import { Firebase } from "@ionic-native/firebase";
import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyD_4ZVx-jHaYB3JjCaKaSrnWvcSh3asmtc",
  authDomain: "chatapp-fc404.firebaseapp.com",
  databaseURL: "https://chatapp-fc404.firebaseio.com",
  projectId: "chatapp-fc404",
  storageBucket: "chatapp-fc404.appspot.com",
  messagingSenderId: "449127589817"
};

@NgModule({
  declarations: [MyApp, HomePage, ChatPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ChatPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
