var a="";

for(i=1;i<=4;i++){
    a=""
    for(j=1;j<=4;j++){
        if(j%2 ==0){
            a=a+" $ "
        }
        else{a=a+" * "}
    }
    console.log(a)
}