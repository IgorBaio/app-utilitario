import webserver from "./webserver";
import axios from 'axios'
export const getCurrencyConversorValue = async (obj) => {
  try {
    // const response = await axios.get(`https://www.floatrates.com/daily/${obj?.payload?.selectedTargetValue}.json`);
    const response = await axios.get(`
    https://api.fastforex.io/convert?from=${obj?.payload?.selectedBaseValue.toUpperCase()}&to=${obj?.payload?.selectedTargetValue.toUpperCase()}&amount=${parseFloat(obj?.payload?.valueToConverter).toFixed(2)}&api_key=demo
    
    `);

    if (!response && !response?.data) {
      return false;
    }

    // const cotacao = json.data[obj?.payload?.selectedBaseValue].inverseRate;
    const cotacao = response.data.result[obj?.payload?.selectedTargetValue.toUpperCase()]
    let valueConverted = 0.00;
    if (cotacao) valueConverted = parseFloat(cotacao).toFixed(2)
    console.log('valueConverted apis')
    console.log(valueConverted)
    // const valueConverted = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
    //TODO passar na action o valor a ser convertido ou retornar o valor da moeda(2ª opção é melhor)
    return valueConverted;
  } catch (err) {
    console.log(err);
  }
};
