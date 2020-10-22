/* 
 * [0,1,0,0,0,0,2,0,3]
 * batting average = .333
 * slugging % = .667
 */

let batter = prompt("Enter the player's name:");
let atBats = [];
let hits = 0;
let singles =0, doubles = 0, triples = 0, homers = 0;
for (i = 0;i < 9; i++){
atBats.push(Number(prompt("Enter the at bats")));
}
document.write("Baseball statistics program<br><br>");
for (index = 0;index < atBats.length; index++){
    if (atBats[index] > 0)
    {hits++;}}

let batAvg = hits/atBats.length;

for (i =0; i < atBats.length; i++){
    if (atBats[i]=== 1)
    {singles++;}
    if (atBats[i] === 2)
    {doubles++;}
    if (atBats[i]=== 3)
    {triples++;}
    if (atBats[i]=== 4)
    {homers++;}
}

let sluggingPct = (singles + 2*doubles+ 3*triples + 4*homers)/ atBats.length;

document.write("<br>"+ batter);
document.write("<br>"+ batAvg.toFixed(3)+" batting average");
document.write("<br>Slugging % "+ sluggingPct.toFixed(3));