let valuDisplay = document.querySelectorAll(".count");
let interval = 4000;
valuDisplay.forEach((valuDisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valuDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function(){
        startvalue +=1;
        valuDisplay.textContent = startvalue;
        if(startvalue == endvalue){
            clearInterval(counter);
        }

    } , 10);

});
var slider = tns({
    container: '.my-courese',
    items: 3,
    slideBy: 'page',
    autoplay: true,
    controls:false,
    arrowKeys: true,
    mouseDrag:true
  });

