<template>
  <div class="preview">
      <div class="jumbotron">
        <h1><i :class="['cc '+coin.symbol]"></i> {{ coin.name }} </h1>
        <div>
          <p> Symbol             : {{ coin.symbol }} </p>
          <p> Price USD          : ${{ coin.price_usd }} </p>
          <p> Price BTC          : {{ coin.price_btc }} </p>
          <p> Capitalization USD : ${{ coin.market_cap_usd }} </p>
          <p> Max Circulating Supply : {{ coin.max_supply }} </p>
          <div v-if="Math.sign(coin.percent_change_24h) === -1">
              <p> Change (24h)       : <span class="btn-danger btn-lg">{{ coin.percent_change_24h}}</span></p>
          </div>
          <div v-else>
              <p> Change (24h)       : <span class="btn-success btn-lg">{{ coin.percent_change_24h}}</span></p>
          </div>        
        </div>
      </div> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Preview',
  data () {
    return {
        coin : []
    }
  },
  mounted : function(){
    axios({ method: "GET", "url": "https://api.coinmarketcap.com/v1/ticker/" + (this.$route.params.name).replace(/\s+/g, '-') + "/" }).then(result => {
     this.coin = result.data[0];
        }, error => {
            alertify.error('Error al conectarse a Coinmarketcap ');
            console.error(error);
        });
  },
  methods : {
  }
}
</script>
