


function Convertc() {
   
    var Cel_value = Number(document.querySelector(".c").value);
    var Fahren_value = Number(document.querySelector(".f").value);
    var kelvin =Number(document.querySelector(".k").value);
    

    var celconversion = Cel_value * 1.8 + 32;

    document.querySelector(".f").value = celconversion;
   
    var celconversion1=Cel_value+273;

    document.querySelector(".k").value=celconversion1;}
    
  
  
  function Convertf(){
    
    var Cel_value = Number(document.querySelector(".c").value);
    var Fahren_value = Number(document.querySelector(".f").value);
    var kelvin =Number(document.querySelector(".k").value);
    


    var farconversion=(Fahren_value-32)*5/9+273;

    document.querySelector(".k").value=farconversion;

    var farconversion1=5/9*(Fahren_value-32);

    document.querySelector(".c").value=farconversion1;}
   
   


  


  function Convertk(){

    var Cel_value = Number(document.querySelector(".c").value);
    var Fahren_value = Number(document.querySelector(".f").value);
    var kelvin =Number(document.querySelector(".k").value);
 

    var kelconversion=kelvin-273;

    document.querySelector(".c").value=kelconversion;

    var kelconversion1=1.8*(kelvin-273)+32;

    document.querySelector(".f").value=kelconversion1;}

    
  function Clear(){
    document.querySelector(".f").value="";
    document.querySelector(".c").value="";
    document.querySelector(".k").value="";
  }