const getElement = (selector)=>{
  const element = document.querySelector(selector);
  if(element) return element
  throw Error(
    `${selector} no element found with this name`
  )
}

let toggleBtnDOM = getElement('.nav-btn');
let navLinks = getElement('.nav-links');
toggleBtnDOM.addEventListener('click',()=>{
   navLinks.classList.toggle('show-links');
})


let date = getElement('#date');
let currentYear = new Date().getFullYear();
date.innerText = currentYear;








































// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-lks')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// const date = getElement('#date')
// const currentYear = new Date().getFullYear()
// date.textContent = currentYear
