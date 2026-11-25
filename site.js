(function(){
  var PT={
    "nav.work":"Trajetória","nav.ib":"International Business","nav.contact":"Contato",
    "hero.eyebrow":"Hong Kong · Negócios internacionais &amp; go-to-market",
    "hero.lede":"Quinze anos fazendo marcas atravessarem fronteiras. De verdade, não só no papel.",
    "hero.meta":"Italo-brasileiro · Cidadão italiano · Baseado em Hong Kong",
    "hero.cta1":"Vamos conversar","hero.cta2":"International Business →",
    "facts.years":"anos de marketing internacional e GTM","facts.langs":"idiomas, inclusive mandarim",
    "facts.cos":"empresas globais, vistas por dentro","facts.base":"a base: onde a Ásia encontra a Europa e o Brasil",
    "work.title":"Por dentro das plataformas que decidem como um produto é descoberto, contado e vendido lá fora.",
    "work.t1":"E-commerce · marketplaces","work.t2":"Conteúdo · social commerce","work.t3":"Marketplace","work.t4":"Fintech · Brasil","work.t5":"Mídia financeira",
    "craft.title":"O ofício.","craft.intro":"Não é uma lista de empregos. É o que, na prática, reduz o risco de uma entrada internacional malfeita.",
    "craft.1":"Entrada em mercados","craft.2":"Marca &amp; storytelling","craft.3":"Geração de demanda","craft.4":"Marketplaces",
    "craft.5":"E-commerce","craft.6":"Fintech","craft.7":"Localização","craft.8":"Execução entre culturas",
    "langs.title":"Seis idiomas. A sala inteira.",
    "langs.body":"A conversa com o distribuidor, o comprador e o parceiro acontece no idioma da outra parte, sem intermediário.",
    "shores.title":"Duas margens. Uma base.",
    "shores.body1":"Italo-brasileiro, cidadão italiano. Entendo a marca no idioma em que ela nasceu, e como ela precisa soar lá fora.",
    "shores.body2":"Hong Kong é a base, não um cartão-postal: o ponto em que a Ásia de negócios encontra a Europa e o Brasil.",
    "ib.kicker":"International Business","ib.title1":"Entrar na Ásia.","ib.title2":"Comprar dela. Vender para ela.",
    "ib.intro":"Trabalho comercial no terreno, a partir de Hong Kong, para empresas da Europa e da América Latina. Sem camadas de agência. Sem repasses.",
    "s1.h":"Entrada na Ásia","s1.p":"Qual mercado, qual canal, qual parceiro. E depois, o lançamento.",
    "s2.h":"Sourcing na Ásia","s2.p":"Fornecedores na China e no Sudeste Asiático encontrados, avaliados e apresentados.",
    "s3.h":"Importação para a Ásia","s3.p":"Distribuição via Hong Kong: parceiros, canais, marketplaces.",
    "s4.h":"Feiras","s4.p":"As feiras da Ásia: delegações, reuniões com compradores, follow-up.",
    "s5.h":"Interpretação","s5.p":"Mandarim, inglês, português, espanhol.",
    "s6.h":"Mesa Ásia","s6.p":"Presença sênior na Ásia, em tempo parcial. Sem precisar de escritório.",
    "eng.label":"Formas de trabalhar","eng.1h":"Por dia","eng.1p":"Feiras, visitas a fornecedores, reuniões.",
    "eng.2h":"Por projeto","eng.2p":"Escopo fechado. Valor fechado.","eng.3h":"Por mandato","eng.3p":"Retainer mensal.",
    "c.title1":"Pronto para a Ásia?","c.title2":"Vamos conversar.","c.body":"Mande o briefing. Receba uma proposta.",
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
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){io.observe(e);});
})();
