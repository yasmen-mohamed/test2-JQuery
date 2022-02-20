// $(".img-item").click(function(e) {
//     console.log(e.target.getAttribute("src"));
// })ro7 L eventInfo(e).target what el Attribute src

$(".img-item").click(function() {//Lma 2dos 3la Ae sora(.img-item)
    let imgSrc = $(this).attr("src");//this==el3onsor ely tm 3leh el click(ro7 LL sora ely dost 3leha what el attribut (src) bt3ha)>>getter
    //console.log(imgSrc);
    $("#mainImage").attr("src" , imgSrc);//Ro7 L imge ely w5da id(mainImage)L attr bt3ha blt7ded src w7t Let (imgSrc)>>setter
})