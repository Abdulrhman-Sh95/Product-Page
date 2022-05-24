let chartBox = document.getElementsByClassName("chart")[0]
let box = document.getElementsByClassName("box")[0]
let num = document.getElementsByClassName("num")[0]
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let add = document.getElementsByClassName("add")[0]
let total = document.getElementById("total")
let result = document.getElementById("result")
let del = document.getElementsByClassName("del")[0]
let view = Array.from(document.getElementsByClassName("preview"))
let thumb = Array.from(document.querySelectorAll(".thumbnail .box"))
let baIcon = document.getElementsByClassName("fa-bars")[0]
let tiIcon = document.getElementsByClassName("fa-times")[0]
let list = document.querySelector("header .container .left-side nav ul")
let next = document.querySelector("#next")
let pri = document.querySelector("#privous")
let n = 0
next.addEventListener("click", () => {
    view.forEach(function(e) {
        e.classList.remove("show")
    })
    if (n < view.length - 1) {
        n++
        view[n].classList.add("show")
    } else {
        n = 0
        view[n].classList.add("show")
    }
    
})
pri.addEventListener("click",function() {
    view.forEach(function(e) {
        e.classList.remove("show")
    })
    if (n == 0) {
      view[view.length - 1].classList.add("show")
      n++   
    } else {
        n++
        view[view.length - n].classList.add("show")
        if (n == 4) {
            n = 0
        }
    }
})
chartBox.addEventListener("click",function(e) {
    box.classList.toggle("show")
})
plus.addEventListener("click",function() {
    num.textContent++
})
minus.addEventListener("click",() => {
        if (num.textContent > 0) {
        num.textContent--
    }
    }) 
    // $125.00 x 3
add.addEventListener("click",() => {
   total.innerText = `$125.00 x ${num.textContent}`
   result.innerText = `$${125 * num.innerText}.00` 
}) 
del.addEventListener("click",() => {
    total.innerText = "No Item Add"
    result.innerText = ""
})
thumb.forEach((e) => {
    e.onclick = (function() {
    let img = e.children[0].dataset.num
    for (i=0 ; i < view.length ; i++) {
        view[i].classList.remove("show") 
        if (view[i].id == img) {
            view[i].classList.add("show") 
        }
    }
     thumb.forEach((e) => {
        e.classList.remove("selected")
     })
     e.classList.add("selected")
 })
})
baIcon.addEventListener("click",() => {
    baIcon.style.display = "none"
    tiIcon.style.display = "block"
    list.style.left = "0%"
})
tiIcon.addEventListener("click",() => {
    tiIcon.style.display = "none"
    baIcon.style.display = "block"
    list.style.left = "-125%"
})