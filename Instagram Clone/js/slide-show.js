const slideContainer = document.querySelector('.instagram-in-app')
const imagesShow = slideContainer.querySelectorAll('img')
// those DOM variables are used for achieving the images which are slides in app.

let slideCount = imagesShow.length // slideCount is used for max value of index.
let activeSlide = 0 // activeSlide is used for inital value of imagesShow const.
let transitionDelay = 3000 // transitionDelay is used for setInterval.

// To change the images dynamically every 1.5 Secs, use SetInterval() method. 
setInterval(() => {
    imagesShow[activeSlide].classList.remove('visible')
    activeSlide++
    if(activeSlide === slideCount){
        activeSlide = 0
    }
    imagesShow[activeSlide].classList.add('visible')
}
, transitionDelay)
