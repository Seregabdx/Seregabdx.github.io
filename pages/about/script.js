let reasons = [
    {
        title: "Крутость",
        description: "ЯЛЯЛЯЛЯЛЯЛЯ Л ЯЛЯЛЯЛЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯ",
        color: "#A03472",
        img: ""
    },
    {
        title: "Крутость",
        description: "ЯЛЯЛЯЛЯЛЯЛЯ Л ЯЛЯЛЯЛЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯ",
        color: "#D87093",
        img: ""
    },
    {
        title: "Крутость",
        description: "ЯЛЯЛЯЛЯЛЯЛЯ Л ЯЛЯЛЯЛЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯ",
        color: "#A0522D",
        img: ""
    },
    {
        title: "Крутость",
        description: "ЯЛЯЛЯЛЯЛЯЛЯ Л ЯЛЯЛЯЛЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯ",
        color: "#007BA7",
        img: ""
    },
    {
        title: "Крутость",
        description: "ЯЛЯЛЯЛЯЛЯЛЯ Л ЯЛЯЛЯЛЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯ",
        color: "#BEBD7F",
        img: ""
    },
    {
        title: "Крутость",
        description: "ЯЛЯЛЯЛЯЛЯЛЯ Л ЯЛЯЛЯЛЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯЛ ЯЛЯЛЯЛЯ",
        color: "#2F353B",
        img: ""
    }
]

let head = document.getElementsByTagName('head')[0],
    style = document.createElement('style')

let parentNode = Array.from(document.querySelectorAll('.reasons__items'))
let elementsReasons = Array.from(document.querySelectorAll('.reason-item'))
let headersReasons = Array.from(document.querySelectorAll('.reason-item__header'))
let textReasons = Array.from(document.querySelectorAll('.reason-item__text'))


reasons.map((item, index) => {
    rules = document.createTextNode(`.reason-item:nth-child(${index+1}):hover {background-color: ${item.color};}`);
    if (style.styleSheet)
        style.styleSheet.cssText = rules.nodeValue    
    else
        style.appendChild(rules);
    head.appendChild(style);
})

const swiper = new Swiper('.swiper', {
    observer: true,
    observeParents: true,
    speed: 400,
    slidesPerView: "auto",
    draggable: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    // breakpoints: {
    //     320: {
    //       slidesPerView: 1,
          
    //     },
    //     900: {
    //       slidesPerView: 2,
    //     },
    //     1300: {
    //       slidesPerView: 3,
          
    //     }
    //   }
  });



    