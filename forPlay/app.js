let switchOne = false;
let switchTwo = false;
let switchThree = false;

function toggleSwitch(selectedSwitch) {
    
    if(selectedSwitch === switchOne) {
        if(switchOne === true){
            switchOne = false
        } else if (switchOne === false) {
            switchOne = true
        }
        
    }
    else if(selectedSwitch === switchTwo) {
        if(switchTwo === true){
            switchTwo = false
        } else if (switchTwo === false) {
            switchTwo = true
        }
       
    }
    else if(selectedSwitch === switchThree) {
        if(switchThree === true){
            switchThree = false
        } else if (switchThree === false) {
            switchThree = true
        }
     }
    console.log(switchOne, switchTwo, switchThree)
}

let h1 = document.getElementById('display')

function alternateRed(){
h1.style.color = ('red')
}