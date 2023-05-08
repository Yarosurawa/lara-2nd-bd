const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const page3 = document.getElementById("page3")
const page4 = document.getElementById("page4")
const lystivka = document.getElementById("lystivka")

page1.onclick = ()=>{
    page1.style.transform = "rotate3d(0, 1, 0, 180deg) translate(100%, 0)"
    page2.style.transform = "rotate3d(0, 1, 0, 180deg) translate(100%, 0)"
    lystivka.style.transform = "translate(50vw, 100px)"
    setTimeout(()=>{
        page1.style.zIndex = "-1"
    }, 200) 
}

page2.onclick =()=>{
    page1.style.transform = ""
    page2.style.transform = ""
    lystivka.style.transform = "translate(calc(50vw - 50%), 100px)"
    setTimeout(()=>{
        page1.style.zIndex = "4"
    }, 200) 
}

page3.onclick = ()=>{
    page3.style.transform = "rotate3d(0, 1, 0, 180deg) translate(100%, 0)"
    page4.style.transform = "rotate3d(0, 1, 0, 180deg) translate(100%, 0)"
    lystivka.style.transform = "translate(calc(50vw + 50%), 100px)"
    setTimeout(()=>{
        page3.style.zIndex = "-2"
        page4.style.zIndex = "5"
    }, 200) 
}

page4.onclick =()=>{
    page3.style.transform = ""
    page4.style.transform = ""
    lystivka.style.transform = "translate(50vw, 100px)"
    setTimeout(()=>{
        page3.style.zIndex = "2"
        page4.style.zIndex = "-5"
    }, 200) 
}