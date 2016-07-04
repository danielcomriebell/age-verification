function submit(){

  var year = document.getElementById('year').value;
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;
  var age = 21;
  var mydate = new Date();
  var validation = true;
  var cookievalidate;

  if (year == null || year == "" || month == null || month == "" || day == null || day == ""){
    alert(" All fields must be filled out ");
    validation = false;
  }

  mydate.setFullYear(year, month-1, day);


  var currentdate = new Date();

  currentdate.setFullYear(currentdate.getFullYear() - age);

  if (validation == true){

    if ((currentdate - mydate) < 0){

      cookievalidate = "";
      setCookie("legalAge", cookievalidate, 365);

      alert("Sorry persons over the age of " + age + " may enter this site");

      window.location.href = "http://responsibility.org";
      cookievalidate = false;
      return false;


    } else{

      cookievalidate = "legal";

      setCookie("legalAge", cookievalidate, 365);
      window.location.href = "http://www.google.com";
      cookievalidate = true;
      return true;
    }
  }

}

function setCookie(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();

  document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++){
    var c = ca[i];
    while(c.charAt(0) == ' ' ){
      c = c.substring(1);
    }

    if(c.indexOf(name) == 0){
      return c.substring(name. length, c.length);
    }
  }

  return "";
}


function checkCookie(){
  var user = getCookie("legalAge");

  if (user == "legal"){
    window.location.href = '/home';
  } else{
  }
}
