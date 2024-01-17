var i = 0 ;
var j = 0 ; 
var y = 7.5 ;  
var x = 100 ; 
var s = 0 ; 
var rep = 0 ;
var a , b , c , k1 , k2 , k3 , k4 ; 
var progre = 100 ; 
var sppe = 200 ; 
var testbgd = 0 ; 
var T = ['00','11','22','33','44','55','66','77','88','99','AA','BB','CC','DD','EE','FF'] ; 
var staart = document.getElementById("star") ;

function welcome() {
    var welc = document.getElementById("welcome") ; 
    welc.style.opacity = "0%" ; 
    setTimeout(() => {
        welc.style.display = "none" ; 
    }, 4000);
}
function hidwelcome() {
    setInterval(welcome,500) ; 
}

function setting() {
    var param = document.getElementById("settings") ; 
    param.style.width = "300px" ; 
    param.style.height = "350px" ;
    param.style.opacity = "100%" ; 
    param.style.padding = "5px" ;
    document.getElementById("contsetti").style.display = "inline-block" ;
    document.getElementById("selelevel").style.display = "block" ; 
    document.getElementById("speeds").style.display = "block" ; 
    document.getElementById("bgdcolor").style.display = "block" ; 
    document.getElementById("butsetti").style.display = "block" ;
}

function editsetti() {
    sppe = document.getElementById("speeds").value ; 
    document.getElementById("espace").style.backgroundColor = document.getElementById("bgdcolor").value ; 
    var param = document.getElementById("settings") ; 
    param.style.width = "0px" ; 
    param.style.height = "0px" ;
    param.style.opacity = "0%" ; 
    param.style.padding = "0px" ;
    testbgd = document.getElementById("selelevel").value ; 
    document.getElementById("selelevel").style.display = "none" ; 
    document.getElementById("contsetti").style.display = "none" ;
    document.getElementById("speeds").style.display = "none" ; 
    document.getElementById("bgdcolor").style.display = "none" ; 
    document.getElementById("butsetti").style.display = "none" ;
}

function uup() {
    rep = 0;
    j -= 10;
    if (j < 0 || j > 270 || i < 0 || i > 270) {
        j = 0;
        i = 0;
    }
    document.getElementById("objet").style.top = j + "px";
    if (Math.abs(j - y) <= 20 && Math.abs(i - x) <= 20) {
        x = Math.round(290 * Math.random());
        y = Math.round(290 * Math.random());
        document.getElementById("obvs").style.top = y + "px";
        document.getElementById("obvs").style.left = x + "px";
        var c = document.getElementById("sco");
        s += 2;
        c.innerHTML = s;
    }
    document.getElementById("x0").innerHTML = i;
    document.getElementById("y0").innerHTML = j;
}

function staruup() {
    k1 = setInterval(uup,sppe) ; 

}
function stopuup() {
    clearInterval(k1) ; 
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

function stardoown() {
    k2 = setInterval(doown,sppe) ; 

}
function stopdoown() {
    clearInterval(k2) ; 
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

function starriight() {
    k3 = setInterval(riight,sppe) ; 

}
function stopriight() {
    clearInterval(k3) ; 
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

function starleeft() {
    k4 = setInterval(leeft,sppe) ; 

}
function stopleeft() {
    clearInterval(k4) ; 
}

function repet() {
    document.getElementById("i0").innerHTML = x ;
    document.getElementById("j0").innerHTML = y ;
    a = Math.floor(15*Math.random()) ;
        b = Math.round(14*Math.random()) ;
        c = Math.floor(13*Math.random()) ;
        document.getElementById("obvs").style.backgroundColor = "#"+T[a]+T[b]+T[c] ;
        document.getElementById("titre").style.color = "#"+T[a]+T[b]+T[c] ;
        if ( testbgd == 1 ) {
            document.getElementById("espace").style.backgroundColor = "#"+T[a]+T[b]+T[c] ;
        }
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
                rep = 0 ; s = 0 ; i = 0 ; j = 0 ; x = 100 ; y = 7.5 ; 
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
}
function stoop() {
    clearInterval(t) ; 
}
function reepeet() {
    document.getElementById("sco").innerHTML = 0;
    document.getElementById("obvs").style.top = 7.5 + "px";
    document.getElementById("obvs").style.left = 100 + "px";
    document.getElementById("prog").value = 100;
    rep = 0 ; s = 0 ; i = 0 ; j = 0 ; x = 100 ; y = 7.5 ;
    progre = 100;
    document.getElementById("valprog").innerHTML = progre + "%";
    document.getElementById("objet").style.top = 0 + "px";
    document.getElementById("objet").style.left = 0 + "px";
    document.getElementById("x0").innerHTML = 0;
    document.getElementById("y0").innerHTML = 0;
}
