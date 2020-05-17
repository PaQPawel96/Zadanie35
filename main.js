let n;
function Sprawdzenie(n)
{
    n=Math.random;
    document.write(n);
    if(n>100 AND n<200)
    {
        document.write("Liczba znajduje się w przedziale.");
    }
    else
    {
        document.write("Liczba nie znajduje się w przedziale.");
    }
}

Sprawdzenie(n);