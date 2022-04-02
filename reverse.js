let scores = [].reverse();
let sum = 0;
function rev()
{
const count = prompt("How many numbers");
for (let i = 0; i < count; i++)
{
const score = Number(prompt("number" + i));
scores.push(score);
}

console.log("Reversed array is : " + scores );

}

rev();

var arr = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + arr ); 


