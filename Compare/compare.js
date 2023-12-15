var product = sessionStorage.getItem("product_id");


var flowers  = [
  {id:"0", imgsrc:"download.png",title:"Choose  Car",description:"", price:"" , engine:"",  model:"", transmission:"", Drivetrain:"",},

  {id:"1", imgsrc:"bmwi4.jpg",title:"BMW I4", description:"The BMW i4 is a battery electric compact executive car produced by BMW since 2021. It adopts a five-door liftback body style.", price:"$67,300" , engine:" 536.0-hp  Electric Motor",  model:"I4 GRAN 2023", transmission:" 1-Speed A/T", Drivetrain:" All Wheel Drive",},
  {id:"2", imgsrc:"bmwxm6.jpg",title:"BMW X6 M", description:"The BMW X6 is a mid-size luxury crossover SUV by German automaker BMW. The BMW X6 is the sports activity coupé" , price:"$104,300" , engine:" 600.0-hp 8 Cylinder engine",  model:"X6 M 2023", transmission:" 8-Speed A/T",Drivetrain:" All Wheel Drive",},
  {id:"3", imgsrc:"bmwm4.jpg",title:"BMW M4", description:"The BMW M4 is a high-performance version of the BMW 4 Series coupes and convertibles developed by BMW's motorsport division" ,price:"$139,900",engine:"543.0-hp 6 Cylinder Engine,",model:"THE M4 2022",transmission:" 8-Speed A/T", Drivetrain:" Rear Wheel Drive",},
  {id:"4", imgsrc:"bmwm3.jpg",title:"BMW M3", description:"The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division. " ,price:"$103.420",engine:"600.0-hp,8 cylinder engine ",model:"THE M3",},
 
  {id:"5", imgsrc:"accord.jpg",title:"Honda Accord", description:"The Honda Accord, also known as the Honda Inspire in Japan and China for certain generations, is a series of cars manufactured by Honda since 1976,  " ,price:"$27,500",engine:"192.0-hp,4 Cylinder Engine", model:"Accord 2022",transmission:" CV-T", Drivetrain:" Front Wheel Drive",},
  {id:"6", imgsrc:"civic.jpg",title:"Honda Civic Sidan", description:"The Honda Civic is a series of automobiles manufactured by Honda since 1972. Since 2000, the Civic has been categorized as a compact car, while previously it occupied the subcompact class. As of 2021." , price:"$27,200",engine:"172.0-hp,8 Cylinder Engine", model:"Civic Sidan",transmission:"M/T", Drivetrain:" Front Wheel Drive",},
  {id:"7", imgsrc:"crv.jpg",title:"Honda CR-V", description:" The Honda CR-V is a compact crossover SUV manufactured by the Japanese automaker Honda since 1995. The early models were built using the same platform as the Civic.", price:"$29,500" ,engine:"$29,500 4 cylinder engine", model:"CR-V 2022",transmission:" 8-Speed A/T", Drivetrain:" All Wheel Drive",},
  {id:"8", imgsrc:"hybrid.jpg",title:"Honda Civic Hybrid", description:"The Honda Civic Hybrid is a variation of the Honda Civic with a hybrid electric powertrain. Honda introduced the Civic Hybrid in Japan", price:"$26,400" ,engine:"110.0-hp 4 cylinder engine", model:"CVIC HYBRID",transmission:" 4-Speed A/T", Drivetrain:" Front Wheel Drive",},
  
  {id:"9", imgsrc:"aven.jpg",title:"Lamborghini Aventador", description:"The Lamborghini Aventador is a mid-engine sportscar produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, ", price:"$416,300" ,engine:"691.0-hp, 12 cylinder engine", model:"Aventador 2018",transmission:" 7-Speed A/T", Drivetrain:" All Wheel Drive",},
  {id:"10", imgsrc:"svj.png",title:"Lamborghini SVJ", description:" The Lamborghini Aventador SVJ is a advanced-engine sportscar produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, ", price:"$516,300" ,engine:"759.0-hp 12 cylinder engine", model:"Aventador SVJ",transmission:" 7-Speed A/T", Drivetrain:" All Wheel Drive",},
  {id:"11", imgsrc:"huracan.jpg",title:"Lamborghini Huracan",description:"The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. The result of fine-tuning and refining existing features, combined with new design", price:"$237,250" ,engine:"602.0-hp, 10 cylinder engine", model:"Huracan 2020",transmission:" 7-Speed A/T", Drivetrain:" All Wheel Drive",},
  {id:"12", imgsrc:"gallardo.jpg",title:"Lamborghini Gallardo", description:"The Lamborghini Gallardo is a sports car built by the Italian automotive manufacturer Lamborghini from 2003 to 2013. It is Lamborghini's second car released under parent company Audi,", price:"$198,250" ,engine:"552.0-hp, 10 cylinder engine", model:"Gallardo 2014",transmission:" 7-Speed A/T", Drivetrain:" All Wheel Drive",},
  
  {id:"13", imgsrc:"prime.jpg",title:"Toyota Prius Prime", description:"The Toyota Prius Plug-in Hybrid is a plug-in hybrid liftback manufactured by Toyota. ", price:"$29,800" ,engine:"121.0-hp, 4 cylinder engine", model:"Prius Prime",transmission:" CV-T", Drivetrain:" Front wheel Drive"},   
  {id:"14", imgsrc:"camry.jpg",title:"Toyota Camry", description:"The Toyota Camry is an automobile sold internationally by the Japanese auto manufacturer Toyota since 1982, spanning multiple generations", price:"$36,800" ,engine:"136.0-hp, 6 cylinder engine", model:"Camry",transmission:" 7-Speed A/T", Drivetrain:" Front wheel Drive"},
  {id:"15", imgsrc:"gr.jpg",title:"Toyota GR86", description:"Raising the flag for every driver, GR 86 embodies modern interior with premium technology features and touches that ignites every racer ", price:"$31,800" ,engine:"228.0-hp, 4 cylinder engine", model:"GR86 2022",transmission:" 6-Speed A/T", Drivetrain:" Rear wheel Drive"},
  {id:"16", imgsrc:"supra.jpg",title:"Toyota Supra", description:"The Toyota Supra is a sports car and grand tourer manufactured by the Toyota Motor Corporation beginning in 1978. The name supra is derived from the Latin prefix, meaning above", price:"$53,800" ,engine:"228.0-hp, 4 cylinder engine", model:"SUPRA 2023",transmission:" 8-Speed A/T", Drivetrain:" Rear wheel Drive"},
  
//   {id:"17", imgsrc:"Sofa pic/index sofa 4.jpg",title:"Carson", description:"Carson storage bed with head cushions is characterised by a comfy, generous silhouette", price:"USD:999" ,engine:"White",model:"Carson",},
//   {id:"18", imgsrc:"Sofa pic/index sofa 3.jpg",title:"Clark", description:"Clark storage bed with head cushions is characterised by a comfy, generous silhouette" , price:"USD:999",engine:"Multiengines",model:"Clark",},
//   {id:"19", imgsrc:"Table/kalamkaar table 3.jpg",title:"Albus", description:"Albus is an extending square table with corner legs, perfect to accommodate 4 to 10 people" ,price:"USD:999",engine:"Brown",model:"Albus",},
//   {id:"20", imgsrc:"Table/interwood table 5.jpg",title:"Atlante", description:"Atlante by Cantori is a  glass table with curved metal legs with a classic and elegant look, available in different models" , price:"USD:999",engine:"Off-White",model:"Atlante",},
//   {id:"21", imgsrc:"Table/kalamkaar table 6.jpg",title:"Atlantis", description:"Atlantis by Cattelan is a design table in crystal decorated with precious 'waterengine' effect artistic prints" , price:"USD:999",engine:"White and Black",model:"Atlantis"},
//   {id:"22", imgsrc:"Table/kalamkaar table 5.jpg",title:"Benny", description:"Benny by Cattelan is a metal and ceramic coffee table proposed in different sizes designed for positioning on the sofa side or in front of the sofa" , price:"USD:999",engine:"Brown",model:"Benny"},
//   {id:"23", imgsrc:"Table/kalamkaar table 4.jpg",title:"Birch", description:"Birch is a round table with a shaped base in birch plywood, available in two sizes and ideal in the center of the room as a dining table" , price:"USD:999",engine:"Brown",model:"Birch"},
//   {id:"24", imgsrc:"Table/kalamkaar table 1.jpg",title:"Bount", description:"Bount is a glass table with structural beam in painted metal, its top is available in different measurements, both rectangular and shaped." , price:"USD:999",engine:"Brown",model:"Bount"},
 
]
for(var i of flowers){
      $(".opt").append("<option id="+i.id+">"+i.title+"</option>");
      $(".selection").append("<option id="+i.id+">"+i.title+"</option>");
      $("#18").hover(function(){
        $("#18").css("backgroundColor","red");
      });

}
$("#selection").on("change",function(){
  fun();
})
$("#opt2").on("change",function(){
  fun();
})
function fun(){
    var id = $("#selection").val();
    var id2 = $("#opt2").val();
    for(var i of flowers){
    if(i.title == id){
      $("#img11").attr("src",i.imgsrc);
      document.getElementById("comp11").innerHTML = "Model : "+i.model;
      document.getElementById("comp21").innerHTML = "Price :" +i.price;
      document.getElementById("comp31").innerHTML = "Engine :" +i.engine;
      document.getElementById("comp41").innerHTML = "Drivetrain : "+i.Drivetrain;
      document.getElementById("comp42").innerHTML = "Transmision : "+i.transmission;
      document.getElementById("comp43").innerHTML = "Description : "+i.description;

      
      
    }
  }
  for(var i of flowers){
    if(i.title == id2){
        $("#img").attr("src",i.imgsrc);
        document.getElementById("comp1").innerHTML = "Model : "+i.model;
        document.getElementById("comp2").innerHTML = "Price :" +i.price;
        document.getElementById("comp3").innerHTML = "Engine :" +i.engine;
        document.getElementById("comp4").innerHTML = "Drivetrain : "+i.Drivetrain;
      document.getElementById("comp5").innerHTML = "Transmision : "+i.transmission;
      document.getElementById("comp6").innerHTML = "Description : "+i.description;
        
    }
    }
}








// Nav 
$(document).ready(function(){
  $(window).scroll(function(){
  if($(window).scrollTop()>1){
    $("nav").css("background-color" , "white",);
  }
  else{
    $("nav").css("background" , "transparent");
  }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;

  // If the parent has .skewed class, set the skewHack var.
  if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
  }

  parent.addEventListener('mousemove', function(event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + 'px';

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});