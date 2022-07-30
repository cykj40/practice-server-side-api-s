var start = document.getElementById("generate")
var box = document.getElementById("box")
var whiteBtn = document.getElementById("white")
var blackBtn = document.getElementById("black")
var randomBtn = document.getElementById("randomColor")
var down = document.getElementById("down")






whiteBtn.addEventListener("click", function(){
    box.style.backgroundColor = "white"
})

blackBtn.addEventListener("click", function(){
    box.style.backgroundColor = "black"
})

randomBtn.addEventListener("click", randomColor)

down.addEventListener("click", downloading)


function randomColor(){
var randomCss = Math.floor(Math.random()*1677215).toString(16);
box.style.backgroundColor = "#" + randomCss;

}

function downloading(){
html2canvas(box, {scale: 0.44}).then(function(canvas){
   
const image = canvas.toDataURL("image/png", 1.0)
    const link = document.createElement("a")
    link.download = "profile-picture.png";
    link.href = image;
    link.click()
})
   
}

function goNext (){
    window.location.href= "generator.html"
}

var requestUrl = ('https://app.pixelencounter.com/api/basic/svgmonsters/{21567756}/json?fillType=3', {mode: "cors"});

fetch(requestUrl, {
    method : "GET",
    mode: 'cors',
    
})

.then(function (response) {
    console.log(response);
return (response.json());
}).then(function(data) {
    console.log(data);
    return document.getElementById('box').innerHTML = data;
    
    
});
