// star pattern
let stars = document.querySelectorAll(".ratings-wrapper span");
let ratings = [];

for(let star of stars){
    star.addEventListener("click",function(){
    this.setAttribute("data-clicked",true);
    });
}

 
var numberOfButtons = document.querySelectorAll(".Tech_slide_btn").length;

for(var i=0 ; i<numberOfButtons ; i++){
  document.querySelectorAll(".Tech_slide_btn")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){

      case "Array":
        showDiv("Array");
        break; 

      case "Searching":
        showDiv("Searching");
        break; 

      case "Sorting":
        showDiv("Sorting");
        break;
      
      case "Recursion":
        showDiv("Recursion");
        break;
      
      case "String":
        showDiv("String");
        break;
      
      case "Stack-Queue":
        showDiv("Stack-Queue");
        break;

      case "Linked-List":
        showDiv("Linked-List");
        break;

      case "Tree":
        showDiv("Tree");
        break; 
    }
  });
  
}



function showDiv(divId) {
  var allDivs = document.querySelectorAll(".questions_div")
  console.log(divId);
  console.log(allDivs);
  for (var div of allDivs) {
    
    if(div.id !== divId){
      div.style.display = "none"; 
    }
    else{
      div.style.display ="block";
    }
  
  }  
}

// Login Page
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

