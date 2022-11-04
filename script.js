"use strict"

let networkLogo = document.querySelector(".phone-icon")

let mtn = ""
let glo = ""
let airtel = ""
let nineMobile = ""

let validNetwork = false
const networkDetector =  () =>
{  
    const  phone =
    document.querySelector(".phone").value//.indexOf("0,1,2,3")
 
 //console.log(document.querySelector(".phone").value.indexOf("0,1,2,3"))
  if(phone.length === 4  )
    //phone = phone.slice(0,4)
    
  {
  
    if(phone === "0803" || 
       phone === "0703" ||
       phone === "0706" || 
       phone === "0810" ||
       phone === "0813" || 
       phone === "0814" || 
       phone === "0816" || 
       phone === "0903" || 
       phone === "0806" ||
       phone === "0906" 
      )  
      
    {
      mtn = phone.slice(0,4)
      networkLogo.src = "mtn-logo.svg"
      validNetwork = true

      document.querySelector(".phoneValidation").classList.add("hidden")
    }
      
      else if(phone === "0802" ||
              phone === "0808" || 
              phone === "0812" ||
              phone === "0701" || 
              phone === "0708" ||
              phone === "0902" ||
              phone === "0907" ||
              phone === "0901"   
             ) 
      {
       airtel = phone.slice(0,4)
        networkLogo.src = "airtel-logo.svg"
        validNetwork = true
        document.querySelector(".phoneValidation").classList.add("hidden")
      }
        
    else if(phone === "0805" ||
            phone === "0807" || 
            phone === "0811" ||
            phone === "0705" || 
            phone === "0815" ||
            phone === "0905"  
           ) 
    {
      glo = phone.slice(0,4)
      networkLogo.src = "glo-logo.svg"
      validNetwork = true
document.querySelector(".phoneValidation").classList.add("hidden")
   }
    else if(phone === "0809" ||
            phone === "0817" ||
            phone === "0818" || 
            phone === "0908" ||
            phone === "0909"
           )
    {
      nineMobile = phone.slice(0,4)
      networkLogo.src = "9mobile-logo.svg"
      validNetwork = true
document.querySelector(".phoneValidation").classList.add("hidden")
    }

   else {
     networkLogo.src = "icons/Phone.png"
     validNetwork = false
    document.querySelector(".phoneValidation").textContent = "invalid format"
     document.querySelector(".phoneValidation").classList.remove("hidden")
     
   }
    
    
  }
  //else if(phone < 4) {
//networkLogo.src = "icons/Phone.png"
    
  //}
    
  return validNetwork
}
  




  

document.querySelector(".phone").addEventListener("input", networkDetector
                                                  //detectNetwork(numbers, phone)
)

// phone number validation
let validPhone = false
const validatePhoneNumber = () => {

  if(validNetwork === false && document.querySelector(".phone").value.length !== 11) {
    document.querySelector(".phoneValidation").textContent = "invalid format"
     document.querySelector(".phoneValidation").classList.remove("hidden")
    validPhone = false
    
    networkLogo.src = "icons/Phone.png"
   }
    else if( document.querySelector(".phone").value === "" )
  { 
     networkLogo.src = "icons/Phone.png"
      //document.querySelector(".phoneValidation").textContent = "number less than 11"
    document.querySelector(".phoneValidation").classList.add("hidden")

    validPhone = false
    
  }
    
  else if( validNetwork === true && document.querySelector(".phone").value.length !== 11 )
  { 
    networkLogo.src = "icons/Phone.png"
      document.querySelector(".phoneValidation").textContent = "number less than 11"
    document.querySelector(".phoneValidation").classList.remove("hidden")

    validPhone = false
    
  }
  
  else{
    const phoneAgain = document.querySelector(".phone").value.slice(0,4) 
      if (phoneAgain === airtel)
    {
       networkLogo.src = "airtel-logo.svg"
        document.querySelector(".phoneValidation").classList.add("hidden")
    validPhone = true;
    }
    else if(phoneAgain === mtn) {
        networkLogo.src = "mtn-logo.svg"
      validPhone = true;
      document.querySelector(".phoneValidation").classList.add("hidden")
    validPhone = true;
    }
     else if(phoneAgain === glo) {
        networkLogo.src = "glo-logo.svg"
      validPhone = true;
       document.querySelector(".phoneValidation").classList.add("hidden")
    validPhone = true;
    }
    else if(phoneAgain === nineMobile) {
        networkLogo.src = "9mobile-logo.svg"
      validPhone = true;
      document.querySelector(".phoneValidation").classList.add("hidden")
    validPhone = true;
    } 
    
    else{
      document.querySelector(".phoneValidation").textContent = "invalid format"
  document.querySelector(".phoneValidation").classList.remove("hidden")
   //  console.log("invalid number type")
    }
    
    

  } 
 return validPhone
}

document.querySelector(".phone").addEventListener('change', validatePhoneNumber)


// recharge amount validation
 let validAmount = false
