var tablica = ["ciri.png","geralt.png","iorweth.png","jaskier.png","triss.png","yen.png","ciri.png","geralt.png","iorweth.png",
"jaskier.png","triss.png","yen.png","karta.png"];



//var c0 = document.getElementById('card0');



//console.log(tablica[1]);

var c0 = document.getElementById('c0');
c0.addEventListener('click',function(){ odkryj(0); });

var c1 = document.getElementById('c1');
c1.addEventListener('click',function(){ odkryj(1); });

var c2 = document.getElementById('c2');
c2.addEventListener('click',function(){ odkryj(2); });

var c3 = document.getElementById('c3');
c3.addEventListener('click',function(){ odkryj(3); });

var c4 = document.getElementById('c4');
c4.addEventListener('click',function(){ odkryj(4); });

var c5 = document.getElementById('c5');
c5.addEventListener('click',function(){ odkryj(5); });

var c6 = document.getElementById('c6');
c6.addEventListener('click',function(){ odkryj(6); });

var c7 = document.getElementById('c7');
c7.addEventListener('click',function(){ odkryj(7); });

var c8 = document.getElementById('c8');
c8.addEventListener('click',function(){ odkryj(8); });

var c9 = document.getElementById('c9');
c9.addEventListener('click',function(){ odkryj(9); });

var c10 = document.getElementById('c10');
c10.addEventListener('click',function(){ odkryj(10); });

var c11 = document.getElementById('c11');
c11.addEventListener('click',function(){ odkryj(11); });


var jedna = 0;
var numer_tury=0;
var pierwsza;
var druga;
var pozostalo_par=6;
var blokada = 0;


    function odkryj(nr)
    {
        
        
        

        if(jedna==0)
        {
            pierwsza=nr;
                
            var obraz = "url(img/"+tablica[nr]+")";
            $("#c"+nr).css("background-image",obraz);
            
            jedna = 1;
            console.log(jedna);
        }
        else
        {
            druga=nr;

            var obraz = "url(img/"+tablica[nr]+")";
            $("#c"+nr).css("background-image",obraz);
        
            numer_tury++;
            $("#tura").html("Turn counter:"+numer_tury);

            if(tablica[pierwsza]==tablica[druga])
            {
                setTimeout( function() {para(pierwsza,druga);}, 2000  );
               
            }
            else
            {
            console.log("pudło");
            
              setTimeout( function() {pudlo(pierwsza,druga);}, 2000  );

            }

            jedna = 0;
            console.log(jedna);
            
           

            //alert o wygranej w ifie
        }

    }


    function pudlo(pierwsza, druga){

    console.log(pierwsza,druga);
    
    var obraz1 = "url(img/"+tablica[12]+")";
        
    $("#c"+druga).css('background-image',obraz1);
    $("#c"+pierwsza).css('background-image',obraz1); 
        
        
    }


    function para(pierwsza,druga)
    {
        console.log("para");
        pozostalo_par--;
       
        //przyciemnoic i dezaktywowac

        $("#c"+druga).css('opacity','0');
        $("#c"+pierwsza).css('opacity','0');

        if(pozostalo_par==0)
        {
            alert("Wygrałeś w"+numer_tury+" ruchach");
        }
    }