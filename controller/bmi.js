 function bmi(){

        
    let choice=Number(window.prompt("Enter height Choice for calculate BMI :  1.Meter : 2.Feet and inches : 3.Centimeters :"))
    switch(choice){
        case 1:
              meter();
              break;
        case 2:
            feetinch();
            break;
        case 3:
            Centimeters();
            break;

         default:
                document.write("Invalid Choice");
                break;
        
    }
    
    
   }
   function bmiCheck(a){
        if(a<=18.5){
              document.write("You are Underweight");
        }
        else{
            if(a>=18.5&&a<=24.9){
                document.write("You are Normal Weight");
            }
            else{
                if(a>=25&&a<=29.9){
                    document.write("You are Overweight");
                }
                else{
                    document.write("You are Obesity");
                }
            }
        }
    }
    function feetinch(){
        let weight=Number(window.prompt("Enter Weight : "));
        let feet=Number(window.prompt("Enter height in feet : "));
        let inch=Number(window.prompt("Enter height in inch : "));
        feet=feet*0.3048;
        inch=inch*0.0254;
        let BMI=weight/((feet+inch)*(feet+inch));
        console.log(BMI);
        bmiCheck(BMI);
    }
    function meter(){
        let weight=Number(window.prompt("Enter Weight : "));
        let height=Number(window.prompt("Enter Height in Meter : "));
        let BMI=(weight/(height*height));
        bmiCheck(BMI);
 }
 function Centimeters(){
    let weight=Number(window.prompt("Enter Weight : "));
    let height=Number(window.prompt("Enter Height in Centimeters : "));
    height=height/100;
    let BMI=weight/(height*height);
    bmiCheck(BMI);
 }