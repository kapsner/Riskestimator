!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t,n,i,r,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(i,r)}function n(e){return function(){var n=this,i=arguments;return new Promise((function(r,a){var o=e.apply(n,i);function s(e){t(o,r,a,s,u,"next",e)}function u(e){t(o,r,a,s,u,"throw",e)}s(void 0)}))}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{GEuc:function(t,r,o){"use strict";o.r(r),o.d(r,"ion_menu",(function(){return m})),o.d(r,"ion_menu_button",(function(){return w})),o.d(r,"ion_menu_controller",(function(){return x})),o.d(r,"ion_menu_toggle",(function(){return O}));var s=o("c1op"),u=o("AfW+"),c=o("aiEM"),l=(o("+4pY"),o("mUkt")),h=o("930v"),d=o("Dl6n"),p=o("qaSm"),m=function(){function t(e){i(this,t),Object(s.l)(this,e),this.lastOnEnd=0,this.blocker=l.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(s.d)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(s.e)(this,"ionWillOpen",7),this.ionWillClose=Object(s.e)(this,"ionWillClose",7),this.ionDidOpen=Object(s.e)(this,"ionDidOpen",7),this.ionDidClose=Object(s.e)(this,"ionDidClose",7),this.ionMenuChange=Object(s.e)(this,"ionMenuChange",7)}var r,d,m,k,w;return a(t,[{key:"typeChanged",value:function(e,t){var n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-"+t),n.classList.add("menu-content-"+e),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(c.h)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:(w=n(regeneratorRuntime.mark((function e(){var t,n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.type&&(this.type=u.b.get("menuType","ios"===this.mode?"reveal":"overlay")),t=this.el.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n'),!(n=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]"))||!n.tagName){e.next=16;break}return this.contentEl=n,n.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),h.a._register(this),e.next=12,Promise.resolve().then(o.bind(null,"mUkt"));case 12:this.gesture=e.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(e){return i.canStart(e)},onWillStart:function(){return i.onWillStart()},onStart:function(){return i.onStart()},onMove:function(e){return i.onMove(e)},onEnd:function(e){return i.onEnd(e)}}),this.updateState(),e.next=17;break;case 16:console.error('Menu: must have a "content" element to listen for drag events on.');case 17:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)})},{key:"componentDidLoad",value:(k=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 1:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),h.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,e)}},{key:"close",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,e)}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,e)}},{key:"setOpen",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return h.a._setOpen(this,e,t)}},{key:"_setOpen",value:(m=n(regeneratorRuntime.mark((function e(t){var n,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],e.t0=!this._isActive()||this.isAnimating||t===this._isOpen,e.t0){e.next=10;break}return this.beforeAnimation(t),e.next=6,this.loadAnimation();case 6:return e.next=8,this.startAnimation(t,n);case 8:this.afterAnimation(t),e.t0=0;case 10:return e.abrupt("return",!e.t0);case 11:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"loadAnimation",value:(d=n(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.menuInnerEl.offsetWidth,e.t0=t===this.width&&void 0!==this.animation,e.t0){e.next=10;break}return this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e.next=7,h.a._createAnimation(this.type,this);case 7:this.animation=e.sent,u.b.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"startAnimation",value:(r=n(regeneratorRuntime.mark((function e(t,n){var i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!t,r=this.animation.direction(i?"reverse":"normal").easing(i?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)"),!n){e.next=6;break}return e.next=4,r.playAsync();case 4:e.next=7;break;case 6:r.playSync();case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(e){return!!this.canSwipe()&&(!!this._isOpen||!h.a._getOpenSync()&&f(window,e.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):Object(c.b)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(e){if(this.isAnimating&&this.animation){var t=b(e.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(t/this.width)}else Object(c.b)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(e){var t=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,r=b(e.deltaX,n,i),a=this.width,o=r/a,s=e.velocityX,u=a/2,l=s>=0&&(s>.2||e.deltaX>u),h=s<=0&&(s<-.2||e.deltaX<-u),d=n?i?l:h:i?h:l,m=!n&&d;n&&!d&&(m=!0),this.lastOnEnd=e.timeStamp;var f=d?.001:-.001,g=o<=0?.01:o;f+=Object(p.b)(new p.a(0,0),new p.a(.4,0),new p.a(.6,1),new p.a(1,1),Object(c.c)(0,g,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return t.afterAnimation(m)}),{oneTimeCallback:!0}).progressEnd(d?1:0,f,300)}else Object(c.b)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(e){Object(c.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(g),this.backdropEl&&this.backdropEl.classList.add(v),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(e){Object(c.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?(this.contentEl&&this.contentEl.classList.add(y),this.ionDidOpen.emit()):(this.el.classList.remove(g),this.contentEl&&this.contentEl.classList.remove(y),this.backdropEl&&this.backdropEl.classList.remove(v),this.animation&&this.animation.stop(),this.ionDidClose.emit())}},{key:"updateState",value:function(){var e=this._isActive();this.gesture&&this.gesture.setDisabled(!e||!this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),this.disabled||h.a._setActiveMenu(this),Object(c.b)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(c.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)}},{key:"render",value:function(){var t,n=this,i=this.isEndSide,r=this.type,a=this.disabled,o=this.mode,u=this.isPaneVisible;return Object(s.i)(s.a,{role:"navigation",class:(t={},e(t,o,!0),e(t,"menu-type-"+r,!0),e(t,"menu-enabled",!a),e(t,"menu-side-end",i),e(t,"menu-side-start",!i),e(t,"menu-pane-visible",u),t)},Object(s.i)("div",{class:"menu-inner",ref:function(e){return n.menuInnerEl=e}},Object(s.i)("slot",null)),Object(s.i)("ion-backdrop",{ref:function(e){return n.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}},{key:"el",get:function(){return Object(s.f)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},{key:"style",get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"}}]),t}(),b=function(e,t,n){return Math.max(0,t!==n?-e:e)},f=function(e,t,n,i){return n?t>=e.innerWidth-i:t<=i},g="show-menu",v="show-backdrop",y="menu-content-open",k=function(){var e=n(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t);case 2:if(n=e.sent,e.t0=!n,e.t0){e.next=8;break}return e.next=7,n.isActive();case 7:e.t0=!e.sent;case 8:return e.abrupt("return",!e.t0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){function t(e){var r=this;i(this,t),Object(s.l)(this,e),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.toggle(r.menu));case 1:case"end":return e.stop()}}),e)})))}var r;return a(t,[{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(r=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.menu);case 2:this.visible=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var t=this.color,n=this.disabled,i=Object(s.d)(this),r=u.b.get("menuIcon","menu"),a=this.autoHide&&!this.visible,o={type:this.type};return Object(s.i)(s.a,{onClick:this.onClick,"aria-disabled":n?"true":null,"aria-hidden":a?"true":null,class:Object.assign(Object.assign(e({},i,!0),Object(d.a)(t)),{button:!0,"menu-button-hidden":a,"menu-button-disabled":n,"ion-activatable":!0,"ion-focusable":!0})},Object(s.i)("button",Object.assign({},o,{disabled:n,class:"button-native"}),Object(s.i)("slot",null,Object(s.i)("ion-icon",{icon:r,mode:i,lazy:!1})),"md"===i&&Object(s.i)("ion-ripple-effect",{type:"unbounded"})))}}],[{key:"style",get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"}}]),t}(),x=function(){function e(t){i(this,e),Object(s.l)(this,t)}var t;return a(e,[{key:"open",value:function(e){return h.a.open(e)}},{key:"close",value:function(e){return h.a.close(e)}},{key:"toggle",value:function(e){return h.a.toggle(e)}},{key:"enable",value:function(e,t){return h.a.enable(e,t)}},{key:"swipeGesture",value:function(e,t){return h.a.swipeGesture(e,t)}},{key:"isOpen",value:function(e){return h.a.isOpen(e)}},{key:"isEnabled",value:function(e){return h.a.isEnabled(e)}},{key:"get",value:function(e){return h.a.get(e)}},{key:"getOpen",value:function(){return h.a.getOpen()}},{key:"getMenus",value:function(){return h.a.getMenus()}},{key:"isAnimating",value:function(){return h.a.isAnimating()}},{key:"registerAnimation",value:(t=n(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.registerAnimation(t,n));case 1:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})}]),e}(),O=function(){function t(e){var n=this;i(this,t),Object(s.l)(this,e),this.visible=!1,this.autoHide=!0,this.onClick=function(){return h.a.toggle(n.menu)}}var r;return a(t,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(r=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.menu);case 2:this.visible=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var t,n=Object(s.d)(this),i=this.autoHide&&!this.visible;return Object(s.i)(s.a,{onClick:this.onClick,"aria-hidden":i?"true":null,class:(t={},e(t,n,!0),e(t,"menu-toggle-hidden",i),t)},Object(s.i)("slot",null))}}],[{key:"style",get:function(){return":host(.menu-toggle-hidden){display:none}"}}]),t}()}}])}();