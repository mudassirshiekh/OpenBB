"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>a,kt:()=>E});var P=U(67294);function S(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function e(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(D);R&&(P=P.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,P)}return U}function t(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?e(Object(U),!0).forEach((function(R){S(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):e(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function A(D,R){if(null==D)return{};var U,P,S=function(D,R){if(null==D)return{};var U,P,S={},e=Object.keys(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||(S[U]=D[U]);return S}(D,R);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(S[U]=D[U])}return S}var B=P.createContext({}),K=function(D){var R=P.useContext(B),U=R;return D&&(U="function"==typeof D?D(R):t(t({},R),D)),U},a=function(D){var R=K(D.components);return P.createElement(B.Provider,{value:R},D.children)},N="mdxType",G={inlineCode:"code",wrapper:function(D){var R=D.children;return P.createElement(P.Fragment,{},R)}},n=P.forwardRef((function(D,R){var U=D.components,S=D.mdxType,e=D.originalType,B=D.parentName,a=A(D,["components","mdxType","originalType","parentName"]),N=K(U),n=S,E=N["".concat(B,".").concat(n)]||N[n]||G[n]||e;return U?P.createElement(E,t(t({ref:R},a),{},{components:U})):P.createElement(E,t({ref:R},a))}));function E(D,R){var U=arguments,S=R&&R.mdxType;if("string"==typeof D||S){var e=U.length,t=new Array(e);t[0]=n;var A={};for(var B in R)hasOwnProperty.call(R,B)&&(A[B]=R[B]);A.originalType=D,A[N]="string"==typeof D?D:S,t[1]=A;for(var K=2;K<e;K++)t[K]=U[K];return P.createElement.apply(null,t)}return P.createElement.apply(null,U)}n.displayName="MDXCreateElement"},88828:(D,R,U)=>{U.d(R,{Z:()=>e});var P=U(67294),S=U(35742);function e(D){let{title:R}=D;return P.createElement(S.Z,null,P.createElement("title",null,R))}},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>K,contentTitle:()=>A,default:()=>n,frontMatter:()=>t,metadata:()=>B,toc:()=>a});var P=U(87462),S=(U(67294),U(3905)),e=U(88828);const t={title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},A=void 0,B={unversionedId:"terminal/reference/forex/load",id:"terminal/reference/forex/load",title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",lastUpdatedBy:"Colin Delahunty",lastUpdatedAt:1710940729,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"quote",permalink:"/terminal/reference/forex/quote"}},K={},a=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],N={toc:a},G="wrapper";function n(D){let{components:R,...U}=D;return(0,S.kt)(G,(0,P.Z)({},N,U,{components:R,mdxType:"MDXLayout"}),(0,S.kt)(e.Z,{title:"forex /load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,S.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,S.kt)("h3",{id:"usage"},"Usage"),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE] [-e END]\n")),(0,S.kt)("hr",null),(0,S.kt)("h2",{id:"parameters"},"Parameters"),(0,S.kt)("table",null,(0,S.kt)("thead",{parentName:"table"},(0,S.kt)("tr",{parentName:"thead"},(0,S.kt)("th",{parentName:"tr",align:null},"Name"),(0,S.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,S.kt)("th",{parentName:"tr",align:null},"Description"),(0,S.kt)("th",{parentName:"tr",align:null},"Default"),(0,S.kt)("th",{parentName:"tr",align:null},"Optional"),(0,S.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,S.kt)("tbody",{parentName:"table"},(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,S.kt)("td",{parentName:"tr",align:null},"None"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"TWDHKD, MOPUSD, EURDJF, TRYUSD, CLPGBP, BIFUSD, JPYNGN, JPYPLN, HTGUSD, SGDIDR, BHDPKR, INREUR, RSDEUR, USDLYD, EGPZAR, EURBOB, CADXAG, USDRSD, SGDTWD, HKDTHB, GBPXPD, INRKRW, USDXPT, CLPPEN, XAGMXN, INRTHB, EURNIO, GBPBGN, SEKAUD, DOECHF, RUBSEK, GBPTHB, SGDHKD, BRLSEK, MYRCAD, INRDKK, USDSDG, USDKYD, CHFSGD, GBPPKR, HKDGBP, EGPJPY, CADMXN, LYDUSD, NZDSGD, GBPMGA, USDPYG, PLNEUR, USDUGX, USDMMK, BRLCAD, THBGBP, BRLMXN, RONEUR, ZARSZL, GBPDOP, NOKAUD, UZSEUR, NZDTRY, KRWIDR, GBPSCR, ZARZMW, CADAUD, GBPKWD, GBPHTG, AUDMXN, GBPBSD, NZDPLN, EURUSD, SEKCZK, JPYSGD, MYRGBP, ETBEUR, JPYMXN, DKKZAR, USDGTQ, KRWMYR, HKDCHF, MXNCZK, AUDCAD, GBPBOB, USDHNL, OSOCHF, AUDPKR, XPDEUR, CHFNOK, ILSJPY, INRNOK, TWDSEK, MYRAUD, HUFNZD, TRYAUD, KRUUSD, CHFMAL, GBPCUP, JPYINR, PKRDKK, AUDBRL, ZARTND, CADJPY, SLLEUR, EURPKR, GBPPYG, RONUSD, INRSGD, USDCNH, INRUSD, GBPSLL, ZARILS, AEDNZD, ZMWZAR, GBPKYD, EURMUR, TZSUSD, USDHTG, EGPUSD, BMDGBP, GTQUSD, RWFGBP, EURJMD, GBPKRW, TTDUSD, USDGYD, AUNUSD, INRCNY, AUDCNY, GBPBDT, HRKPLN, PGKGBP, ZARRON, BRLSGD, USDEGP, USDRWF, XAGBRL, BRLPEN, XPTEUR, PHPUSD, GBPPLN, USDISK, XAGARS, USDCVE, XAGCNY, USDKHR, HUFCAD, NPREUR, JPYCAD, HKDBRL, CLPBRL, RUBCHF, ARSSGD, EURSEK, CHFIDR, XAGCAD, MDLEUR, SEKJPY, CADMYR, MOPEUR, MXNCOP, EURMDL, GBPKZT, ZARRWF, HKDPKR, JODILS, USDIQD, THBZAR, XAUSAR, ZARINR, GBPTRY, ARSCAD, ETBGBP, KYDCAD, USDJOD, GBPDKK, RONZAR, USDXPF, ARSXAU, AEDPKR, NZDCZK, USDNZD, USDTMT, USDMVR, XPFUSD, DKKTHB, SGDNZD, AEDNOK, LAKEUR, EURQAR, TWDKRW, CHFILS, CHFNBL, LRDEUR, EURCUP, USDGBP, IDRCHF, UYUEUR, TRYDKK, GBPKES, HKDCNY, AEDDKK, ARSPEN, BOBEUR, USDRON, NZDIDR, ARSBRL, XAGSAR, EURPEN, PKRKWD, ZMWEUR, COPMXN, RUBUSD, EURINR, PKRSGD, USDBRL, NOKJPY, GBPIDR, GBPNPR, XPDUSD, SEKBRL, ZARNAD, PGKEUR, EURPHP, USDBRI, GBPLAK, FJDUSD, RUBEUR, KWDPKR, BBDBMD, ZARXAU, NOKPLN, PLNCHF, SZLUSD, MXNSGD, JODUSD, LTLAUD, CADEUR, USDMXN, PENCLP, GBPHUF, CADBRL, TTDGBP, TRYCHF, FJDEUR, LAKUSD, HKDMYR, RUBDKK, NZDAUD, USDQAR, PLNSEK, SZLCHF, SOSEUR, NSOUSD, CHFBRI, NADUSD, CZKMXN, THBINR, AEDUSD, LYDGBP, USDAED, MXNCLP, PKRBHD, IQDUSD, TWDCHF, GBPEUR, ARSMXN, TZSEUR, SGDAED, SGDCNY, USDAUD, KRWCAD, MYRZAR, AEDSGD, NZDJPY, ARSZAR, SARGBP, PHPJPY, NOKNZD, KRWSGD, HKDXAG, PENMXN, RUBMXN, EURKWD, MXNGBP, INRHKD, JPYCZK, ZARNOK, THBTWD, USDBBD, GBPHKD, JPYCNY, EURBIF, USDKZT, ARSEUR, CHFSEK, PHPAUD, EURTHB, RONGBP, CHFRON, IDRGBP, JPYIDR, CADBMD, BRIUSD, BRLXAG, OMRZAR, HKDDKK, MYRHKD, USDBAM, JMDEUR, DKKISK, USDFJD, EURGYD, INRJPY, SCRUSD, CHFKRU, HKDSEK, JPYDKK, ZARTZS, NOKUSD, MYRJPY, AUDZAR, ARSGBP, USDBGN, NOKSEK, BMDEUR, BAMUSD, ARSCOP, GBPSAR, SGDMYR, HRKEUR, QARZAR, SZLGBP, KRWCNY, GBPEGP, KRWTHB, CHFHUF, INRNZD, USDSOS, EURSOS, DKKSGD, HKDARS, MVRGBP, ISKEUR, NGNZAR, CDFGBP, DOPUSD, EURAMD, AUDPGK, USDNOK, ZARTRY, DKKUAH, IDRMYR, MXNRUB, DZDUSD, CADILS, NADEUR, THBHKD, THBNZD, GBPAUD, GBPYER, INRZAR, BRLCOP, USDILS, LBPUSD, TRYGBP, CNYSGD, XAUCAD, BGNEUR, JPYILS, TWDZAR, HNLEUR, AUDPLN, TWDSGD, EURHTG, EURGHS, GBPCHF, MGAUSD, EURBGN, MXNARS, SEKCAD, GBPUGX, CNYEUR, BWPUSD, RUBZAR, RSDGBP, JPYHKD, GBPSZL, KRWINR, AUDXAG, MOPGBP, GBPLYD, QARGBP, CADSEK, HRKAUD, KHRGBP, BHDAED, ZARGBP, THBAUD, USDOMR, INRAED, EURARS, SGDCHF, HUFPLN, XAUINR, PHPDKK, SEKKRW, AUDHUF, VRNCHF, ZARBWP, USDMDL, RUBGBP, USDTND, KRWNZD, BDTUSD, GBPXAG, NOKSGD, INRXAG, TWDUSD, SGDZAR, MDLGBP, EURSCR, PGKUSD, AEDBHD, EURBDT, CADSGD, USDZMW, AUDNOK, HUFUSD, DOPGBP, UGXEUR, IDRTWD, NOKINR, NGNEUR, JPYSEK, EURCOP, ALLGBP, DZDEUR, GBPBBD, USDRUB, CHFTWD, QARUSD, GBPAMD, AFNGBP, JMDGBP, USDMKD, THBPKR, INRXAU, JPYVND, USDSAR, NZDTHB, CHFOSO, SGDUSD, NZDPKR, NGNUSD, JPYEUR, USDCHF, KRWXAU, AEDKWD, THBEUR, CZKUSD, ILSCHF, NZDINR, AUDMAD, XAUTRY, BNDGBP, EURTJS, AEDGBP, KZTEUR, SEKRUB, GHSGBP, MKDEUR, EURJOD, AUDTRY, USDLRD, JPYTHB, USDGHS, CZKDKK, GBPMYR, XAUTHB, INRCAD, IDRKRW, CNYXAG, USDMAD, BRLCHF, NOKZAR, VNDJPY, USDBWP, SEKUSD, BGNAUD, PENCOP, DJFUSD, KESZAR, GBPMMK, HRKCAD, QAREUR, CNYXAU, CADARS, CHFBRL, TNDUSD, AEDZAR, EURPGK, SEKDKK, DKKINR, TWDAUD, KRWHKD, GBPMXN, CLPARS, KESUSD, XAGINR, CHFNSO, JPYCLP, JPYBDT, KYDBMD, GBPXPF, CLPMXN, MYRTHB, BTNGBP, UAHEUR, PLNHUF, NOKDKK, USDKES, GBPQAR, HUFGBP, DKKBGN, CNYTHB, USDMAL, PYGEUR, NADZAR, PLNMXN, USDLBP, CZKEUR, CADBGN, AUDSGD, USDTZS, SGDBRL, PKRSAR, THBDKK, AUDBGN, PKRHKD, ZARPHP, AUDXAU, PHPZAR, ZARUSD, EURETB, IDRHKD, ZAROMR, HKDSGD, THBSGD, IQDEUR, MXNZAR, NZDGBP, LBPGBP, EURNPR, MYRDKK, EURSDG, MXNHKD, GBPGHS, COPEUR, MYREUR, SARKWD, ISKGBP, GBPNGN, CHFZAR, GBPGNF, AUDNZD, CZKPLN, SGDPKR, CHFMXN, INRIDR, ZAREUR, GBPTTD, EURJPY, GBPAFN, JPYAUD, MWKUSD, TZSZAR, UAHGBP, GBPRUB, CDFUSD, GBPSGD, EURHUF, ZARTWD, PLNJPY, EURCNH, EURXPD, HKDJPY, EURNZD, EURILS, SEKTWD, VRLCHF, USDARS, HKDIDR, SEKPLN, GYDGBP, ISKCHF, GBPCNY, BBDGBP, MXNEUR, GBPHNL, TWDGBP, EURUGX, LRDGBP, THBCHF, CADUSD, EURYER, RUBXAG, NZDEUR, CNYIDR, AUDMYR, XAGRUB, ILSJOD, ZARMYR, LKRUSD, SDGUSD, GBPRSD, BNDUSD, RUBKRW, USDPLN, JPYUSD, USDIDR, CZKZAR, SGDARS, PKRAUD, UGXUSD, CLPEUR, IDRCAD, AUDIDR, JPYXAG, ISKUSD, EURGTQ, EURCNY, SVCGBP, JPYEGP, USDKRU, CNHEUR, EURMWK, GBPLBP, EURXPT, CNYGBP, COPBRL, GBPBRL, XCDGBP, EURTND, HUFZAR, CDFEUR, XPTUSD, INRSEK, GBPDJF, MYRNZD, AEDJOD, EURDKK, HUFJPY, EURLBP, XAUCNY, USDPEN, THBIDR, HKDKRW, USDCNY, RSDJPY, MURUSD, TRYNZD, ALLEUR, KYDUSD, MXNBRL, PENGBP, GTQEUR, ILSGBP, AUDCLP, THBMYR, VNDEUR, GBPRWF, RWFEUR, USDNIO, SGDCAD, MXNXAG, BHDUSD, HTGGBP, ZARTHB, XAUKRW, INRCHF, RWFZAR, PLNTRY, SARXAG, GBPUSD, USDTWD, EURLAK, BRICHF, EURIDR, EURSAR, EURAUD, EURMMK, SGDKRW, HKDUSD, BSDGBP, SLLUSD, MDLUSD, USDPKR, KRWAUD, TRYJPY, GBPPEN, XAUHKD, EURGNF, EURCLP, CHFVRL, COPARS, BRLZAR, XAGEUR, CNYUSD, PABUSD, FJDGBP, USDVND, JODGBP, CADIDR, CADNZD, DKKJPY, CADZAR, RSDBRL, EURMYR, QARAED, XAUGBP, EURLYD, NZDDKK, PLNAUD, KESEUR, GBPALL, USDGNF, AEDAUD, PYGUSD, GBPISK, NGNGBP, CHFVRN, USDLAK, SEKHKD, NSOCHF, AMDEUR, USDDZD, NZDMYR, PHPEUR, CADPEN, XAUMXN, GBPUYU, EURBMD, SARUSD, BMDBBD, PGKAUD, VNDUSD, AUDLTL, LKRZAR, SGDNOK, TWDTHB, MMKUSD, CHFAED, FJDAUD, GBPAWG, DKKRUB, NIOEUR, EURIQD, PABEUR, DKKCOP, EURUAH, BGNDKK, GHSZAR, DKKTWD, BAMGBP, TWDPKR, TRYXAG, IQDGBP, AUDHKD, CZKSEK, ILSEUR, SARAED, AUDPHP, EURLSL, ZARRUB, CZKAUD, KMFGBP, BIFEUR, GHSEUR, CNYTWD, XAGUSD, EUREGP, XAGTRY, JPYAED, IDRAUD, ZARCAD, CHFISK, ILSAUD, MYRTWD, TWDDKK, XAGGBP, AUDUSD, SZLZAR, XAUEUR, AEDOMR, OMRUSD, ZARIDR, USDKRW, EURUYU, USDTRY, NBLCHF, USDNAD, THBCAD, PABGBP, ILSAED, USDUAH, ILSPLN, XAGJPY, EURBTN, HKDNZD, EURMAD, CHFRUB, CADVND, SGDPLN, GBPVND, BRLEUR, ARSJPY, BRLKRW, PLNCZK, BGNCAD, HKDZAR, AEDILS, CZKGBP, IDRTHB, JODAED, HKDMXN, USDCUP, THBXAU, AMDGBP, IDREUR, NOKILS, DKKPLN, AEDJPY, SGDINR, DKKPKR, HNLUSD, IDRZAR, GBPKMF, JPYCHF, VNDCAD, MWKZAR, GBPLKR, CHFAUN, EURSZL, PLNZAR, PKREGP, KZTUSD, ZARDKK, JPYTRY, USDBDT, GBPARS, CNYINR, EURCHF, SGDAUD, NZDSEK, ETBUSD, CADHKD, BWPGBP, CNYMYR, LKRGBP, GBPCAD, LYDEUR, EURPLN, ZARPKR, EURRSD, MZNEUR, MWKGBP, GBPTND, USDSLL, USDEUR, ZARLKR, GBPFJD, AUDGBP, USDJPY, MYRCNY, TTDEUR, JPYNZD, RWFUSD, PKREUR, BRLJPY, CHFKRW, YERGBP, EURCDF, DKKPHP, USDPHP, EURSLL, NZDMXN, HTGEUR, AUDILS, OMRGBP, PLNSGD, CHFUSD, PLNGBP, SOSGBP, EURCZK, GBPNZD, SEKEUR, EURKHR, HKDINR, YERUSD, JPYHUF, PLNNZD, USDDOP, BZDGBP, MXNCAD, NOKGBP, USDPGK, JPYTWD, USDTHB, USDETB, BIFGBP, AUDFJD, JPYNOK, CUPEUR, CHFGBP, CADGBP, XAUZAR, CADDKK, CHFEUR, CNYDKK, BRLARS, ZARHKD, USDJMD, CHFPLN, GBPUAH, USDKWD, DKKCZK, TRYPLN, EURVND, BRLGBP, GBPXPT, BBDEUR, ARSXAG, CYPZAR, EGPPKR, ALLUSD, MYRUSD, HUFAUD, EURXAG, COPDKK, NZDTWD, PENARS, CHFINR, TWDMYR, ZARPLN, EURHNL, SEKNOK, USDDJF, JPYARS, XAURUB, USDCAD, SZLEUR, BZDUSD, DKKHUF, MWKEUR, SLLGBP, ZARCHF, LAKGBP, PLNDKK, EURTWD, KRWZAR, EURSGD, TWDINR, USDXPD, JPYRSD, SCRGBP, USDUYU, ZARSGD, ZARHUF, SGDEUR, EURMGA, GBPMUR, EURMOP, MXNNZD, DKKHKD, USDSHP, CHFBWP, AWGGBP, DKKNOK, SVCUSD, CNYZAR, AUNCHF, SGDGBP, EURDZD, JPYSAR, COPGBP, CNYAUD, COPPEN, CHFDKK, USDSEK, IDRJPY, SEKSGD, USDYER, USDUZS, HKDCAD, XAGAUD, BMDKYD, ILSSEK, ZARMWK, RUBJPY, PLNHRK, GBPPHP, UAHDKK, GBPTWD, EURHKD, GBPIQD, USDNSO, ZAREGP, SGDTRY, USDMYR, BHDGBP, XAUJPY, RUBPLN, DOEUSD, DKKMXN, PKRNZD, MURGBP, GBPBTN, GBPMOP, MGAEUR, ZARMXN, AUDCNH, EURAFN, TWDCNY, EURGBP, JPYPHP, USDSZL, USDCZK, XAUUSD, GBPCDF, SHPUSD, USDCDF, TNDGBP, JPYGBP, NOKEUR, GYDEUR, BRLXAU, DKKCNY, ARSCLP, GBPJPY, SGDTHB, INRAUD, MUREUR, EURKES, ZARCOP, ZARARS, ZARCZK, GYDUSD, USDOSO, CADHUF, XAUBRL, USDXAU, KMFUSD, GBPNIO, EURISK, HRKGBP, THBJPY, XPDGBP, XPTGBP, RUBAUD, ZARUGX, MXNPLN, CUPUSD, BSDUSD, EURTRY, THBKRW, KRWTWD, ZARKRW, BOBUSD, CADAED, EURBWP, NZDCHF, THBUSD, IDRSGD, ZARQAR, GBPSOS, DKKMYR, SEKZAR, USDDOE, ZARAUD, AUDJPY, NIOUSD, EURLKR, PLNHKD, GBPJMD, GHSUSD, AUDSEK, SOSUSD, PKRQAR, CLPAUD, GBPLRD, GBPINR, CNHGBP, ILSCAD, COPUSD, MXNJPY, SEKGBP, BRLRSD, BBDUSD, UAHUSD, ZARSEK, NOKCHF, USDALL, CHFSZL, USDAWG, CHFARS, CLPUSD, DKKTRY, GBPHRK, GBPBIF, RONCHF, USDNPR, SEKINR, NZDHKD, PKRUSD, LRDUSD, CNYBGN, GBPILS, MYRKRW, MXNXAU, KZTGBP, USDAUN, MVRUSD, OMREUR, MADZAR, MMKGBP, USDMWK, KESGBP, SARPKR, GBPRON, USDBSD, CVEUSD, KYDEUR, XAGHKD, KWDGBP, USDHKD, PKRGBP, EURZAR, CNHUSD, EURMXN, CNYJPY, MXNCHF, ARSUSD, USDTTD, GBPMWK, PENBRL, AUDRUB, DKKUSD, BDTEUR, LSLGBP, GBPBWP, MKDUSD, HKDEUR, KWDUSD, CHFTRY, USDZAR, ZARXAG, JPYPKR, KRWXAG, AUDCHF, LSLUSD, CADTHB, KWDAED, EURHRK, JPYMYR, USDNGN, SGDDKK, EURXAU, GBPXCD, TWDNZD, INRMYR, NPRUSD, AUDKRW, GBPMAD, NOKAED, TRYXAU, EURMZN, EURRUB, USDXAG, EURBBD, PKRMYR, HKDPLN, DKKAED, CNYNZD, XAUAUD, KHRUSD, DKKGBP, EURMKD, SGDMXN, NZDZAR, USDLSL, UYUGBP, CNHAUD, USDBOB, GBPMDL, AEDQAR, GTQGBP, EURMVR, GBPETB, TRYSGD, XAUARS, GBPMKD, CHFNZD, PLNNOK, AUDAED, PKRZAR, USDHRK, MKDGBP, GBPNOK, ZARAED, SEKCHF, EURNOK, GNFUSD, USDPAB, DZDGBP, GBPGYD, EURUZS, DJFEUR, BGNUSD, EURBRL, ZARNZD, MYRINR, EURAED, SCREUR, TNDZAR, JPYZAR, EURNGN, BDTJPY, KRWSEK, EURZMW, MYRPKR, IDRNZD, ILSNOK, FRNCHF, MGAGBP, MYRIDR, AEDSAR, BHDEUR, CADHRK, GBPJOD, EURFJD, CHFAUD, GBPSVC, ZARBRL, CADINR, SEKNZD, PLNRUB, ARSCHF, AUDHRK, EURKYD, MADGBP, BWPZAR, GBPCZK, EUROMR, AUDEUR, MXNUSD, ZARCNY, OSOUSD, USDKMF, RUBXAU, HNLGBP, EURBHD, TMTUSD, NPRGBP, CLPJPY, KRWCHF, SARJPY, ILSZAR, VNDGBP, LKREUR, ILSUSD, PENUSD, NZDCAD, PYGGBP, EURRON, CHFARE, BGNCNY, GBPBZD, AFNEUR, USDMOP, MYRCHF, EURKZT, EURRWF, AUDTHB, ZARMAD, IDRCNY, BMDCAD, AEDINR, NIOGBP, XAGKRW, NZDCNY, CHFDOE, GBPLSL, THBCNY, GNFGBP, GBPCOP, USDINR, BRLHKD, DKKNZD, TRYEUR, EGPEUR, JMDUSD, TJSUSD, DOPEUR, DKKAUD, BRLUSD, KRWRUB, SAREUR, HKDXAU, OMRAED, CADXAU, AUDTWD, ZARGHS, PENCAD, ISKDKK, ARECHF, SARXAU, NZDHUF, GBPCNH, IDRINR, USDCOP, USDTJS, GBPDZD, JPYKRW, QARPKR, KRWUSD, TRYZAR, GBPBAM, BRLAUD, GBPMVR, GBPOMR, CZKNZD, ZARCYP, USDBZD, EURPYG, HKDTWD, CHFHKD, UGXZAR, CNYKRW, JODEUR, MXNDKK, USDCLP, EURKRW, PKRJPY, AEDCHF, USDBHD, NZDAED, HUFDKK, MXNAUD, BNDEUR, BDTGBP, UYUUSD, NOKRUB, EURTZS, HUFEUR, COPZAR, GBPBMD, AEDSEK, AUDINR, ZARJPY, USDSGD, SEKILS, KYDGBP, SDGEUR, GNFEUR, USDLKR, KRWJPY, USDHUF, BOBGBP, CZKJPY, AUDARS, KHREUR, JPYBRL, CADTWD, EGPGBP, HRKUSD, RSDUSD, AEDEUR, MADUSD, USDBIF, CHFFRN, INRGBP, PKRTHB, KRWBRL, NZDKRW, ZMWUSD, EURBND, JPYRUB, LBPEUR, USDSCR, EURBSD, BRLCLP, EURLRD, BWPEUR, EURTTD, MVREUR, MYRSGD, ARSHKD, XPFGBP, GBPPAB, TJSEUR, PLNILS, GBPZAR, EURBZD, KWDSAR, BGNGBP, MXNPEN, GBPKHR, DKKEUR, HKDAUD, AUDDKK, PKRAED, NZDNOK, USDMUR, GBPCLP, CADKRW, GBPPGK, EURALL, SGDJPY, MMKEUR, EURDOP, GBPSEK, GBPGTQ, CADKYD, USDDKK, ARSAUD, YEREUR, JPYXAU, SGDSEK, TWDCAD, CHFMYR, CHFTHB, NGNJPY, CHFJPY, DKKCAD, BWPCHF, CNYHKD, GBPAED, PLNUSD, USDMGA, INRTWD, GBPBND, UGXGBP, LSLEUR, ZARNGN, KWDEUR, NZDUSD, TWDIDR, EURCAD, USDBND, AUDCZK, MALUSD, DKKCHF, USDSVC, EURNAD, BZDEUR, IDRUSD, KRWEUR, CUPGBP, USDNBL, PKRTWD, AEDCAD, MADEUR, MALCHF, BSDEUR, HUFCHF, KRWGBP, AWGUSD, ZARKES, XAGZAR, MADAUD, GBPXAU, EURPAB, TWDJPY, RUBNOK, GBPBHD, SEKAED, KRUCHF, DJFGBP, NBLUSD, BTNEUR, DKKSEK, UZSUSD, PHPGBP, TWDEUR, PENEUR, TNDEUR")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"-r  --resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,S.kt)("td",{parentName:"tr",align:null},"d"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"interval"),(0,S.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,S.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,S.kt)("td",{parentName:"tr",align:null},"1day"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"start_date"),(0,S.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,S.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"end"),(0,S.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,S.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"2024-03-20"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")))),(0,S.kt)("hr",null))}n.isMDXComponent=!0}}]);