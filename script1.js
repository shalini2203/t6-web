var Year = 2021;
if(Year % 4 === 0){
    if( Year % 100 === 0){
        if(Year % 400 === 0){
            console.log("The year " + Year + " is a Leap year.");
        }else{
            console.log("The year " + Year + " is not a Leap year.");
    }
   
    }else{
        console.log("The year " + Year + " is a Leap year.");
}
}else{
    console.log("They year " + Year + " is not a Leap year.");
}