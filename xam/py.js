var a=""
for(i=1;i<=6;i++)
{a=""
    for(j=6;j>=i;j--)
{
    a=a+"   "
}
for(k=1;k<=i;k++)
{
    if(i==3&&k==2 || i==4 && k==2 || i==4&&k==3 || i==5 && k==2||i==5&& k==3|| i==5&&k==4){a=a+"      "}
    else{a=a+"  *   "}
}
console.log(a)
}