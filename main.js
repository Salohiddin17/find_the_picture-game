$(document).ready(function(){
    
    $('img').click(function(event) {
        let target = event.target

        if(target.alt == input.placeholder){
            target.style.display = "none"
            heading.textContent = "Siz topdingiz!"
        }
        
        else if (target.alt != input.placeholder){
            heading.textContent = "Siz topa olmadingiz!"
        }
    })

});

let elements = document.querySelectorAll("img");

//   ================  Next button =================
button.onclick = function () {
    let arr = ["ferrari", "eyfel", "mcdonalds", "python", "js", "google", "tesla", "starbucks", "youtube", "pepsi", "lamborgihini", "amazon", "facebook", "instagram", "twitter", "disney", "dreamworks"];

    //   ================ RANDOM  function ====================
    let number = Math.floor(Math.random() * arr.length);
    let word = arr[number];
    input.placeholder = word
}

//   ================== Refresh button ====================
btn.onclick = function () {
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.add('refresh')
    }
}














