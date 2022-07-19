let pattern = (n) => {
    for(let i= 0; i<n; i++){
        for(let j = 0; j<i; j++){
            process.stdout.write(" ");
        }
        for(let num = i+1; num<=n; num++){
            process.stdout.write(num+" ");
        }
        console.log();
    }

    for(let i= n-2; i>=0; i--){
        for(let j = 0; j<i; j++){
            process.stdout.write(" ");
        }
        for(let num = i+1; num<=n; num++){
            process.stdout.write(num+" ");
        }
        console.log();
    }
}

pattern(7);