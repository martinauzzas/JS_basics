//==================Exercise #1 ==========//

function findWords(){
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
    let dog_names = ["Max","HAS","PuRple","dog"];
    for (let i = 0; i < dog_names.length; i++){
    if (dog_string.includes(dog_names[i])){
        console.log("Matched_dog_name")
    } else {
        console.log("No Matches")
    }
}
}

console.log(findWords())

//============Exercise #2 ============//

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i+=2){
        arr.splice([i], 1, "even")
    }
    console.log(arr)
}

replaceEvens(arr)

