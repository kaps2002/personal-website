function myfunction(){
        let number = document.getElementById("number");
        let counter=0;
        setInterval(() => {
            if(counter==75){
                clearInterval();
            }
            else{
                counter+=1;
                number.innerHTML= counter + "%";
            }
        }, 30);
    let number2 = document.getElementById("number2");
    let counter2=0;
    setInterval(() => {
            if(counter2==65){
                clearInterval();
            }
            else{
                counter2+=1;
                number2.innerHTML= counter2 + "%";
            }
    }, 30);
    let number3 = document.getElementById("number3");
    let counter3=0;
    setInterval(() => {
            if(counter3==40){
                clearInterval();
            }
            else{
                counter3+=1;
                number3.innerHTML= counter3 + "%";
            }
    }, 30);
 }
 
