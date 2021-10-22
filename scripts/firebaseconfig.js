(function (window) {
    'use strict';
var App = window.App || {};


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var Firebaseconfig = {
    apiKey: "AIzaSyDcURNxZH-4hUP3ysR5pq3QCoA490KGo7M",
    authDomain: "cofferun-fa032.firebaseapp.com",
    projectId: "cofferun-fa032",
    storageBucket: "cofferun-fa032.appspot.com",
    messagingSenderId: "639225777020",
    appId: "1:639225777020:web:217fbea58e70f9823a32f9",
    measurementId: "G-M6KP3RHHSK"
  };

App.Firebaseconfig = Firebaseconfig;
firebase.initializeApp(App.Firebaseconfig);

window.App = App;

})(window);