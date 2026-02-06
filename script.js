const neiBtn = document.getElementById("neiBtn");
const jaBtn = document.getElementById("jaBtn");

const jaTekster = [
    "Ja",
    "E du sikker?",
    "Si ja!",
    "Virkelig??",
    "JA 😅",
    "Pls ja 🥺",
    "JA!! 😍 (Du har kje noe valg mohaha)"
];

let indeks = 0;
let neiKlikk = 0;

// Klikk på JA → ny side
jaBtn.addEventListener("click", () => {
    window.location.href = "ja.html";
});

neiBtn.addEventListener("click", () => {
    neiKlikk++;

    // Endre tekst på Ja
    indeks = (indeks + 1) % jaTekster.length;
    jaBtn.value = jaTekster[indeks];

    // Gjør Ja større
    const size = window.getComputedStyle(jaBtn).fontSize;
    jaBtn.style.fontSize = (parseFloat(size) + 6) + "px";
    jaBtn.style.padding = "20px 40px";

    // Etter 6 klikk → NEI BAK JA 😈
    if (neiKlikk >= 6) {
          neiBtn.style.display = "none";

        neiBtn.style.position = "absolute";
        neiBtn.style.left = jaBtn.offsetLeft + "px";
        neiBtn.style.top = jaBtn.offsetTop + "px";
    }
});
