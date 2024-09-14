var a = document.querySelector("#singupPage")
let add = [] ;
let isValid = true;

document.querySelector("#loginPage").addEventListener("submit",(ele)=>{

  ele.preventDefault()

  let loginMail = document.querySelector("#maillogin").value
  let loginPassword = document.querySelector("#passlogin").value

  let loginValid = true

  if (maillogin.length == 0) {
    document.querySelector("#EmailloginText").innerHTML = "Please Enter valid email";
    loginValid = false;

  }
  if (passlogin.length < 8) {
    document.querySelector("#PasswrdloginText").innerHTML ="Plase Enter password";
    loginValid = false;

  }


  if(loginValid == true){
    let ans = add.filter((element)=>{
      if(element.mailadd == loginMail && element.pas == loginPassword )
      {
        return element;
      }
    });

    if (ans.length > 0) {
      alert("Login successfull");
    } else {
      alert("Login Unsuccessfull");
    }

  }

})

  document.querySelector("#swap1").addEventListener("click", () => {
  document.querySelector("#loginPage").style.display = "block";
  document.querySelector("#singupPage").style.display = "none";
})

  document.querySelector("#swap2").addEventListener("click", () => {
  document.querySelector("#loginPage").style.display = "none";
  document.querySelector("#singupPage").style.display = "block";
});





// --------------------

  a.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let username = document.querySelector("#user").value 
    let mail = document.querySelector("#mail").value 
    let passw = document.querySelector("#pass").value 
    

    document.getElementById("userText").innerText = ""
    document.getElementById("Email").innerText = ""    
    document.getElementById("Passwrd").innerText = ""

    if(username.length == 0){
      document.getElementById("userText").innerText = "Please enter your user name!!"
      isValid = false;
    }
    if(mail.length == 0){
      document.getElementById("Email").innerText = "Please enter your mail ID!!"
      isValid = false;
    }
    if(passw.length < 8){
      document.getElementById("Passwrd").innerText = "Password must be greterthan 8!!"
      isValid = false;
    }

    let obj = {
      UserName : username,
      Email : mail,
      Password : passw
    }

    if(isValid == true){
      add.push(obj)  
    }

    
    console.log(add);
    
  })



