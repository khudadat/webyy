var canvas = document.querySelector ('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var formElement = document.getElementById("wid");
formElement.addEventListener('keyup', widChanged, false);

var formElement = document.getElementById("ht");
formElement.addEventListener('keyup', htChanged, false);

var formElement = document.getElementById("ndoors");
formElement.addEventListener('keyup', ndoorsChanged, false);

 
var formElement = document.getElementById("d1s");
formElement.addEventListener('keyup', d1sChanged, false);
var formElement = document.getElementById("d2s");
formElement.addEventListener('keyup', d2sChanged, false);
var formElement = document.getElementById("d3s");
formElement.addEventListener('keyup', d3sChanged, false);
var formElement = document.getElementById("d4s");
formElement.addEventListener('keyup', d4sChanged, false);
var formElement = document.getElementById("d5s");
formElement.addEventListener('keyup', d5sChanged, false);
var formElement = document.getElementById("d6s");
formElement.addEventListener('keyup', d6sChanged, false);
var formElement = document.getElementById("d7s");
formElement.addEventListener('keyup', d7sChanged, false);
var formElement = document.getElementById("d8s");
formElement.addEventListener('keyup', d8sChanged, false);
var formElement = document.getElementById("d9s");
formElement.addEventListener('keyup', d9sChanged, false);
var formElement = document.getElementById("d10s");
formElement.addEventListener('keyup', d10sChanged, false);



function cdraw(e) {
    c.clearRect(0, 0, canvas.width, canvas.height);
var wid = document.getElementById ('wid');   
var ht = document.getElementById ('ht');
var ndoors = document.getElementById ('ndoors');

var d1s = document.getElementById ('d1s');
var d2s = document.getElementById ('d2s');
var d3s = document.getElementById ('d3s');
var d4s = document.getElementById ('d4s');
var d5s = document.getElementById ('d5s');
var d6s = document.getElementById ('d6s');
var d7s = document.getElementById ('d7s');
var d8s = document.getElementById ('d8s');
var d9s = document.getElementById ('d9s');
var d10s = document.getElementById ('d10s');






var stl= 50;
var stt= 50;

var cw = wid.value * 0.25;
var ch = ht.value *0.25;
var mdf = 18 *0.25;

var dr= ndoors.value * 1.0;
var dw = (cw-(mdf*(dr+1)))/(dr);




var bx1 = d1s.value * 1.0;
var bxh1 = (ch-(mdf*(bx1+1)))/(bx1);
var bx2 = d2s.value * 1.0;
var bxh2 = (ch-(mdf*(bx2+1)))/(bx2);
var bx3 = d3s.value * 1.0;
var bxh3 = (ch-(mdf*(bx3+1)))/(bx3);
var bx4 = d4s.value * 1.0;
var bxh4 = (ch-(mdf*(bx4+1)))/(bx4);
var bx5 = d5s.value * 1.0;
var bxh5 = (ch-(mdf*(bx5+1)))/(bx5);
var bx6 = d6s.value * 1.0;
var bxh6 = (ch-(mdf*(bx6+1)))/(bx6);
var bx7 = d7s.value * 1.0;
var bxh7 = (ch-(mdf*(bx7+1)))/(bx7);
var bx8 = d8s.value * 1.0;
var bxh8 = (ch-(mdf*(bx8+1)))/(bx8);
var bx9 = d9s.value * 1.0;
var bxh9 = (ch-(mdf*(bx9+1)))/(bx9);
var bx10 = d10s.value * 1.0;
var bxh10 = (ch-(mdf*(bx10+1)))/(bx10);


c.strokeStyle= 'rgba(255,255,255,0.9)';
c.strokeRect(stl,stt,cw,ch);
c.stroke();

if (dr == 1 ){
for ( i =1; i < bx1 + 1; i++){


c.strokeStyle= 'rgba(255,255,255,0.9)';
c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
c.stroke();


}
} else if (dr ==2 ){
    for ( i =1; i < bx1 + 1; i++){
    
    
    c.strokeStyle= 'rgba(255,255,255,0.9)';
    c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
    c.stroke();
    }


    for ( j =1; j < bx2 + 1; j++){
        c.strokeStyle= 'rgba(255,255,255,0.9)';
    c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
    c.stroke();
    }

    }else if (dr ==3 ){
        for ( i =1; i < bx1 + 1; i++){
        
        
            c.strokeStyle= 'rgba(255,255,255,0.9)';
        c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
        c.stroke();
        }
    
    
        for ( j =1; j < bx2 + 1; j++){
            c.strokeStyle= 'rgba(255,255,255,0.9)';
        c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
        c.stroke();
        }
    
        for ( k =1; k < bx3 + 1; k++){
            c.strokeStyle= 'rgba(255,255,255,0.9)';
            c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
            c.stroke();
            }
        
        }else if (dr ==4 ){
            for ( i =1; i < bx1 + 1; i++){
            
            
                c.strokeStyle= 'rgba(255,255,255,0.9)';
            c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
            c.stroke();
            }
        
        
            for ( j =1; j < bx2 + 1; j++){
                c.strokeStyle= 'rgba(255,255,255,0.9)';
            c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
            c.stroke();
            }
        
            for ( k =1; k < bx3 + 1; k++){
                c.strokeStyle= 'rgba(255,255,255,0.9)';
                c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
                c.stroke();
                }
                for ( m =1; m < bx4 + 1; m++){
                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                    c.strokeRect(stl+(mdf*4)+(dw*3),stt+(mdf*m)+(bxh4*(m-1)), dw,bxh4);
                    c.stroke();
                    }
            }else if (dr ==5 ){
                for ( i =1; i < bx1 + 1; i++){
                
                
                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
                c.stroke();
                }
            
            
                for ( j =1; j < bx2 + 1; j++){
                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
                c.stroke();
                }
            
                for ( k =1; k < bx3 + 1; k++){
                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                    c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
                    c.stroke();
                    }
                    for ( m =1; m < bx4 + 1; m++){
                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                        c.strokeRect(stl+(mdf*4)+(dw*3),stt+(mdf*m)+(bxh4*(m-1)), dw,bxh4);
                        c.stroke();
                        }
                for ( n =1; n < bx5 + 1; n++){
                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                    c.strokeRect(stl+(mdf*5)+(dw*4),stt+(mdf*n)+(bxh5*(n-1)), dw,bxh5);
                    c.stroke();
                    }
                }else if (dr ==6 ){
                    for ( i =1; i < bx1 + 1; i++){
                    
                    
                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                    c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
                    c.stroke();
                    }
                
                
                    for ( j =1; j < bx2 + 1; j++){
                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                    c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
                    c.stroke();
                    }
                
                    for ( k =1; k < bx3 + 1; k++){
                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                        c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
                        c.stroke();
                        }
                        for ( m =1; m < bx4 + 1; m++){
                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                            c.strokeRect(stl+(mdf*4)+(dw*3),stt+(mdf*m)+(bxh4*(m-1)), dw,bxh4);
                            c.stroke();
                            }
                    for ( n =1; n < bx5 + 1; n++){
                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                        c.strokeRect(stl+(mdf*5)+(dw*4),stt+(mdf*n)+(bxh5*(n-1)), dw,bxh5);
                        c.stroke();
                        }
                    for ( p =1; p < bx6 + 1; p++){
                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                        c.strokeRect(stl+(mdf*6)+(dw*5),stt+(mdf*p)+(bxh6*(p-1)), dw,bxh6);
                        c.stroke();
                        }
    
                    }else if (dr ==7 ){
                        for ( i =1; i < bx1 + 1; i++){
                        
                        
                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                        c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
                        c.stroke();
                        }
                    
                    
                        for ( j =1; j < bx2 + 1; j++){
                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                        c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
                        c.stroke();
                        }
                    
                        for ( k =1; k < bx3 + 1; k++){
                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                            c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
                            c.stroke();
                            }
                            for ( m =1; m < bx4 + 1; m++){
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+(mdf*4)+(dw*3),stt+(mdf*m)+(bxh4*(m-1)), dw,bxh4);
                                c.stroke();
                                }
                        for ( n =1; n < bx5 + 1; n++){
                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                            c.strokeRect(stl+(mdf*5)+(dw*4),stt+(mdf*n)+(bxh5*(n-1)), dw,bxh5);
                            c.stroke();
                            }
                        for ( p =1; p < bx6 + 1; p++){
                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                            c.strokeRect(stl+(mdf*6)+(dw*5),stt+(mdf*p)+(bxh6*(p-1)), dw,bxh6);
                            c.stroke();
                            }
                        for ( q =1; q < bx7 + 1; q++){
                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                            c.strokeRect(stl+(mdf*7)+(dw*6),stt+(mdf*q)+(bxh7*(q-1)), dw,bxh7);
                            c.stroke();
                            }
    
                        }else if (dr ==8 ){
                            for ( i =1; i < bx1 + 1; i++){
                            
                            
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                            c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
                            c.stroke();
                            }
                        
                        
                            for ( j =1; j < bx2 + 1; j++){
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                            c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
                            c.stroke();
                            }
                        
                            for ( k =1; k < bx3 + 1; k++){
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
                                c.stroke();
                                }
                                for ( m =1; m < bx4 + 1; m++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*4)+(dw*3),stt+(mdf*m)+(bxh4*(m-1)), dw,bxh4);
                                    c.stroke();
                                    }
                            for ( n =1; n < bx5 + 1; n++){
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+(mdf*5)+(dw*4),stt+(mdf*n)+(bxh5*(n-1)), dw,bxh5);
                                c.stroke();
                                }
                            for ( p =1; p < bx6 + 1; p++){
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+(mdf*6)+(dw*5),stt+(mdf*p)+(bxh6*(p-1)), dw,bxh6);
                                c.stroke();
                                }
                            for ( q =1; q < bx7 + 1; q++){
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+(mdf*7)+(dw*6),stt+(mdf*q)+(bxh7*(q-1)), dw,bxh7);
                                c.stroke();
                                }
                            for ( r =1; r < bx8 + 1; r++){
                                c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+(mdf*8)+(dw*7),stt+(mdf*r)+(bxh8*(r-1)), dw,bxh8);
                                c.stroke();
                                }
    
                            }else if (dr ==9 ){
                                for ( i =1; i < bx1 + 1; i++){
                                
                                
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
                                c.stroke();
                                }
                            
                            
                                for ( j =1; j < bx2 + 1; j++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
                                c.stroke();
                                }
                            
                                for ( k =1; k < bx3 + 1; k++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
                                    c.stroke();
                                    }
                                    for ( m =1; m < bx4 + 1; m++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*4)+(dw*3),stt+(mdf*m)+(bxh4*(m-1)), dw,bxh4);
                                        c.stroke();
                                        }
                                for ( n =1; n < bx5 + 1; n++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*5)+(dw*4),stt+(mdf*n)+(bxh5*(n-1)), dw,bxh5);
                                    c.stroke();
                                    }
                                for ( p =1; p < bx6 + 1; p++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*6)+(dw*5),stt+(mdf*p)+(bxh6*(p-1)), dw,bxh6);
                                    c.stroke();
                                    }
                                for ( q =1; q < bx7 + 1; q++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*7)+(dw*6),stt+(mdf*q)+(bxh7*(q-1)), dw,bxh7);
                                    c.stroke();
                                    }
                                for ( r =1; r < bx8 + 1; r++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*8)+(dw*7),stt+(mdf*r)+(bxh8*(r-1)), dw,bxh8);
                                    c.stroke();
                                    }
                                for ( s =1; s < bx9 + 1; s++){
                                    c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*9)+(dw*8),stt+(mdf*s)+(bxh9*(s-1)), dw,bxh9);
                                    c.stroke();
                                    }
    
                                }else if (dr ==10 ){
                                    for ( i =1; i < bx1 + 1; i++){
                                    
                                    
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+mdf,stt+(mdf*i)+(bxh1*(i-1)), dw,bxh1);
                                    c.stroke();
                                    }
                                
                                
                                    for ( j =1; j < bx2 + 1; j++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                    c.strokeRect(stl+(mdf*2)+(dw*1),stt+(mdf*j)+(bxh2*(j-1)), dw,bxh2);
                                    c.stroke();
                                    }
                                
                                    for ( k =1; k < bx3 + 1; k++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*3)+(dw*2),stt+(mdf*k)+(bxh3*(k-1)), dw,bxh3);
                                        c.stroke();
                                        }
                                        for ( m =1; m < bx4 + 1; m++){
                                            c.strokeStyle= 'rgba(255,255,255,0.9)';
                                            c.strokeRect(stl+(mdf*4)+(dw*3),stt+(mdf*m)+(bxh4*(m-1)), dw,bxh4);
                                            c.stroke();
                                            }
                                    for ( n =1; n < bx5 + 1; n++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*5)+(dw*4),stt+(mdf*n)+(bxh5*(n-1)), dw,bxh5);
                                        c.stroke();
                                        }
                                    for ( p =1; p < bx6 + 1; p++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*6)+(dw*5),stt+(mdf*p)+(bxh6*(p-1)), dw,bxh6);
                                        c.stroke();
                                        }
                                    for ( q =1; q < bx7 + 1; q++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*7)+(dw*6),stt+(mdf*q)+(bxh7*(q-1)), dw,bxh7);
                                        c.stroke();
                                        }
                                    for ( r =1; r < bx8 + 1; r++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*8)+(dw*7),stt+(mdf*r)+(bxh8*(r-1)), dw,bxh8);
                                        c.stroke();
                                        }
                                    for ( s =1; s < bx9 + 1; s++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*9)+(dw*8),stt+(mdf*s)+(bxh9*(s-1)), dw,bxh9);
                                        c.stroke();
                                        }
                                    for ( t =1; t < bx10 + 1; t++){
                                        c.strokeStyle= 'rgba(255,255,255,0.9)';
                                        c.strokeRect(stl+(mdf*10)+(dw*9),stt+(mdf*t)+(bxh10*(t-1)), dw,bxh10);
                                        c.stroke();
                                        }
    
                                    }
                                    
                                }
                                function widChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function htChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function ndoorsChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                
                                function d1sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d2sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d3sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d4sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d5sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d6sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d7sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d8sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d9sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }
                                function d10sChanged(e){
                                    c.clearRect(0, 0, canvas.width, canvas.height);
                                    cdraw() ;
                                }


                                drawScreen();

    
    
            
        
    
    
    

