class NumberSorter{
    constructor(){
        this.a=0;
        this.b=0;
        this.c=0;
    }
     numbersorter(){
        this.a=Number(prompt("Enter Number : "));
        this.b=Number(prompt("Enter Number : "));
        this.c=Number(prompt("Enter Number : "));
        const numbercheck=document.getElementById("output6");
        if(this.a>this.b&&this.a>this.c){
            if(this.b>this.c){
                let d;
                d=this.a;
                this.a=this.c;
                this.c=d;
                numbercheck.textContent=`Number is sorted : ${this.a}  ${this.b} ${this.c}`;
            }
            else{
                let d;
                d=this.a;
                this.a=this.b;
                this. b=this.c;
                this.c=d;
                numbercheck.textContent= `Number is sorted : ${this.a} ${this.b} ${this.c}`;
            }
        }
        else{
            if(this.b>this.a&&this.b>this.c){
                if(this.a>this.c){
                    let d;
                    d=this.b;
                    this.b=this.a;
                    this.a=this.c;
                    this.c=d;
                    numbercheck.textContent=`Number is sorted :  ${this.a}  ${this.b} ${this.c}`;
                }
                else{
                    let d;
                    d=this.b;
                    this.b=this.c;
                    this.c=d;
                    numbercheck.textContent=`Number is sorted : ${this.a}  ${this.b} ${this.c}`;
                }
            }
            else{
                if(this.c>this.a&&this.c>this.b){
                    if(this.a>this.b){
                        let d;
                        d=this.a;
                        this.a=this.b;
                        this.b=this.a;
                        numbercheck.textContent=`Number is sorted : ${this.a}  ${this.b} ${this.c}`;
                    }
                    else{
                        numbercheck.textContent=`Number is sorted : ${this.a}  ${this.b} ${this.c}`;
                    }
                }
            }
        }
    
       }
}
const numbersortobj=new NumberSorter();
document.getElementById("numbersorter").onclick=()=>numbersortobj.numbersorter();
