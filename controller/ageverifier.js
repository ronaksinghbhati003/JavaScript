class ageclassifier{
    constructor(){
         this.age=0;
    }
     ageclassifier(){
        this.age=Number(prompt("Enter Your Age : "));
        const check=document.getElementById("output2");
        if(this.age>=0&&this.age<=2){
            check.textContent=`You are infant`;
        }
        else{
            if(this.age>=3&&this.age<=5){
                check.textContent=`You are Toddler`;
            }
            else{
                if(this.age>=6&&this.age<=12){
                    check.textContent=`You are Child`;
                }
                else{
                    if(this.age>=13&&this.age<=17){
                        check.textContent=`You are Teenage`;
                    }
                    else{
                        check.textContent=`You are Adult`;
                    }
                }
            }
        }
        
       }
}
const agecheck=new ageclassifier();
document.getElementById("AgeClassifier").onclick =()=>agecheck.ageclassifier();
