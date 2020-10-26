/* 
 * [0,1,0,0,0,0,2,0,3]
 * batting average = .333
 * slugging % = .667
 */
let stats = [];
let batter = prompt("Enter the player's name:");
let atBats = Number(prompt("Enter the number of at bats for this player"));
let hits = 0;
let singles =0, doubles = 0, triples = 0, homers = 0;
for (i = 0;i < atBats; i++){
stats.push(Number(prompt("Enter the result for  "+ batter + " at bats:")));
}
document.write("Baseball statistics program<br><br>");
for (index = 0;index < stats.length; index++){
    if (stats[index] > 0)
    {hits++;}}

let batAvg = hits/stats.length;

for (i =0; i < stats.length; i++){
    if (stats[i]=== 1)
    {singles++;}
    if (stats[i] === 2)
    {doubles++;}
    if (stats[i]=== 3)
    {triples++;}
    if (stats[i]=== 4)
    {homers++;}
}

let sluggingPct = (singles + 2*doubles+ 3*triples + 4*homers)/ stats.length;

document.write("<br>"+ batter);
document.write("<br>"+ batAvg.toFixed(3)+" batting average");
document.write("<br>Slugging % "+ sluggingPct.toFixed(3));