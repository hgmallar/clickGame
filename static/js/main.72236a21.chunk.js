(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,s){},17:function(e,a){function s(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id=17},18:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),c=s(2),i=s.n(c),r=(s(15),s(3)),o=s(4),m=s(7),l=s(5),g=s(8);var h=function(e){return n.a.createElement("nav",{className:"container"},n.a.createElement("h1",{className:"title"},"Clicky Game"),n.a.createElement("h2",{className:e.messageClass},e.message),n.a.createElement("h2",null,"Score: ",n.a.createElement("span",{className:"score"},e.score)," | Top Score: ",n.a.createElement("span",{className:"top"},e.highscore)))};var u=function(){return n.a.createElement("div",{className:"instructions"},n.a.createElement("h1",null,"Clicky Game!"),n.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!"))};var d=function(e){return n.a.createElement("img",{id:e.id,src:s(17)(e.src),alt:e.name,onClick:function(){return e.handleClick(e.id)}})},p=s(6),v=function(e){function a(){var e,s;Object(r.a)(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(s=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={score:0,highscore:0,images:p,clicked:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],message:"Click an image to begin!",messageclass:"nav-inst",gameclass:"photos"},s.handleClick=function(e){var a=s.state.score,t=s.state.highscore,n=s.state.clicked,c=s.state.message,i=s.state.messageclass,r=s.state.gameclass;s.state.clicked[e]?(a=0,n=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],c="You guessed incorrectly!",i="nav-incorrect",r="photos shakediv"):((a+=1)>s.state.highscore&&(t=a),12===a?(a=0,n=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],c="You won!",i="nav-correct1"===i?"nav-correct2":"nav-correct1",r="photos shakediv"):(n[e]=!0,c="You guessed correctly!",i="nav-correct1"===i?"nav-correct2":"nav-correct1",r="photos")),s.shuffle(s.state.images),s.setState({score:a,highscore:t,clicked:n,message:c,messageclass:i,gameclass:r})},s.shuffle=function(e){for(var a,s,t=e.length;0!==t;)s=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[s],e[s]=a;return e},s}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(h,{messageClass:this.state.messageclass,message:this.state.message,score:this.state.score,highscore:this.state.highscore}),n.a.createElement(u,null),n.a.createElement("div",{className:this.state.gameclass},this.state.images.map(function(a){return n.a.createElement(d,{key:a.id.toString(),id:a.id,src:a.image,name:a.name,handleClick:e.handleClick})})))}}]),a}(n.a.Component);i.a.render(n.a.createElement(v,null),document.getElementById("root"))},6:function(e){e.exports=[{id:0,name:"triangle",image:"/assets/images/0.png"},{id:1,name:"circle",image:"/assets/images/1.png"},{id:2,name:"dodecagon",image:"/assets/images/2.png"},{id:3,name:"ex",image:"/assets/images/3.png"},{id:4,name:"hexagon",image:"/assets/images/4.png"},{id:5,name:"octagon",image:"/assets/images/5.png"},{id:6,name:"pentagon",image:"/assets/images/6.png"},{id:7,name:"polygon",image:"/assets/images/7.png"},{id:8,name:"rectangle",image:"/assets/images/8.png"},{id:9,name:"rhombus",image:"/assets/images/9.png"},{id:10,name:"square",image:"/assets/images/10.png"},{id:11,name:"star",image:"/assets/images/11.png"}]},9:function(e,a,s){e.exports=s(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.72236a21.chunk.js.map