import {getUserCurrency} from './index'


(async ()=>{
    const userCurrency=await getUserCurrency();
    console.log(userCurrency);
})();