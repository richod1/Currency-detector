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


const getCurentcyByCountryCode=(countryCode:string):CountryCurrency|undefined=>{
    return currencyData.find((data)=>data.country===countryCode);
}

const getUserByCountryCode=async():Promise<string>=>{
    const response=await axios.get('http://ipapi.co/json/');
    return response.data.country_code;
}


export const hetUsersCurrency=async():Promise<string>=>{
    const countrycode=await getUserByCountryCode();
    const currency=getCurentcyByCountryCode(countrycode);
    if(currency){
        return `${currency.symbol} (${currency.currency})`;
    }else{
        return 'Currency not found';
    }
}