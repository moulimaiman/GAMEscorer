var i = 0 ;
var j = 0 ; 
var y = 7.5 ;  
var x = 100 ; 
var s = 0 ; 
var rep = 0 ;
var a , b , c ; 
var progre = 100 ; 
var T = ['00','11','22','33','44','55','66','77','88','99','AA','BB','CC','DD','EE','FF'] ; 
var staart = document.getElementById("star") ;

function welcome() {
    document.getElementById("welcome").style.display = "none" ; 
}
setTimeout(welcome,7000) ;

function uup() {
    rep = 0 ;
    j -= 10  ; 
    if ( j < 0 || j > 270 || i < 0 || i > 270  ) {
        j = 0 ; 
        i = 0 ;
    }
    document.getElementById("objet").style.top = j+"px" ; 
    if ( Math.abs(j - y) <= 20  && Math.abs(i - x) <= 20 ) {
        x = Math.round(290*Math.random()) ;
        y = Math.round(290*Math.random()) ;
        document.getElementById("obvs").style.top = y+"px" ; 
        document.getElementById("obvs").style.left = x+"px" ; 
        var c = document.getElementById("sco") ; 
        s += 2 ; 
        c.innerHTML = s ; 
    }
    document.getElementById("x0").innerHTML = i ; 
    document.getElementById("y0").innerHTML = j ; 
}
function doown() {
    rep = 0 ;
    j += 10 ; 
    if ( j < 0 || j > 270 || i < 0 || i > 270  ) {
        j = 0 ;
        i = 0 ; 
    }
    document.getElementById("objet").style.top = j+"px" ; 
    if ( Math.abs(j - y) <= 20  && Math.abs(i - x) <= 20  ) {
        x = Math.round(290*Math.random()) ;
        y = Math.round(290*Math.random()) ;
        document.getElementById("obvs").style.top = y+"px" ; 
        document.getElementById("obvs").style.left = x+"px" ; 
        var c = document.getElementById("sco") ; 
        s += 2 ; 
        c.innerHTML = s ; 
    }
    document.getElementById("x0").innerHTML = i ; 
    document.getElementById("y0").innerHTML = j ; 
}
function riight() {
    rep = 0 ;
    i += 10  ; 
    if ( j < 0 || j > 270 || i < 0 || i > 270  ) {
        i = 0 ; 
        j = 0 ; 
    }
    document.getElementById("objet").style.left = i+"px" ; 
    if ( Math.abs(j - y) <= 20  && Math.abs(i - x) <= 20  ) {
        x = Math.round(290*Math.random()) ;
        y = Math.round(290*Math.random()) ;
        document.getElementById("obvs").style.top = y+"px" ; 
        document.getElementById("obvs").style.left = x+"px" ; 
        var c = document.getElementById("sco") ; 
        s += 2 ; 
        c.innerHTML = s ; 
    }
    document.getElementById("x0").innerHTML = i ; 
    document.getElementById("y0").innerHTML = j ; 
}
function leeft() {
    rep = 0 ;
    i -= 10 ; 
    if ( j < 0 || j > 270 || i < 0 || i > 270  ) {
        i = 0 ; 
        j = 0 ;
    }
    document.getElementById("objet").style.left = i+"px" ; 
    if ( Math.abs(j - y) <= 20  && Math.abs(i - x) <= 20  ) {
        x = Math.round(290*Math.random()) ;
        y = Math.round(290*Math.random()) ;
        document.getElementById("obvs").style.top = y+"px" ; 
        document.getElementById("obvs").style.left = x+"px" ; 
        var c = document.getElementById("sco") ; 
        s += 2 ; 
        c.innerHTML = s ;
    }
    document.getElementById("x0").innerHTML = i ; 
    document.getElementById("y0").innerHTML = j ; 
}

function repet() {
    document.getElementById("i0").innerHTML = x ;
    document.getElementById("j0").innerHTML = y ;
    a = Math.floor(15*Math.random()) ;
        b = Math.round(14*Math.random()) ;
        c = Math.floor(13*Math.random()) ;
        document.getElementById("obvs").style.backgroundColor = "#"+T[a]+T[b]+T[c] ;
        document.getElementById("titre").style.color = "#"+T[a]+T[b]+T[c] ;
    rep++ ; 
        if ( rep >= 10 ) {
            progre -= 10 ; 
            document.getElementById("valprog").innerHTML = progre+"%";
            document.getElementById("prog").value = progre  ; 
            if ( progre < 0  ) {
                document.getElementById("sco").innerHTML = 0 ; 
                document.getElementById("obvs").style.top = 7.5+"px" ; 
                document.getElementById("obvs").style.left = 100+"px" ; 
                document.getElementById("prog").value = 100 ; 
                rep = 0 ;
                progre = 100 ;
                document.getElementById("valprog").innerHTML = progre+"%";
                document.getElementById("objet").style.top = 0+"px" ;
                document.getElementById("objet").style.left = 0+"px" ;
                document.getElementById("x0").innerHTML = 0 ; 
                document.getElementById("y0").innerHTML = 0 ; 
        }
    }
}
var t = setInterval(repet, 1000);

function staar() {
    t = setInterval(repet,1000) ; 
    staart.disabled = true ; 
}
function stoop() {
    clearInterval(t) ; 
    staart.disabled = false ; 
}
function reepeet() {
    document.getElementById("sco").innerHTML = 0;
    document.getElementById("obvs").style.top = 7.5 + "px";
    document.getElementById("obvs").style.left = 100 + "px";
    document.getElementById("prog").value = 100;
    rep = 0;
    progre = 100;
    document.getElementById("valprog").innerHTML = progre + "%";
    document.getElementById("objet").style.top = 0 + "px";
    document.getElementById("objet").style.left = 0 + "px";
    document.getElementById("x0").innerHTML = 0;
    document.getElementById("y0").innerHTML = 0;
}
