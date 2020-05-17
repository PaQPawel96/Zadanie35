let n;
function Sprawdzenie(n)
{ 
    n=Math.floor(Math.random() * 150) + 50;
    if((n>100) && (n<200))
    {
        console.log("Liczba znajduje się w przedziale. ");
    }
    else
    {
        console.log("Liczba nie znajduje się w przedziale. ");
    }
}

Sprawdzenie(n);