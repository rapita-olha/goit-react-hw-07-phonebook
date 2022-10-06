(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={label:"Filter_label__1Ugo1",input:"Filter_input__1WdSP"}},31:function(t,e,n){t.exports={title:"title_title__e7-jA"}},62:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),u=n(3),s=n(7),i=n.n(s),l=n(17),b=n(11),j=n.n(b),d=n(4);j.a.defaults.baseURL="https://6187f432057b9b00177f9b5a.mockapi.io/api/v1";var f=Object(d.c)("contacts/fetchContacts",Object(l.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))),m=Object(d.c)("contacts/addContact",function(){var t=Object(l.a)(i.a.mark((function t(e){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("/contacts",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O=Object(d.c)("contacts/deleteContact",function(){var t=Object(l.a)(i.a.mark((function t(e){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.delete("/contacts/".concat(e));case 2:return n=t.sent,a=n.data.id,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p=n(31),h=n.n(p),_=n(1),x=function(t){var e=t.title;return Object(_.jsx)("h2",{className:h.a.title,children:e})},v=n(21),C=function(t){return t.contacts.filter},N=function(t){return t.contacts.items},g=function(t){var e=N(t),n=C(t);return e.filter((function(t){var e=t.name,a=t.number;return e.toLowerCase().includes(n.toLowerCase())||a.includes(n)}))},w=n(8),y=n.n(w);function L(){var t=Object(a.useState)(""),e=Object(v.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(v.a)(r,2),s=o[0],i=o[1],l=Object(u.c)(N),b=Object(u.b)(),j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}},d=function(){i(""),c("")};return Object(_.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===n&&""===s)return alert("Empty");l.some((function(t){return t.name.toLowerCase()===n.toLowerCase()||t.number===s}))?alert("".concat(n," is already in contacts.")):b(m({name:n,number:s})),d()},className:y.a.form,autoComplete:"off",children:[Object(_.jsxs)("label",{className:y.a.label,children:["Name",Object(_.jsx)("input",{autoFocus:!0,type:"text",name:"name",value:n,onChange:j,className:y.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0442\u0438 \u043b\u0438\u0448 \u0431\u0443\u043a\u0432\u0438, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(_.jsxs)("label",{className:y.a.label,children:["Number",Object(_.jsx)("input",{type:"tel",name:"number",value:s,onChange:j,className:y.a.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0446\u0438\u0444\u0440\u0438, \u043f\u043e\u043f\u0443\u0441\u043a\u0438, \u0442\u0438\u0440\u0435, \u0456 \u043c\u043e\u0436\u0435 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044c \u0437 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f +",required:!0})]}),Object(_.jsx)("button",{type:"submit",className:y.a.btn,children:"Add contact"})]})}var k=Object(d.b)("contacts/changeFilter"),A=n(20),F=n.n(A),z=function(){var t=Object(u.c)(C),e=Object(u.b)();return Object(_.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(_.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){var n=t.target.value;return e(k(n))},className:F.a.input})]})},S=n(9),T=n.n(S),B=function(){var t=Object(u.c)(g),e=Object(u.b)();return Object(_.jsx)("ul",{className:T.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(_.jsx)("li",{className:T.a.item,children:Object(_.jsxs)("div",{className:T.a.box,children:[Object(_.jsxs)("p",{className:T.a.name,children:[a,": "]}),Object(_.jsx)("p",{className:T.a.number,children:c}),Object(_.jsx)("button",{className:T.a.btn,onClick:function(){return function(t){return e(O(t))}(n)},children:"Delete"})]})},n)}))})};n(62);function P(){var t=Object(u.c)((function(t){return t.contacts.loading})),e=Object(u.b)();return Object(a.useEffect)((function(){e(f())}),[e]),Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h1",{className:"visually_hidden",children:"Phonebook"}),t&&Object(_.jsx)("h1",{children:"Loading..."}),Object(_.jsx)(x,{title:"Phonebook"}),Object(_.jsx)(L,{}),Object(_.jsx)(x,{title:"Contacts"}),Object(_.jsx)(z,{}),Object(_.jsx)(B,{})]})}var Z,E,J=n(16),M=n(6),q=n(2),D=Object(d.d)([],(Z={},Object(q.a)(Z,f.fulfilled,(function(t,e){return e.payload})),Object(q.a)(Z,m.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(J.a)(t),[n])})),Object(q.a)(Z,O.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Z)),G=Object(d.d)(!1,(E={},Object(q.a)(E,f.pending,(function(){return!0})),Object(q.a)(E,f.fulfilled,(function(){return!1})),Object(q.a)(E,f.rejected,(function(){return!1})),Object(q.a)(E,m.pending,(function(){return!0})),Object(q.a)(E,m.fulfilled,(function(){return!1})),Object(q.a)(E,m.rejected,(function(){return!1})),Object(q.a)(E,O.pending,(function(){return!0})),Object(q.a)(E,O.fulfilled,(function(){return!1})),Object(q.a)(E,O.rejected,(function(){return!1})),E)),U=Object(d.d)("",Object(q.a)({},k,(function(t,e){return e.payload}))),H=Object(J.a)(Object(d.e)()),I=Object(M.b)({items:D,filter:U,loading:G}),Q=Object(d.a)({reducer:{contacts:I},middleware:H,devTools:!1});n(63),n(64);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(u.a,{store:Q,children:Object(_.jsx)(P,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__2T1GM",label:"ContactForm_label__3AGmt",input:"ContactForm_input__1HLAY",number:"ContactForm_number__31r2n",btn:"ContactForm_btn__Tm0n5"}},9:function(t,e,n){t.exports={list:"ContactList_list__1zOBT",item:"ContactList_item__3PAdb",box:"ContactList_box__oAQzh",name:"ContactList_name__2FaBO",number:"ContactList_number__3Lesd",btn:"ContactList_btn__1cZoA"}}},[[65,1,2]]]);
//# sourceMappingURL=main.2dad95d8.chunk.js.map