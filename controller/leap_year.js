class LeapYear{
    constructor(){
        this.year="";
    }
    leapyear(){
        this.year=Number(prompt("Enter Year : "));
        const yearcheck=document.getElementById("output5");
        if((this.year%4==0&&this.year%100!=0)||this.year%400==0){
            yearcheck.textContent=`${this.year} is leap year`;
        }
        else{
            yearcheck.textContent=`${this.year} is not leap year`;
        }
       }
}
const Leapobj=new LeapYear();
document.getElementById("leapyear").onclick=()=>Leapobj.leapyear();
