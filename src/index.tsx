import axios from "axios"

interface CountryCurrency{
    country:string;
    currency:string;
    symbol:string;
}


const currencyData:CountryCurrency[]=[
    {country:"US",currency:"USD",symbol:''},
    {country:"GB",currency:"GBP",symbol:''},
    {country:"EU",currency:"EUR",symbol:''},
]