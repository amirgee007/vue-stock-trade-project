<template>
<div>
<app-stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock"></app-stock>

</div>
<!-- <h1>The Portfolio Component</h1> -->
</template>


<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

    export default {
      computed:{
          ...mapGetters({
              stocks: 'stockPortfolio'
          })
      },
      components: {
          appStock: Stock
      }
    }
</script>
