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
    mouseDrag:true,
    container: '.my-courese',
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });

      
  


