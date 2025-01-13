class password{
  constructor()
  {
    this.pass=0;
    this.len=0;
  }
   checkpassword(){
    this.pass=window.prompt("Enter Password : ");
    this.len=this.pass.length;
    const outputElement = document.getElementById("output");
      if(this.len>=10){
        outputElement.textContent = `Password is Strong. Length of password: ${this.len}`;
      }
      else{
        outputElement.textContent = `Password is Weak. Length of password: ${this.len}`;
      }

   }
}
let obj=new password();
document.getElementById("password").onclick = () => obj.checkpassword();