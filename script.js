
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});


// Collect all images and run a loop to set width to 300px
let imgCollection = document.querySelectorAll('img');

for(imgs of imgCollection) {
    imgs.style.width = ('300px')
}

const DBZ = ['BEERUS', 'BUU', 'CELL', 'CHICHI', 'FREEZA', 'GERO', 'KAMI', 'SHENTRON', 'SHIN', 'GOKU', 'VEGETA', 'TIEN'];

function addToCart(name) {
    if(DBZ.includes(name)){
        console.log('True')
    }else{
        console.log('False')
    }
}

const container1 = document.querySelector('main')

container1.addEventListener('click', function(event){
    event.preventDefault();
    // console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON'){
        // console.log('true')
        const selectedElement = event.target.getAttribute('data-name')
        console.log(selectedElement);
        addToCart(selectedElement)
        // addToCart('BEERUS')
    } else {
        console.log('false')
    }
})



