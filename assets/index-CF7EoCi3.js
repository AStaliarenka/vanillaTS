(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const A="/assets/avatar_start-BrYIXK-9.jpg",L="/assets/avatar_middle-BzMO8kV_.jpg",O="/assets/avatar_end-4zkFnIl1.jpg",R="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0105%2011.5997L17.4165%206.19368L17.8144%206.59155L12.4084%2011.9975L18%2017.5892L17.5892%2018L11.9975%2012.4084L6.59155%2017.8144L6.19368%2017.4165L11.5997%2012.0105L6%206.41085L6.41085%206L12.0105%2011.5997Z'%20stroke='white'%20stroke-opacity='0.4'%20stroke-linejoin='round'/%3e%3c/svg%3e",h={nav1:"Terms of Use",nav2:"Privacy Policy",nav3:"Restore"},{nav1:y,nav2:g,nav3:T}=h,U=`
    <footer>
        <nav>
            <ul><a href="#">${y}</a></ul>
            <ul><a href="#">${g}</a></ul>
            <ul><a href="#">${T}</a></ul>
        </nav>
    </footer>
`,u=(t,r)=>`
        <div class='avatarCard'>
            <img class="avatarCard__img" src="${t}"/>
            ${r?`<div class="avatarCard__text">${r}</div>`:""}
        </div>
    `,S=({offerMarkerText:t,mainText:r,subText:s,priceText:n,price:e,buttonId:i})=>{const c=/{{price}}/gi;let v="";s&&(v=s.replace(c,e));const m=n.replace(c,e);return`
        <div class="buttonsOfferRow__button customButton" id="${i}">
            <button class="customButton__button myButton customButtonBlock">
                <div class="customButtonBlock__startCol">
                    <div class="textPrim">
                        ${r}
                    </div>
                    ${s?`<div class="textSec">${v}</div>`:""}
                </div>
                <div class="customButtonBlock__endCol">
                    <div class="textSec">
                        ${m}
                    </div>
                </div>
            </button>
            ${t?`<div class="customButton__marker">${t}</div>`:""}
        </div>
    `},C={BUTTONS:{CONTINUE_BUTTON_ID:"continue-button"}},f={SELECTED:"selected"},$="Restore",B="Continue",I={"Get Unlimited <br>Access":"Get Unlimited <br>Access","Unlimited Art <br>Creation":"Unlimited Art <br>Creation","Exclusive <br>Styles":"Exclusive <br>Styles","Magic Avatars <br>With 20% Off":"Magic Avatars <br>With 20% Off","YEARLY ACCESS":"YEARLY ACCESS","BEST OFFER":"BEST OFFER","Just {{price}} per year":"Just {{price}} per year","WEEKLY ACCESS":"WEEKLY ACCESS","{{price}} <br>per week":"{{price}} <br>per week","Terms of Use":"Terms of Use","Privacy Policy":"Privacy Policy",Restore:$,Continue:B},w="Wiederherstellen",F="Weiter",P={"Get Unlimited <br>Access":"Erhalten Sie unbegrenzten <br>Zugriff","Unlimited Art <br>Creation":"Unbegrenzte <br>Kunstschaffung","Exclusive <br>Styles":"Exklusive <br>Stile","Magic Avatars <br>With 20% Off":"20 % Rabatt auf <br>KI-Avatare","YEARLY ACCESS":"JÄHRLICHER ZUGRIFF","BEST OFFER":"BESTES ANGEBOT","Just {{price}} per year":"Nur {{price}} pro Jahr","WEEKLY ACCESS":"WÖCHENTLICHER ZUGRIFF","{{price}} <br>per week":"{{price}} <br>pro Woche","Terms of Use":"Nutzungsbedingungen","Privacy Policy":"Datenschutzrichtlinie",Restore:w,Continue:F},N="Restaurar",_="Continuar",x={"Get Unlimited <br>Access":"Obtén acceso <br>ilimitado","Unlimited Art <br>Creation":"Ilimitada creación <br>de arte","Exclusive <br>Styles":"Estilos <br>exclusivos","Magic Avatars <br>With 20% Off":"20 % de descuento en <br>avatares de IA","YEARLY ACCESS":"ACCESO ANUAL","BEST OFFER":"MEJOR OFERTA","Just {{price}} per year":"Solo {{price}} por año","WEEKLY ACCESS":"ACCESO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Términos de uso","Privacy Policy":"Política de privacidad",Restore:N,Continue:_},Y="Restaurer",W="Continuer",k={"Get Unlimited <br>Access":"Obtenez un accès <br>illimité","Unlimited Art <br>Creation":"Création artistique <br>illimitée","Exclusive <br>Styles":"Styles <br>exclusifs","Magic Avatars <br>With 20% Off":"20&nbsp;% de réduction <br>sur les avatars IA","YEARLY ACCESS":"ACCÈS ANNUEL","BEST OFFER":"MEILLEURE OFFRE","Just {{price}} per year":"Seulement {{price}} par an","WEEKLY ACCESS":"ACCÈS HEBDOMADAIRE","{{price}} <br>per week":"{{price}} <br>par semaine","Terms of Use":"Conditions d’utilisation","Privacy Policy":"Politique de confidentialité",Restore:Y,Continue:W},M="復元する",D="続行する",J={"Get Unlimited <br>Access":"無制限アクセス<br>を入手","Unlimited Art <br>Creation":"アート作品を<br>無制限に創造","Exclusive <br>Styles":"特別な<br>スタイル","Magic Avatars <br>With 20% Off":"AIアバターが<br>20%オフ","YEARLY ACCESS":"年間アクセス","BEST OFFER":"ベストオファー","Just {{price}} per year":"わずか{{price}}/年","WEEKLY ACCESS":"週ごとのアクセス","{{price}} <br>per week":"{{price}}/週<br>","Terms of Use":"利用規約","Privacy Policy":"プライバシーポリシー",Restore:M,Continue:D},K="Restaurar",G="Continuar",j={"Get Unlimited <br>Access":"Obtenha Acesso <br>Ilimitado","Unlimited Art <br>Creation":"Criação de Arte <br>Ilimitada","Exclusive <br>Styles":"Estilos <br>Exclusivos","Magic Avatars <br>With 20% Off":"20% de Desconto em <br>Avatares de IA","YEARLY ACCESS":"ACESSO ANUAL","BEST OFFER":"MELHOR OFERTA","Just {{price}} per year":"Apenas {{price}} por ano","WEEKLY ACCESS":"ACESSO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Termos de Uso","Privacy Policy":"Política de Privacidade",Restore:K,Continue:G},z={en:"en",de:"de",es:"es",fr:"fr",ja:"ja",pt:"pt"},H=Object.values(z),d={en:I,de:P,es:x,fr:k,ja:J,pt:j};let o;const q=new URL(window.location.href),Z=new URLSearchParams(q.search),E=Z.get("lang");if(E&&Object.keys(d).find(t=>t===E))o=d[E];else{const t=navigator.languages;if(t.length)for(const r of t){if(r.length>2)continue;const s=H.find(n=>n===r);if(s){o=d[s];break}}}const a=(t,r,s)=>`
    <${s} class="${r}">
      <div class="appContainer">
        ${t}
      </div>
    </${s}>
  `,V=`
  <div class="cardRow">
    ${u(A,o["Unlimited Art <br>Creation"])}
    ${u(L,o["Exclusive <br>Styles"])}
    ${u(O,o["Magic Avatars <br>With 20% Off"])}
  </div>
`,b=[{buttonId:"offer-button-1",id:1,href:"https://apple.com"},{buttonId:"offer-button-2",id:2,href:"https://google.com"}],X=`
  <div class="buttonsOfferRow">
    ${S({buttonId:b[0].buttonId,offerMarkerText:o["BEST OFFER"],mainText:o["YEARLY ACCESS"],subText:o["Just {{price}} per year"],priceText:o["{{price}} <br>per week"],price:"$6.99"})}
    ${S({buttonId:b[1].buttonId,mainText:o["WEEKLY ACCESS"],priceText:o["{{price}} <br>per week"],price:"$6.99"})}
  </div>
`;document.querySelector("#app").innerHTML=`
  <div class="mainPage">
      ${a(`
        <h1 class="read-the-docs">
          ${o["Get Unlimited <br>Access"]}
        </h1>
      `,"title","div")}
      ${a(V,"cards","section")}
      <section class="offer">
        ${a(X,"offerButtons","div")}
        ${a(`
          <a href="#" id="${C.BUTTONS.CONTINUE_BUTTON_ID}">
            <button class="myButton">
              ${o.Continue}
            </button>
          </a>
        `,"continueButton","div")}
      </section>
      ${a(U,"footer","div")}
      <a class="closeBtn" href="#">
        <img src="${R}"/>
      </a>
  </div>
`;const p=document.querySelectorAll("#app .buttonsOfferRow__button.customButton");p.forEach(t=>{t.onclick=()=>{p.forEach(r=>{r.classList.remove(f.SELECTED)}),t.classList.add(f.SELECTED)}});const l=document.querySelector(`#${C.BUTTONS.CONTINUE_BUTTON_ID}`);l&&(l.onclick=()=>{p.forEach(t=>{if(t.classList.toString().indexOf(f.SELECTED)!==-1){const s=t.id,n=b.find(e=>e.buttonId===s);n&&(l.href=n.href)}}),l.click()});
