window.onload= function (){
    addAllFun();     
}

// add all function
function addAllFun(){
    addAllSub();
}

//charge last movie
function addAllSub(){

    // this array will simulate an API response
    subDescription = 'Lorem anfi cas foli more.';
    for(var cont = 0; cont <=10;cont++){
        $('.sub_list').append("<li>"+ subDescription +"</li>");
    }

}

// code for show info

function sendInfoContact(){

    var name = document.getElementById('name_txt').value;
    var last = document.getElementById('last_txt').value;
    var email = document.getElementById('email_text').value;
    var msg = document.getElementById('text_area').value;

    alert("FullName:\n"+name + " " + last + "\n\nEmail: \n" + email + "\n\nMessage: \n" + msg);
}


// select subcription

function showAlertWithSelect(typeSub){
    showAlert("Select the " + typeSub + " Subscription");
}

function showAlert(message){
    alert(message);
}