const validateAmount = () => {
  
 let changed = document.querySelector(".amount").value
   if (changed.indexOf("0") === 0) {
   document.querySelector(".amountValidation").classList.remove("hidden")
     
    console.log("invalid recharge amount")
     validAmount = false
  }
     
  else if(changed % 100 !== 0) {
    
    document.querySelector(".amountValidation").textContent = "Invalid recharge amount"
      document.querySelector(".amountValidation").classList.remove("hidden")
      validAmount = false
   // console.log(validPhone, validAmount, validNetwork)
  }
  
  else if( changed > 10000)
  
     {
       document.querySelector(".amountValidation").textContent = "Recharge limit is 10,000"
      console.log("recharge limit is 10,000") 
       document.querySelector(".amountValidation").classList.remove("hidden")
       validAmount = false
      
    }
  else if(changed === "") {
           document.querySelector(".amountValidation").classList.add("hidden")
      validAmount = false;
  }
    
  else{
    document.querySelector(".amountValidation").classList.add("hidden")
    validAmount = true;
  }
   
return validAmount
}

document.querySelector(".amount").addEventListener('change', validateAmount) 


// prevent default
 const button = document.querySelectorAll("button")


for(let i = 0; i < button.length; i++) {
     button[i].addEventListener("click", (e) => {

e.preventDefault()
  console.log("prevented")

})
     }

let dataType = false
document.querySelector(".Data").addEventListener("click", () => {

  //e.preventDefault()
document.querySelector(".ticked").classList.remove("dataTick")
document.querySelector(".Data").style.backgroundColor = "#3A3434"
document.querySelector(".Data").style.color = "#ffff"
document.querySelector(".Airtime").style.backgroundColor = "#ffff"

document.querySelector(".airtime-text").style.color = "#3A3434"
  airTimeType = false
  dataType = true
  
  //e.preventDefault()
})


let airTimeType = true
document.querySelector(".Airtime").addEventListener("click", () => {
document.querySelector(".ticked").classList.add("dataTick")
document.querySelector(".Data").style.backgroundColor = "#ffff"
document.querySelector(".Data").style.color = "#3A3434"
document.querySelector(".Airtime").style.backgroundColor = "#3A3434"

document.querySelector(".airtime-text").style.color = "#ffff"
   airTimeType = true
  dataType = false
  //e.preventDefault()
})

document.querySelector(".recharge-now").addEventListener("click", ()=> {
    validatePhoneNumber
    validateAmount
    networkDetector
  if(validPhone === true && validNetwork === true && validAmount === true) {
    if(airTimeType === false){
      document.querySelector(".congrats-text").textContent = "Data Recharge Successful"
    }
    else if(dataType === false){
      document.querySelector(".congrats-text").textContent = "Airtime Recharge Successful"
    }
  console.log(validPhone, validAmount, validNetwork)
  document.querySelector(".congrats-box").classList.remove("hidden")
  document.querySelector(".overlay").classList.remove("hidden")
  }

  //else(
   // document.querySelector(".recharge-now").style.backgroundColor = "black"
     //  console.log(validPhone, validAmount, validNetwork)
 // )

  })


document.querySelector(".overlay").addEventListener("click", ()=> {
  document.querySelector(".congrats-box").classList.add("hidden")
  document.querySelector(".overlay").classList.add("hidden")
  document.querySelector(".amount").value = ""
document.querySelector(".phone").value = ""
  validPhone = false
  validAmount = false
  validNetwork = false
  airTimeType = true
  dataType = false
  networkLogo.src = "icons/Phone.png"
  document.querySelector(".email").value = ""
  document.querySelector(".recharge-now").style.backgroundColor = "#9FC9F3"
})

document.querySelector(".congrats-box").addEventListener("click", ()=> {
  document.querySelector(".congrats-box").classList.add("hidden")
  document.querySelector(".overlay").classList.add("hidden")

  document.querySelector(".amount").value = ""
document.querySelector(".phone").value = ""
  validPhone = false
  validAmount = false
  validNetwork = false
  airTimeType = true
  dataType = false
  networkLogo.src = "icons/Phone.png"
  document.querySelector(".email").value = ""
   document.querySelector(".recharge-now").style.backgroundColor = "#9FC9F3"
})



if(validPhone === false || validNetwork === false || validAmount === false)
{
  document.querySelector(".recharge-now").style.backgroundColor = "#9FC9F3"
}

 const buttonActive = document.querySelectorAll("input")

for(let j = 0; j < buttonActive.length; j++) {
  buttonActive[j].addEventListener("blur", () => {
    if(validPhone === true && validNetwork === true && validAmount === true )
{
  document.querySelector(".recharge-now").style.backgroundColor = "#0500FF"
}
else 
{
  document.querySelector(".recharge-now").style.backgroundColor = "#9FC9F3"
}
    
  })
}




// mtn
/* 0803 0806 0703 0706 0810 0813 0814 0816 0903 0906 
//glo
0805 0807 0811 0705 0815 0905
//airtel
0802 0808 0812 0701 0708 0902 0907 0901
//9mobile 
0809 0817 0818 0908 0909


*/


//console.log(validatePhoneNumber(), networkDetector(), validateAmount())
