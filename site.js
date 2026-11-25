(function(){
  var PT={
    "nav.work":"Trajetória","nav.ib":"International Business","nav.contact":"Contato",
    "hero.eyebrow":"Ásia &amp; negócios internacionais · Hong Kong",
    "hero.lede":"Quinze anos fazendo marcas atravessarem fronteiras. Por dentro do Alibaba, da ByteDance e da Amazon. Agora do seu lado da mesa.",
    "hero.meta":"Italo-brasileiro · Cidadão italiano · Baseado em Hong Kong",
    "hero.cta1":"International Business",
    "facts.years":"Anos de marketing internacional e GTM","facts.langs":"Idiomas, inclusive mandarim",
    "facts.cos":"Empresas globais, vistas por dentro","facts.base":"Onde a Ásia encontra a Europa e o Brasil",
    "ib.kicker":"International Business","ib.title1":"Entrar na Ásia.","ib.title2":"Comprar dela.","ib.title3":"Vender para ela.",
    "ib.intro":"Trabalho comercial no terreno, a partir de Hong Kong, para empresas da Europa e da América Latina. Sem camadas de agência. Sem repasses.",
    "s1.h":"Entrada na Ásia","s1.p":"Qual mercado, qual canal, qual parceiro. E depois, o lançamento.",
    "s2.h":"Sourcing na Ásia","s2.p":"Fornecedores na China e no Sudeste Asiático encontrados, avaliados e apresentados.",
    "s3.h":"Importação para a Ásia","s3.p":"Distribuição via Hong Kong: parceiros, canais, marketplaces.",
    "s4.h":"Feiras","s4.p":"Delegações, reuniões com compradores, follow-up.",
    "s5.h":"Interpretação","s5.p":"Mandarim, inglês, português, espanhol.",
    "s6.h":"Mesa Ásia","s6.p":"Presença sênior na Ásia, em tempo parcial. Sem precisar de escritório.",
    "eng.label":"Formas de trabalhar","eng.1h":"Por dia","eng.1p":"Feiras, visitas a fornecedores, reuniões.",
    "eng.2h":"Por projeto","eng.2p":"Escopo fechado. Valor fechado.","eng.3h":"Por mandato","eng.3p":"Retainer mensal.",
    "eng.cta":"Mandar o briefing",
    "work.kicker":"Por dentro",
    "work.title":"Por dentro das plataformas que decidem como um produto é descoberto, contado e vendido lá fora.",
    "work.t1":"E-commerce · marketplaces","work.t2":"Conteúdo · social commerce","work.t3":"Marketplace","work.t4":"Fintech · Brasil","work.t5":"Mídia financeira",
    "craft.1":"Entrada em mercados","craft.2":"Marca &amp; storytelling","craft.3":"Geração de demanda","craft.4":"Marketplaces",
    "craft.5":"E-commerce","craft.6":"Fintech","craft.7":"Localização","craft.8":"Execução entre culturas",
    "base.kicker":"Base","base.title":"Duas margens. Uma base. Seis idiomas.",
    "base.hk":"A base, não um cartão-postal. A duas horas da China continental.",
    "base.asia.h":"Ásia","base.asia":"Anos em Xangai, Hangzhou e Hong Kong.",
    "base.eu.h":"Europa","base.eu":"Cidadão italiano, raízes no Vêneto e no Trentino.",
    "base.br.h":"Brasil","base.br":"Brasileiro. Montou o time do Alibaba no Brasil.",
    "c.title1":"Mande o briefing.","c.title2":"Receba uma proposta.",
    "foot.regions":"Ásia · Europa · América Latina"
  };
  var nodes=[].slice.call(document.querySelectorAll('[data-i18n]'));
  var EN={}; nodes.forEach(function(n){EN[n.getAttribute('data-i18n')]=n.innerHTML;});
  function set(lang){
    var dict=lang==='pt'?PT:EN;
    nodes.forEach(function(n){var k=n.getAttribute('data-i18n'); if(dict[k]!=null) n.innerHTML=dict[k];});
    document.documentElement.lang=lang==='pt'?'pt-BR':'en';
    [].forEach.call(document.querySelectorAll('[data-lang]'),function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-lang')===lang));});
    try{localStorage.setItem('yz-lang',lang);}catch(e){}
  }
  var q=(location.search.match(/[?&]lang=(en|pt)/)||[])[1];
  var saved=null; try{saved=localStorage.getItem('yz-lang');}catch(e){}
  var initial=q||saved||((navigator.language||'').toLowerCase().indexOf('pt')===0?'pt':'en');
  if(initial!=='en') set(initial);
  [].forEach.call(document.querySelectorAll('[data-lang]'),function(b){b.addEventListener('click',function(){set(b.getAttribute('data-lang'));});});

  var bar=document.querySelector('[data-bar]');
  function onScroll(){ if(bar) bar.classList.toggle('is-scrolled', window.scrollY>12); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  var clock=document.querySelector('[data-clock]');
  if(clock){
    var fmt=null;
    try{fmt=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Hong_Kong',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});}catch(e){}
    var tick=function(){ if(fmt) clock.textContent=fmt.format(new Date()); };
    tick(); setInterval(tick,1000);
  }

  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e);});
})();
