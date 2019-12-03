import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBEkxxOgZmQ3Druz9TlQ29XFKkODlYpvBg",
      authDomain: "library-app-firebase.firebaseapp.com",
      databaseURL: "https://library-app-firebase.firebaseio.com",
      projectId: "library-app-firebase",
      storageBucket: "library-app-firebase.appspot.com",
      messagingSenderId: "203154274818",
      appId: "1:203154274818:web:b8ed1364ffa8af1808c51b",
      measurementId: "G-2W86D0Q0JG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
