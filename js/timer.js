var main=document.getElementById('main');
var set=document.getElementById('set');
var MyModal=document.getElementById('MyModal');
var Save=document.getElementById('save');
var hours=document.getElementById('HoursIn');
var min=document.getElementById('MinIn');
var sec=document.getElementById('SecIn');
var close =document.getElementById('close');
var hrsInt;
var minInt;
var secInt;
var Alert=document.createElement('div');
//var alert=main.createElement()


function validate(){
    hrsInt=parseInt(hours.value);
    minInt=parseInt(min.value);
    secInt =parseInt(sec.value);
    if(hrsInt <= 0 && minInt <=0 && secInt <= 0){
        return -1;
    }
    else if(hrsInt > 24 && minInt > 60 && secInt > 60){
        return -1;
    }
    else{
        var Arr=[hrsInt,minInt,secInt];
        return Arr;
    }
}

function SetTimer (){
    if(validate().length != 1){
        close.click();
        console.log("length done");
    }
    else {
        Alert.innerHTML="<h6 class='alert alert-danger'>Sorry , check Numbers Correct</h6> ";
        MyModal.appendChild(Alert);
        console.log("Exc done");
    }
}
set.addEventListener('click',SetTimer());
//console.log(validate()[2])
//console.log(MyModal);