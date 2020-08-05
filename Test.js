

  
    function sendRequest(){
        var TheVar = new XMLHttpRequest();
        TheVar.open('POST','backend.php',true);
        TheVar.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        TheVar.onreadystatechange = function(){

              document.getElementById("title").innerTMLS = TheVar.responseText;
              console.log(TheVar.responseText);
        }
        TheVar.send('username=PicaPiedra');
      }
      
  