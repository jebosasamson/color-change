let button = document.querySelector('.change')
let colorValue = document.querySelector('#color-value')
let bgColor = document.querySelector('body')
let bodyButton = document.querySelector('.test')
let main = document.querySelector('main')
let container = document.querySelector('.container')


const handleRandomColor = function (){
    // hex is between 0-9 and A-F
    let color = '0123456789ABCDEF'
    let hexColorCode = '#'

    for (i=0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * 16)
        hexColorCode = hexColorCode + color[randomIndex]
    }
    return hexColorCode
}


function handleEvent(e){
    // e.stopPropagation()
    let colorResult = handleRandomColor()
    colorValue.textContent = colorResult
    bgColor.style.backgroundColor = colorResult
    // console.log(e)
}

//Add Event Listener
button.addEventListener('click', handleEvent)

function removeEventListener(){
    button.removeEventListener('click', handleEvent)
}

//Remove Event Listener
// setTimeout(removeEventListener, 5000)

// main.addEventListener('click', function(){
//     console.log('Body Button Clicked')
// })

container.addEventListener('click', function(event){
    // console.log(event)
    if (event.target.className === 'one'){
        console.log('first Button clicked')
    }
    if (event.target.className === 'two'){
        console.log('Second Button clicked')
    }
    container.addEventListener('click', function(event){
        // console.log(event)
        if (event.target.className === 'one'){
            console.log('first Button clicked')
        }
        if (event.target.className === 'two'){
            console.log('Second Button clicked')
        }
        if (event.target.className === 'test'){
            console.log('Third Button clicked')
        }
        
        if (event.target.className === 'three'){
            console.log('Fourth Button clicked')
        }
        
    })

})