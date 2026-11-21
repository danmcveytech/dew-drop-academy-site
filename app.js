const h = React.createElement;
const {Button, IconButton, Dialog, ThemeProvider, createTheme} = MaterialUI;
const theme = createTheme({palette:{primary:{main:'#15598a'},secondary:{main:'#ff8b0e'}},typography:{fontFamily:'Arial, sans-serif',button:{textTransform:'none',fontWeight:700}},shape:{borderRadius:5}});
const mail='dewdropacademy16@gmail.com', phone='tel:+233244731840';
const photos=[
 ['heritage','Colours of tradition','Three pupils in colourful traditional dress at the academy'],
 ['blue-smocks','Traditional smocks','Two pupils wearing blue and white smocks'],
 ['kente','Kente colours','Two pupils dressed in bright woven patterns'],
 ['community','Our school community','An adult holding a child at a school gathering'],
 ['campus','Our campus in Medie','Entrance to the Dew Drop Academy building'],
 ['crest','The academy crest','The academy crest bearing the motto Arise and Shine']
];
const nav=[['Home','index'],['About Us','about'],['Admissions','admissions'],['School Life','school-life'],['Contact Us','contact']];
const paths={pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z M15 10a3 3 0 1 1-6 0 3 3 0 1 1 6 0',mail:'M3 5h18v14H3z M3 6l9 7 9-7',phone:'M7 3l3 5-2 2c1 3 3 5 6 6l2-2 5 3-1 4C10 22 2 14 3 4z',back:'M15 5l-7 7 7 7',next:'M9 5l7 7-7 7',menu:'M3 6h18 M3 12h18 M3 18h18',close:'M5 5l14 14 M19 5L5 19',photo:'M3 6h4l2-3h6l2 3h4v14H3z M16 13a4 4 0 1 1-8 0 4 4 0 1 1 8 0'};
function icon(name){return h('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.7,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true},h('path',{d:paths[name]}))}
function brand(){return h('a',{className:'brand',href:'index.html'},h('img',{src:'assets/shield.png',alt:''}),h('span',null,'Dew Drop Academy',h('small',null,'Arise and Shine')))}

const page = document.body.dataset.page || 'index';
function Banner({title, photo}) {
 return h('section',{className:'page-banner'},
   h('img',{src:'assets/'+photo+'.jpg',alt:''}),
   h('div',{className:'wrap'},h('a',{href:'index.html'},'Home'), h('span',{'aria-hidden':true},' / '), title,h('h1',null,title)));
}
function schoolPhoto(index) {
 const [file, caption, alt] = photos[index];
 return h('figure',{className:'school-photo'},h('img',{src:'assets/'+file+'.jpg',alt}),h('figcaption',null,caption));
}
function AboutPage(){
 return h(React.Fragment,null,h(Banner,{title:'About Us',photo:'campus'}),
 h('section',{className:'wrap inside-pair'},schoolPhoto(3),h('article',null,h('h2',null,'Our school in Medie'),
 h('p',null,'Dew Drop Academy opened in 2016. Our crest carries the words “Arise and Shine”, a welcome to each child who walks through our gates.'),
 h('h3',null,'Arise and Shine'),h('p',null,'A learner might shine by sharing an idea, trying a difficult question again, or helping a friend. Our motto makes room for all of those moments.'),
 h('a',{className:'textlink',href:'school-life.html'},'Explore school life'))));
}
function AdmissionsPage(){
 return h(React.Fragment,null,h(Banner,{title:'Admissions',photo:'blue-smocks'}),
 h('section',{className:'wrap inside-pair'},h('article',null,h('h2',null,'Enquiring about a place'),
 h('p',null,'Tell the school office which class you have in mind and when you would like your child to start. The office can advise on availability, fees and the documents to bring.'),
 h('h3',null,'Visiting the academy'),h('p',null,'To arrange a visit, suggest a day in your enquiry or call the office before travelling to Medie.'),
 h('a',{className:'textlink',href:phone},'Call 024 473 1840')),
 h('div',{className:'enquiry'},h('h3',null,'Write an admissions enquiry'),h('p',null,'Prepare a message below, then review and send it in your email app.'),
 h('form',{onSubmit:e=>{e.preventDefault();const data=new FormData(e.currentTarget);const body=['Dear Dew Drop Academy,','',data.get('message'),'',data.get('name')].join('\n');location.href='mailto:'+mail+'?subject=Admissions%20enquiry&body='+encodeURIComponent(body)}},
 h(MaterialUI.TextField,{name:'name',label:'Your name',autoComplete:'name',fullWidth:true}),
 h(MaterialUI.TextField,{name:'message',label:'Your enquiry',multiline:true,minRows:4,fullWidth:true,defaultValue:'I would like to ask about a place at Dew Drop Academy.'}),
 h(Button,{type:'submit',variant:'contained'},'Open email draft')))));
}
function ContactPage(){
 return h(React.Fragment,null,h(Banner,{title:'Contact Us',photo:'heritage'}),
 h('section',{className:'wrap inside-pair'},h('article',null,h('h2',null,'School office'),h('p',null,'For general questions, admissions or directions to the school, get in touch with our office.'),
 h('dl',{className:'details'},h('dt',null,'Telephone'),h('dd',null,h('a',{href:phone},'024 473 1840')),h('dt',null,'Email'),h('dd',null,h('a',{href:'mailto:'+mail},mail)),h('dt',null,'Digital address'),h('dd',null,'GW-0332-5797 · Medie, Ghana'))),schoolPhoto(4)));
}
function App(){
 const [slide,setSlide]=React.useState(0),[view,setView]=React.useState(null),[menu,setMenu]=React.useState(false);
 const [playing,setPlaying]=React.useState(()=>!matchMedia('(prefers-reduced-motion: reduce)').matches);
 React.useEffect(()=>{if(!playing || page!=='index')return; const timer=setInterval(()=>setSlide(i=>(i+1)%3),6500); return ()=>clearInterval(timer)},[playing]);

 const turn=(v,d,n)=>(v+d+n)%n;
 function control(name,label,action){return h(IconButton,{size:'small','aria-label':label,onClick:action},icon(name))}
 function controls(i,set,n){return h('div',{className:'controls'},control('back','Previous photograph',()=>set(turn(i,-1,n))),control('next','Next photograph',()=>set(turn(i,1,n))))}
 function links(){return nav.map(([label,id])=>h('a',{key:id,href:id+'.html','aria-current':page===id?'page':undefined,onClick:()=>setMenu(false)},label))}
 const btn=(t,href,cls)=>h(Button,{href,className:'button '+cls,variant:'contained',disableElevation:true},t);
 return h(React.Fragment,null,h('a',{className:'skip',href:'#main'},'Skip to content'),
 h('header',{id:'home'},h('div',{className:'wrap head'},brand(),h('nav',{'aria-label':'Main navigation'},links()),h(IconButton,{className:'menubtn','aria-label':menu?'Close navigation':'Open navigation','aria-expanded':menu,onClick:()=>setMenu(!menu)},icon(menu?'close':'menu'))),menu&&h('nav',{className:'mobile','aria-label':'Mobile navigation'},links())),
 h('main',{id:'main'},page==='about'?h(AboutPage):page==='admissions'?h(AdmissionsPage):page==='contact'?h(ContactPage):page==='school-life'?h(React.Fragment,null,h(Banner,{title:'School Life',photo:'community'}),h('section',{className:'gallery',id:'gallery'},h('div',{className:'wrap'},h('h2',null,'Our academy in pictures'),h('p',null,'Woven patterns, blue smocks and family moments fill this collection from Medie. Select a photograph to see it in full.'),h('div',{className:'grid'},photos.map(([file,title,alt],i)=>h('button',{key:file,onClick:()=>setView(i),'aria-label':'View '+title},h('img',{src:'assets/'+file+'.jpg',alt,loading:'lazy'}),h('span',null,title))))))) : h(React.Fragment,null,
 h('section',{className:'hero','aria-label':'Dew Drop Academy'},
 photos.slice(0,3).map(([file],i)=>h('img',{key:file,className:slide===i?'slide selected':'slide',src:'assets/'+file+'.jpg',alt:''})),
 h('h1',null,'Arise and ',h('span',null,'Shine')),
 h('button',{className:'playback',onClick:()=>setPlaying(!playing),'aria-label':playing?'Pause slideshow':'Play slideshow'},playing?'Ⅱ':'▶')),
 h('section',{className:'admissions wrap',id:'admissions'},h('h2',null,'Admissions enquiries'),btn('Enquire now','admissions.html','orange')),
 h('section',{className:'wrap about',id:'about'},h('div',{className:'campus'},h('img',{src:'assets/campus.jpg',alt:photos[4][2],loading:'lazy'}),h('span',null,icon('pin'),'Medie campus')),h('div',null,h('h2',null,'Welcome to',h('br'),'Dew Drop Academy'),h('p',null,'Our school opened in Medie in 2016. “Arise and Shine” is the motto you’ll find on our crest and the invitation we extend to every learner.'),h('a',{className:'textlink',href:'about.html'},'Read about our school'))),
 h('section',{className:'gallery'},h('div',{className:'wrap'},h('h2',null,'School life in pictures'),h('p',null,'Explore traditional dress, community and campus life in our photo gallery.'),h('a',{className:'textlink',href:'school-life.html'},'View the gallery'))),
 h('section',{className:'contact wrap',id:'contact'},h('div',null,h('h2',null,'Speak with our school'),h('p',null,'For admissions enquiries or a visit to the academy, contact the school office.')),h('address',null,h('a',{href:phone},icon('phone'),'024 473 1840'),h('a',{href:'mailto:'+mail},icon('mail'),mail),h('span',null,icon('pin'),'Medie, Ghana · GW-0332-5797'))))),
 h('footer',null,h('div',{className:'wrap'},brand(),h('nav',{'aria-label':'Footer navigation'},links()))),
 h(Dialog,{open:view!==null,onClose:()=>setView(null),maxWidth:'md','aria-labelledby':'photo-title',onKeyDown:e=>{if(e.key==='ArrowRight')setView(turn(view,1,photos.length));if(e.key==='ArrowLeft')setView(turn(view,-1,photos.length))}},view!==null&&h('div',{className:'lightbox'},h('div',{className:'lighthead'},h('h3',{id:'photo-title'},photos[view][1]),control('close','Close photograph',()=>setView(null))),h('img',{src:'assets/'+photos[view][0]+'.jpg',alt:photos[view][2]}),h('div',{className:'lightfoot'},h('span',null,(view+1)+' of '+photos.length),controls(view,setView,photos.length)))));}
ReactDOM.createRoot(document.getElementById('root')).render(h(ThemeProvider,{theme},h(App)));
