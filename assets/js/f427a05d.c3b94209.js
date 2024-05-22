"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68440],{9130:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=i(74848),c=i(28453),r=i(94331);const o={title:"load",description:"Experienced in loading crypto currency data for analysis from Yahoo Finance by default or other sources such as 'ccxt' or 'cg'. Ability to select specific interval, start and end dates, and exchange currencies",keywords:["Load crypto currency","Yahoo Finance","ccxt","cg","specific interval","crypto analysis","exchange selection","coin symbol","quote currency"]},a=void 0,d={id:"terminal/reference/crypto/dd/load",title:"load",description:"Experienced in loading crypto currency data for analysis from Yahoo Finance by default or other sources such as 'ccxt' or 'cg'. Ability to select specific interval, start and end dates, and exchange currencies",source:"@site/content/terminal/reference/crypto/dd/load.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/load",permalink:"/terminal/reference/crypto/dd/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/load.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1716390788e3,frontMatter:{title:"load",description:"Experienced in loading crypto currency data for analysis from Yahoo Finance by default or other sources such as 'ccxt' or 'cg'. Ability to select specific interval, start and end dates, and exchange currencies",keywords:["Load crypto currency","Yahoo Finance","ccxt","cg","specific interval","crypto analysis","exchange selection","coin symbol","quote currency"]},sidebar:"tutorialSidebar",previous:{title:"liquidations",permalink:"/terminal/reference/crypto/dd/liquidations"},next:{title:"market",permalink:"/terminal/reference/crypto/dd/market"}},s={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"crypto/dd/load - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used such as 'ccxt' or 'cg' with --source. If you select 'ccxt', you can then select any exchange with --exchange. You can also select a specific interval with --interval."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"load -c COIN [-s START] [--exchange {aax,ascendex,bequant,bibox,bigone,binance,binancecoinm,binanceus,binanceusdm,bit2c,bitbank,bitbay,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,btcalpha,btcbox,btcex,btcmarkets,btctradeua,btcturk,buda,bw,bybit,bytetrade,cex,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinspot,crex24,cryptocom,currencycom,delta,deribit,digifinex,eqonex,exmo,flowbtc,fmfwio,ftx,ftxus,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,itbit,kraken,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,liquid,luno,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,probit,qtrade,ripio,stex,therock,tidebit,tidex,timex,tokocrypto,upbit,wavesexchange,whitebit,woo,yobit,zaif,zb,zipmex,zonda}] [-e END] [-i {1,5,15,30,60,240,1440,10080,43200}] [--vs VS]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coin"}),(0,n.jsx)(t.td,{children:"Coin to get. Must be coin symbol (e.g., btc, eth)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start"}),(0,n.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the crypto"}),(0,n.jsx)(t.td,{children:"2019-11-21"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"Exchange to search"}),(0,n.jsx)(t.td,{children:"binance"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"aax, ascendex, bequant, bibox, bigone, binance, binancecoinm, binanceus, binanceusdm, bit2c, bitbank, bitbay, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, btcalpha, btcbox, btcex, btcmarkets, btctradeua, btcturk, buda, bw, bybit, bytetrade, cex, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinspot, crex24, cryptocom, currencycom, delta, deribit, digifinex, eqonex, exmo, flowbtc, fmfwio, ftx, ftxus, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, itbit, kraken, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, liquid, luno, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, probit, qtrade, ripio, stex, therock, tidebit, tidex, timex, tokocrypto, upbit, wavesexchange, whitebit, woo, yobit, zaif, zb, zipmex, zonda"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end"}),(0,n.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the crypto"}),(0,n.jsx)(t.td,{children:"2022-11-25"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"The interval of the crypto"}),(0,n.jsx)(t.td,{children:"1440"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"1, 5, 15, 30, 60, 240, 1440, 10080, 43200"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vs"}),(0,n.jsx)(t.td,{children:"Quote currency (what to view coin vs). e.g., usdc, usdt, ... if source is ccxt, usd, eur, ... otherwise"}),(0,n.jsx)(t.td,{children:"usdt"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var n=i(5260),c=i(74848);function r(e){let{title:t}=e;return(0,c.jsx)(n.A,{children:(0,c.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const c={},r=n.createContext(c);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);