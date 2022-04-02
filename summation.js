const scores = [];
let sum = 0;


function summation()
{
    const count = prompt("How many number");
    for (let i = 0; i < count; i++) {
    const score = Number(prompt("number : "));
    scores.push(score);
    sum += score;
    }
    console.log(`the sum is equal to :${sum}`);
}
summation();

