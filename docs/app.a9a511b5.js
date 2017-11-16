webpackJsonp([1],{0:function(t,e,n){n("+prg"),t.exports=n("lVK7")},"GQ+1":function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return O});var l=n("GiK3"),s=n.n(l),i=n("SYeh"),c=n("rrlf"),u=(n.n(c),n("q5pk")),p=n.n(u),d=n("elfW"),f=(n.n(d),n("OOul")),h=n.n(f),m=function(t){function e(){a(this,e);var n=r(this,t.call(this));return n.state={L:0,W:0,H:0,CC:0,caveat:0,area:0,threePlates:!1},n.valueSetter=n.valueSetter.bind(n),n}return o(e,t),e.prototype.valueSetter=function(t){var e=this;return function(n){var a;e.setState((a={},a[t]=parseFloat(n.target.value),a))}},e.prototype.getValues=function(){return this.state},e.prototype.render=function(){var t=this.valueSetter;return s.a.createElement("div",{className:p.a.part},s.a.createElement("input",{type:"text",placeholder:"L 長",onChange:t("L")}),s.a.createElement("input",{type:"text",placeholder:"W 寬",onChange:t("W")}),s.a.createElement("input",{type:"text",placeholder:"H 高",onChange:t("H")}),s.a.createElement("input",{type:"text",placeholder:"CC",onChange:t("CC")}),s.a.createElement("input",{type:"text",placeholder:"表面積mm²",onChange:t("area")}),s.a.createElement("input",{type:"number",min:0,placeholder:"穴數",onChange:t("caveat")}))},e}(s.a.Component),S=1,C=s.a.createElement("div",null,"loading data..."),v=s.a.createElement("span",null,"Parts"),F=s.a.createElement("option",null,"Molder"),E=s.a.createElement("option",{value:"FSM"},"FSM"),b=s.a.createElement("option",{value:"SCM"},"SCM"),y=s.a.createElement("span",null," "),M=s.a.createElement("br",null),g=s.a.createElement("br",null),x=s.a.createElement("strong",null,"Cost: "),O=function(t){function e(){a(this,e);var n=r(this,t.call(this));return n.state={loaded:!1,estimateCost:0,molder:"",parts:[0]},n.addPart=n.addPart.bind(n),n.setMolder=n.setMolder.bind(n),n}return o(e,t),e.prototype.componentDidMount=function(){var t=this,e=Object(i.b)(h.a),n=e.X,a=e.Y;this.lr=new c.LinearRegression(n,a,{algorithm:"GradientDescent",numberOfIterations:2e4,learningRate:.3}),this.lr.train(function(e){if(e)return console.log(e);t.setState({loaded:!0})})},e.prototype.setMolder=function(t){this.setState({molder:t.target.value})},e.prototype.addPart=function(){this.setState({parts:this.state.parts.concat([S++])})},e.prototype.delPart=function(t){this.setState({parts:this.state.parts.filter(function(e){return e!==t})})},e.prototype.render=function(){var t=this,e=this.lr,n=[];return this.state.loaded?s.a.createElement("div",{className:p.a.app},s.a.createElement("div",{className:p.a.container},s.a.createElement("div",{className:p.a.header},v,s.a.createElement("button",{onClick:this.addPart},"add part")),s.a.createElement("div",{className:p.a.parts},this.state.parts.map(function(e){return s.a.createElement("div",{key:e},s.a.createElement(m,{ref:function(t){return n.push(t)}}),s.a.createElement("button",{onClick:t.delPart.bind(t,e)},"del part"))})),s.a.createElement("div",{className:p.a.result},s.a.createElement("select",{onChange:this.setMolder},F,E,b),y,s.a.createElement("button",{onClick:function(){try{var a=n.map(function(t){return t.getValues()}),r=Object(i.a)(t.state.molder,a),o=e.predict(r).toFixed(2);t.setState({estimateCost:o})}catch(e){t.setState({estimateCost:0})}}},"Estimate Cost"),M,g,this.state.estimateCost<=0?null:s.a.createElement("p",null,x,this.state.estimateCost)))):C},e}(s.a.Component)},OOul:function(t,e){t.exports="298\t141\t67\t213.0 \t\t\t1\t\t172723\t209\tSCM\n\t\t\t\t\t\t\t\t\t\t\n292\t127\t57\t144.0 \t\t\t1\t\t107082\t178\tSCM\n\t\t\t\t\t\t\t\t\t\t\n292\t127\t20\t154.0 \t\t\t2\t\t120826\t183\tSCM\n\t\t\t\t\t\t\t\t\t\t\n368\t57\t27\t54.0 \t\tV\t1\t1\t52142\t220\tFSM\n363\t40\t20\t50.0 \t\t \t1\t1\t47300\t\t\n363\t40\t20\t48.0 \t\t \t1\t1\t44175\t\t\n\t\t\t\t\t\t\t\t\t\t\n57\t46\t13\t5.6 \t\t\t3\t1\t6724\t114\tSCM\n57\t46\t14\t6.6 \t\t\t3\t1\t8288\t\t\n\t\t\t\t\t\t\t\t\t\t\n143\t88\t10\t33.2 \t\t\t2\t1\t27232\t192\tSCM\n143\t88\t20\t40.8 \t\t\t2\t1\t34521\t\t\n\t\t\t\t\t\t\t\t\t\t\n88\t88\t29\t31.0 \t\t \t3\t1\t33004\t205\tFSM\n88\t88\t22\t29.1 \t\t \t3\t1\t30968\t\t\n\t\t\t\t\t\t\t\t\t\t\n88\t88\t22\t28.4 \t\t \t3\t1\t30195\t205\tFSM\n88\t88\t22\t29.2 \t\t \t3\t1\t30715\t\t\n\t\t\t\t\t\t\t\t\t\t\n119\t88\t30\t48.8 \t\t\t1\t1\t46789\t220\tFSM\n119\t101\t24\t38.1 \t\t\t1\t1\t31346\t\t\n119\t101\t22\t39.8 \t\t\t1\t1\t32851\t\t\n\t\t\t\t\t\t\t\t\t\t\n126\t102\t19\t54.8 \t\t\t2\t1\t49450\t200\tSCM\n76\t72\t30\t38.2 \t1\t\t2\t1\t38224\t\t\n\t\t\t\t\t\t\t\t\t\t\n144\t48\t15\t24.8 \t\t\t3\t1\t23269\t108\tS\n\t\t\t\t\t\t\t\t\t\t\n53\t37\t21\t7.3 \t1\t \t4\t1\t6439\t120\tF\n6\t6\t2.2\t0.05 \t\t\t1\t2\t114\t\t\n\t\t\t\t\t\t\t\t\t\t\n86\t85\t69\t59.2 \t\t\t4\t1\t44718\t280\tF\n119\t101\t108\t105.4 \t\t\t4\t1\t90334\t\t\n\t\t\t\t\t\t\t\t\t\t\n71\t55\t22\t9.2\t\t\t1\t1\t8517\t110\tF\n71\t55\t13\t7.6\t\t\t1\t1\t6612\t\t\n\t\t\t\t\t\t\t\t\t\t\n87\t39\t17\t19.9\t\t\t\t1\t18348\t180\tF\n87\t39\t17\t20\t\t\t\t1\t18689\t\t\n15\t15\t6\t0.6\t\t\t\t2\t568\t\t\n\t\t\t\t\t\t\t\t\t\t\n221\t105\t34\t107\t\tV\t3\t1\t90294\t288\tS\n221\t105\t33\t153.2\t\tV\t2\t1\t126011\t\t\n\t\t\t\t\t\t\t\t\t\t\n151\t81\t27\t35.33\t\t \t2\t1\t29357\t150\tS\n14\t10\t6\t1.5\t\t \t1\t3\t493\t\t\n62\t62\t13\t3.5\t\t \t3\t1\t9918\t\t\n\t\t\t\t\t\t\t\t\t\t\n245\t100\t116\t146.8\t\t\t3\t1\t118145\t190\tF\n\t\t\t\t\t\t\t\t\t\t\n210\t210\t8\t22.8\t\t\t2\t1\t21670\t90\tF\n\t\t\t\t\t\t\t\t\t\t\n12\t12\t23\t1.3\t\t\t1\t2\t2443\t83\tS\n\t\t\t\t\t\t\t\t\t\t\n253\t253\t52\t233.2\t\t\t2\t1\t170607\t220\tS\n\t\t\t\t\t\t\t\t\t\t\n195\t29\t27\t21.9\t1\t\t1\t1\t18544\t160\tS\n24\t19\t11\t1.8\t\t\t1\t3\t2046\t\t\n\t\t\t\t\t\t\t\t\t\t\n241\t150\t79\t127.9\t\t\t1\t1\t105497\t300\tF\n241\t150\t79\t121\t\t\t1\t1\t98762\t\t\n\t\t\t\t\t\t\t\t\t\t\n344\t42\t84\t155.6\t\t\t2\t1\t131022\t180\tF\n\t\t\t\t\t\t\t\t\t\t\n210\t210\t24\t38.5\t\t\t2\t1\t35485\t120\tF\n32\t32\t15\t4.3\t\t\t1\t1\t3626\t\t\n\t\t\t\t\t\t\t\t\t\t\n204\t204\t76\t234.1\t\t\t2\t1\t169379\t245\tF\n\t\t\t\t\t\t\t\t\t\t\n180\t180\t241\t399.8\t\t\t2\t1\t257765\t300\tF\n\t\t\t\t\t\t\t\t\t\t\n180\t180\t67\t144.8\t\t\t2\t1\t94329\t130\tF\n\t\t\t\t\t\t\t\t\t\t\n32\t15\t15\t1.95\t\t\t\t4\t2311\t155\tS\n37\t37\t17\t3.31\t\t\t\t1\t3345\t\t\n20\t20\t3\t0.71\t\t\t\t4\t768\t\t\n\t\t\t\t\t\t\t\t\t\t\n7.4\t8.2\t8.2\t0.33\t\t\t\t1\t340\t110\tF\n50\t28\t15\t3.34\t\t\t\t1\t3343\t\t\n50\t28\t14\t3.38\t\t\t\t1\t3319\t\t\n\t\t\t\t\t\t\t\t\t\t\n47\t19\t19\t6.95\t\t\t\t1\t6473\t143\tF\n26\t26\t17\t2.8\t\t\t\t1\t2562\t\t\n45\t38\t14\t6.39\t\t\t\t1\t6092\t\t\n\t\t\t\t\t\t\t\t\t\t\n105\t105\t20\t34.34\t\t\t\t1\t29528\t175\tF\n105\t105\t14\t30.92\t\t\t\t1\t27022\t\t\n\t\t\t\t\t\t\t\t\t\t\n146\t94\t13\t43.77\t\t\t\t1\t39070\t184\tF\n146\t94\t14\t45.4\t\t\t\t1\t40672\t\t\n\t\t\t\t\t\t\t\t\t\t\n282\t78\t32\t91.64\t\t\t\t1\t85320\t330\tF\n282\t78\t32\t91.64\t\t\t\t1\t85153\t\t\n\t\t\t\t\t\t\t\t\t\t\n278\t99\t25\t89.87\t\t\t\t1\t84353\t200\tF\n\t\t\t\t\t\t\t\t\t\t\n177\t153\t25\t115.95\t\t\t\t1\t105888\t325\tF\n107\t94\t65\t71.27\t\t\t\t1\t67423\t\t\n114\t13\t13\t8.87\t\t\t\t1\t8113\t\t\n\t\t\t\t\t\t\t\t\t\t\n112\t21\t8\t5.27\t\t\t\t1\t4930\t112\tS\n19\t5\t5\t0.17\t\t\t\t2\t271\t\t\n27\t11\t6\t1\t\t\t\t1\t999\t\t\n30\t12\t8\t0.69\t\t\t\t1\t785\t\t\n\t\t\t\t\t\t\t\t\t\t\n82\t82\t28\t31.44\t\t\t\t1\t33770\t205\tF\n82\t82\t22\t29.13\t\t\t\t1\t30968\t\t\n\t\t\t\t\t\t\t\t\t\t\n82\t82\t23\t28.37\t\t\t\t1\t30195\t205\tF\n82\t82\t23\t29.31\t\t\t\t1\t30715\t\t\n\t\t\t\t\t\t\t\t\t\t\n34\t34\t22\t3.98\t\t\t\t1\t5599\t120\tF\n20\t20\t6\t0.52\t\t\t\t1\t850\t\t\n10\t7\t8\t0.26\t\t\t\t4\t546\t\t\n\t\t\t\t\t\t\t\t\t\t\n118\t86\t31\t48.86\t\t\t\t1\t46788\t220\tF\n119\t101\t24\t38.06\t\t\t\t1\t31344\t\t\n119\t101\t22\t39.87\t\t\t\t1\t32863\t\t\n\t\t\t\t\t\t\t\t\t\t\n126\t102\t18\t54.83\t\t\t\t1\t49450\t200\tS\n76\t72\t30\t38.16\t\t\t\t1\t38224\t\t\n"},SYeh:function(t,e,n){"use strict";function a(t,e){for(var n=0,a=0,r=0,l=0,s=0,i=0,c=0;c<e.length;c++){var u=e[c];n=Math.max(n,u.L),a+=(u.caveat||1)*u.W,r=Math.max(r,u.H),l+=u.CC,s+=u.caveat||1,i+=u.area}return[n,a,r,l,s,i,i/l].concat(o[t])}function r(t){for(var e=t.toString().split("\n").map(function(t){return/^\t*$/.test(t)?null:t.split("\t")}),n=[],r=[],o="",l=[],s=0;s<e.length;s++){var i=e[s];if(null!=i){var c=i[7]?parseInt(i[7]):1;l.push({L:parseFloat(i[0]),W:c*parseFloat(i[1]),H:parseFloat(i[2]),CC:parseFloat(i[3]),caveat:c,area:parseInt(i[8]||0)}),o=i[10]||o,i[9]&&r.push(parseFloat(i[9]))}else n.push(a(o,l)),o="",l=[]}return{X:n,Y:r}}e.a=a,e.b=r;var o={SCM:[1,0],FSM:[0,1],S:[1,0],F:[0,1]}},cilB:function(t,e){t.exports={app:"app-3cj18YI9a6"}},elfW:function(t,e){},lVK7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("cilB"),r=(n.n(a),n("GiK3")),o=n.n(r),l=n("O27J"),s=(n.n(l),n("GQ+1"));Object(l.render)(o.a.createElement(s.a,null),document.querySelector("#app"))},q5pk:function(t,e){t.exports={app:"app-2oExzUs-th",container:"container-1ZDeVQs7IS",header:"header-2N_41928rW",parts:"parts-SKgQIKPC4B",part:"part-1-o_IdUIob",result:"result-17Yn0wzkPq"}},xz2L:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="xz2L"}},[0]);
//# sourceMappingURL=app.a9a511b5.js.map