import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const GALERIAELEM = document.getElementsByClassName("galeria");
/* írd bele az összeálíltott html képsorozatot */
GALERIAELEM[0].innerHTML = htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const NAGYKEP = document.querySelector(".nagykep img");
/* A .nagykep div megfogása */
const NAGYKEPDIV = document.getElementsByClassName("nagykep div");
/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const KISKEPEKEK = document.querySelectorAll(".kep img");
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < KISKEPEKEK.length; index++) {
  KISKEPEKEK[index].addEventListener("click", function (event) {
    NAGYKEP.src = event.target.src;
    aktindex = index;
  });
}
/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const JOBBGOMB = document.querySelector(".jobb");
const BALGOMB = document.querySelector(".bal");

let aktindex = 0;
JOBBGOMB.addEventListener("click", function () {
  if (aktindex > KEPEK.length - 1) {
    aktindex = 0;
  }
  aktindex++;
  NAGYKEP.src = KEPEK[aktindex].kep;
});

BALGOMB.addEventListener("click", function () {
  if (aktindex < 0) {
    aktindex = 7;
  }
  aktindex--;
  NAGYKEP.src = KEPEK[aktindex].kep;
});
