const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const page3 = document.getElementById("page3")
const page4 = document.getElementById("page4")
const lystivka = document.getElementById("lystivka")

if(window.innerWidth > 800) {
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
} else {
    page1.onclick =()=>{
        lystivka.style.transform = "translate(calc(12.5vw - 50%), 10vh)"
        page1.style.transform = "translate(100%, 0)"
        setTimeout(()=>{
            page1.style.zIndex = '-1'
            page2.style.zIndex = "4"
            lystivka.style.transform = "translate(12.5vw, 10vh)"
            page1.style.transform = "translate(0, 0)"
        }, 400)
    }

    page2.onclick =()=>{
        lystivka.style.transform = "translate(calc(12.5vw - 50%), 10vh)"
        page2.style.transform = "translate(100%, 0)"
        setTimeout(()=>{
            page2.style.zIndex = '-2'
            page3.style.zIndex = "3"
            lystivka.style.transform = "translate(12.5vw, 10vh)"
            page2.style.transform = "translate(0, 0)"
        }, 400)
    }

    page3.onclick =()=>{
        lystivka.style.transform = "translate(calc(12.5vw - 50%), 10vh)"
        page3.style.transform = "translate(100%, 0)"
        setTimeout(()=>{
            page3.style.zIndex = '-3'
            page4.style.zIndex = "2"
            lystivka.style.transform = "translate(12.5vw, 10vh)"
            page3.style.transform = "translate(0, 0)"
        }, 400)
    }

    page4.onclick =()=>{
        lystivka.style.transform = "translate(calc(12.5vw - 50%), 10vh)"
        page4.style.transform = "translate(100%, 0)"
        setTimeout(()=>{
            page4.style.zIndex = '-4'
            page1.style.zIndex = "5"
            lystivka.style.transform = "translate(12.5vw, 10vh)"
            page4.style.transform = "translate(0, 0)"
        }, 400)
    }
}