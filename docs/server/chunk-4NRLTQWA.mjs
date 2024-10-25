import './polyfills.server.mjs';
import{A as _,D as w,a as l,b as C,c as n,d as e,e as i,f as t,g as d,l as h,o as S,q as P,r as M,s as y,t as O,w as F}from"./chunk-RI2JTARK.mjs";var u=class a{title="elder-haven";static \u0275fac=function(o){return new(o||a)};static \u0275cmp=l({type:a,selectors:[["app-root"]],standalone:!0,features:[d],decls:55,vars:0,consts:[[1,"bg-dark-light","text-light"],["id","navbar",1,"navbar","navbar-expand-lg","navbar-dark","fixed-top","shadow-lg"],[1,"container-fluid"],["href","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],["href","/",1,"nav-link","hover-link"],["href","/product",1,"nav-link","hover-link"],["href","/team",1,"nav-link","hover-link"],["href","/about",1,"nav-link","hover-link"],["href","/contact",1,"nav-link","hover-link"],[1,"content","fade-in"],[1,"bg-dark","text-white","py-5"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"text-gradient"],[1,"col-md-6","text-end"],[1,"d-flex"],["type","email","placeholder","Email",1,"form-control","me-2"],["type","submit",1,"btn","btn-success"],[1,"row","mt-4"],[1,"col","text-center"],[1,"list-inline"],[1,"list-inline-item"],["href","#",1,"text-white","hover-link"],[1,""]],template:function(o,c){o&1&&(n(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),t(4,"Elder Haven"),e(),n(5,"button",4),i(6,"span",5),e(),n(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),t(11,"Home"),e()(),n(12,"li",8)(13,"a",10),t(14,"Product"),e()(),n(15,"li",8)(16,"a",11),t(17,"Team"),e()(),n(18,"li",8)(19,"a",12),t(20,"About"),e()(),n(21,"li",8)(22,"a",13),t(23,"Contact"),e()()()()()(),n(24,"div",14),i(25,"router-outlet"),e(),n(26,"footer",15)(27,"div",16)(28,"div",17)(29,"div",18)(30,"p",19),t(31,"Elder Haven"),e(),n(32,"p"),t(33," Haciendo el mundo un lugar mejor para las personas mayores de edad a trav\xE9s de tecnolog\xEDas innovadoras. "),e()(),n(34,"div",20)(35,"p"),t(36,"Env\xEDanos un email para conocer m\xE1s informaci\xF3n."),e(),n(37,"form",21),i(38,"input",22),n(39,"button",23),t(40,"Enviar"),e()()()(),n(41,"div",24)(42,"div",25)(43,"ul",26)(44,"li",27)(45,"a",28),t(46,"Team"),e()(),n(47,"li",27)(48,"a",28),t(49,"Services"),e()(),n(50,"li",27)(51,"a",28),t(52,"Testimonials"),e()()(),n(53,"p",29),t(54,"\xA9 2024 Elder Haven. All rights reserved."),e()()()()()())},dependencies:[_],styles:[`html,body{background-color:#1f1f1f;color:#fff;min-height:100vh;margin:0;padding:0}footer{background-color:#1f1f1f;color:#fff}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fade-in{animation:fadeIn 1s ease-in-out}
`],encapsulation:2})};var g=class a{ngAfterViewInit(){this.initializeFaqCollapse()}initializeFaqCollapse(){document.querySelectorAll(".faq-button").forEach(o=>{o.addEventListener("click",c=>{let v=c.target.getAttribute("data-target");if(v){let p=document.querySelector(v);p&&(p.classList.contains("show")?p.classList.remove("show"):(document.querySelectorAll(".faq-content").forEach(A=>A.classList.remove("show")),p.classList.add("show")))}})})}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=l({type:a,selectors:[["app-home"]],standalone:!0,features:[d],decls:48,vars:0,consts:[[1,"container","my-5","hero-section","text-center"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"display-4","text-gradient"],[1,"lead"],[1,"btn","btn-outline-light","btn-lg","hover-btn"],["src","icons/prototipo.webp","alt","Elder Haven device","loading","lazy",1,"img-fluid","rounded","parallax-img"],[1,"container","my-5","feature-cards"],[1,"row"],["src","icons/prototipo2.webp","alt","Device in use","loading","lazy",1,"img-fluid","rounded","parallax-img"],[1,"col-md-6","d-flex","align-items-center","justify-content-center"],[1,"list-unstyled","features-list"],[1,"mb-4"],[1,"bi","bi-check-circle-fill"],[1,"container","my-5","faq-section"],[1,"faq-title"],[1,"faq-item"],["data-target","#faq1",1,"faq-button"],["id","faq1",1,"faq-content"],["data-target","#faq2",1,"faq-button"],["id","faq2",1,"faq-content"],["data-target","#faq3",1,"faq-button"],["id","faq3",1,"faq-content"],["src","icons/personas.webp","alt","Team working","loading","lazy",1,"img-fluid","rounded","parallax-img"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t(4,"Elder Haven"),e(),n(5,"p",4),t(6," Elder Haven aborda la creciente necesidad de monitoreo de salud para personas mayores, quienes enfrentan riesgos asociados con la soledad y la falta de supervisi\xF3n m\xE9dica constante. "),e(),n(7,"button",5),t(8," Ver informaci\xF3n "),e()(),n(9,"div",2),i(10,"img",6),e()()(),n(11,"div",7)(12,"div",8)(13,"div",2),i(14,"img",9),e(),n(15,"div",10)(16,"ul",11)(17,"li",12),i(18,"i",13),t(19," Funciones avanzadas como la medici\xF3n de la presi\xF3n arterial, la temperatura corporal, entre otros. "),e(),n(20,"li",12),i(21,"i",13),t(22," Nuestro prop\xF3sito es que disfruten de sus d\xEDas con tranquilidad, sabiendo que su salud est\xE1 siendo monitoreada de manera constante y confiable. "),e(),n(23,"li",12),i(24,"i",13),t(25," Nuestra visi\xF3n es liderar el mercado de la tecnolog\xEDa de monitoreo de salud para personas mayores, estableciendo un nuevo est\xE1ndar en la asistencia remota y personalizada. "),e()()()()(),n(26,"div",14)(27,"div",8)(28,"div",2)(29,"h2",15),t(30,"FAQ"),e(),n(31,"div",16)(32,"button",17),t(33," \xBFC\xF3mo ser\xE1 la implementaci\xF3n del dispositivo? "),e(),n(34,"div",18),t(35," El dispositivo se coloca en la mu\xF1eca del usuario y monitorea los signos vitales las 24 horas del d\xEDa. Si detecta alg\xFAn problema, enviar\xE1 alertas autom\xE1ticas a los contactos registrados. "),e()(),n(36,"div",16)(37,"button",19),t(38," \xBFPor qu\xE9 necesitar\xEDa este dispositivo? "),e(),n(39,"div",20),t(40," Este dispositivo es ideal para personas mayores que desean una supervisi\xF3n constante de su salud. Les brinda tranquilidad a ellos y a sus seres queridos, asegur\xE1ndose de que reciben ayuda inmediata en caso de emergencia. "),e()(),n(41,"div",16)(42,"button",21),t(43," \xBFD\xF3nde puedo encontrar este dispositivo? "),e(),n(44,"div",22),t(45," Puedes adquirir este dispositivo en nuestra p\xE1gina web oficial o en tiendas asociadas. Adem\xE1s, ofrecemos env\xEDos gratuitos a todo el pa\xEDs. "),e()()(),n(46,"div",2),i(47,"img",23),e()()())},styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{background-color:#1f1f1f;color:#fff;margin:0;padding:0}.hero-section[_ngcontent-%COMP%], .feature-cards[_ngcontent-%COMP%], .faq-section[_ngcontent-%COMP%]{background-color:#1f1f1f!important;color:#fff!important}.hero-section[_ngcontent-%COMP%]{padding-top:80px;padding-bottom:80px;text-align:center}.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#4caf50;font-size:3rem;font-weight:700}.hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cfd8dc;margin-top:15px}.hero-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:10px 20px;border-radius:30px;font-size:1.2rem;margin-top:20px}.hero-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#4caf50;border:2px solid #4caf50}.feature-cards[_ngcontent-%COMP%]{padding:80px 0}.feature-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0}.feature-cards[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff;font-size:1.1rem;margin-bottom:20px;padding-left:20px;position:relative}.feature-cards[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#4caf50;position:absolute;left:0;top:2px}.faq-section[_ngcontent-%COMP%]{padding:40px}.faq-title[_ngcontent-%COMP%]{font-size:2rem;color:#4caf50;margin-bottom:1.5rem}.faq-item[_ngcontent-%COMP%]{margin-bottom:15px}.faq-button[_ngcontent-%COMP%]{width:100%;background-color:#1f1f1f;color:#4caf50;padding:15px;border:none;font-size:1.1rem;text-align:left;cursor:pointer;outline:none;transition:background-color .3s ease}.faq-button[_ngcontent-%COMP%]:hover{background-color:#4caf50;color:#fff}.faq-content[_ngcontent-%COMP%]{padding:15px;background-color:#2e2e2e;color:#fff;display:none;margin-top:5px}.faq-content.show[_ngcontent-%COMP%]{display:block}.img-fluid[_ngcontent-%COMP%], .parallax-img[_ngcontent-%COMP%]{max-width:100%;height:auto;transition:transform .5s ease,padding .5s ease}.parallax-img[_ngcontent-%COMP%]:hover{padding:20px;transform:scale(1.05)}"]})};var f=class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=l({type:a,selectors:[["app-team"]],standalone:!0,features:[d],decls:153,vars:0,consts:[[1,"container","team-section","my-5"],[1,"text-center"],[1,"team-member-card","text-center","my-5"],[1,"team-image","mx-auto"],["src","photos/elka.webp","alt","Elka Geraldyne",1,"img-fluid","rounded"],[1,"team-info"],["src","photos/ruben.webp","alt","Milenko Rub\xE9n",1,"img-fluid","rounded"],["src","photos/juan.webp","alt","Juan Miguel",1,"img-fluid","rounded"],["src","photos/nadhim.webp","alt","Nadhim Abigail",1,"img-fluid","rounded"],["src","photos/cesar.webp","alt","C\xE9sar Augusto",1,"img-fluid","rounded"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"h1",1),t(2,"Nuestro Equipo"),e(),n(3,"div",2)(4,"div",3),i(5,"img",4),e(),n(6,"div",5)(7,"h3"),t(8,"Baldeon Paredes, Elka Geraldyne"),e(),n(9,"p")(10,"strong"),t(11,"Edad:"),e(),t(12," 19"),e(),n(13,"p")(14,"strong"),t(15,"Sexo:"),e(),t(16," Femenino"),e(),n(17,"p")(18,"strong"),t(19,"Pa\xEDs:"),e(),t(20," Per\xFA"),e(),n(21,"p")(22,"strong"),t(23,"Ocupaci\xF3n:"),e(),t(24," Estudiante"),e(),n(25,"p")(26,"strong"),t(27,"Descripci\xF3n:"),e(),t(28," Estudiante de ingenier\xEDa de software, interesada en el desarrollo de aplicaciones para la mejora en la ciberseguridad."),e(),n(29,"p")(30,"strong"),t(31,"Conocimientos T\xE9cnicos y Habilidades:"),e(),t(32," Conocimientos b\xE1sicos en programaci\xF3n y enfoque en ciberseguridad en bancos y \xE1reas relacionadas."),e()()(),n(33,"div",2)(34,"div",3),i(35,"img",6),e(),n(36,"div",5)(37,"h3"),t(38,"Cayanchi Avila, Milenko Rub\xE9n"),e(),n(39,"p")(40,"strong"),t(41,"Edad:"),e(),t(42," 18"),e(),n(43,"p")(44,"strong"),t(45,"Sexo:"),e(),t(46," Masculino"),e(),n(47,"p")(48,"strong"),t(49,"Pa\xEDs:"),e(),t(50," Per\xFA"),e(),n(51,"p")(52,"strong"),t(53,"Ocupaci\xF3n:"),e(),t(54," Estudiante"),e(),n(55,"p")(56,"strong"),t(57,"Descripci\xF3n:"),e(),t(58," Estudiante de Ingenier\xEDa de Software, enfocado en la mejora de la calidad de vida a trav\xE9s de soluciones tecnol\xF3gicas."),e(),n(59,"p")(60,"strong"),t(61,"Conocimientos T\xE9cnicos y Habilidades:"),e(),t(62," Conocimientos b\xE1sicos en Python y C++, con inter\xE9s en inteligencia artificial."),e()()(),n(63,"div",2)(64,"div",3),i(65,"img",7),e(),n(66,"div",5)(67,"h3"),t(68,"Quijano Calderon, Juan Miguel"),e(),n(69,"p")(70,"strong"),t(71,"Edad:"),e(),t(72," 19"),e(),n(73,"p")(74,"strong"),t(75,"Sexo:"),e(),t(76," Masculino"),e(),n(77,"p")(78,"strong"),t(79,"Pa\xEDs:"),e(),t(80," Per\xFA"),e(),n(81,"p")(82,"strong"),t(83,"Ocupaci\xF3n:"),e(),t(84," Estudiante"),e(),n(85,"p")(86,"strong"),t(87,"Descripci\xF3n:"),e(),t(88," Interesado en el desarrollo de tecnolog\xEDas para el entretenimiento."),e(),n(89,"p")(90,"strong"),t(91,"Conocimientos T\xE9cnicos y Habilidades:"),e(),t(92," Conocimientos intermedios en C++, b\xE1sicos en Python y Unity. Enfocado en IA para entretenimiento."),e()()(),n(93,"div",2)(94,"div",3),i(95,"img",8),e(),n(96,"div",5)(97,"h3"),t(98,"Raymundo Villaroel, Nadhim Abigail"),e(),n(99,"p")(100,"strong"),t(101,"Edad:"),e(),t(102," 18"),e(),n(103,"p")(104,"strong"),t(105,"Sexo:"),e(),t(106," Femenino"),e(),n(107,"p")(108,"strong"),t(109,"Pa\xEDs:"),e(),t(110," Per\xFA"),e(),n(111,"p")(112,"strong"),t(113,"Ocupaci\xF3n:"),e(),t(114," Estudiante"),e(),n(115,"p")(116,"strong"),t(117,"Descripci\xF3n:"),e(),t(118," Interesada en el dise\xF1o y desarrollo de aplicaciones con enfoque en UX/UI y ciberseguridad."),e(),n(119,"p")(120,"strong"),t(121,"Conocimientos T\xE9cnicos y Habilidades:"),e(),t(122," Enfoque en dise\xF1o UX/UI, ciberseguridad y desarrollo financiero."),e()()(),n(123,"div",2)(124,"div",3),i(125,"img",9),e(),n(126,"div",5)(127,"h3"),t(128,"Ar\xF3stegui Alzamora, C\xE9sar Augusto"),e(),n(129,"p")(130,"strong"),t(131,"Edad:"),e(),t(132," 20"),e(),n(133,"p")(134,"strong"),t(135,"Sexo:"),e(),t(136," Masculino"),e(),n(137,"p")(138,"strong"),t(139,"Pa\xEDs:"),e(),t(140," Per\xFA"),e(),n(141,"p")(142,"strong"),t(143,"Ocupaci\xF3n:"),e(),t(144," Estudiante"),e(),n(145,"p")(146,"strong"),t(147,"Descripci\xF3n:"),e(),t(148," Enfocado en procesos de concepci\xF3n y dise\xF1o de software."),e(),n(149,"p")(150,"strong"),t(151,"Conocimientos T\xE9cnicos y Habilidades:"),e(),t(152," Conocimientos en C++, JavaScript, Python y modelaje 3D."),e()()()())},styles:[".team-section[_ngcontent-%COMP%]{padding:50px 0}.team-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#4caf50;font-weight:700;margin-bottom:40px}.team-member-card[_ngcontent-%COMP%]{background-color:#2e2e2e;color:#fff;padding:20px;border-radius:10px;box-shadow:0 4px 8px #0003;margin-bottom:30px;text-align:center}.team-image[_ngcontent-%COMP%]{margin-bottom:20px}.team-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;height:auto;border-radius:50%;box-shadow:0 4px 8px #0000001a}.team-info[_ngcontent-%COMP%]{margin-top:20px}.team-member-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4caf50;font-size:1.5rem;font-weight:700;margin-bottom:15px}.team-member-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:10px}@media (max-width: 768px){.team-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:120px}}"]})};var x=class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=l({type:a,selectors:[["app-about"]],standalone:!0,features:[d],decls:44,vars:0,consts:[[1,"about-page"],[1,"container"],[1,"spec-card","mb-5"],[1,"text-gradient"]],template:function(o,c){o&1&&(i(0,"br")(1,"br"),n(2,"div",0)(3,"div",1)(4,"div",2)(5,"h2",3),t(6,"Caracter\xEDsticas T\xE9cnicas"),e(),n(7,"ul")(8,"li")(9,"b"),t(10,"Monitor de Signos Vitales:"),e(),t(11," Mide la presi\xF3n arterial, frecuencia card\xEDaca y temperatura corporal. "),e(),n(12,"li")(13,"b"),t(14,"Detecci\xF3n de Ca\xEDdas:"),e(),t(15," Sensores avanzados que detectan ca\xEDdas bruscas y env\xEDan alertas autom\xE1ticas a los contactos registrados. "),e(),n(16,"li")(17,"b"),t(18,"Conectividad:"),e(),t(19," Compatible con Bluetooth y Wi-Fi para la sincronizaci\xF3n con la aplicaci\xF3n m\xF3vil y el env\xEDo de alertas en tiempo real. "),e(),n(20,"li")(21,"b"),t(22,"Duraci\xF3n de la Bater\xEDa:"),e(),t(23," Hasta 7 d\xEDas de uso continuo con una sola carga. "),e(),n(24,"li")(25,"b"),t(26,"Resistencia al Agua:"),e(),t(27," Clasificaci\xF3n IP67 para protecci\xF3n contra el polvo y la inmersi\xF3n en agua hasta 1 metro durante 30 minutos. "),e()()(),n(28,"div",2)(29,"h2",3),t(30,"Requisitos de Software"),e(),n(31,"ul")(32,"li")(33,"b"),t(34,"Compatibilidad:"),e(),t(35," iOS 10.0 o superior, Android 6.0 o superior. "),e(),n(36,"li")(37,"b"),t(38,"Aplicaci\xF3n:"),e(),t(39," La aplicaci\xF3n Elder Haven est\xE1 disponible en App Store y Google Play, y permite la configuraci\xF3n y monitoreo remoto del dispositivo. "),e(),n(40,"li")(41,"b"),t(42,"Notificaciones:"),e(),t(43," Soporte para notificaciones push en tiempo real, alertas de emergencia y recordatorios. "),e()()()()())},styles:[".about-page[_ngcontent-%COMP%]{padding:2rem 0;background-color:#212121}.spec-card[_ngcontent-%COMP%]{background-color:#2a2a2a;padding:20px;border-radius:10px;box-shadow:0 8px 16px #0003}.spec-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#4caf50;margin-bottom:1.5rem;font-weight:700}.spec-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0}.spec-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#cfd8dc;font-size:1.1rem;margin-bottom:15px}.container[_ngcontent-%COMP%]{max-width:1200px}.mb-5[_ngcontent-%COMP%]{margin-bottom:3rem}.text-gradient[_ngcontent-%COMP%]{background:linear-gradient(45deg,#4caf50,#8bc34a);-webkit-background-clip:text;background-clip:text;color:transparent}"]})};var E=class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=l({type:a,selectors:[["app-contact"]],standalone:!0,features:[d],decls:49,vars:0,consts:[[1,"container"],[1,"lead"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","placeholder","Tu nombre completo","required","",1,"form-control"],["for","email"],["type","email","id","email","placeholder","Tu correo electr\xF3nico","required","",1,"form-control"],["for","asunto"],["type","text","id","asunto","placeholder","Asunto del mensaje","required","",1,"form-control"],["for","mensaje"],["id","mensaje","rows","5","placeholder","Escribe tu mensaje aqu\xED...","required","",1,"form-control"],["for","telefono"],["type","tel","id","telefono","placeholder","Tu n\xFAmero de tel\xE9fono","required","",1,"form-control"],["for","direccion"],["type","text","id","direccion","placeholder","Tu direcci\xF3n","required","",1,"form-control"],["for","opciones"],["id","opciones",1,"form-control"],["value","consulta"],["value","soporte"],["value","feedback"],["value","otros"],[1,"form-check"],["type","checkbox","id","newsletter",1,"form-check-input"],["for","newsletter",1,"form-check-label"],["type","submit",1,"btn","btn-primary"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"h2"),t(2,"Cont\xE1ctanos"),e(),n(3,"p",1),t(4," Si tienes alguna pregunta o necesitas m\xE1s informaci\xF3n, no dudes en enviarnos un mensaje. "),e(),n(5,"form")(6,"div",2)(7,"label",3),t(8,"Nombre"),e(),i(9,"input",4),e(),n(10,"div",2)(11,"label",5),t(12,"Correo Electr\xF3nico"),e(),i(13,"input",6),e(),n(14,"div",2)(15,"label",7),t(16,"Asunto"),e(),i(17,"input",8),e(),n(18,"div",2)(19,"label",9),t(20,"Mensaje"),e(),i(21,"textarea",10),e(),n(22,"div",2)(23,"label",11),t(24,"Tel\xE9fono"),e(),i(25,"input",12),e(),n(26,"div",2)(27,"label",13),t(28,"Direcci\xF3n"),e(),i(29,"input",14),e(),n(30,"div",2)(31,"label",15),t(32,"Motivo del contacto"),e(),n(33,"select",16)(34,"option",17),t(35,"Consulta General"),e(),n(36,"option",18),t(37,"Soporte T\xE9cnico"),e(),n(38,"option",19),t(39,"Comentarios o Sugerencias"),e(),n(40,"option",20),t(41,"Otros"),e()()(),n(42,"div",2)(43,"div",21),i(44,"input",22),n(45,"label",23),t(46," Suscribirme al bolet\xEDn de noticias "),e()()(),n(47,"button",24),t(48,"Enviar Mensaje"),e()()())},styles:[".container[_ngcontent-%COMP%]{max-width:800px;margin:100px auto 0;padding:20px;background-color:#1f1f1f;border-radius:10px;box-shadow:0 4px 12px #0000004d;color:#fff;transition:all .3s ease}h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:20px;text-align:center;color:#4caf50;font-weight:700}.lead[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:20px;text-align:center;color:#cfd8dc;transition:font-size .3s ease,color .3s ease}.lead[_ngcontent-%COMP%]:hover{font-size:1.6rem;color:#fff}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-control[_ngcontent-%COMP%]{border:1px solid #4caf50;background-color:#2e2e2e;color:#fff;padding:12px;font-size:1.1rem;border-radius:8px;transition:background-color .3s ease,color .3s ease,border-color .3s ease}.form-control[_ngcontent-%COMP%]::placeholder{color:#999;transition:color .3s ease}.form-control[_ngcontent-%COMP%]:focus{border-color:#4caf50;box-shadow:0 0 8px #4caf5080;background-color:#333}.form-check-label[_ngcontent-%COMP%]{margin-left:10px;color:#cfd8dc}.btn[_ngcontent-%COMP%]{background-color:#4caf50;border:none;padding:12px 24px;font-size:1.3rem;border-radius:30px;transition:background-color .3s ease,box-shadow .3s ease;width:100%;text-align:center;font-weight:700}.btn[_ngcontent-%COMP%]:hover{background-color:#388e3c;box-shadow:0 8px 16px #0f03}textarea.form-control[_ngcontent-%COMP%]{resize:none}.form-check-input[_ngcontent-%COMP%]{background-color:#2e2e2e;border:1px solid #4caf50}select.form-control[_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background:url(data:image/svg+xml;base64,...) no-repeat right;background-color:#2e2e2e;border:1px solid #4caf50;padding:12px}.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%]{background-color:#333;opacity:1}label[_ngcontent-%COMP%]{font-weight:700;color:#4caf50}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding:10px}.btn[_ngcontent-%COMP%]{font-size:1rem;padding:10px}h2[_ngcontent-%COMP%]{font-size:2rem}.lead[_ngcontent-%COMP%]{font-size:1.4rem}}"]})};var b=class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=l({type:a,selectors:[["app-product"]],standalone:!0,features:[d],decls:81,vars:0,consts:[[1,"container","my-5","product-section","text-center"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"display-4","text-gradient"],[1,"lead"],[1,"btn","btn-outline-light","btn-lg","hover-btn"],["src","icons/prototipo3.webp","alt","Elder Haven device","loading","lazy",1,"img-fluid","rounded","parallax-img"],[1,"container","my-5","feature-cards"],[1,"text-center","mb-5"],[1,"row"],[1,"col-md-4"],[1,"row","mt-5"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t(4,"Elder Haven - Producto"),e(),n(5,"p",4),t(6," Elder Haven ofrece un dispositivo avanzado para monitorear la salud de personas mayores, proporcionando tranquilidad tanto a ellos como a sus seres queridos. "),e(),n(7,"button",5),t(8," M\xE1s detalles "),e()(),n(9,"div",2),i(10,"img",6),e()()(),n(11,"div",7)(12,"h2",8),t(13,"Caracter\xEDsticas Principales"),e(),n(14,"div",9)(15,"div",10)(16,"h3"),t(17,"Medici\xF3n de Signos Vitales"),e(),n(18,"p"),t(19," Monitorea continuamente la presi\xF3n arterial, la frecuencia card\xEDaca y la temperatura corporal para garantizar el bienestar constante del usuario. "),e()(),n(20,"div",10)(21,"h3"),t(22,"Detecci\xF3n de Ca\xEDdas"),e(),n(23,"p"),t(24," El dispositivo detecta ca\xEDdas autom\xE1ticamente y env\xEDa alertas a los contactos de confianza, asegurando una r\xE1pida respuesta ante emergencias. "),e()(),n(25,"div",10)(26,"h3"),t(27,"Conectividad"),e(),n(28,"p"),t(29," Conectividad por Bluetooth y Wi-Fi, lo que permite que el dispositivo est\xE9 siempre vinculado con una aplicaci\xF3n m\xF3vil para recibir informes en tiempo real. "),e()()(),n(30,"div",11)(31,"div",10)(32,"h3"),t(33,"Alertas de Emergencia"),e(),n(34,"p"),t(35," Si se detecta alg\xFAn cambio cr\xEDtico en los signos vitales del usuario, el dispositivo env\xEDa autom\xE1ticamente una alerta a los contactos de emergencia. "),e()(),n(36,"div",10)(37,"h3"),t(38,"Autonom\xEDa Extendida"),e(),n(39,"p"),t(40," Elder Haven cuenta con una bater\xEDa de larga duraci\xF3n, asegurando hasta 48 horas de monitoreo continuo sin interrupciones. "),e()(),n(41,"div",10)(42,"h3"),t(43,"Monitoreo en Tiempo Real"),e(),n(44,"p"),t(45," Accede a los datos de salud del usuario en tiempo real a trav\xE9s de la aplicaci\xF3n, permitiendo una supervisi\xF3n constante y detallada. "),e()()()(),n(46,"div",7)(47,"h2",8),t(48,"Beneficios para el Usuario"),e(),n(49,"div",9)(50,"div",10)(51,"h3"),t(52,"Tranquilidad para las Familias"),e(),n(53,"p"),t(54," Las alertas en tiempo real y los informes peri\xF3dicos brindan tranquilidad a los seres queridos del usuario, asegurando que est\xE1n informados en todo momento. "),e()(),n(55,"div",10)(56,"h3"),t(57,"Dise\xF1o Ergon\xF3mico"),e(),n(58,"p"),t(59," El dispositivo ha sido dise\xF1ado para ser ligero y c\xF3modo, permitiendo que las personas mayores lo usen durante todo el d\xEDa sin molestias. "),e()(),n(60,"div",10)(61,"h3"),t(62,"Informes Personalizados"),e(),n(63,"p"),t(64," Los usuarios pueden personalizar la frecuencia de los informes de salud, obteniendo res\xFAmenes adaptados a sus necesidades y los de su familia. "),e()()(),n(65,"div",11)(66,"div",10)(67,"h3"),t(68,"F\xE1cil Integraci\xF3n"),e(),n(69,"p"),t(70," Elder Haven es compatible con una amplia gama de dispositivos inteligentes, permitiendo una integraci\xF3n sencilla con otros sistemas de monitoreo en el hogar. "),e()(),n(71,"div",10)(72,"h3"),t(73,"Acceso Remoto"),e(),n(74,"p"),t(75," A trav\xE9s de la aplicaci\xF3n m\xF3vil, familiares y profesionales m\xE9dicos pueden acceder a los datos de salud del usuario desde cualquier lugar. "),e()(),n(76,"div",10)(77,"h3"),t(78,"Alertas de Inactividad"),e(),n(79,"p"),t(80," Si el dispositivo detecta inactividad prolongada, enviar\xE1 una alerta al usuario y a los contactos de emergencia para verificar el estado de salud. "),e()()()())},dependencies:[P],styles:[".product-section[_ngcontent-%COMP%], .feature-cards[_ngcontent-%COMP%]{background-color:#1f1f1f!important;color:#fff!important}.product-section[_ngcontent-%COMP%]{padding-top:80px;padding-bottom:80px;text-align:center}.product-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#4caf50;font-size:3rem;font-weight:700}.product-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cfd8dc;margin-top:15px}.product-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:10px 20px;border-radius:30px;font-size:1.2rem;margin-top:20px}.product-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#4caf50;border:2px solid #4caf50}.feature-cards[_ngcontent-%COMP%]{padding:80px 0}.feature-cards[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4caf50}.feature-cards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cfd8dc}.img-fluid[_ngcontent-%COMP%], .parallax-img[_ngcontent-%COMP%]{max-width:100%;height:auto;transition:transform .5s ease,padding .5s ease}.parallax-img[_ngcontent-%COMP%]:hover{padding:20px;transform:scale(1.05)}"]})};var D=[{path:"",component:g},{path:"team",component:f},{path:"product",component:b},{path:"about",component:x},{path:"contact",component:E},{path:"**",redirectTo:""}];var q={providers:[h({eventCoalescing:!0}),w(D),O(),C(y)]};var z={providers:[F()]},k=S(q,z);var T=()=>M(u,k),se=T;export{se as a};
