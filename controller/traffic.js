class Traffic{
    constructor(){
        this.color="";
    }
     trafficlight(){
        this.color=window.prompt("Enter Signal Color :");
        const lightcheck=document.getElementById("output4");
        if(this.color==='red'||this.color==='Red'||this.color==='RED'){
            lightcheck.textContent=`Please Stop Signal is Red`;
        }
        else{
            if(this.color==='green'||this.color==='Green'||this.color==='GREEN'){
                lightcheck.textContent=`You can go Signal is Green`;
            }
            else{
                lightcheck.textContent=`Signal is Yellow`;
            }
        }
       }
}
const trafficSystem=new Traffic();
document.getElementById("TafficSystem").onclick=()=>trafficSystem.trafficlight();

