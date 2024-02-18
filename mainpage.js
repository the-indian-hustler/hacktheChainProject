// this is for the back tot top
document.addEventListener('DOMContentLoaded', () => {
  // Your code to run when the DOM is fully loaded
  


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
const box0=document.querySelector("#box0");
const box1=document.querySelector("#box1");
const box2=document.querySelector("#box2");
const box3=document.querySelector("#box3");
const box4=document.querySelector("#box4");
const box5=document.querySelector("#box5");
const box6=document.querySelector("#box6");
const box7=document.querySelector("#box7");

const box0_var=0;
const box1_var=0;
const box2_var=0;
const box3_var=0;
const box4_var=0;
const box5_var=0;
const box6_var=0;
const box7_var=0;

box0.addEventListener("click",()=>{
  box0_var=1;
})
box1.addEventListener("click",()=>{
  box1_var=1;
})
box2.addEventListener("click",()=>{
  box2_var=1;
})
box3.addEventListener("click",()=>{
  box3_var=1;
})
box4.addEventListener("click",()=>{
  box4_var=1;

})
box5.addEventListener("click",()=>{
  box5_var=1;

})
box6.addEventListener("click",()=>{
  box6_var=1;

})
box7.addEventListener("click",()=>{
  box7_var=1;

})
box2_var=1;

let emails =["a@gmail.com","sanidhyaamazon1@gmail.com","sanidhyamadheshia@gmail.com","sanidhyam9307@gmail.com","hello@gmail.com","world@gmail.com","open@gmail.com"];
if(box0_var==1){
  const finalMails=[`${emails[0]}`];
  box0_var=0;
}else if(box1_var==1){
  const finalMails=[`${emails[1]}`];
  box1_var=0
}else if(box2_var==1){
  const finalMails=[`${emails[2]}`];
  box2_var=0;
  
}else if(box3_var==1){
  const finalMails=[`${emails[3]}`];
  box3_var=0;
  
}else if(box4_var==1){
  const finalMails=[`${emails[4]}`];
  box4_var=0;

}else if(box5_var==1){
  const finalMails=[`${emails[5]}`];
  box5_var=0;

}else if(box6_var==1){
  const finalMails=[`${emails[6]}`];
  box6_var=0;


}else if(box7_var==1){
  const finalMails=[`${emails[7]}`];
  box7_var=0;

}
module.exports={
  finalMails
}
});