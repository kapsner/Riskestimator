!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e,n,i,r,a,o){try{var s=t[a](o),l=s.value}catch(d){return void n(d)}s.done?e(l):Promise.resolve(l).then(i,r)}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{fD4w:function(i,r,a){"use strict";a.r(r),a.d(r,"ion_range",(function(){return d}));var o=a("c1op"),s=(a("AfW+"),a("aiEM")),l=a("Dl6n"),d=function(){function i(t){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),Object(o.l)(this,t),this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=function(t){return Object(s.c)(e.min,t,e.max)},this.ensureValueInBounds=function(t){return e.dualKnobs?{lower:e.clampBounds(t.lower),upper:e.clampBounds(t.upper)}:e.clampBounds(t)},this.handleKeyboard=function(t,n){var i=e.step;i=i>0?i:1,i/=e.max-e.min,n||(i*=-1),"A"===t?e.ratioA=Object(s.c)(0,e.ratioA+i,1):e.ratioB=Object(s.c)(0,e.ratioB+i,1),e.updateValue()},this.onBlur=function(){e.hasFocus&&(e.hasFocus=!1,e.ionBlur.emit(),e.emitStyle())},this.onFocus=function(){e.hasFocus||(e.hasFocus=!0,e.ionFocus.emit(),e.emitStyle())},this.ionChange=Object(o.e)(this,"ionChange",7),this.ionStyle=Object(o.e)(this,"ionStyle",7),this.ionFocus=Object(o.e)(this,"ionFocus",7),this.ionBlur=Object(o.e)(this,"ionBlur",7)}var r,d,u,g,p;return r=i,d=[{key:"debounceChanged",value:function(){this.ionChange=Object(s.d)(this.ionChange,this.debounce)}},{key:"minChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"maxChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"disabledChanged",value:function(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()}},{key:"valueChanged",value:function(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}},{key:"connectedCallback",value:function(){this.updateRatio(),this.debounceChanged(),this.disabledChanged()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentDidLoad",value:(g=regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.rangeSlider,t.t0=e,!t.t0){t.next=7;break}return t.next=5,Promise.resolve().then(a.bind(null,"mUkt"));case 5:this.gesture=t.sent.createGesture({el:e,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}}),this.gesture.setDisabled(this.disabled);case 7:case"end":return t.stop()}}),t,this)})),p=function(){var t=this,n=arguments;return new Promise((function(i,r){var a=g.apply(t,n);function o(t){e(a,i,r,o,s,"next",t)}function s(t){e(a,i,r,o,s,"throw",t)}o(void 0)}))},function(){return p.apply(this,arguments)})},{key:"getValue",value:function(){var t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}},{key:"onStart",value:function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect(),n=t.currentX,i=Object(s.c)(0,(n-e.left)/e.width,1);"rtl"===document.dir&&(i=1-i),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-i)<Math.abs(this.ratioB-i)?"A":"B",this.setFocus(this.pressedKnob),this.update(n)}},{key:"onMove",value:function(t){this.update(t.currentX)}},{key:"onEnd",value:function(t){this.update(t.currentX),this.pressedKnob=void 0}},{key:"update",value:function(t){var e=this.rect,n=Object(s.c)(0,(t-e.left)/e.width,1);"rtl"===document.dir&&(n=1-n),this.snaps&&(n=b(c(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}},{key:"updateRatio",value:function(){var t=this.getValue(),e=this.min,n=this.max;this.dualKnobs?(this.ratioA=b(t.lower,e,n),this.ratioB=b(t.upper,e,n)):this.ratioA=b(t,e,n)}},{key:"updateValue",value:function(){this.noUpdate=!0;var t=this.valA,e=this.valB;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}},{key:"setFocus",value:function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}},{key:"render",value:function(){var e,n,i=this,r=this.min,a=this.max,d=this.step,c=this.el,u=this.handleKeyboard,g=this.pressedKnob,p=this.disabled,f=this.pin,k=this.ratioLower,m=this.ratioUpper,v=Object(o.d)(this),x="rtl"===document.dir,w=x?"right":"left",y=function(e){return t({},w,e[w])},j=(t(e={},w,100*k+"%"),t(e,x?"left":"right",100-100*m+"%"),e),O=[];if(this.snaps&&this.ticks)for(var B=r;B<=a;B+=d){var A=b(B,r,a),z={ratio:A,active:A>=k&&A<=m};z[w]=100*A+"%",O.push(z)}return Object(s.a)(!0,c,this.name,JSON.stringify(this.getValue()),p),Object(o.i)(o.a,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},Object(l.a)(this.color)),(n={},t(n,v,!0),t(n,"in-item",Object(l.c)("ion-item",c)),t(n,"range-disabled",p),t(n,"range-pressed",void 0!==g),t(n,"range-has-pin",f),n))},Object(o.i)("slot",{name:"start"}),Object(o.i)("div",{class:"range-slider",ref:function(t){return i.rangeSlider=t}},O.map((function(t){return Object(o.i)("div",{style:y(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active}})})),Object(o.i)("div",{class:"range-bar",role:"presentation"}),Object(o.i)("div",{class:"range-bar range-bar-active",role:"presentation",style:j}),h(x,{knob:"A",pressed:"A"===g,value:this.valA,ratio:this.ratioA,pin:f,disabled:p,handleKeyboard:u,min:r,max:a}),this.dualKnobs&&h(x,{knob:"B",pressed:"B"===g,value:this.valB,ratio:this.ratioB,pin:f,disabled:p,handleKeyboard:u,min:r,max:a})),Object(o.i)("slot",{name:"end"}))}},{key:"valA",get:function(){return c(this.ratioA,this.min,this.max,this.step)}},{key:"valB",get:function(){return c(this.ratioB,this.min,this.max,this.step)}},{key:"ratioLower",get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}},{key:"ratioUpper",get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}},{key:"el",get:function(){return Object(o.f)(this)}}],u=[{key:"watchers",get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},{key:"style",get:function(){return':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:"";z-index:-1}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{right:unset;right:50%}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin:before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}'}}],d&&n(r.prototype,d),u&&n(r,u),i}(),h=function(t,e){var n,i=e.knob,r=e.value,a=e.ratio,s=e.min,l=e.max,d=e.disabled,h=e.pressed,c=e.pin,b=e.handleKeyboard,u=t?"right":"left";return Object(o.i)("div",{onKeyDown:function(t){var e=t.key;"ArrowLeft"===e||"ArrowDown"===e?(b(i,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==e&&"ArrowUp"!==e||(b(i,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===i,"range-knob-b":"B"===i,"range-knob-pressed":h,"range-knob-min":r===s,"range-knob-max":r===l},style:(n={},n[u]=100*a+"%",n),role:"slider",tabindex:d?-1:0,"aria-valuemin":s,"aria-valuemax":l,"aria-disabled":d?"true":null,"aria-valuenow":r},c&&Object(o.i)("div",{class:"range-pin",role:"presentation"},Math.round(r)),Object(o.i)("div",{class:"range-knob",role:"presentation"}))},c=function(t,e,n,i){var r=(n-e)*t;return i>0&&(r=Math.round(r/i)*i+e),Object(s.c)(e,r,n)},b=function(t,e,n){return Object(s.c)(0,(t-e)/(n-e),1)}}}])}();