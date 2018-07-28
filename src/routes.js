import Home from './components/Home.vue'
import Portfolio from './components/portfolio/portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
    {path: '/',name: 'homeRoute', component: Home},
    {path: '/portfolio',name: 'portfolioRoute', component: Portfolio},
    {path: '/stocks',name: 'stocksRoute', component: Stocks},
    {path: '*' ,redirect : '/'}
];