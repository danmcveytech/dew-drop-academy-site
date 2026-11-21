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
function Banner({title, photo, heading, introduction}) {
 return h('section',{className:'page-banner'},
   h('img',{src:'assets/'+photo+'.jpg',alt:''}),
   h('div',{className:'wrap'},h('a',{href:'index.html'},'Home'), h('span',{'aria-hidden':true},' / '), title,h('h1',null,heading || title),introduction && h('p',{className:'banner-intro'},introduction)));
}
function schoolPhoto(index) {
 const [file, caption, alt] = photos[index];
 return h('figure',{className:'school-photo'},h('img',{src:'assets/'+file+'.jpg',alt}),h('figcaption',null,caption));
}
function AboutPage(){
 return h(React.Fragment,null,h(Banner,{title:'About Us',photo:'campus'}),
 h('section',{className:'wrap inside-pair'},schoolPhoto(3),h('article',null,h('h2',null,'Our roots in Medie'),
 h('p',null,'Medie has been our home since 2016. The name above our entrance is Dew Drop Academy, but the life of our school comes from the children and families who walk in. We want a child to feel that what they know already, and what they are still finding their way through, both matter here.'),
 h('h3',null,'Arise and Shine'),h('p',null,'We chose these words for the child who always has a hand in the air and for the child who takes a little longer to speak. When we say “shine”, we think of effort, kindness and the pleasure of discovering that something hard has finally clicked.'),
 h('a',{className:'textlink',href:'school-life.html'},'Explore school life'))));
}
function AdmissionsPage(){
 return h(React.Fragment,null,h(Banner,{title:'Admissions',photo:'blue-smocks',heading:'Come and meet us in Medie',introduction:'We’d love to hear about your child. Tell us which class you’re considering, or choose a day to come and see our school.'}),
 h('section',{className:'wrap inside-pair'},h('article',null,h('h2',null,'Let’s talk about your child'),
 h('p',null,'Choosing a school brings practical questions and personal ones. You might want to know the fees first. You might be wondering how your child will find their feet after a move. Either is a good reason to call us.'),
 h('h3',null,'Where to start'),h('p',null,'Share the class you are considering and when you hope to start. Ask us about available places, current fees and what to bring if you decide to apply. If you are unsure which class to ask about, tell us a little about your child’s schooling so far.'),h('h3',null,'Come with your questions'),h('p',null,'Would you like to see the school for yourself? Suggest a day that suits your family and we can agree a time before you travel. Bring the questions that matter to you, from what your child will need on the first morning to how you can keep in touch with the school.'),
 h('a',{className:'textlink',href:phone},'Call 024 473 1840')),
 h('div',{className:'enquiry'},h('h3',null,'Tell us what’s on your mind'),h('p',null,'Write to our school office below. Your email app will open so you can review your message and send it to us.'),
 h('form',{onSubmit:e=>{e.preventDefault();const data=new FormData(e.currentTarget);const body=['Dear Dew Drop Academy,','',data.get('message'),'',data.get('name')].join('\n');location.href='mailto:'+mail+'?subject=Admissions%20enquiry&body='+encodeURIComponent(body)}},
 h(MaterialUI.TextField,{name:'name',label:'Your name',autoComplete:'name',fullWidth:true}),
 h(MaterialUI.TextField,{name:'message',label:'Your enquiry',multiline:true,minRows:4,fullWidth:true,defaultValue:'I would like to ask about a place at Dew Drop Academy.'}),
 h(Button,{type:'submit',variant:'contained'},'Open email draft')))));
}
function ContactPage(){
 return h(React.Fragment,null,h(Banner,{title:'Contact Us',photo:'heritage'}),
 h('section',{className:'wrap inside-pair'},h('article',null,h('h2',null,'School office'),h('p',null,'We would be happy to hear from you. Call us if you need directions before setting out, or email if you would like to talk through a question about joining the school.'),
 h('h3',null,'Finding our entrance'),h('p',null,'Our building in Medie has “Dew Drop Academy” above the entrance. Use our digital address below when planning your journey. For a school visit, please get in touch first so we can agree a time to welcome you.'),h('dl',{className:'details'},h('dt',null,'Telephone'),h('dd',null,h('a',{href:phone},'024 473 1840')),h('dt',null,'Email'),h('dd',null,h('a',{href:'mailto:'+mail},mail)),h('dt',null,'Digital address'),h('dd',null,'GW-0332-5797 · Medie, Ghana'))),schoolPhoto(4)));
}
function App(){
 const [view,setView]=React.useState(null),[menu,setMenu]=React.useState(false);

 const turn=(v,d,n)=>(v+d+n)%n;
 function control(name,label,action){return h(IconButton,{size:'small','aria-label':label,onClick:action},icon(name))}
 function controls(i,set,n){return h('div',{className:'controls'},control('back','Previous photograph',()=>set(turn(i,-1,n))),control('next','Next photograph',()=>set(turn(i,1,n))))}
 function links(){return nav.map(([label,id])=>h('a',{key:id,href:id+'.html','aria-current':page===id?'page':undefined,onClick:()=>setMenu(false)},label))}
 const btn=(t,href,cls)=>h(Button,{href,className:'button '+cls,variant:'contained',disableElevation:true},t);
 return h(React.Fragment,null,h('a',{className:'skip',href:'#main'},'Skip to content'),
 h('header',{id:'home'},h('div',{className:'wrap head'},brand(),h('nav',{'aria-label':'Main navigation'},links()),h(IconButton,{className:'menubtn','aria-label':menu?'Close navigation':'Open navigation','aria-expanded':menu,onClick:()=>setMenu(!menu)},icon(menu?'close':'menu'))),menu&&h('nav',{className:'mobile','aria-label':'Mobile navigation'},links())),
 h('main',{id:'main'},page==='about'?h(AboutPage):page==='admissions'?h(AdmissionsPage):page==='contact'?h(ContactPage):page==='school-life'?h(React.Fragment,null,h(Banner,{title:'School Life',photo:'community'}),h('section',{className:'gallery',id:'gallery'},h('div',{className:'wrap'},h('h2',null,'Our school album'),h('p',null,'Look closely at the children in these photographs. A gold headwrap catches the light, two pupils stand shoulder to shoulder in blue smocks, and a little one watches from a grown-up’s arms. These are faces and moments from our community in Medie that we are glad to share with you.'),h('div',{className:'grid'},photos.map(([file,title,alt],i)=>h('button',{key:file,onClick:()=>setView(i),'aria-label':'View '+title},h('img',{src:'assets/'+file+'.jpg',alt,loading:'lazy'}),h('span',null,title))))))) : h(React.Fragment,null,
 h('section',{className:'hero','aria-label':'Dew Drop Academy'},
 h('img',{className:'building-photo',src:'assets/campus.jpg',alt:'The front of Dew Drop Academy in Medie, with the school name above the entrance',fetchPriority:'high'}),
 h('h1',null,'Arise and ',h('span',null,'Shine'))),
 h('section',{className:'admissions wrap',id:'admissions'},h('h2',null,'Come and meet us in Medie'),btn('Ask about a visit','admissions.html','orange')),
 h('section',{className:'wrap family-welcome'},h('h2',null,'Welcome to Dew Drop Academy'),
 h('div',null,h('p',null,'When you bring your child through our gates, you bring someone you know by heart. You know the stories they ask to hear again, the questions they save for the walk home, and the things they can do with just a little encouragement. We want to get to know that child, too.'),
 h('p',null,'We opened our school in Medie in 2016. The words on our crest, “Arise and Shine”, express what we hope for every learner here. For one child, that might mean reading a whole page aloud for the first time. For another, it might mean finding the courage to say, “I don’t understand yet.” Both are beginnings worth celebrating.'),
 h('a',{className:'textlink',href:'about.html'},'Get to know our school'))),
 h('section',{className:'gallery'},h('div',{className:'wrap'},h('h2',null,'A place for the whole child'),
 h('div',{className:'family-columns'},h('article',null,h('h3',null,'Room for questions'),h('p',null,'A good question can take a lesson somewhere unexpected. We want children to wonder aloud, listen to a different answer and have another go when something is difficult.')),
 h('article',null,h('h3',null,'Pride in where we come from'),h('p',null,'The kente colours and traditional smocks in our school photographs will be familiar to many of our families. There is a place here for the stories, languages and traditions your child brings from home.'),h('a',{className:'textlink',href:'school-life.html'},'See our school album')),
 h('article',null,h('h3',null,'A conversation with families'),h('p',null,'Perhaps your child loves counting at the market but goes quiet in a new room. Tell us. Those small details are a good place to begin talking about what helps your child learn.'))))),
 h('section',{className:'contact wrap',id:'contact'},h('div',null,h('h2',null,'We’d love to meet your family'),h('p',null,'If you are thinking about Dew Drop for your child, give us a call. We can talk about the class you have in mind, answer your questions and help you plan a visit.')),h('address',null,h('a',{href:phone},icon('phone'),'024 473 1840'),h('a',{href:'mailto:'+mail},icon('mail'),mail),h('span',null,icon('pin'),'Medie, Ghana · GW-0332-5797'))))),
 h('footer',{className:'school-footer'},
   h('section',{className:'footer-invite wrap'},
     h('div',null,h('h2',null,'Come and discover Dew Drop'),h('p',null,'Talk with us about a place for your child.')),
     btn('Ask about admissions','admissions.html','footer-button')),
   h('div',{className:'footer-band'},
     h('div',{className:'footer-columns wrap'},
       h('div',null,brand(),h('address',null,'Medie, Ghana',h('br'),'GW-0332-5797',h('br'),h('a',{href:'mailto:'+mail},mail),h('br'),h('a',{href:phone},'024 473 1840'))),
       h('div',null,h('h2',null,'Quick Links'),h('nav',{'aria-label':'Footer navigation'},links())),
       h('div',null,h('h2',null,'Connect with us'),
         h('div',{className:'footer-icons'},
           h('a',{href:phone,'aria-label':'Call Dew Drop Academy',title:'Call the school'},icon('phone')),
           h('a',{href:'mailto:'+mail,'aria-label':'Email Dew Drop Academy',title:'Email the school'},icon('mail')),
           h('a',{href:'contact.html','aria-label':'Find our school address',title:'Find our school'},icon('pin'))))),
     h('p',{className:'footer-credit wrap'},'Copyright © '+new Date().getFullYear()+' Dew Drop Academy'))),
 h(Dialog,{open:view!==null,onClose:()=>setView(null),maxWidth:'md','aria-labelledby':'photo-title',onKeyDown:e=>{if(e.key==='ArrowRight')setView(turn(view,1,photos.length));if(e.key==='ArrowLeft')setView(turn(view,-1,photos.length))}},view!==null&&h('div',{className:'lightbox'},h('div',{className:'lighthead'},h('h3',{id:'photo-title'},photos[view][1]),control('close','Close photograph',()=>setView(null))),h('img',{src:'assets/'+photos[view][0]+'.jpg',alt:photos[view][2]}),h('div',{className:'lightfoot'},h('span',null,(view+1)+' of '+photos.length),controls(view,setView,photos.length)))));}
ReactDOM.createRoot(document.getElementById('root')).render(h(ThemeProvider,{theme},h(App)));
