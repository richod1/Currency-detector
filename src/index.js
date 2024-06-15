"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hetUsersCurrency = void 0;
const axios_1 = __importDefault(require("axios"));
const currencyData = [
    { country: "US", currency: "USD", symbol: '' },
    { country: "GB", currency: "GBP", symbol: '' },
    { country: "EU", currency: "EUR", symbol: '' },
];
const getCurentcyByCountryCode = (countryCode) => {
    return currencyData.find((data) => data.country === countryCode);
};
const getUserByCountryCode = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get('http://ipapi.co/json/');
    return response.data.country_code;
});
const hetUsersCurrency = () => __awaiter(void 0, void 0, void 0, function* () {
    const countrycode = yield getUserByCountryCode();
    const currency = getCurentcyByCountryCode(countrycode);
    if (currency) {
        return `${currency.symbol} (${currency.currency})`;
    }
    else {
        return 'Currency not found';
    }
});
exports.hetUsersCurrency = hetUsersCurrency;
