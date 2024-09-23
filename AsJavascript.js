function triangleArea(a, b, c){
    s=(a+b+c)/2;
    area= Math.sqrt(s*(s-a)*(s-b)*(s-c));
     return area;
     
     

}

    
    
    
    
     const result=triangleArea(5, 6, 7)
    
    
     console.log(result)

     function addJavaScript(str){
        return "Javacript" +str;

     }
     let givenString=" is awesome!";
     console.log(addJavaScript(givenString));