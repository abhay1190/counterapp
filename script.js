var data=0;
document.getElementById("counting").innerText=data;
//to increment the value
function increment(){
    data=data+1;
    if(data<0){
        data=0;
    }else{
        data
    }
    document.getElementById("counting").innerText=data;
}
//to decrement the value
function decrement(){
    data=data-1;
    document.getElementById("counting").innerText=data;
}
//to reset the value
function reset(){
  data=0;
  document.getElementById("counting").innerText=data;
}
