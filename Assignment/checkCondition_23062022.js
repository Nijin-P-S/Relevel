for(let i=1; i<=100; i++){
    if(i%5==0 || i%3==0){
        if(i%5 == 0)
            console.log("Buzz");
        if(i%3 == 0)
            console.log("Relevel");
        if(i%15 == 0)
            console.log("BindBuzz");
    }
    else 
        console.log(i);
}