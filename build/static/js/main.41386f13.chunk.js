(window.webpackJsonpcryptocurrency=window.webpackJsonpcryptocurrency||[]).push([[0],{42:function(e,t,a){e.exports=a(56)},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(47),a(21)),i=a(22),s=a(28),u=a(23),m=a(30),y=a(83),p=a(86),h=a(85),d=a(84),E=a(87),f=a(58),b=a(82),g=(a(48),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={cryptos:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.coincap.io/v2/assets?limit=5").then((function(e){return e.json()})).then((function(t){e.setState({cryptos:t.data}),console.log(e.state.cryptos)})),console.log(this.state.cryptos),document.title="Crypto Viewer"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("title",null,"Crypto Viewer"),r.a.createElement("h1",{style:{color:"white"}},"Current Major Crytocurrencies and Prices"),r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(y.a,{style:{backgroundColor:"#dfdfbf"}},r.a.createElement(d.a,null,r.a.createElement(h.a,{align:"center"},"Symbol"),r.a.createElement(h.a,{align:"center"},"Name"),r.a.createElement(h.a,{align:"center"},"Price(USD)")),r.a.createElement(p.a,{style:{color:"white"}},this.state.cryptos.map((function(e){return r.a.createElement(E.a,{key:e.name},r.a.createElement(h.a,{style:{color:"gray"},align:"center"},e.symbol),r.a.createElement(h.a,{style:{color:"gray"},align:"center"},e.name),r.a.createElement(h.a,{style:{color:"gray"},align:"center"},e.priceUsd))})))))))}}]),t}(n.Component)),w=a(88),v=a(89),j=a(90),k=a(92),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(k.a,{edge:"start",color:"inherit","aria-label":"menu"}),r.a.createElement(j.a,{variant:"h6"},"Crypto Prices Viewer"))))}}]),t}(n.Component),O=(a(53),a(38)),P=a(17),S=a(40),V=a(91),B=new S.a({palette:{primary:{main:"#202040"},secondary:{main:"#202060"}},table:{backgroundColor:"#dfdfbf"}});var D=function(){return r.a.createElement(V.a,{theme:B},r.a.createElement(O.a,null,r.a.createElement("div",{className:"App",style:{backgroundColor:"#282850",height:"100vh"}},r.a.createElement(C,null),r.a.createElement(P.a,{path:"/",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.41386f13.chunk.js.map