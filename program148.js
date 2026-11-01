function DisplayFcarors(iNo)
{
    let icnt = 0;

    console.log("it is number ")
    for(icnt = 1; icnt <=(iNo / 2); icnt++)
    {
       if(iNo % icnt == 0)
       {
         console.log(icnt)
       }
    }
}
function main()
{
   DisplayFcarors(12)
}
main()
