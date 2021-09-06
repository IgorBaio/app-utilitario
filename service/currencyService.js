const axios = require('axios');

export const getCurrencyConversor = async (entrada, saida) => {
    console.log('entrada',entrada)
    console.log('saida',saida)
        // let url = `https://www.floatrates.com/daily/${(this.state.moedaB)}.json`
        let url = `https://www.floatrates.com/daily/brl.json`
        // console.log(this.state.value)
        // console.log(this.props.moedaA)
        // console.log(this.props.moedaB)
        // console.log(this.state.moedaA)
        // console.log(this.state.moedaB)
        
        await axios({
                method: 'get',
                url: url,
                responseType: 'stream'
              })
        .then(json=>{
        //    let cotacao = json[(this.state.moedaA)].inverseRate;
           let cotacao = json['usd'].inverseRate;
           console.log('cotacao')
           console.log(cotacao)
        //    let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
        //    this.setState({moedaB_valor});
        })
  
    //  }
    // const parser = new DOMParser()
    // const teste = await axios({
    //     method: 'get',
    //     url: `https://www.google.com/search?q=${entrada}+para+${saida}&oq=${entrada}+para+&aqs=chrome.0.0i433i512j69i57j0i433i512j0i512l4j0i457i512j0i512l2.4206j1j7&sourceid=chrome&ie=UTF-8`,
    //     responseType: 'stream'
    //   })
    //     .then(function (response) {
    //         console.log('response')
    //         let algo = response.data
    //         console.log(algo)
    //         return response.data
    //         // console.log(parser.parseFromString(response.data))
    //     }).catch(err=>console.log(err))

};

