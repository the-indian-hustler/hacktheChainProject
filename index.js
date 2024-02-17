// this is for the back tot top

let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

//this is for the top nav menu

let menuthings = document.getElementsByClassName('menu-thing')

Array.from(menuthings).forEach((thing, index) => {
    thing.onclick = (e) => {
        let currMenu = document.querySelector('.menu-thing.active')
        currMenu.classList.remove('active')
        thing.classList.add('active')
    }
})

// this is for the college category

let collegeMenuList = document.querySelector('.college-thing-wrap')

let collegeCategory = document.querySelector('.college-category')

let categories = collegeCategory.querySelectorAll('button')

Array.from(categories).forEach((thing, index) => {
    thing.onclick = (e) => {
        let currCat = collegeCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        collegeMenuList.classList ='college-thing-wrap '+ e.target.getAttribute('data-college-type')
    }
})

// this is for the on scroll animation

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((thing, index) => {
        if (isElInViewPort(thing)) {
            thing.classList.add('start')
        } else {
            thing.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()

//this is for the  mobile nav

let bottomNavthings = document.querySelectorAll('.mb-nav-thing')

let bottomMove = document.querySelector('.mb-move-thing')

bottomNavthings.forEach((thing, index) => {
    thing.onclick = (e) => {
        console.log('object')
        let crrthing = document.querySelector('.mb-nav-thing.active')
        crrthing.classList.remove('active')
        thing.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})