/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

const suits = ["♦", "♥", "♠", "♣"];
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function getRandomSuit() {
  const randomSuit = Math.floor(Math.random() * suits.length);
  return suits[randomSuit];
}

function getRandomRank() {
  const randomRank = Math.floor(Math.random() * ranks.length);
  return ranks[randomRank];
}

function generateCard() {
  const randomRank = getRandomRank();
  document.getElementById("middle").textContent = randomRank;

  const randomSuit = getRandomSuit();
  document.getElementById("top").textContent = randomSuit;
  document.getElementById("bottom").textContent = randomSuit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.getElementById("top").style.color = "red";
    document.getElementById("bottom").style.color = "red";
  } else {
    return;
  }
}
window.onload = generateCard;
// onclick = generateCard;
