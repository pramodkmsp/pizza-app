(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2Ny+":function(t,e,o){"use strict";o.r(e),o.d(e,"OrderDetailsModule",(function(){return u}));var r=o("ofXK"),b=o("tyNb"),n=o("fXoL"),c=o("EnSQ");function s(t,e){if(1&t&&(n.Pb(0,"tr"),n.Pb(1,"td"),n.oc(2),n.Ob(),n.Pb(3,"td"),n.oc(4),n.ac(5,"currency"),n.Ob(),n.Pb(6,"td"),n.oc(7),n.Ob(),n.Pb(8,"td"),n.oc(9),n.ac(10,"currency"),n.Ob(),n.Ob()),2&t){const t=e.$implicit;n.Bb(2),n.pc(t.itemName),n.Bb(2),n.pc(n.bc(5,4,t.price,"INR")),n.Bb(3),n.pc(t.quantity),n.Bb(2),n.pc(n.bc(10,7,t.price*t.quantity,"INR"))}}const a=function(){return["/orders"]};function i(t,e){if(1&t&&(n.Pb(0,"section",1),n.Pb(1,"div",2),n.Pb(2,"label",3),n.Pb(3,"strong"),n.oc(4,"Order Details"),n.Ob(),n.Ob(),n.Pb(5,"div",4),n.Pb(6,"div",5),n.Pb(7,"label",6),n.Pb(8,"span",7),n.oc(9,"Customer Name"),n.Ob(),n.Pb(10,"span",8),n.oc(11),n.Ob(),n.Ob(),n.Pb(12,"label",6),n.Pb(13,"span",7),n.oc(14,"Customer Address"),n.Ob(),n.Pb(15,"span",8),n.oc(16),n.Ob(),n.Ob(),n.Pb(17,"label",6),n.Pb(18,"span",7),n.oc(19,"Order Status"),n.Ob(),n.Pb(20,"span",8),n.oc(21,": "),n.Pb(22,"span",9),n.oc(23),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(24,"div",10),n.Pb(25,"table",11),n.Pb(26,"thead"),n.Pb(27,"tr"),n.Pb(28,"th"),n.oc(29,"Item Name "),n.Ob(),n.Pb(30,"th"),n.oc(31,"Item Price "),n.Ob(),n.Pb(32,"th"),n.oc(33,"Item Quantity "),n.Ob(),n.Pb(34,"th"),n.oc(35,"Total Item Price "),n.Ob(),n.Ob(),n.Ob(),n.Pb(36,"tbody"),n.nc(37,s,11,10,"tr",12),n.Ob(),n.Ob(),n.Ob(),n.Pb(38,"div",13),n.Pb(39,"button",14),n.oc(40," Go Back "),n.Ob(),n.Pb(41,"span",15),n.Pb(42,"strong"),n.oc(43,"Total Amount :"),n.Ob(),n.oc(44),n.ac(45,"currency"),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&t){const t=n.Zb();n.Bb(11),n.qc(": ",null==t.orderDetails?null:t.orderDetails.customerName,""),n.Bb(5),n.qc(": ",null==t.orderDetails?null:t.orderDetails.address,""),n.Bb(7),n.pc(null==t.orderDetails?null:t.orderDetails.status),n.Bb(14),n.ec("ngForOf",t.orderDetails.items),n.Bb(2),n.ec("routerLink",n.fc(9,a)),n.Bb(5),n.qc(" ",n.bc(45,6,t.getTotalAmount(null==t.orderDetails?null:t.orderDetails.items),"INR"),"")}}const l=[{path:"",component:(()=>{class t{constructor(t,e){this.dataService=t,this.route=e,this.route.paramMap.subscribe(t=>{this.orderId=this.route.snapshot.paramMap.get("id"),console.log(this.orderId),this.getOrderDetails()})}ngOnInit(){}getOrderDetails(){this.dataService.getOrderDetails(this.orderId).then(t=>{t&&(this.orderDetails=t)})}getTotalAmount(t){return this.dataService.getTotalAmount(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(c.a),n.Mb(b.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-order-details"]],decls:1,vars:1,consts:[["class","col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto p-2 m-0 mt-5",4,"ngIf"],[1,"col-sm-12","col-md-10","col-lg-8","col-xl-8","mx-auto","p-2","m-0","mt-5"],[1,"col-12","p-0","m-0","order","mb-2","mt-5"],[1,"bg-primary","text-white","col-12","text-center","p-3","m-0","title"],[1,"col-12","p-3","m-0"],[1,"card","p-2","mb-2","col-12","mx-auto","order-info"],[1,"row","p-0","m-0"],[1,"col-4","p-0","m-0","item-label"],[1,"col-8","p-0","m-0"],[1,"badge","badge-success"],[1,"table-responsive"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"row","justify-content-between","p-0","m-0"],["routerLinkActive","router-link-active",1,"btn","btn-success","btn-sm",3,"routerLink"],[1,"item-label"]],template:function(t,e){1&t&&n.nc(0,i,46,10,"section",0),2&t&&n.ec("ngIf",e.orderDetails)},directives:[r.k,r.j,b.c,b.b],pipes:[r.c],styles:[".order[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,.35)}.title[_ngcontent-%COMP%]{border-top-right-radius:4px;border-top-left-radius:4px}.order[_ngcontent-%COMP%]{color:#000;box-shadow:0 3px 16px 0 rgba(0,0,0,.11);border:4px}.order-info[_ngcontent-%COMP%]{background:rgba(174,181,64,.3803921568627451)}.order-info[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-size:16px;font-weight:700}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[b.d.forChild(l)],b.d]}),t})(),u=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[r.b,d]]}),t})()}}]);