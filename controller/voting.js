class voting{
    constructor(){
        this.age=0;
        this.result="";
    }
        VotingSystem(){
        this.age=Number(prompt("Enter Your Age : "));
        this.result=(this.age>=18)?"You are Eligible for Voting":"You are Not eligible for Voting";
        const votecheck=document.getElementById("output3");
        votecheck.textContent=`${this.result}`;
       }
}
const voteagecheck=new voting();
document.getElementById("VotingSystem").onclick=()=>voteagecheck.VotingSystem();