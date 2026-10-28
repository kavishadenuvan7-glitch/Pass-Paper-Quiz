// ප්‍රශ්න එකතු කිරීම: [ප්‍රශ්නය, [පිළිතුරු...], නිවැරදි පිළිතුරේ index (0 සිට)]
const DATA={
math:{name:"ගණිතය",g:{
6:[["12 × 8 = ?",["86","96","98","108"],1],["3/4 දශම ආකාරයෙන් කීයද?",["0.34","0.75","0.5","1.25"],1],["පැත්තක දිග 5 cm වන සමචතුරස්‍රයක පරිමිතිය කීයද?",["10 cm","15 cm","20 cm","25 cm"],2]],
7:[["−5 + 8 = ?",["3","−3","13","−13"],0],["80 හි 25% කීයද?",["15","20","25","40"],1],["x + 7 = 15 නම් x = ?",["6","7","8","22"],2]],
8:[["3x − 4 = 11 නම් x = ?",["3","4","5","6"],2],["පාදම 10 cm, උස 6 cm වන ත්‍රිකෝණයක වර්ගඵලය?",["16 cm²","30 cm²","60 cm²","32 cm²"],1],["2⁵ = ?",["10","25","32","64"],2]],
9:[["√144 = ?",["10","11","12","14"],2],["5x + 3x = ?",["8","8x","15x","8x²"],1],["(a + b)² = ?",["a² + b²","a² + 2ab + b²","2a + 2b","a² − b²"],1]],
10:[["x² − 5x + 6 = 0 හි මූල මොනවාද?",["1 සහ 6","2 සහ 3","−2 සහ −3","2 සහ −3"],1],["sin 30° = ?",["1/2","√3/2","1","0"],0],["අරය 7 cm වන වෘත්තයක වර්ගඵලය (π = 22/7)?",["44 cm²","154 cm²","308 cm²","22 cm²"],1]],
11:[["2, 4, 6, 8, 10 හි මධ්‍යන්‍යය?",["5","6","7","30"],1],["x² = 49 නම් x = ?",["7","−7","±7","49"],2],["කාසියක් උඩ දැමූ විට සිරස (head) ලැබීමේ සම්භාවිතාව?",["1","1/2","1/4","0"],1]]
}},
sci:{name:"විද්‍යාව",g:{
6:[["ශාක තමන්ගේ ආහාර සාදා ගන්නා ක්‍රියාවලිය?",["ශ්වසනය","ප්‍රභාසංස්ලේෂණය","උත්ස්වේදනය","ජීර්ණය"],1],["සාමාන්‍ය වායු පීඩනයේදී ජලය පැහෙන උෂ්ණත්වය?",["50 °C","90 °C","100 °C","120 °C"],2],["ශරීරය පුරා රුධිරය පොම්ප කරන ඉන්ද්‍රියය?",["පෙනහළු","හදවත","අක්මාව","වකුගඩු"],1]],
7:[["බලයේ SI ඒකකය?",["ජූල්","වොට්","නිව්ටන්","පැස්කල්"],2],["ශ්වසනයේදී අප ඇතුළට ගන්නා වායුව?",["කාබන්ඩයොක්සයිඩ්","නයිට්‍රජන්","හීලියම්","ඔක්සිජන්"],3],["ජලයේ රසායනික සූත්‍රය?",["CO₂","H₂O","O₂","NaCl"],1]],
8:[["වේගය = ?",["දුර × කාලය","දුර ÷ කාලය","කාලය ÷ දුර","දුර + කාලය"],1],["අම්ලයක් නිල් ලිට්මස් කඩදාසිය කුමන පාටකට හරවයිද?",["රතු","කොළ","කහ","නිල්ම පවතී"],0],["සෛලයේ ශක්තිය නිපදවන 'බලාගාරය'?",["නාභිය","මයිටොකොන්ඩ්‍රියාව","හරිතලවය","රික්තකය"],1]],
9:[["කාබන් හි පරමාණුක ක්‍රමාංකය?",["6","8","12","14"],0],["විද්‍යුත් ධාරාවේ ඒකකය?",["වෝල්ට්","ඕම්","ඇම්පියර්","වොට්"],2],["ශාක සෛලයේ ප්‍රභාසංස්ලේෂණය සිදුවන ඉන්ද්‍රියිකාව?",["හරිතලව","රයිබොසෝම","ගොල්ගි දේහ","නාභිය"],0]],
10:[["ඕම් නීතිය අනුව?",["V = I ÷ R","V = I × R","V = I + R","V = R ÷ I"],1],["ලුණු (table salt) වල රසායනික සූත්‍රය?",["KCl","NaOH","NaCl","CaCO₃"],2],["බාහිර බලයක් නොයෙදුවහොත් වස්තුවක් නිශ්චලව හෝ ඒකාකාර වේගයෙන් පවතින බව පවසන්නේ?",["නිව්ටන්ගේ පළමු නියමය","නිව්ටන්ගේ දෙවන නියමය","නිව්ටන්ගේ තෙවන නියමය","ඕම් නියමය"],0]],
11:[["ලෝහයක් සමඟ අම්ලය ප්‍රතික්‍රියා කළ විට මුක්ත වන වායුව?",["ඔක්සිජන්","හයිඩ්‍රජන්","නයිට්‍රජන්","ක්ලෝරීන්"],1],["සංඛ්‍යාතයේ SI ඒකකය?",["මීටර්","හර්ට්ස්","ජූල්","නිව්ටන්"],1],["උදාසීන ද්‍රාවණයක pH අගය?",["0","5","7","14"],2]]
}}};
const $=id=>document.getElementById(id);
let grade=null,sub=null,qs=[],ai=[],cur=0,t0=0,tick=null;
const gEl=$("grades"),sEl=$("subs");
[6,7,8,9,10,11].forEach(g=>{const b=document.createElement("button");b.className="opt";b.textContent=g+" ශ්‍රේණිය";b.onclick=()=>{grade=g;[...gEl.children].forEach(c=>c.classList.toggle("on",c===b));chk()};gEl.append(b)});
Object.entries(DATA).forEach(([k,v])=>{const b=document.createElement("button");b.className="opt";b.textContent=v.name;b.onclick=()=>{sub=k;[...sEl.children].forEach(c=>c.classList.toggle("on",c===b));chk()};sEl.append(b)});
function chk(){$("start").disabled=!(grade&&sub)}
function show(id){["home","quiz","result"].forEach(x=>$(x).classList.toggle("hide",x!==id));window.scrollTo(0,0)}
const fmt=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
function begin(){qs=DATA[sub].g[grade];ai=qs.map(()=>null);cur=0;t0=Date.now();clearInterval(tick);tick=setInterval(()=>$("timer").textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);$("qtitle").textContent=DATA[sub].name+" · "+grade+" ශ්‍රේණිය";render();show("quiz")}
function render(){const q=qs[cur];$("qtext").textContent=(cur+1)+". "+q[0];$("pbar").style.width=((cur+1)/qs.length*100)+"%";const box=$("qans");box.innerHTML="";q[1].forEach((o,i)=>{const b=document.createElement("button");b.className="ans"+(ai[cur]===i?" sel":"");b.textContent=String.fromCharCode(65+i)+".  "+o;b.onclick=()=>{ai[cur]=i;render()};box.append(b)});
$("prev").disabled=cur===0;const last=cur===qs.length-1;$("next").textContent=last?"අවසන් කරන්න":"ඊළඟ ප්‍රශ්නය";$("next").disabled=ai[cur]===null}
$("prev").onclick=()=>{cur--;render()};
$("next").onclick=()=>{if(cur<qs.length-1){cur++;render()}else finish()};
function finish(){clearInterval(tick);const secs=Math.floor((Date.now()-t0)/1000);let ok=0;qs.forEach((q,i)=>{if(ai[i]===q[2])ok++});const n=qs.length,p=Math.round(ok/n*100);
$("rsub").textContent=DATA[sub].name+" · "+grade+" ශ්‍රේණිය";$("score").textContent=ok+"/"+n;$("pct").textContent="ලකුණු "+p+"%";
$("msg").textContent=p===100?"පට්ටම! සම්පූර්ණ ලකුණු 🎉":p>=67?"ඉතා හොඳයි! තව ටිකක් උත්සාහ කළොත් සම්පූර්ණ ලකුණු ගන්න පුළුවන්.":p>=34?"හොඳ උත්සාහයක්. වැරදුණු ප්‍රශ්න පහතින් බලන්න.":"කමක් නෑ! පහත පිළිතුරු කියවලා නැවත උත්සාහ කරන්න.";
$("sOk").textContent=ok;$("sNo").textContent=n-ok;$("sTime").textContent=fmt(secs);
$("review").innerHTML=qs.map((q,i)=>{const good=ai[i]===q[2];return `<div class="rv ${good?"ok":"no"}"><p>${i+1}. ${q[0]}</p><span class="tag ${good?"ok":"no"}">ඔබේ පිළිතුර: ${q[1][ai[i]]}</span>${good?"":`<span class="tag ok">නිවැරදි: ${q[1][q[2]]}</span>`}</div>`}).join("");
const c=$("circ");c.style.transition="none";c.setAttribute("stroke-dashoffset","560");show("result");requestAnimationFrame(()=>requestAnimationFrame(()=>{c.style.transition="stroke-dashoffset 1s ease-out";c.setAttribute("stroke-dashoffset","0")}))}
$("start").onclick=begin;$("again").onclick=begin;$("home2").onclick=()=>show("home");
