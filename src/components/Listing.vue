<template>
  <div class="listing container">
    <div class="title" style="margin-bottom:40px;">
      <h1>Cryptocurrencys</h1>
    </div>
  
    <div class="row">
      <div class="col-md-2 col-centered text-center">
        <h2>RANK</h2>
      </div>
      <div class="col-md-2 col-centered text-center">
        <h2>ICON</h2>
      </div>        
      <div class="col-md-2 col-centered text-center">
        <h2>NAME</h2>
      </div>
      <div class="col-md-2 col-centered text-center">
        <h2>SYMBOL</h2>
      </div>
      <div class="col-md-2 col-centered text-center">
        <h2>PRICE(USD)</h2>
      </div>      
      <div class="col-md-2 col-centered text-center">
        <h2>DETAILS</h2>
      </div>
    </div>


    <template v-for="coin in coins">
      <div class="row" style="margin-bottom:20px;">
        <div class="col-md-2 col-centered text-center" >
          <p>{{ coin.rank }}</p>
        </div>          
        <div class="col-md-2 col-centered text-center" >
          <p><i :class="['cc '+coin.symbol]"></i></p>
        </div>          
        <div class="col-md-2 col-centered text-center" >
          <p>{{ coin.name }}</p>
        </div>
        <div class="col-md-2 col-centered text-center">
          <p>{{ coin.symbol}}</p>
        </div>
        <div class="col-md-2 col-centered text-center">
          <p>${{ coin.price_usd}}</p>
        </div>        
        <div class="col-md-2 col-centered text-center">
          <router-link :to="{path: '/coin/'+coin.name }" class="btn-default btn-lg">View Details</router-link>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Listing',
  data () {
    return {
      coins : []
    }
  },
  mounted : function(){
    axios({ method: "GET", "url": "https://api.coinmarketcap.com/v1/ticker/?limit=20" }).then(result => {
        this.coins = result.data;
    }, error => {
        alertify.error('Error al conectarse a Coinmarketcap ');
        console.error(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
