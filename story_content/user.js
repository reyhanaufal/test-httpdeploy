window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwkmDa09ErqtkHmA9yixCtjAcQjKhEMOgyig_wbS2gK8unma_xM-k-j6PgWa2TMAPw/exec";
const player = GetPlayer();

// Ambil variabel dari Storyline
const data = {
  nama: player.GetVar("Nama"),
  noAbsen: player.GetVar("AbsenNo"),
  jawabanMataUang: player.GetVar("Curency"),
  jawabanPenguin: player.GetVar("JawabanPenguin")
};

// Kirim ke Apps Script
fetch(url, {
  method: "POST",
  mode: "no-cors", // tetap pakai no-cors biar gak diblok browser
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)

});
}

};
