var a=""


for(i=1;i<=4;i++)
{
    a=""
    for(j=1;j<=i;j++)
    {
        a=a+"*"
    }
    for(k=3;k>=i;k--)
        {
            a=a+"  "
        }
        for(l=1;l<=i;l++)
            {
              a=a+"*"  
            }
    console.log(a)
}