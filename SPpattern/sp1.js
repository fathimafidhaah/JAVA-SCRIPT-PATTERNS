var a="";


for(i=1;i<=4;i++){
  a=""
    for(j=1;j<=3;j++){
        if(i%2 == 0){
            a=a+" $ "
        }
        else{
            a=a+" * "
        }
    }
    console.log(a)
}