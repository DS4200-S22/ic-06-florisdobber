/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modify the body of this function as described in the assignment Readme
function button1Clicked() {
    let randNum = Math.round(Math.random() * 100);
    console.log(randNum);
    document.getElementById('random_num').innerHTML = randNum;
}