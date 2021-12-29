import webserver from "./webserver";
import axios from 'axios'
export const getCurrencyConversorValue = async (obj) => {
  try {
    // const response = await axios.get(`https://www.floatrates.com/daily/${obj?.payload?.selectedTargetValue}.json`);
    const response = await axios.get(`https://api.fastforex.io/convert?from=${obj?.payload?.selectedBaseValue}&to=${obj?.payload?.selectedTargetValue}&amount=${obj?.payload?.valueToConverter}&api_key=demo`);
    

    if (!response && !response?.data) {
      return false;
    }

    // const cotacao = json.data[obj?.payload?.selectedBaseValue].inverseRate;
    const cotacao = response.data.result[obj?.payload?.selectedTargetValue.toUpperCase()]
    let valueConverted;
    
    if(cotacao) valueConverted = parseFloat(cotacao).toFixed(2)
    return valueConverted || 0;
  } catch (err) {
    console.log(err);
  }
};
