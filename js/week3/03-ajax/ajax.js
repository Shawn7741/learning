function loadDoc(){
    //All together
    const req = new XMLHttpRequest;
    
    req.onload = function(){
        document.getElementById("demo").innerHTML = this.responseText;
    }
    
    req.open("GET", "ajax.txt");// specifies the request: method(GET), url(file location), async(true), user, password
    req.send(); //sends request to the server. used for GET requests
    
    }
    
    //object properties
    /*
    1. onload - defines the function to be called
    2. responseText - returns the response
    
    
    */