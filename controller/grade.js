class grade{
    constructor(){
        this.score=0;
    }
     checkgrade(){
        this.score=Number(prompt("Enter Your Score Marks : "));
        const obj=document.getElementById("output1");
        if(this.score>=90&&this.score<=100){
            obj.textContent=`You score Grade :A`;
        }
        else{
            if(this.score>=80&&this.score<=89){
                obj.textContent=`You score Grade : B`;
            }
            else{
                if(this.score>=70&&this.score<=79){
                    obj.textContent=`You score Grade : C`;
                }
                else{
                    if(this.score>=60&&this.score<=70){
                        obj.textContent=`You score Grade : D`;
                    }
                    else{
                        obj.textContent=`You score Grade : F`;
                    }
                }
            }
        }
       }
}
const gradecheck=new grade();
document.getElementById("gradesystem").onclick =()=> gradecheck.checkgrade();

    

