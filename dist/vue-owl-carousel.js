import"owl.carousel/dist/assets/owl.carousel.css";import"owl.carousel/dist/assets/owl.theme.default.css";import"owl.carousel";import e from"jquery";import{openBlock as t,createElementBlock as a,withDirectives as i,createElementVNode as o,renderSlot as s,vShow as l,normalizeClass as n}from"vue";let r=["initialize","initialized","resize","resized","refresh","refreshed","update","updated","drag","dragged","translate","translated","to","changed"];var d={name:"VOwlCarousel",props:{items:{type:Number,default:3},margin:{type:Number,default:0},loop:{type:Boolean,default:!1},center:{type:Boolean,default:!1},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},pullDrag:{type:Boolean,default:!0},freeDrag:{type:Boolean,default:!1},stagePadding:{type:Number,default:0},merge:{type:Boolean,default:!1},mergeFit:{type:Boolean,default:!1},autoWidth:{type:Boolean,default:!1},startPosition:{type:Number,default:0},uRLhashListener:{type:Boolean,default:!1},nav:{type:Boolean,default:!0},rewind:{type:Boolean,default:!0},navText:{type:Array,default:()=>["next","prev"]},navElement:{type:String,default:"div"},slideBy:{type:[Number,String],default:1},slideTransition:{type:String,default:""},dots:{type:Boolean,default:!0},dotsEach:{type:[Number,Boolean],default:!1},dotsData:{type:Boolean,default:!1},lazyLoad:{type:Boolean,default:!1},lazyLoadEager:{type:Number,default:0},autoplay:{type:Boolean,default:!1},autoplaySpeed:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:5e3},autoplayHoverPause:{type:Boolean,default:!1},smartSpeed:{type:Number,default:250},fluidSpeed:{type:[Number,Boolean],default:!1},navSpeed:{type:[Number,Boolean],default:!1},dragEndSpeed:{type:[Number,Boolean],default:!1},callbacks:{type:Boolean,default:!0},responsive:{type:Object,default:()=>{}},responsiveRefreshRate:{type:Number,default:200},responsiveBaseElement:{type:String,default:"window"},video:{type:Boolean,default:!1},videoHeight:{type:[Number,Boolean],default:!1},videoWidth:{type:[Number,Boolean],default:!1},animateOut:{type:[String,Boolean],default:!1},animateIn:{type:[String,Boolean],default:!1},fallbackEasing:{type:String,default:"swing"},info:{type:Function,default:()=>{}},itemElement:{type:String,default:"div"},stageElement:{type:String,default:"div"},navContainer:{type:[String,Boolean],default:!1},dotsContainer:{type:[String,Boolean],default:!1},checkVisible:{type:Boolean,default:!0}},data:function(){return{showPrev:!1,showNext:!1,prevHandler:"carousel_prev_"+this.generateUniqueId(),elementHandle:"carousel_"+this.generateUniqueId(),nextHandler:"carousel_next_"+this.generateUniqueId()}},mounted:function(){const t=e("#"+this.elementHandle).owlCarousel({items:this.items,margin:this.margin,loop:this.loop,center:this.center,mouseDrag:this.mouseDrag,touchDrag:this.touchDrag,pullDrag:this.pullDrag,freeDrag:this.freeDrag,stagePadding:this.stagePadding,merge:this.merge,mergeFit:this.mergeFit,autoWidth:this.autoWidth,startPosition:this.startPosition,uRLhashListener:this.uRLhashListener,nav:this.nav,rewind:this.rewind,navText:this.navText,navElement:this.navElement,slideBy:this.slideBy,slideTransition:this.slideTransition,dots:this.dots,dotsEach:this.dotsEach,dotsData:this.dotsData,lazyLoad:this.lazyLoad,lazyLoadEager:this.lazyLoadEager,autoplay:this.autoplay,autoplaySpeed:this.autoplaySpeed,autoplayTimeout:this.autoplayTimeout,autoplayHoverPause:this.autoplayHoverPause,smartSpeed:this.smartSpeed,fluidSpeed:this.fluidSpeed,navSpeed:this.navSpeed,dragEndSpeed:this.dragEndSpeed,callbacks:this.callbacks,responsive:this.responsive,responsiveRefreshRate:this.responsiveRefreshRate,responsiveBaseElement:this.responsiveBaseElement,video:this.video,videoHeight:this.videoHeight,videoWidth:this.videoWidth,animateOut:this.animateOut,animateIn:this.animateIn,fallbackEasing:this.fallbackEasing,info:this.info,itemElement:this.itemElement,stageElement:this.stageElement,navContainer:this.navContainer,dotsContainer:this.dotsContainer,checkVisible:this.checkVisible});e("#"+this.prevHandler).click((function(){t.trigger("prev.owl.carousel")})),e("#"+this.nextHandler).click((function(){t.trigger("next.owl.carousel")})),r.forEach((e=>{t.on(`${e}.owl.carousel`,(t=>{this.$emit(e,t)}))})),this.loop||t.on("changed.owl.carousel",(e=>{if(0===e.item.index)this.showPrev=!1,this.showNext=!0;else{Math.floor(e.item.index+e.page.size)===e.item.count?(this.showPrev=!0,this.showNext=!1):(this.showPrev=!0,this.showNext=!0)}}))},methods:{generateUniqueId:()=>Math.random().toString(36).substring(2,15)}};const u=["id"],p=["id"],h=["id"];d.render=function(e,r,d,f,m,y){return t(),a("div",null,[i(o("span",{id:e.prevHandler},[s(e.$slots,"prev")],8,u),[[l,e.showPrev]]),o("div",{id:e.elementHandle,class:n(["owl-carousel","owl-theme"])},[s(e.$slots,"default")],8,p),i(o("span",{id:e.nextHandler},[s(e.$slots,"next")],8,h),[[l,e.showNext]])])},d.__file="src/Carousel.vue";export{d as default};
