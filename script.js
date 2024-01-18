let prev = document.getElementById('prev')
let next = document.getElementById('next')
let progress = document.getElementById('progress')
let circles = document.querySelectorAll('.circle')

let currentActive = 1
function update () {
    circles.forEach((circles, index) =>{
        if(index < currentActive){
            circles.classList.add('active')
        }else{
            circles.classList.remove('active')
        }
    })

}
function updateProgress () {
    if(currentActive === 1){
        progress.style.width = '0%'
    } else if(currentActive === 2){
        progress.style.width = '33%'
    } else if(currentActive === 3){
        progress.style.width = '66%'
    } else{
        progress.style.width = '100%'
    }
}
const enable = () =>{
    if(currentActive === circles.length){
        next.disabled = true;
    } else{
         next.disabled = false;
    }
}
const disabled = () =>{
    if(currentActive === 1){
        prev.disabled = true
        next.disabled = false;
    }else{
        prev.disabled = false;
    }
}

next.addEventListener('click',() => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
    updateProgress()
    enable()
    disabled()

})
prev.addEventListener('click',() => {
    currentActive-- 

    if(currentActive < 1){
        currentActive = 1
    }
    update()
    updateProgress()
    enable()
    disabled()


})

