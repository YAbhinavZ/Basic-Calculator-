let input = document.getElementById("inputBox")
let btns = document.querySelectorAll('button');
let string  = "";
let arr = Array.from(btns);
arr.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
       if(e.target.innerHTML == '='){
           string = eval(string);
           input.value = string;
       }
       else if(e.target.innerHTML=='AC'){
                  input.value="";
                  string  = "";
       }
       else if(e.target.innerHTML=='DEL'){
          string = string.slice(0,string.length-1);
          input.value = string;
       }
       else{
        string += e.target.innerHTML;
        input.value = string;

       } 
      

    })
})
