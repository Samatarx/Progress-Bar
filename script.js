const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// querySelectorAll returns an array of all classes
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++

    //prevents circle going beyond the number of circles
    if (currentActive > circles.length){
        currentActive = circles.length;
    }

    //calls the update function
    update()
})

prev.addEventListener('click', ()=>{
    currentActive--

    //prevents circle going beyond the number of circles
    if (currentActive < 1){
        currentActive = 1;
    }

    update()
})

function update() {
    //iterates through the circles class array
    circles.forEach((circle,index) => {
        //if statement is used to move the progress bar
        if (index< currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    //Modifies the colour of the progress bar
    progress.style.width = ((actives.length-1) / (circles.length-1))*100 + '%'

    //Alters the selectability of the progress bar by moving the disabled property in relation to where the progress is
    if (currentActive === 1 ){
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}