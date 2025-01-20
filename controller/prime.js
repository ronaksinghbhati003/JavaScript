class prime{
    constructor(){
        this.istrue=true;
    }
      checkprime(){
        for(let i=5;i<=100;i++){
            this.istrue=true;
            for(let j=2;j<5;j++){
                if(i%j==0){
                    this.istrue=false;
                    break;
                }
            }
           
            if(this.istrue){
                console.log(i,"Prime Number");
            }
            else{
                console.log(i," Not Prime Number");
            }
        }
      }
}
const obj=new prime();
obj.checkprime();