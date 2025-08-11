
      function compute(){
    var a = new number(document.getElementById("a").value);
    var  b = new number(document.getElementById("b").value);

    var  c = new number(document.getElementById("c").value);

    //  d = b^2 - 4 *a * c;
     
    var  x1 =new number( -b + (((b^2) - ( 4 * b * c))^0.5)/2 * a);

     var x2 = new number(-b- (((b^2) - (4 * b * c))^0.5)/2 * a);

     alert(x1);

     alert(x2);
    
     return compute();

      }
/*
        const a =prompt("Enter the value of a:");
        const  b = prompt("Enter the value of b:");
    
        const  c = prompt("Enter the value of c:");
    
        const  d = b * b - 4 *a * c;
         let root1 , root2 ;
         if(d > 0){
         root1 =  -b + (Math.sqrt(d))/(2 * a);
    
          root2 = -b- (Math.sqrt(d))/(2 * a);

          document.write(root1); 
          document.write(root2);
         
         }

         if(d==0){

         root1 = root2 - b/(2 * a);
         document.write(root1);
          document.write(root2);
         }
         
        
         */
    
          