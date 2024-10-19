var a=""

for(i=1;i<=5;i++){
    a=""
    for(j=1;j<=i;j++){
        if(i % 2 == 0)
        {
            a=a+" $ "
        }
        else{a=a+" * "}
    }
    console.log(a)
}