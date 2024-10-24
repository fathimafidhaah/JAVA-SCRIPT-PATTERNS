var a=""


for(i=1;i<=4;i++)
{
    a=""
    for(j=1;j<=i;j++)
    {
        if(i==1){a=a+" * "}
        else if(i==2){a=a+" $ "}
        else if(i==3){a=a+" % "}
        else{a=a+" / "}
    }
    console.log(a)
}