(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HHqn:function(t,n,c){"use strict";c.r(n),c.d(n,"TopFilmsModule",function(){return O});var i=c("ofXK"),e=c("tyNb"),o=c("fXoL"),a=c("eV5+"),r=c("Wp6s"),s=c("bTqV");function b(t,n){if(1&t&&(o.Ob(0,"mat-card-title"),o.lc(1),o.Nb()),2&t){const t=o.Xb().$implicit;o.zb(1),o.mc(t.nameRu)}}function m(t,n){if(1&t&&(o.Ob(0,"mat-card-title"),o.lc(1),o.Nb()),2&t){const t=o.Xb().$implicit;o.zb(1),o.mc(t.nameEn)}}function l(t,n){if(1&t&&(o.Ob(0,"p"),o.lc(1),o.Nb()),2&t){const t=o.Xb().$implicit;o.zb(1),o.nc(" \u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",t.rating," ")}}function p(t,n){1&t&&(o.Ob(0,"p"),o.lc(1," \u0420\u0435\u0439\u0442\u0438\u043d\u0433: ... "),o.Nb())}function f(t,n){if(1&t){const t=o.Pb();o.Ob(0,"mat-card"),o.Ob(1,"mat-card-header"),o.kc(2,b,2,1,"mat-card-title",2),o.kc(3,m,2,1,"mat-card-title",2),o.Nb(),o.Kb(4,"img",3),o.Ob(5,"mat-card-content"),o.kc(6,l,2,1,"p",2),o.kc(7,p,2,0,"p",2),o.Ob(8,"p"),o.lc(9),o.Nb(),o.Nb(),o.Ob(10,"mat-card-actions"),o.Ob(11,"button",4),o.Vb("click",function(){o.ec(t);const c=n.$implicit;return o.Xb().clickRouting(c.filmId)}),o.lc(12,"ABOUT"),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=n.$implicit;o.zb(2),o.ac("ngIf",t.nameRu),o.zb(1),o.ac("ngIf",!t.nameRu),o.zb(1),o.bc("src",t.posterUrl,o.fc),o.zb(2),o.ac("ngIf",t.rating),o.zb(1),o.ac("ngIf",!t.rating),o.zb(2),o.nc(" \u0413\u043e\u0434: ",t.year," ")}}const u=[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.movieService=n,this.page=1,this.response={films:[],pagesCount:0},this.films=[]}ngOnInit(){this.movieService.getTopMovies(this.page).subscribe(t=>{this.response=t,this.films=this.response.films})}clickRouting(t){this.router.navigate(["about",t])}}return t.\u0275fac=function(n){return new(n||t)(o.Jb(e.b),o.Jb(a.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-top-films"]],decls:5,vars:1,consts:[[1,"content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["mat-card-image","","alt","Poster",3,"src"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(o.Ob(0,"main"),o.Ob(1,"h1"),o.lc(2,"Top Movies"),o.Nb(),o.Ob(3,"div",0),o.kc(4,f,13,6,"mat-card",1),o.Nb(),o.Nb()),2&t&&(o.zb(4),o.ac("ngForOf",n.films))},directives:[i.i,r.a,r.d,i.j,r.e,r.c,r.b,s.b,r.g],styles:["main[_ngcontent-%COMP%]{padding-top:20px;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;font-style:italic}.content[_ngcontent-%COMP%]{margin:40px;display:flex;justify-content:space-between;flex-wrap:wrap}.mat-card[_ngcontent-%COMP%]{width:300px;height:550px;margin-bottom:20px}.mat-card-image[_ngcontent-%COMP%]{height:350px;object-fit:cover}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(n){return new(n||t)},imports:[[e.c.forChild(u)],e.c]}),t})();var d=c("7of8");let O=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(n){return new(n||t)},imports:[[i.b,g,d.a]]}),t})()}}]);