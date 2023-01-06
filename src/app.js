/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function randomElement(arr) {
    let auxArr = "";
    for (let i = 0; i < 1; i++) {
      auxArr += arr[Math.floor(Math.random() * arr.length)];
    }
    return auxArr;
  }
  return (
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when)
  );
};

document.getElementById("excuse").innerHTML = onload();
