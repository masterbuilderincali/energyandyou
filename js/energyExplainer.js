//dojo.require("dijit.form.TextBox");
dojo.require("dojo.parser");
dojo.require("dojo/parser", "dojo/query", "dojo/dom-style", "dojo/ready");

var frameID = 1;
var timer;
var timer2;
var isCleaning = 0;
var isPlayingVar = true;
var isIE8 = false;
var mobileStatus = 0;
var vo;
var vo2;
typeof vo;
typeof vo2;
var a;
typeof a;
var bgm;
var bgmie8;
var animation;
var timerf2, timerf3, timerf4, timerf5, timerf6,timerf7,timerf8,timerf9,timerf10,timerf11,timerf12,timerf13,timerf14,timerf15,timerf16,timerf17,timerf18,timerf18b;
var timerf19, timerf20, timerf21, timerf22, timerf23,timerf24,timerf25,timerf26,timerf27,timerf28,timerf29,timerf30,timerf31,timerf33,timerf34,timerf35, timerf35b, timerf36;
var timerf37, timerf38, timerf39, timerf40, timerf41, timerf43, timerf45, timerf46,timerf47,timerf48,timerf49,timerf50, timerf51,timerf52,timerf53,timerf54,timerf55,timerf56;
var timerf57,timerf58,timerf59,timerf60,timerf61,timerf62,timerf63,timerf64,timerf65,timerf66,timerf67,timerf68,timerf69,timerf70;

var timerName;
typeof timerName;
var soundStatus = 1;
var navPressie8, navPress, exlinkPress, exLinkPressie8, inLinkPress, inLinkPressie8, f10tv, f10tvie8, f11laundry, f11laundryie8, f12work, f12workie8, f27cool, f27coolie8;
var f39ps, f39psie8, f46alert, f46alertie8, sesplash, sesplashie8, f63t, f63tie8;
var semoney, semoneyie8, sewhoosh, sewhooshie8, sebubble, sebubbleie8, seclock, seclockie8, seelevateie8, seelevate, seupdown, seupdownie8;

var audio3ready=0, audio4ready=0, audio5Aready=0, audio5Bready=0, audio6ready=0, audio7ready=0, audio10ready=0, audio11ready=0, audio12ready=0, audio13ready=0, 
audio14Aready=0, audio14Bready=0, audio14Cready=0, audio17ready=0, audio18Aready=0, audio18Bready=0, audio19ready=0, audio20ready=0, audio21ready=0, audio24ready=0, 
audio25ready=0, audio26ready=0, audio27Aready=0, audio27Bready=0, audio29ready=0, audio30ready=0, audio31ready=0, audio32ready=0, audio33ready=0, audio35Aready=0, audio35Bready=0, audio36ready=0, audio37ready=0,
audio38ready=0, audio39ready=0, audio41ready=0, audio43ready=0, audio46ready=0, audio47ready=0, audio48ready=0, audio49ready=0, audio50ready=0, audio51ready=0, audio52ready=0,
audio53ready=0, audio54ready=0, audio55ready=0, audio56ready=0, audio57ready=0, audio58ready=0, audio59ready=0, audio60ready=0, audio62ready=0, audio63ready=0, audio64ready=0,
audio65ready=0, audio66ready=0, audio67ready=0, audio68ready=0, audio69ready=0, audio70ready=0;
function activeMenu1(){
		dojo.addClass("menu1", "active1");
		dojo.removeClass("menu1", "deactive1");			  
		dojo.removeClass("menu2", "active2");
		dojo.addClass("menu2", "deactive2");			  
		dojo.removeClass("menu3", "active3");
		dojo.addClass("menu3", "deactive3");			  
		dojo.removeClass("menu4", "active4");
		dojo.addClass("menu4", "deactive4");
}
function activeMenu2(){
		dojo.removeClass("menu1", "active1");
		dojo.addClass("menu1", "deactive1");		  
		dojo.addClass("menu2", "active2");
		dojo.removeClass("menu2", "deactive2"); 
		dojo.removeClass("menu3", "active3");
		dojo.addClass("menu3", "deactive3");
		dojo.removeClass("menu4", "active4");
		dojo.addClass("menu4", "deactive4");
}
function activeMenu3(){
	  dojo.removeClass("menu1", "active1");
	  dojo.addClass("menu1", "deactive1");			  
	  dojo.removeClass("menu2", "active2");
	  dojo.addClass("menu2", "deactive2");			  
	  dojo.addClass("menu3", "active3");
	  dojo.removeClass("menu3", "deactive3");			  
	  dojo.removeClass("menu4", "active4");
	  dojo.addClass("menu4", "deactive4");
}
function activeMenu4(){
	  dojo.removeClass("menu1", "active1");
	  dojo.addClass("menu1", "deactive1");			  
	  dojo.removeClass("menu2", "active2");
	  dojo.addClass("menu2", "deactive2");			  
	  dojo.removeClass("menu3", "active3");
	  dojo.addClass("menu3", "deactive3");			  
	  dojo.addClass("menu4", "active4");
	  dojo.removeClass("menu4", "deactive4"); 
}
function clickHandle(seVar){
			animation.pause();
			cleanEverything();
			cleanEveryTimer();		
			isPlayingVar = true;
			dojo.addClass("playpause", "pause");
			dojo.removeClass("playpause", "play");
			if( isIE8  === true){
				bgmie8.play();
				if(seVar === "external"){exLinkPressie8.play();}
				else if(seVar === "navigation"){navPressie8.play();}
				else if( seVar === "internal"){inLinkPressie8.play();}
				if(typeof a != "undefined" && !a.paused){
						a.stop();
				}
			}
			else{
				bgm.play();
				if(seVar === "external"){exlinkPress.play();}
				else if(seVar === "navigation"){navPress.play();}
				else if( seVar === "internal"){inLinkPress.play();}
				if(typeof vo != "undefined" && !vo.paused){
					  vo.pause();
				}
			}  
}
function soundPausePlay(){
		if( isIE8  === true){
			if(typeof a != "undefined"){
					if(soundStatus == 0){
						a.play(); 
						bgmie8.play();	
						soundStatus = 1;					
					}
					else if(soundStatus == 1){
						  a.pause();
						  bgmie8.pause();
						  soundStatus = 0;
					}
			}
	  }
	  else{	
				if(typeof vo != "undefined"){
					if(soundStatus == 0){
						vo.play();
						bgm.play();
						soundStatus = 1;
					}
					else{
						vo.pause();
						bgm.pause();
						soundStatus = 0;
					}
				}
	  }  	
}
function PausePlay(){
				dojo.toggleClass("playpause", "play");
				dojo.toggleClass("playpause", "pause");
				if( isIE8  === true){exLinkPressie8.play();}
				else{exlinkPress.play();}
				if( isPlayingVar === true){				
					animation.pause();
					isPlayingVar = false;
					cleanEveryTimer();
					soundPausePlay();
					if(typeof timerName != "undefined"){
								switch(timerName){	
									case "timerf2": clearTimeout(timerf2);
									case "timerf3": clearTimeout(timerf3);
									case "timerf4": clearTimeout(timerf4);
									case "timerf5": clearTimeout(timerf5);
									case "timerf6": clearTimeout(timerf6);
									case "timerf7": clearTimeout(timerf7);
									case "timerf8": clearTimeout(timerf8);
									case "timerf9": clearTimeout(timerf9);
									case "timerf10": clearTimeout(timerf10);
									case "timerf11": clearTimeout(timerf11);
									case "timerf12": clearTimeout(timerf12);
									case "timerf13": clearTimeout(timerf13);
									case "timerf14": clearTimeout(timerf14);
									case "timerf15": clearTimeout(timerf15);
									case "timerf16": clearTimeout(timerf16);
									case "timerf17": clearTimeout(timerf17);
									case "timerf18": clearTimeout(timerf18);
									case "timerf18b": clearTimeout(timerf18b);
									case "timerf19": clearTimeout(timerf19);
									case "timerf20": clearTimeout(timerf20);
									case "timerf21": clearTimeout(timerf21);
									case "timerf22": clearTimeout(timerf22);
									case "timerf23": clearTimeout(timerf23);																											
									case "timerf24": clearTimeout(timerf24);
									case "timerf25": clearTimeout(timerf25);
									case "timerf26": clearTimeout(timerf26);
									case "timerf27": clearTimeout(timerf27);
									case "timerf28": clearTimeout(timerf28);
									case "timerf29": clearTimeout(timerf29);
									case "timerf30": clearTimeout(timerf30);
									case "timerf31": clearTimeout(timerf31);
									case "timerf33": clearTimeout(timerf33);
									case "timerf34": clearTimeout(timerf34);
									case "timerf35": clearTimeout(timerf35);
									case "timerf35b": clearTimeout(timerf35b);									
									case "timerf36": clearTimeout(timerf36);
									case "timerf37": clearTimeout(timerf37);
									case "timerf38": clearTimeout(timerf38);
									case "timerf39": clearTimeout(timerf39);
									case "timerf40": clearTimeout(timerf40);	
									case "timerf41": clearTimeout(timerf41);
									case "timerf43": clearTimeout(timerf43);																											
									case "timerf45": clearTimeout(timerf45);
									case "timerf46": clearTimeout(timerf46);
									case "timerf47": clearTimeout(timerf47);
									case "timerf48": clearTimeout(timerf48);
									case "timerf49": clearTimeout(timerf49);
									case "timerf50": clearTimeout(timerf50);
									case "timerf51": clearTimeout(timerf51);
									case "timerf52": clearTimeout(timerf52);
									case "timerf53": clearTimeout(timerf53);
									case "timerf54": clearTimeout(timerf54);
									case "timerf55": clearTimeout(timerf55);
									case "timerf56": clearTimeout(timerf56);
									case "timerf57": clearTimeout(timerf57);
									case "timerf58": clearTimeout(timerf58);
									case "timerf59": clearTimeout(timerf59);
									case "timerf60": clearTimeout(timerf60);
									case "timerf61": clearTimeout(timerf61);
									case "timerf62": clearTimeout(timerf62);
									case "timerf63": clearTimeout(timerf63);
									case "timerf64": clearTimeout(timerf64);
									case "timerf65": clearTimeout(timerf65);
									case "timerf66": clearTimeout(timerf66);
									case "timerf67": clearTimeout(timerf67);
									case "timerf68": clearTimeout(timerf68);
									case "timerf69": clearTimeout(timerf69);
									case "timerf70": clearTimeout(timerf70);																										
									break;
								}
					}
				}
				else{
					animation.play();
					isPlayingVar = true;
					soundPausePlay();
				}
}
function ie8AudioPlay(audio){
			audio.play=function(){this.controls.play();}
			audio.pause=function(){this.controls.pause();}	
			audio.stop=function(){this.controls.stop();}
			audio.play();	
			isPlayingVar = true;
}

function preBuffer(){
	if( isIE8  === true){	
		setTimeout(function(){preloader1()},5000);
	}else{
		setTimeout(function(){preloader1()},5000);
	}
	// detect iPhone/iPad
	if( mobileStatus == 1){
		setTimeout(function(){preloader1()},5000);	
	}
}

function preloader1(){
	dojo.style("preloader1", "display", "none");
	dojo.style("preloader2", "display", "block");
	if( isIE8  === true){		
		setTimeout(function(){preloader2()},10000);
	}else{
		setTimeout(function(){preloader2()},5000);
	}
	// detect iPhone/iPad
	if( mobileStatus == 1){
		setTimeout(function(){preloader2()},10000);	
	}
}

function preloader2(){
	dojo.style("preloader2", "display", "none");
	dojo.style("preloader3", "display", "block");
	if( isIE8  === true){	
		setTimeout(function(){preloader3()},10000);
	}else{
		setTimeout(function(){preloader3()},5000);
	}
	// detect iPhone/iPad
	if( mobileStatus == 1){
		setTimeout(function(){preloader3()},10000);	
	}
}

function preloader3(){
	if( isIE8  === true){	
		setTimeout(function(){hidePreload()},10000);
	}else{
		setTimeout(function(){hidePreload()},5000);
	}
	// detect iPhone/iPad
	if( mobileStatus == 1){
		setTimeout(function(){hidePreload()},10000);	
	}
}

function hidePreload(){
	dojo.style("loadingSpinner", "display", "none");
	dojo.style("preloader1", "display", "none");
	dojo.style("preloader2", "display", "none");
	dojo.style("preloader3", "display", "none");
	if( isIE8  === true){
			bgmie8=document.getElementById('bgmusic_ie8');
			bgmie8.play=function(){this.controls.play();}
			bgmie8.pause=function(){this.controls.pause();}
			bgmie8.stop=function(){this.controls.stop();}	
			bgmie8.play();
		//	console.log("play background music");
			// load MAIN NAV Press sound
			navPressie8 =document.getElementById('mainNavPress_ie8');
			navPressie8.play=function(){this.controls.play();}
			navPressie8.pause=function(){this.controls.pause();}
			navPressie8.stop=function(){this.controls.stop();}				
		//	console.log("nav sound loaded");
			// load EXTERNAL LINK press sound
			exLinkPressie8 =document.getElementById('linkPress_ie8');
			exLinkPressie8.play=function(){this.controls.play();}
			exLinkPressie8.pause=function(){this.controls.pause();}
			exLinkPressie8.stop=function(){this.controls.stop();}				
		//	console.log("external link sound loaded");
			// load INTERNAL LINK press sound
			inLinkPressie8 =document.getElementById('iconPress_ie8');
			inLinkPressie8.play=function(){this.controls.play();}
			inLinkPressie8.pause=function(){this.controls.pause();}
			inLinkPressie8.stop=function(){this.controls.stop();}				
		//	console.log("icon press sound loaded");			
			// load ICON POPUP sound
			iconPopie8 =document.getElementById('iconPopup_ie8');
			iconPopie8.play=function(){this.controls.play();}
			iconPopie8.pause=function(){this.controls.pause();}
			iconPopie8.stop=function(){this.controls.stop();}				
		//	console.log("icon press sound loaded");	
			// load TV CHEERING sound
			f10tvie8 =document.getElementById('f10TVCheering_ie8');
			f10tvie8.play=function(){this.controls.play();}
			f10tvie8.pause=function(){this.controls.pause();}
			f10tvie8.stop=function(){this.controls.stop();}				
		//	console.log("tv cheering sound loaded");	
			// load LAUNDRY sound
			f11laundryie8 =document.getElementById('f11Laundry_ie8');
			f11laundryie8.play=function(){this.controls.play();}
			f11laundryie8.pause=function(){this.controls.pause();}
			f11laundryie8.stop=function(){this.controls.stop();}				
		//	console.log("laundry sound loaded");		
			// load WORK TYPING sound
			f12workie8 =document.getElementById('f12Working_ie8');
			f12workie8.play=function(){this.controls.play();}
			f12workie8.pause=function(){this.controls.pause();}
			f12workie8.stop=function(){this.controls.stop();}				
		//	console.log("work typing sound loaded");	
			// load COSTAL COOL sound
			f27coolie8 =document.getElementById('f27CostalCool_ie8');
			f27coolie8.play=function(){this.controls.play();}
			f27coolie8.pause=function(){this.controls.pause();}
			f27coolie8.stop=function(){this.controls.stop();}				
		//	console.log("Costal cool sound loaded");
			// load  sound
			f39psie8 =document.getElementById('f39Power_ie8');
			f39psie8.play=function(){this.controls.play();}
			f39psie8.pause=function(){this.controls.pause();}
			f39psie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			f46alertie8 =document.getElementById('f46PhoneAlert_ie8');
			f46alertie8.play=function(){this.controls.play();}
			f46alertie8.pause=function(){this.controls.pause();}
			f46alertie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			sesplashie8 =document.getElementById('f52WaterSplash_ie8');
			sesplashie8.play=function(){this.controls.play();}
			sesplashie8.pause=function(){this.controls.pause();}
			sesplashie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			f63tie8 =document.getElementById('f63Truck_ie8');
			f63tie8.play=function(){this.controls.play();}
			f63tie8.pause=function(){this.controls.pause();}
			f63tie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			semoneyie8 =document.getElementById('soundEffectMoney_ie8');
			semoneyie8.play=function(){this.controls.play();}
			semoneyie8.pause=function(){this.controls.pause();}
			semoneyie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			sewhooshie8 =document.getElementById('soundEffectWhoosh_ie8');
			sewhooshie8.play=function(){this.controls.play();}
			sewhooshie8.pause=function(){this.controls.pause();}
			sewhooshie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			sebubbleie8 =document.getElementById('soundEffectBubble_ie8');
			sebubbleie8.play=function(){this.controls.play();}
			sebubbleie8.pause=function(){this.controls.pause();}
			sebubbleie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			seclockie8 =document.getElementById('soundEffectClock_ie8');
			seclockie8.play=function(){this.controls.play();}
			seclockie8.pause=function(){this.controls.pause();}
			seclockie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			seelevateie8 =document.getElementById('soundEffectElevate_ie8');
			seelevateie8.play=function(){this.controls.play();}
			seelevateie8.pause=function(){this.controls.pause();}
			seelevateie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
			// load  sound
			seupdownie8 =document.getElementById('soundEffectUpDown_ie8');
			seupdownie8.play=function(){this.controls.play();}
			seupdownie8.pause=function(){this.controls.pause();}
			seupdownie8.stop=function(){this.controls.stop();}				
		//	console.log("sound loaded");
	}
	else{
			bgm  = document.getElementById('bgmusic');
			bgm.autoplay = true;
			//bgm.currentTime = 0;
			bgm.volume = 0.2;
			bgm.play();
			console.log("play background music");
			// load MAIN NAV Press sound
			navPress=document.getElementById('mainNavPress');
			navPress.autoplay = false;
			//navPress.currentTime = 0;
			navPress.volume = 0.5;
		    console.log("nav sound loaded");
			// load EXTERNAL LINK press sound
			exlinkPress=document.getElementById('linkPress');
			exlinkPress.autoplay = false;
			//exlinkPress.currentTime = 0;
			exlinkPress.volume = 0.5;
			console.log("external link sound loaded");
			// load INTERNAL LINK press sound
			inLinkPress=document.getElementById('iconPress');
			inLinkPress.autoplay = false;
			//inLinkPress.currentTime = 0;
			inLinkPress.volume = 0.5;		
			console.log("icon press sound loaded");	
			// load ICON POPUP sound
			iconPop=document.getElementById('iconPopup');
			iconPop.autoplay = false;
			//iconPop.currentTime = 0;
			iconPop.volume = 0.5;		
			console.log("icon popup sound loaded");
			// load TV CHEERING sound
			f10tv=document.getElementById('f10TVCheering');
			f10tv.autoplay = false;
			//f10tv.currentTime = 0;
			f10tv.volume = 1;		
			console.log("TV cheering sound loaded");	
			// load LAUNDRY sound
			f11laundry=document.getElementById('f11Laundry');
			f11laundry.autoplay = false;
			//f11laundry.currentTime = 0;
			f11laundry.volume = 1;		
			console.log("Laundry sound loaded");
			// load WORK TYPING sound
			f12work=document.getElementById('f12Working');
			f12work.autoplay = false;
			//f12work.currentTime = 0;
			f12work.volume = 1;		
			console.log("Work typing sound loaded");	
			// load COSTAL COOL sound
			f27cool=document.getElementById('f27CostalCool');
			f27cool.autoplay = false;
			//f27cool.currentTime = 0;
			f27cool.volume = 1;		
			console.log("Costal cool sound loaded");	
			// load  sound
			f39ps=document.getElementById('f39Power');
			f39ps.autoplay = false;
			//f39ps.currentTime = 0;
			f39ps.volume = 1;		
			console.log("sound loaded");
			// load  sound
			f46alert=document.getElementById('f46PhoneAlert');
			f46alert.autoplay = false;
			//f46alert.currentTime = 0;
			f46alert.volume = 1;		
			console.log("sound loaded");	
			// load  sound
			sesplash=document.getElementById('f52WaterSplash');
			sesplash.autoplay = false;
			//sesplash.currentTime = 0;
			sesplash.volume = 1;		
			console.log("sound loaded");
			// load  sound
			f63t=document.getElementById('f63Truck');
			f63t.autoplay = false;
			//f63t.currentTime = 0;
			f63t.volume = 1;		
			console.log("sound loaded");	
			// load  sound
			semoney=document.getElementById('soundEffectMoney');
			semoney.autoplay = false;
			//semoney.currentTime = 0;
			semoney.volume = 1;		
			console.log("sound loaded");	
			// load  sound
			sewhoosh=document.getElementById('soundEffectWhoosh');
			sewhoosh.autoplay = false;
			//sewhoosh.currentTime = 0;
			sewhoosh.volume = 1;		
			console.log("sound loaded");
			// load  sound
			sebubble=document.getElementById('soundEffectBubble');
			sebubble.autoplay = false;
			//sebubble.currentTime = 0;
			sebubble.volume = 1;		
			console.log("sound loaded");	
			// load  sound
			seclock=document.getElementById('soundEffectClock');
			seclock.autoplay = false;
			//seclock.currentTime = 0;
			seclock.volume = 1;		
			console.log("sound loaded");	
			// load  sound
			seelevate=document.getElementById('soundEffectElevate');
			seelevate.autoplay = false;
			//seelevate.currentTime = 0;
			seelevate.volume = 1;		
			console.log("sound loaded");
			// load  sound
			seupdown=document.getElementById('soundEffectUpDown');
			seupdown.autoplay = false;
			//seupdown.currentTime = 0;
			seupdown.volume = 1;		
			console.log("sound loaded");
	}
	initover();
}

require(["dojo/ready"], function(ready){
	
	ready(function(){
			navigator.sayswho= (function(){
					var ua= navigator.userAgent, tem, 
					M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
					if(/trident/i.test(M[1])){
						tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
						return 'IE '+(tem[1] || '');
					}
					M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
					if((tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
						return M.join(' ');
					})();
			if (navigator.sayswho == "MSIE 8.0" ){
				isIE8 = true;
			}
			
			if((navigator.userAgent.match(/iPhone/i)) || 
					(navigator.userAgent.match(/iPod/i))|| (navigator.userAgent.match(/iPad/i)) ) {
						mobileStatus=1;
			}		
	hideMainMenu(); 	
	dojo.addClass("cc-btn", "whiteCC");
	dojo.addClass("cc-content", "contentClose");
	dojo.addClass("playpause", "pause");
	//////////////////////// backwards /////////////////////////////////
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("gobackward"), "click", function(evt){	
			clickHandle("external");
			////////// Home session ///////////
			if(frameID == "1"){initover();}
			if(frameID == "2"){initover();}
			if(frameID == "3"){initover();}
			////////// beginning of Energy Basics
			if(frameID == "4"){frame3Animation()}
			// beginning of KWH session, go back to the beginning of the list - frame 4;
			if(frameID == "5"){frame4Animation();}
			// inside session KWH, go back to frame 5
			if( frameID == "6" || frameID == "7" || frameID == "8" || frameID == "9" || frameID == "10" 
				|| frameID == "11" || frameID == "12" || frameID == "13" || frameID == "14" || frameID == "15" || frameID == "16"){
					frame5Animation();
			}
			if(frameID == "17"){frame17Animation()}
			
			// beginning of CHARGES session, go back to previous session KWH
			if(frameID == "18" ){frame5Animation();}
			// inside session CHARGES, go back to frame18;
			if( frameID == "19" || frameID == "20"){frame18Animation();}
			
			// beginning of TIER session, go back to previous session CHARGES
			if(frameID == "21" ){frame18Animation();}
			// inside session TIER, go back to frame21;
			if( frameID == "22" || frameID == "23" || frameID == "24" || frameID == "25" || frameID == "26" || frameID == "27" || frameID == "28"
				|| frameID == "29" || frameID == "30" || frameID == "31" || frameID == "32" || frameID == "33" || frameID == "34" || frameID == "35"){
					frame21Animation();
			}
	  
	  		// beginning of WAYS TO SAVE session, go back to previous session ENERGY BASICS
			if(frameID == "36" || frameID == "37" ){frame4Animation();}
			
			// beginning of AC session, go back to starting of WAYS TO SAVE
			if(frameID == "38" ){frame36Animation();}
			// inside session AC, go back to frame38;
			if( frameID == "39" || frameID == "40" || frameID == "41" || frameID == "42" || frameID == "43" || frameID == "44" || frameID == "45"
				|| frameID == "46" || frameID == "47" || frameID == "48" || frameID == "49" || frameID == "50"){
					frame38Animation();
			}
			// frame51 to choose from POOLS or REFRIGERATORS, go back to starting of WAYS TO SAVE
			if(frameID == "51" ){frame36Animation();}
			// beginning of POOLS session, go back to AC session
			if(frameID == "52" ){frame38Animation();}
			// inside POOLS session, go back to frame52;
			if( frameID == "53" || frameID == "54" || frameID == "55" || frameID == "56" || frameID == "57" || frameID == "58" || frameID == "59"){
					frame52Animation();
			}
			// beginning of REFRIGERATORS session, go back to POOLS session
			if(frameID == "60" ){frame52Animation();}
			// inside REFRIGERATOR session, go back to frame60;
			if( frameID == "61" || frameID == "62" || frameID == "63" || frameID == "64"){
					frame60Animation();
			}
			// beginning of RESOURCES session, go back to WAYS TO SAVE session
			if(frameID == "65" ){frame36Animation();}
			// inside RESOURCES session, go back to frame65
			if( frameID == "66" || frameID == "67" || frameID == "68" || frameID == "69" || frameID == "70"){
					frame65Animation();
			}									
	  });});
	  
	  /////////////////////// forward ////////////////////////////////////
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("goforward"), "click", function(evt){	
			clickHandle("external");
			// HOME session, go forward to ENERGY BASICS session
			if(frameID == "1" || frameID == "2" || frameID == "3"){frame4Animation();}
			////////// beginning of Energy Basics, jump to KWH session
			else if(frameID == "4"){frame5Animation();}
			else if( frameID == "5" || frameID == "6" || frameID == "7" || frameID == "8" || frameID == "9" || frameID == "10" 
				|| frameID == "11" || frameID == "12" || frameID == "13" || frameID == "14" || frameID == "15" || frameID == "16" || frameID == "17"){
					frame18Animation();
			}
			// in CHARGES session, jump to TIER
			else if( frameID == "18" || frameID == "19" || frameID == "20"){frame21Animation();}
			
			// in TIER session, jump to WAYS TO SAVE
			else if( frameID == "21" || frameID == "22" || frameID == "23" || frameID == "24" || frameID == "25" || frameID == "26" || frameID == "27" || frameID == "28"
				|| frameID == "29" || frameID == "30" || frameID == "31" || frameID == "32" || frameID == "33" || frameID == "34" || frameID == "35"){
					frame36Animation();
			}
	  		// beginning of WAYS TO SAVE session, jump to AC session
			else if(frameID == "36" || frameID == "37" ){frame38Animation();}	
			// in AC session, jump to POOLS
			else if( frameID == "38" || frameID == "39" || frameID == "40" || frameID == "41" || frameID == "42" || frameID == "43" || frameID == "44" || frameID == "45"
				|| frameID == "46" || frameID == "47" || frameID == "48" || frameID == "49" || frameID == "50" || frameID == "51"){
					frame52Animation();
			}
			// in POOLS session, jump to REFRIGERATORS session
			else if( frameID == "52" || frameID == "53" || frameID == "54" || frameID == "55" || frameID == "56" || frameID == "57" || frameID == "58" || frameID == "59"){
					frame60Animation();
			}
			// in REFRIGERATORS session, jump to RESOURCES session
			else if( frameID == "60" || frameID == "61" || frameID == "62" || frameID == "63" || frameID == "64"){
					frame65Animation();
			}
			// in RESOURCES session, jump to the end of RESOURCES session
			else if( frameID == "65" || frameID == "66" || frameID == "67" || frameID == "68" || frameID == "69" || frameID == "70"){
					frame65Animation();
			}			
	  });});
	
	//////////////////////// play/pause /////////////////////////////////
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("playpause"), "click", function(){	
				PausePlay();
	});});	

	//////////////////////// close caption //////////////////////////////
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("cc-btn"), "click", function(){		
			  dojo.toggleClass("cc-btn", "greenCC");
			  dojo.toggleClass("cc-btn", "whiteCC");
			  dojo.toggleClass("cc-content", "contentOpen");
			  dojo.toggleClass("cc-content", "contentClose");
	});});
	document.getElementById('cc-btn').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						dojo.toggleClass("cc-btn", "greenCC");
			  			dojo.toggleClass("cc-btn", "whiteCC");
			  			dojo.toggleClass("cc-content", "contentOpen");
			  			dojo.toggleClass("cc-content", "contentClose");
					}
				break;			
			}
	};
	
	////////////// click 4 menu buttons /////////////////
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
	  on(dom.byId("menu1"), "click", function(evt){
		  	soundStatus = 1; 
		  	clickHandle("navigation");
			activeMenu1();
			timerName = "timerf2";
			frame2Animation();  				  
	});});	
	document.getElementById('menu1').onkeydown = function(evt) {
			evt = evt || window.event;	
			switch(evt.keyCode){
			  case 13:
					{
						soundStatus = 1; 
						clickHandle("navigation");
						activeMenu1();
						timerName = "timerf2";
						frame2Animation();
					}
				break;}
		  };
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
	  on(dom.byId("menu2"), "click", function(evt){
		  	soundStatus = 1;	
			clickHandle("navigation");	  
			activeMenu2();
			timerName = "timerf4";  
			frame4Animation();	   
	});});
	document.getElementById('menu2').onkeydown = function(evt) {
			evt = evt || window.event;
			switch(evt.keyCode){
			  case 13:
					{
						 	soundStatus = 1;	
							clickHandle("navigation");	  
							activeMenu2();
							timerName = "timerf4";  
							frame4Animation(); 
					}
				break;}
		  };	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
	  on(dom.byId("menu3"), "click", function(evt){
		  	soundStatus = 1;
			clickHandle("navigation");	  
			activeMenu3();
			timerName = "timerf36";
			frame36Animation(); 	
	});});
	document.getElementById('menu3').onkeydown = function(evt) {
			evt = evt || window.event;
			switch(evt.keyCode){
			  case 13:
					{
							soundStatus = 1;
							clickHandle("navigation");	  
							activeMenu3();
							timerName = "timerf36";
							frame36Animation(); 
					}
				break;}
	};
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
			 on(dom.byId("menu4"), "click", function(evt){
				 	soundStatus = 1;
					clickHandle("navigation");	  
					activeMenu4();
					timerName = "timerf65";
					frame65Animation(); 	  
	});});			
	document.getElementById('menu4').onkeydown = function(evt) {
			evt = evt || window.event;
			switch(evt.keyCode){
			  case 13:
					{
						  	soundStatus = 1;
							clickHandle("navigation");	  
							activeMenu4();
							timerName = "timerf65";
							frame65Animation();  
					}
				break;
			}
	};
	// load
	cleanEverything();
	cleanEveryTimer();
	document.getElementById("frameNum").innerHTML=0;				
	preBuffer();
});
});

function initover()
{
	dojo.style("playpause", "display", "block");
	dojo.style("gobackward", "display", "block");
	dojo.style("goforward", "display", "block");
	timerName = "";
	frameID = 1;
	showFrame1();
	showFrameID(frameID);
	dojo.addClass("frame1","bluebg");
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({ node:"f1-grass", properties: {top: { start: 550, end: 337}, opacity: { start: 0, end: 1 }}, duration: 1000, onEnd: function(){
			animation = fx.animateProperty({node: "f1-cloud", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				animation = fx.animateProperty({node: "f1-sun", properties: {top: { start: 108, end: 0}, opacity: { start: 0, end: 1 }},duration: 500,}); animation.play();
				animation = fx.animateProperty({node: "f1-logo", properties: {opacity: { start: 0, end: 1 }},duration: 500, }); animation.play();
				animation = fx.animateProperty({node: "f1-sun", properties: {opacity: { start: 1, end: 0.15 }},duration:500, onEnd: function(){
						if( isIE8  === true){
							//	document.getElementById("f1-sun").style.opacity = .15;
								dojo.style("f1-sun", "opacity", "0.15");
						}
						timerName = "timerf2";
					   	timerf2 = setTimeout(function(){frame2Animation()},1500);
					   	require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
										focusUtil.focus(dom.byId("cc-btn"));
						});							
			}});animation.play();							
			}});animation.play();	
			}});animation.play();


	console.log("initialize successfully");	   
	});
}

function frame2Animation(){
	frameID = 2;
	hideFrame1();
	showFrame2();
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");	
	activeMenu1();		
	require(["dojo/_base/fx"], function(fx){
		animation = fx.animateProperty({node: "f1-sun", properties: {opacity:{start: 0.15, end: 1}}, duration: 500, });animation.play();
		animation = fx.animateProperty({node: "f1-grass", properties: {opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f2-maintitle", properties: {left:{start: -535, end: 200}, opacity: { start: 0, end: 1 }},duration: 800, onEnd: function(){
				animation = fx.animateProperty({node: "f2-subtitle", properties: {opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
				//	animation = fx.animateProperty({node: "f2-bottomtitle", properties: {top: { start: 370, end: 378 }, opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
							  focusUtil.focus(dom.byId("menu1"));
							});	
						timerName = "timerf3";
						timerf3 = setTimeout(function(){frame3Animation()},4000);
				//	}});animation.play();	
				}});animation.play();	
			}});animation.play();	
		}});animation.play();	
	
	});
	showMainMenu();	
}

function getScriptTime(voiceover){

	stime = voiceover.duration * 1000;
	return stime;
}


function frame3Animation(){
	frameID = 3;
	getScriptforFrameID(frameID); // get closed caption script
	showFrameID(frameID);
	showMainMenu();	
	hideFrame2();
	showFrame3();	
	if( isIE8  === true){
			// 9 sec + 5s
			a=document.getElementById('f3audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f3Audio');
			vo.autoplay = true;
			if( audio3ready == 0){ audio3ready = 1;}
			else{
				vo.currentTime = 0; audio3ready = 1;
			}
			vo.play();
			playSec = getScriptTime(vo) + 5000; // give extra time to select
	}
	
	require(["dojo/_base/fx"], function(fx){
		animation = fx.animateProperty({node: "f1-sun", properties: {top:{start: 0, end: -393}},duration: 300, });animation.play();
		animation = fx.animateProperty({node: "f2-maintitle", properties: {opacity: { start: 1, end: 0 }},duration: 300, });animation.play();
		animation = fx.animateProperty({node: "f2-subtitle", properties: {opacity: { start: 1, end: 0 }},duration: 300, });animation.play();
		animation = fx.animateProperty({node: "f2-bottomtitle", properties: {opacity: { start: 1, end: 0 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f3-maintitle", properties: {top:{start: 236, end: 205}, opacity: { start: 0, end: 1}},duration: 300, onEnd: function(){ 
				animation = fx.animateProperty({node: "f3-link", properties: {left:{start: 119, end: 246}, opacity: { start: 0, end: 1}},duration: 500, onEnd: function(){ 
					animation = fx.animateProperty({node: "f3-question", properties: {left:{start: 400, end: 418}, opacity: { start: 0, end: 1}},duration:400, onEnd: function(){ 
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
								  focusUtil.focus(dom.byId("f3link1"));
						});
						timerName = "timerf4";
						if( isIE8  === true){
							// wait 14s to play the next frame to give user time to select
							// wait until animation finishes playing, and then go to next frame
							timerf4 = setTimeout(function(){frame4Animation()},14000);
						}
						else{
							timerf4 = setTimeout(function(){frame4Animation()},playSec);
						}  
					}});animation.play();
				}});animation.play();
			}});animation.play();
		}});animation.play();

	});

	// Energy Basics click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f3link1"), "click", function(){
			clickHandle("internal");
			timerName = "timerf4";
			frame4Animation();
		});
	});
	document.getElementById('f3link1').onkeydown = function(evt) {
		evt = evt || window.event;			
		switch(evt.keyCode){
		  case 13:
				{
					clickHandle("internal");
					timerName = "timerf4";
					frame4Animation();
				}
			break;			
		}
	  };
	// Ways to Save click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f3link2"), "click", function(){
			  clickHandle("internal");
			  timerName = "timerf36";
			  frame36Animation();
		});
	});	
	document.getElementById('f3link2').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						clickHandle("internal");
			  			timerName = "timerf36";
			  			frame36Animation();
					}
				break;			
			}
	 };	
	// Ways to Save click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f3link3"), "click", function(){
			  clickHandle("internal");
			  timerName = "timerf65";
			  frame65Animation();
		});
	});	
	document.getElementById('f3link3').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						  clickHandle("internal");
						  timerName = "timerf65";
						  frame65Animation();
					}
				break;			
			}
	};		
}

function frame4Animation(){
	frameID = 4;	
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");	
	activeMenu2();
	showMainMenu();	
	hideFrame3();
	showFrame4();
	getScriptforFrameID(frameID); // get closed caption script		
	if( isIE8  === true){
			// 12 sec
			a=document.getElementById('f4audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f4Audio');
			vo.autoplay = true;
			if(audio4ready == 0){ audio4ready = 1;}
			else{
				vo.currentTime = 0;	
				audio4ready = 1;
			}		
			vo.play();
			playSec = getScriptTime(vo) + 5000; // give extra time to select
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f4-bill", properties: {top:{start: 0, end: 7}, opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
					if( isIE8  === true){iconPopie8.play();}
					else{iconPop.play();}	
				animation = fx.animateProperty({node: "f4-qcharge", properties: {left:{start: 130, end: 98}, opacity: { start: 0, end: 1 }},duration: 300,onEnd: function(){ 
					
						if( isIE8  === true){iconPopie8.play();}
						else{iconPop.play();} 
					animation = fx.animateProperty({node: "f4-qtier", properties: {left:{start: 220, end: 176}, opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
				
							if( isIE8  === true){iconPopie8.play();}
							else{iconPop.play();}
						animation = fx.animateProperty({node: "f4-qkwh", properties: {left:{start: 500, end: 533}, opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
								if( isIE8  === true){iconPopie8.play();}
								else{iconPop.play();}
								animation = fx.animateProperty({node: "f4-qbasics", properties: {left:{start: 600, end: 639}, opacity: { start: 0, end: 1}},duration: 300, onEnd: function(){ 																			
										if( isIE8  === true){iconPopie8.play();}
										else{iconPop.play();} 
										require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
										  		focusUtil.focus(dom.byId("f4-qcharge"));
										});
										timerName = "timerf5"
										if (isIE8  === true){
											timerf5 = setTimeout(function(){frame5Animation()},17000);
										}
										else{
											timerf5 = setTimeout(function(){frame5Animation()},playSec);
										}
								}});animation.play();
						}});animation.play();
					}});animation.play();
				}});animation.play();
			}});animation.play();
	});

	// bubble Charges
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qcharge"), mouse.enter, function(evt){
			dojo.style("f4qcharge_sml", "display", "none");
			dojo.style("f4qcharge", "display", "block");				  
	});});
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qcharge"), mouse.leave, function(evt){				  
			dojo.style("f4qcharge_sml", "display", "block");
			dojo.style("f4qcharge", "display", "none");	
	});});
	// bubble Charges click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f4qcharge"), "click", function(){
			  clickHandle("internal");
			  frame18Animation();
		});
	});
	document.getElementById('f4-qcharge').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						  	clickHandle("internal");
			  				frame18Animation();
					}
				break;			
			}
		  };	
//	// bubble Tier
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qtier"), mouse.enter, function(evt){
			dojo.style("f4qtier_sml", "display", "none");
			dojo.style("f4qtier", "display", "block");							  
	});});
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qtier"), mouse.leave, function(evt){				  
			dojo.style("f4qtier_sml", "display", "block");
			dojo.style("f4qtier", "display", "none");
	});});
	// bubble Tier click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f4qtier"), "click", function(){
			clickHandle("internal");
			frame21Animation();
		});
	});	
	document.getElementById('f4-qtier').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						  clickHandle("internal");
						  frame21Animation();
					}
				break;			
			}
	};		
	// bubble kWh
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qkwh"), mouse.enter, function(evt){
			dojo.style("f4qkwh_sml", "display", "none");
			dojo.style("f4qkwh", "display", "block");			  
	});});
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qkwh"), mouse.leave, function(evt){				  
			dojo.style("f4qkwh_sml", "display", "block");
			dojo.style("f4qkwh", "display", "none");
	});});
	// bubble kWh click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f4qkwh"), "click", function(){
			  clickHandle("internal");
			  frame5Animation();
		});
	});	
	document.getElementById('f4-qkwh').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						  clickHandle("internal");
			  			  frame5Animation();
					}
				break;			
			}
		  };		
//	// bubble Basics
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qbasics"), mouse.enter, function(evt){
			dojo.style("f4qbasics_sml", "display", "none");
			dojo.style("f4qbasics", "display", "block");		  
	});});
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f4-qbasics"), mouse.leave, function(evt){				  
			dojo.style("f4qbasics_sml", "display", "block");
			dojo.style("f4qbasics", "display", "none");
	});});				
}
function frame5Animation(){
	frameID = 5;
	showMainMenu();
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	dojo.removeClass("frame1","bluebg");
	dojo.addClass("frame1","yellowbg");
	hideFrame4();
	showFrame5();
	if( isIE8  === true){
			// 4 sec
			a=document.getElementById('f5Aaudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f5AudioA');
			vo.autoplay = true;
			if(audio5Aready == 0){ audio5Aready = 1;}	
			else{		
				vo.currentTime = 0; audio5Aready = 1;
			}
			vo.play();
			playSec = getScriptTime(vo); // get voice length

	}
	require(["dojo/_base/fx"], function(fx){
		animation = fx.animateProperty({node: "f5-bg", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				animation = fx.animateProperty({node: "f5-bill", properties: {opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
							  focusUtil.focus(dom.byId("menu2"));
						});
						timerName = "timerf6";
						if(isIE8  === true){
							timerf6 = setTimeout(function(){frame5BAnimation()},5000);
						}
						else{
							timerf6 = setTimeout(function(){frame5BAnimation()},playSec);
						}
				}});animation.play();
		}});animation.play();
	});	
}
function frame5BAnimation(){
	if( isIE8  === true){
			// 5 sec
			a=document.getElementById('f5Baudio_ie8');
			ie8AudioPlay(a);	
	}
	else{	
			vo=document.getElementById('f5AudioB');
			vo.autoplay = true;
			if(audio5Bready == 0){ audio5Bready = 1;}	
			else{		
				vo.currentTime = 0; audio5Bready = 1;
			}	
			vo.play();
			playSec = getScriptTime(vo); // get voice length			
	}	
	require(["dojo/_base/fx"], function(fx) {
		if( isIE8  === true){sewhooshie8.play();}
		else{sewhoosh.play();}
		animation = fx.animateProperty({node: "f5-kwh", properties: {left:{start: 100, end: 379}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){
					timerName = "timerf7";
					if( isIE8  === true){
						timerf7 = setTimeout(function(){frame6Animation()},5000);
					}
					else{
						timerf7 = setTimeout(function(){frame6Animation()},playSec);
					}
		}});animation.play();								
	});
}

function frame6Animation(){
	frameID = 6;		
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	hideFrame5();
	showFrame6();		
	if( isIE8  === true){
			// 7 sec + 1
			a=document.getElementById('f6audio_ie8');
			ie8AudioPlay(a);		
	}
	else{	
			vo=document.getElementById('f6Audio');
			vo.autoplay = true;
			if(audio6ready == 0){ audio6ready = 1;}	
			else{		
				vo.currentTime = 0; audio6ready = 1;
			}	
			vo.play();
			playSec = getScriptTime(vo); // get voice length	
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f6-title", properties: {top:{start: 0, end: 103},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
					animation = fx.animateProperty({node: "f6-equal", properties: {top:{start: 189, end: 217}, opacity: { start: 0, end: 1 }},duration: 400,  onEnd: function(){ 
							animation = fx.animateProperty({node: "f6-hours", properties: {top:{start: 218, end: 268}, opacity: { start: 0, end: 1 }},duration: 400,  onEnd: function(){
									require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
										  focusUtil.focus(dom.byId("menu2"));
									});	
									timerName = "timerf8";
									if( isIE8  === true){
										timerf8 = setTimeout(function(){frame7Animation()},8000);
									}
									else{
										timerf8 = setTimeout(function(){frame7Animation()},playSec);
									}								
							}});animation.play();
					}});animation.play();
			}});animation.play();		
	});		
}

function frame7Animation(){
	frameID = 7;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	hideFrame6();
	showFrame7();
	showFrame8();	
	if( isIE8  === true){
			// 6 sec audio, 3 sec here
			a=document.getElementById('f7audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f7Audio');
			vo.autoplay = true;
			if(audio7ready == 0){ audio7ready = 1;}	
			else{		
				vo.currentTime = 0; audio7ready = 1;
			}		
			vo.play();	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f7-lightbulb", properties: {top:{start: 43, end: 53},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
					animation = fx.animateProperty({node: "f7-watts", properties: {top:{start: 269, end: 282}, opacity: { start: 0, end: 1 }},duration: 200,  onEnd: function(){ 
							animation = fx.animateProperty({node: "f8-clock", properties: {top:{start: 39, end: 49}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){ 
									animation = fx.animateProperty({node: "f8-x", properties: {left:{start: 450, end: 467}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){ 
												animation = fx.animateProperty({node: "f8-hours", properties: {left:{start: 490, end: 523},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
													require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
														  focusUtil.focus(dom.byId("menu2"));
													});	
													timerName ="timerf9";
													timerf9 = setTimeout(function(){frame9Animation()},3000); // go to frame 9 right away
												}});animation.play();		
									}});animation.play();
							}});animation.play();
					}});animation.play();
			}});animation.play();
	});
}

function frame9Animation(){
	frameID = 9;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script	
	hideFrame8();
	showFrame9();
	require(["dojo/_base/fx"], function(fx){
		animation = fx.animateProperty({node: "f9-lb1", properties: {opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f9-lb2", properties: {opacity: { start: 0, end: 1 }},duration: 100,  onEnd: function(){ 
				animation = fx.animateProperty({node: "f9-lb3", properties: {opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
					animation = fx.animateProperty({node: "f9-lb4", properties: {opacity: { start: 0, end: 1 }},duration: 100,  onEnd: function(){ 
						animation = fx.animateProperty({node: "f9-lb5", properties: {opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
							animation = fx.animateProperty({node: "f9-lb6", properties: {opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
								animation = fx.animateProperty({node: "f9-lb7", properties: {opacity: { start: 0, end: 1 }},duration: 100,  onEnd: function(){ 
									animation = fx.animateProperty({node: "f9-lb8", properties: {opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
										animation = fx.animateProperty({node: "f9-lb9", properties: {opacity: { start: 0, end: 1 }},duration: 100,  onEnd: function(){ 
											animation = fx.animateProperty({node: "f9-lb10", properties: {opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
												animation = fx.animateProperty({node: "f9-10", properties: {left:{start: 110, end: 137},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
													animation = fx.animateProperty({node: "f9-x", properties: {left:{start: 200, end: 222}, opacity: { start: 0, end: 1 }},duration: 200,  onEnd: function(){ 
														animation = fx.animateProperty({node: "f9-watts", properties: {left:{start: 240, end: 273},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
															animation = fx.animateProperty({node: "f9-x1", properties: {left:{start: 559, end: 579}, opacity: { start: 0, end: 1 }},duration: 200,  onEnd: function(){ 
																animation = fx.animateProperty({node: "f9-hour", properties: {left:{start: 650, end: 673},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
																			require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
																				  focusUtil.focus(dom.byId("menu2"));
																			});	
																			timerName ="timerf10";
																			timerf10 = setTimeout(function(){frame10Animation()},4000);
																}});animation.play();
															}});animation.play();			
														}});animation.play();			
													}});animation.play();
												}});animation.play();
											}});animation.play();
										}});animation.play();			
									}});animation.play();			
								}});animation.play();
							}});animation.play();
						}});animation.play();
					}});animation.play();			
				}});animation.play();			
			}});animation.play();
	}});animation.play();		
	});	
}

function frame10Animation(){
	frameID = 10;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script	
	hideFrame9();
	showFrame10();
	if( isIE8  === true){
			// 6 sec + 1
			a=document.getElementById('f10audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f10Audio');
			vo.autoplay = true;
			if(audio10ready == 0){ audio10ready = 1;}	
			else{		
				vo.currentTime = 0; audio10ready = 1;
			}
			vo.play();	
			playSec = getScriptTime(vo); // get voice length	
	}
	require(["dojo/_base/fx"], function(fx){	
			animation = fx.animateProperty({node: "f10-house", properties: {top:{start: 0, end: 8},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f10-land", properties: {top:{start: 359, end: 305}, opacity: { start: 0, end: 1 }},duration: 400,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f10-tree", properties: {top:{start: 299, end: 243},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f10-tv", properties: {opacity: { start: 0, end: 1 }},duration: 600,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f10-title", properties: {top:{start: 339, end: 351},opacity: { start: 0, end: 1 }},duration: 600, onEnd: function(){
			animation = fx.animateProperty({node: "f10-text", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
					if( isIE8  === true){f10tvie8.play();}
					else{f10tv.play();}
								require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
									  focusUtil.focus(dom.byId("menu2"));
								});	
								timerName = "timerf11";
								if( isIE8  === true){
									timerf11 = setTimeout(function(){frame11Animation()},7000);
								}
								else{
									timerf11 = setTimeout(function(){frame11Animation()},playSec);
								}
			}});animation.play();		
			}});animation.play();
			}});animation.play();			
			}});animation.play();			
			}});animation.play();
			}});animation.play();
	});
}

function frame11Animation(){
	frameID = 11;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script	
	dojo.removeClass("frame1","yellowbg");
	hideFrame10();
	showFrame11();
	if( isIE8  === true){
			// 2 sec + 1s
			a=document.getElementById('f11audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f11Audio');
			vo.autoplay = true;
			if(audio11ready == 0){ audio11ready = 1;}	
			else{		
				vo.currentTime = 0; audio11ready = 1;
			}	
			vo.play();
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f11-nightbg", properties: {opacity: { start: 0, end: .50 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f11-moon", properties: {top:{start: 0, end: -6}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f11-stars", properties: {opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
			animation = fx.animateProperty({node: "f11-washer", properties: {top:{start: 240, end: 235},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
			animation = fx.animateProperty({node: "f11-laundry", properties: {top:{start: 339 , end: 353}, opacity: { start: 0, end: 1 }},duration: 200,  onEnd: function(){ 
							if( isIE8  === true){f11laundryie8.play();}
							else{f11laundry.play();}
							require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
								  focusUtil.focus(dom.byId("menu2"));
							});	
							timerName = "timerf12";
							if( isIE8  === true){timerf12 = setTimeout(function(){frame12Animation()},4000);}
							else{timerf12 = setTimeout(function(){frame12Animation()},playSec);}
			}});animation.play();			
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();	
	});
}

function frame12Animation(){
	frameID = 12;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script	
	hideFrame11();
	showFrame12();
	if( isIE8  === true){
			// 3 sec + 1
			a=document.getElementById('f12audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f12Audio');
			vo.autoplay = true;
			if(audio12ready == 0){ audio12ready = 1;}	
			else{		
				vo.currentTime = 0; audio12ready = 1;
			}		
			vo.play();		
			playSec = getScriptTime(vo); // get voice length
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f11-nightbg", properties: {opacity: { start: 0.5, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f12-moon", properties: {top:{start: 0, end: -56}, left:{start:60, end: 25}},duration: 500,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f12-title", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f12-computer", properties: {top:{start: 79, end: 115},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
						if( isIE8  === true){f12workie8.play();}
						else{f12work.play();}
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
							  focusUtil.focus(dom.byId("menu2"));
						});	
						timerName = "timerf13";
						if( isIE8  === true){timerf13 = setTimeout(function(){frame13Animation()},4500);}
						else{timerf13 = setTimeout(function(){frame13Animation()},playSec);}
			}});animation.play();			
			}});animation.play();			
			}});animation.play();
			}});animation.play();
	});
}

function frame13Animation(){
	frameID = 13;	
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	hideFrame12();
	showFrame13();	
	getScriptforFrameID(frameID); // get closed caption script	
	if( isIE8  === true){
			// 5 sec
			a=document.getElementById('f13audio_ie8');
			ie8AudioPlay(a);			
	}
	else{	
			vo=document.getElementById('f13Audio');
			vo.autoplay = true;
			if(audio13ready == 0){ audio13ready = 1;}	
			else{		
				vo.currentTime = 0; audio13ready = 1;
			}	
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f13-bg", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				animation = fx.animateProperty({node: "f13-bar1", properties: {left:{start: 30, end: 61}, opacity: { start: 0, end: 1 }},duration: 300,  onEnd: function(){
					animation = fx.animateProperty({node: "f13-bar2", properties: {left:{start: 400, end: 444}, opacity: { start: 0, end: 1 }},duration: 400,  onEnd: function(){
						animation = fx.animateProperty({node: "f13-bar3", properties: {left:{start: 600, end: 638}, opacity: { start: 0, end: 1 }},duration: 400,  onEnd: function(){
								animation = fx.animateProperty({node: "f13-bar2", properties: {top:{start: 168, end: 221},},duration: 700, });animation.play();
									animation = fx.animateProperty({node: "f13-bar3", properties: {top:{start: 116, end: 221}},duration: 700, onEnd: function(){
									animation = fx.animateProperty({node: "f13-kwh", properties: {top:{start: 61, end: 101}, opacity: { start: 0, end: 1 }},duration: 300,  onEnd: function(){ 
										animation = fx.animateProperty({node: "f13-equal", properties: {top:{start: 63, end: 113},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
											animation = fx.animateProperty({node: "f13-cent", properties: {top:{start: 61, end: 101}, opacity: { start: 0, end: 1 }},duration: 300,  onEnd: function(){
												animation = fx.animateProperty({node: "f13-legal", properties: {opacity: { start: 0, end: 1 }},duration: 100,  onEnd: function(){
													if( isIE8  === true){semoneyie8.play();}
													else{semoney.play();}
													require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
															  focusUtil.focus(dom.byId("menu2"));
													});	
													timerName = "timerf14";
													if( isIE8  === true){timerf14 = setTimeout(function(){frame14Animation()},5000);}
													else{ timerf14 = setTimeout(function(){frame14Animation()},playSec);
													}		
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();			
			}});animation.play();
			}});animation.play();
			}});animation.play();			
			}});animation.play();
			}});animation.play();						
	});
}
function frame14Animation(){
	frameID = 14;
	showFrameID(frameID);
	hideFrame13();
	showFrame14();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 3 sec
			a=document.getElementById('f14Aaudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f14AudioA');
			vo.autoplay = true;
			if(audio14Aready == 0){ audio14Aready = 1;}	
			else{		
				vo.currentTime = 0; audio14Aready = 1;
			}	
			vo.play();		
			playSec = getScriptTime(vo); // get voice length
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f14-map", properties: {left:{start: 0, end: 34},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f14-title", properties: {left:{start: 450, end: 511}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){ 
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
							  focusUtil.focus(dom.byId("menu2"));
						});	
						timerName = "timerf15";
						if( isIE8  === true){timerf15 = setTimeout(function(){frame15Animation()},3000);}
						else{	timerf15 = setTimeout(function(){frame15Animation()},playSec);}
			}});animation.play();
			}});animation.play();
	});	
}
function frame15Animation(){
	frameID = 15;
	showFrameID(frameID);
	hideFrame14();
	showFrame15();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 2.5 sec
			a=document.getElementById('f14Baudio_ie8');
			ie8AudioPlay(a);	
	}
	else{	
			vo=document.getElementById('f14AudioB');
			vo.autoplay = true;
			if(audio14Bready == 0){ audio14Bready = 1;}	
			else{		
				vo.currentTime = 0; audio14Bready = 1;
			}	
			vo.play();		
			playSec = getScriptTime(vo); // get voice length				
	}	
	require(["dojo/_base/fx"], function(fx){ 
			animation = fx.animateProperty({node: "f15-sky", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f15-season", properties: {width:{start: 0, end: 250}, opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f15-suncloud", properties: {top:{start: 0, end: 16}, opacity: { start: 0, end: 1 }},duration: 300,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f15-mooncloud", properties: {top:{start: 19, end: -7},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f15-rain", properties: {opacity: { start: 0, end: 1 }},duration: 300,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f15-beach", properties: {left:{start: 0, end: 1},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f15-mountain", properties: {width:{start: 0, end: 445}, opacity: { start: 0, end: 1 }},duration: 300,  onEnd: function(){ 
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
							  focusUtil.focus(dom.byId("menu2"));
						});	
						timerName = "timerf16";
						if( isIE8  === true){timerf16 = setTimeout(function(){frame16Animation()},2500);}
						else{timerf16 = setTimeout(function(){frame16Animation()},2500);}
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();		
			}});animation.play();
			}});animation.play();	
			}});animation.play();
	});
}
function frame16Animation(){
	frameID = 16;
	showFrameID(frameID);
	hideFrame15();
	showFrame16();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 8 sec + 1s
			a=document.getElementById('f14Caudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f14AudioC');
			vo.autoplay = true;
			if(audio14Cready == 0){ audio14Cready = 1;}	
			else{		
				vo.currentTime = 0; audio14Cready = 1;
			}	
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f16-clock", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f16-meter", properties: {opacity: {start: 0, end: 1}},duration: 300,  onEnd: function(){ 
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
							  focusUtil.focus(dom.byId("menu2"));
						});	
						timerName = "timerf17";
						if( isIE8  === true){timerf17 = setTimeout(function(){frame17Animation()},9000);}
						else{timerf17 = setTimeout(function(){frame17Animation()},playSec);}
			}});animation.play();	
			}});animation.play();
	});

}
function frame17Animation(){
	frameID = 17;
	showFrameID(frameID);
	showMainMenu();
	dojo.removeClass("frame1","bluebg");
	dojo.addClass("frame1","yellowbg");
	hideFrame16();
	showFrame17();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 12 sec + 5s
			a=document.getElementById('f17audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f17Audio');
			vo.autoplay = true;
			if(audio17ready == 0){ audio17ready = 1;}	
			else{		
				vo.currentTime = 0; audio17ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo) + 5000; // get voice length
	}
	require(["dojo/_base/fx"], function(fx){	
			animation = fx.animateProperty({node: "f17-title", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f17-actext", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f17-ac", properties: {top:{start: 184, end: 144}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){
				if( isIE8  === true){iconPopie8.play();}
				else{iconPop.play();}	 
			animation = fx.animateProperty({node: "f17-pooltext", properties: {opacity: { start: 0, end: 1 }},duration: 300,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f17-pool", properties: {top:{start: 184, end: 144},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
						if( isIE8  === true){iconPopie8.play();}
						else{iconPop.play();}	
			animation = fx.animateProperty({node: "f17-fridgetext", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f17-fridge", properties: {top:{start: 184, end: 144}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){ 
										if( isIE8  === true){iconPopie8.play();}
										else{iconPop.play();}
			animation = fx.animateProperty({node: "f17-continue", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f17-question", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
							  focusUtil.focus(dom.byId("f17-actext"));
						});		
						timerName = "timerf18";
						if( isIE8  === true){timerf18 = setTimeout(function(){frame18Animation()},17000);}
						else{timerf18 = setTimeout(function(){frame18Animation()},playSec);}
			}});animation.play();	
			}});animation.play();				
			}});animation.play();	
			}});animation.play();				
			}});animation.play();	
			}});animation.play();
			}});animation.play();	
			}});animation.play();	
			}});animation.play();
	});
	// ac
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f17-ac"), mouse.enter, function(evt){
			dojo.style("f17ac_sml", "display", "none");
			dojo.style("f17ac", "display", "block");				  
	});});	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f17-ac"), mouse.leave, function(evt){				  
			dojo.style("f17ac_sml", "display", "block");
			dojo.style("f17ac", "display", "none");	
	});});
	
	// pool
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f17-pool"), mouse.enter, function(evt){
			dojo.style("f17pool_sml", "display", "none");
			dojo.style("f17pool", "display", "block");				  
	});});	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f17-pool"), mouse.leave, function(evt){				  
			dojo.style("f17pool_sml", "display", "block");
			dojo.style("f17pool", "display", "none");
	});});
	
	// fridge
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f17-fridge"), mouse.enter, function(evt){
			dojo.style("f17fridge_sml", "display", "none");
			dojo.style("f17fridge", "display", "block");	
				  
	});});	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f17-fridge"), mouse.leave, function(evt){				  
			dojo.style("f17fridge_sml", "display", "block");
			dojo.style("f17fridge", "display", "none");
	});});
	// actext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f17-actext"), "click", function(){
			  acClick();
		});
	});	
	document.getElementById('f17-actext').onkeydown = function(evt) {
			evt = evt || window.event;
			
			switch(evt.keyCode){
			  case 13:{
						acClick();	  					
					}
				break;
			}
		  };	
	// pooltext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f17-pooltext"), "click", function(){
			  poolClick(); 
		});
	});	
	document.getElementById('f17-pooltext').onkeydown = function(evt) {
			evt = evt || window.event;
			
			switch(evt.keyCode){
			  case 13:{
						  poolClick(); 
			  }
				break;
			}
	};
	// fridgetext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f17-fridgetext"), "click", function(){
			  fridgeClick();
		});
	});
	document.getElementById('f17-fridgetext').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  fridgeClick();
			  }
				break;
			
			}
	};	

	// ac click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f17-ac"), "click", function(){
			  acClick();	
		});
	});	
	document.getElementById('f17-ac').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  acClick();	
					}
				break;
			}
		  };	
	// pool click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f17-pool"), "click", function(){
			poolClick();
		});
	});	
	document.getElementById('f17-pool').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
				  poolClick();	  
			  }
				break;			
			}
		  };	
	// fridge click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f17-fridge"), "click", function(){
			  fridgeClick(); 
		});
	});	
	document.getElementById('f17-fridge').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  fridgeClick(); 
					}
				break;			
			}
	};	
	// question click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f17-question"), "click", function(){
			  clickHandle("internal");
			  timerName = "timerf18";
			  frame18Animation();
		});
	});		
		document.getElementById('f17-question').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						  clickHandle("internal");
						  timerName = "timerf18";
						  frame18Animation();
					}
				break;			
			}
	};	
}
function frame18Animation(){
	frameID = 18;
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");
	hideFrame17();
	showFrame18();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 5 sec + 1
			a=document.getElementById('f18Aaudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f18AudioA');
			vo.autoplay = true;
			if(audio18Aready == 0){ audio18Aready = 1;}	
			else{		
				vo.currentTime = 0; audio18Aready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f18-cloud", properties: {top:{start: -41, end: 6},opacity: { start: 0, end: 1 }},duration: 1500, onEnd: function(){
			animation = fx.animateProperty({node: "f18-grass", properties: {top:{start:359, end: 316},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){		
			animation = fx.animateProperty({node: "f18-gentext", properties: {top:{start: 109, end: 119},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f18-gen", properties: {top:{start: 259, end: 180}, opacity: { start: 0, end: 1 }},duration: 500,  onEnd: function(){
							require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
										  focusUtil.focus(dom.byId("menu2"));
							});
							timerName = "timerf18b";
							if( isIE8  === true){timerf18b = setTimeout(function(){frame18BAnimation()},6500);}
							else{timerf18b = setTimeout(function(){frame18BAnimation()},playSec);}
			}});animation.play();	
			}});animation.play();				
			}});animation.play();	
			}});animation.play();	
	});			
}
function frame18BAnimation(){
	if( isIE8  === true){
			// 1 sec
			a=document.getElementById('f18Baudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f18AudioB');
			vo.autoplay = true;
			if(audio18Bready == 0){ audio18Bready = 1;}	
			else{		
				vo.currentTime = 0; audio18Bready = 1;
			}
			vo.play();					
	}	
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){sewhooshie8.play();}
			else{sewhoosh.play();} 
			animation = fx.animateProperty({node: "f18-deltext", properties: {top:{start: 109, end: 136},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f18-del", properties: {left:{start: 300, end: 340}, opacity: { start: 0, end: 1 }},duration: 200,  onEnd: function(){ 
					timerName = "timerf19";
					timerf19 = setTimeout(function(){frame19Animation()},2500);
			}});animation.play();	
			}});animation.play();		
	});
}

function frame19Animation(){
	frameID = 19;
	showFrameID(frameID);
	hideFrame18();
	showFrame19();
	getScriptforFrameID(frameID); // get closed caption script

	if( isIE8  === true){
			// 3 sec
			a=document.getElementById('f19audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f19Audio');
			vo.autoplay = true;
			if(audio19ready == 0){ audio19ready = 1;}	
			else{		
				vo.currentTime = 0; audio19ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length		
	}	
	require(["dojo/_base/fx"], function(fx){		
			animation = fx.animateProperty({node: "f19-text1", properties: {top:{start: -11, end: 33},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f19-s1", properties: {top:{start: 39, end: 58},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
			animation = fx.animateProperty({node: "f19-cash1", properties: {left:{start: 100, end: 165},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
			animation = fx.animateProperty({node: "f19-text2", properties: {top:{start: -11, end: 33},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f19-s2", properties: {top:{start: 39, end: 58},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
			animation = fx.animateProperty({node: "f19-cash2", properties: {left:{start: 464, end: 503}, opacity: { start: 0, end: 1 }},duration: 200,  onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();} 	
			animation = fx.animateProperty({node: "f19-text3", properties: {top:{start: -11, end: 33},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f19-s3", properties: {top:{start: 39, end: 58}, opacity: { start: 0, end: 1 }},duration: 200,  onEnd: function(){ 
			animation = fx.animateProperty({node: "f19-cash3", properties: {left:{start: 580, end: 677},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
						if( isIE8  === true){semoneyie8.play();}
						else{semoney.play();}
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
									  focusUtil.focus(dom.byId("menu2"));
						});
						timerName = "timerf20";
						timerf20 = setTimeout(function(){frame20Animation()},5000);					
			}});animation.play();				
			}});animation.play();	
			}});animation.play();				
			}});animation.play();
			}});animation.play();				
			}});animation.play();	
			}});animation.play();				
			}});animation.play();	
			}});animation.play();				
	});	
}
function frame20Animation(){
	frameID = 20;
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");	
	hideFrame19();
	showFrame20();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 9 sec
			a=document.getElementById('f20audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f20Audio');
			vo.autoplay = true;
			if(audio20ready == 0){ audio20ready = 1;}	
			else{		
				vo.currentTime = 0; audio20ready = 1;
			}
			vo.play();		
	}
	require(["dojo/_base/fx"], function(fx){	
			animation = fx.animateProperty({node: "f18-cloud", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f20-bar1", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f20-bar2", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f20-label1", properties: {top:{start: 149, end: 171},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f20-label2", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
						if( isIE8  === true){seupdownie8.play();}
						else{seupdown.play();}
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
									  focusUtil.focus(dom.byId("menu2"));
						});
						timerName = "timerf21";
						timerf21 = setTimeout(function(){frame21Animation()},9000);					
			}});animation.play();	
			}});animation.play();				
			}});animation.play();	
			}});animation.play();				
			}});animation.play();
	});	
}
function frame21Animation(){	
	frameID = 21;
	showFrameID(frameID);
	hideFrame20();
	showFrame21();
	getScriptforFrameID(frameID); // get closed caption script	
	if( isIE8  === true){
			// 7 sec, 2.5s here
			a=document.getElementById('f21audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f21Audio');
			vo.autoplay = true;
			if(audio21ready == 0){ audio21ready = 1;}	
			else{		
				vo.currentTime = 0; audio21ready = 1;
			}
			vo.play();		
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f21-grass", properties: {top:{start: 359, end: 329},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f21-greenbox", properties: {top:{start: 269, end: 236},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f21-text", properties: {top:{start: 279, end: 254},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
						//if( isIE8  === true){iconPopie8.play();}
//						else{iconPop.play();}
						if( isIE8  === true){seelevateie8.play();}
						else{seelevate.play();}
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
									  focusUtil.focus(dom.byId("menu2"));
						});	
						timerName = "timerf22";
						timerf22 = setTimeout(function(){frame22Animation()},2500);					
			}});animation.play();	
			}});animation.play();				
			}});animation.play();
	});	
}
function frame22Animation(){
	frameID = 22;
	showFrameID(frameID);
	showFrame22();
	// ie8 or not, just play the animation 
	// still play audio21(7s = 2.5 + 2.5 + 2)	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f22-yellowbox", properties: {top:{start: 169, end: 128},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f22-text", properties: {top:{start: 209, end: 160},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
					//if( isIE8  === true){iconPopie8.play();}
//					else{iconPop.play();}
					if( isIE8  === true){seelevateie8.play();}
					else{seelevate.play();}
					require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
								  focusUtil.focus(dom.byId("menu2"));
					});
					timerName = "timerf23";
					timerf23 = setTimeout(function(){frame23Animation()},2500);
			}});animation.play();				
			}});animation.play();		
	});		
}
function frame23Animation(){
	frameID = 23;	
	showFrameID(frameID);
	showFrame23();
	// ie8 or not, just play the animation 
	// still play audio21(7s = 2.5 + 2.5 + 2)
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f23-yellowbox", properties: {top:{start: 24, end: -1},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f23-text", properties: {top:{start: 112, end: 76},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
					//if( isIE8  === true){iconPopie8.play();}
//					else{iconPop.play();}
					if( isIE8  === true){seelevateie8.play();}
					else{seelevate.play();}
					require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
								  focusUtil.focus(dom.byId("menu2"));
					});		
					timerName = "timerf24";
					timerf24 = setTimeout(function(){frame24Animation()},2000);	
			}});animation.play();				
			}});animation.play();
	});		
}

function frame24Animation(){
	frameID = 24;	
	showFrameID(frameID);
	hideFrame23();
	showFrame24();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 7 sec
			a=document.getElementById('f24audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f24Audio');
			vo.autoplay = true;
			if(audio24ready == 0){ audio24ready = 1;}	
			else{		
				vo.currentTime = 0; audio24ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length		
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){iconPopie8.play();}
			else{iconPop.play();}
			animation = fx.animateProperty({node: "f24-greenbox", properties: {left:{start: 60, end: 97},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f24-tier2bar", properties: {left:{start: 440, end:  480},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){	
			animation = fx.animateProperty({node: "f24-tier3bar", properties: {left:{start: 616, end: 676},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f24-tier1text", properties: {left:{start: 60, end: 97},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f24-tier2text", properties: {left:{start: 450, end: 480},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f24-tier3text", properties: {left:{start: 640, end: 681},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){		
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
									  focusUtil.focus(dom.byId("menu2"));
						});	
						timerName = "timerf25";
						if( isIE8  === true){timerf25 = setTimeout(function(){frame25Animation()},7500);	}
						else{timerf25 = setTimeout(function(){frame25Animation()},playSec);	}
			}});animation.play();				
			}});animation.play();
			}});animation.play();				
			}});animation.play();			
			}});animation.play();				
			}});animation.play();			
	});	
}
function frame25Animation(){
	showFrame25();
	frameID = 25;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 9 sec
			a=document.getElementById('f25audio_ie8');
			ie8AudioPlay(a);		
	}
	else{	
			vo=document.getElementById('f25Audio');
			vo.autoplay = true;
			if(audio25ready == 0){ audio25ready = 1;}	
			else{		
				vo.currentTime = 0; audio25ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f25-word1", properties: {top:{start: 279, end: 295},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
			animation = fx.animateProperty({node: "f25-word2", properties: {top:{start: 189, end: 208},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
			animation = fx.animateProperty({node: "f25-word3", properties: {top:{start: 79, end: 98},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
			animation = fx.animateProperty({node: "f25-arrow", properties: {width:{start: 0, end: 277}, height:{start: 0, end: 123},opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
					if( isIE8  === true){iconPopie8.play();}
					else{iconPop.play();}
					require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
								  focusUtil.focus(dom.byId("menu2"));
					});		
					timerName = "timerf26";
					if( isIE8  === true){timerf26 = setTimeout(function(){frame26Animation()},8000);	}
					else{timerf26 = setTimeout(function(){frame26Animation()},playSec);	}
			}});animation.play();		
			}});animation.play();				
			}});animation.play();	
			}});animation.play();
	});	
}
function frame26Animation(){
	frameID = 26;
	showFrameID(frameID);
	getScriptforFrameID(frameID);
	if( isIE8  === true){
			// 13 sec
			a=document.getElementById('f26audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f26Audio');
			vo.autoplay = true;
			if(audio26ready == 0){ audio26ready = 1;}	
			else{		
				vo.currentTime = 0; audio26ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length		
	}	
	require(["dojo/_base/fx"], function(fx){	
			animation = fx.animateProperty({node: "f25-disclaimer", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){	
					require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
								  focusUtil.focus(dom.byId("menu2"));
					});	
					timerName = "timerf27";
					if( isIE8  === true){timerf27 = setTimeout(function(){frame27Animation()},13000);}
					else{timerf27 = setTimeout(function(){frame27Animation()},playSec);}									
			}});animation.play();						
	});	
}
function frame27Animation(){
	frameID = 27;
	showFrameID(frameID);
	hideFrame25();
	showFrame27();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 4 sec
			a=document.getElementById('f27Aaudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f27AudioA');
			vo.autoplay = true;
			if(audio27Aready == 0){ audio27Aready = 1;}	
			else{		
				vo.currentTime = 0; audio27Aready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){f27coolie8.play();}
			else{f27cool.play();}
			animation = fx.animateProperty({node: "f27-cloud", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f27-treegrass", properties: {top:{start: 159, end: 127},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f27-mountain", properties: {top:{start: 359, end: 328},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f27-wave", properties: {top:{start: 369, end: 325},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){	
			animation = fx.animateProperty({node: "f27-title", properties: {top:{start: 0, end: 30},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f27-tier1", properties: {top:{start: 58, end: 88},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f27-fan", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){			
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
									  focusUtil.focus(dom.byId("menu2"));
						});
						timerName = "timerf28";
						if( isIE8  === true){	timerf28 = setTimeout(function(){frame28Animation()},4000);}
						else{timerf28 = setTimeout(function(){frame28Animation()},playSec);}
			}});animation.play();			
			}});animation.play();				
			}});animation.play();
			}});animation.play();					
			}});animation.play();			
			}});animation.play();				
			}});animation.play();	

	});		
}

function frame28Animation(){
	frameID = 28;
	showFrameID(frameID);
	// animate changing background
	hideFrame27();
	if( isIE8  === true){
			// 7 sec
			a=document.getElementById('f27Baudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f27AudioB');
			vo.autoplay = true;
			if(audio27Bready == 0){ audio27Bready = 1;}	
			else{		
				vo.currentTime = 0; audio27Bready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f27-cloud", properties: {top:{start: 0, end: -100},opacity: { start: 1, end: 0 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f27-treegrass", properties: {top:{start: 127, end: -100},opacity: {start: 1, end: 0 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f27-mountain", properties: {top:{start: 328, end: -100},opacity: { start: 1, end: 0 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f27-wave", properties: {top:{start: 325, end: -100},opacity: { start: 1, end: 0 }},duration: 100, onEnd: function(){	
			animation = fx.animateProperty({node: "f27-fan", properties: {opacity: { start: 1, end: 0 }},duration: 100, onEnd: function(){
			showFrame28();
			animation = fx.animateProperty({node: "f28-bg", properties: {opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
			animation = fx.animateProperty({node: "f28-sun", properties: {top:{start: 0, end: 21},opacity: { start: 0, end: 1 }},duration:200, onEnd: function(){
			animation = fx.animateProperty({node: "f28-mountain", properties: {top:{start: 300, end: 333},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
			animation = fx.animateProperty({node: "f28-ac", properties: {top:{start: 119, end: 171},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
			animation = fx.animateProperty({node: "f28-air", properties: {top:{start: 229, end: 284},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f28-tier", properties: {opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){	
						require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
									  focusUtil.focus(dom.byId("menu2"));
						});		
						timerName = "timerf29";
						if( isIE8  === true){timerf29 = setTimeout(function(){frame29Animation()},7000);}
						else{timerf29 = setTimeout(function(){frame29Animation()},playSec);}			
			}});animation.play();		
			}});animation.play();
			}});animation.play();					
			}});animation.play();			
			}});animation.play();				
			}});animation.play();			
			}});animation.play();				
			}});animation.play();
			}});animation.play();					
			}});animation.play();			
			}});animation.play();				
	});
}

function frame29Animation(){
	frameID = 29;
	showFrameID(frameID);
	hideFrame28();	
	showFrame29();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// make it 10 sec
			a=document.getElementById('f29audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f29Audio');
			vo.autoplay = true;
			if(audio29ready == 0){ audio29ready = 1;}	
			else{		
				vo.currentTime = 0; audio29ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}
	// audio too short, make it 10sec
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f29-sun", properties: {top:{start:0, end: -213},left:{start:720, end: 297},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f29-grass", properties: {top:{start: 359, end: 319},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f29-cloud", properties: {top:{start: 0, end: 26},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f29-title", properties: {top:{start: 159, end: 195},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){sewhooshie8.play();}
				else{sewhoosh.play();} 
			animation = fx.animateProperty({node: "f29-learnmore", properties: {left:{start: 140, end: 175},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f29-question", properties: {left:{start: 330, end: 410},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
					if( isIE8  === true){sewhooshie8.play();}
					else{sewhoosh.play();} 	
					require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
								  focusUtil.focus(dom.byId("f29-learnmore"));
					});	
					timerName = "timerf30";	
					timerf30 = setTimeout(function(){frame30Animation()},10000);		
			}});animation.play();				
			}});animation.play();
			}});animation.play();					
			}});animation.play();			
			}});animation.play();				
			}});animation.play();	
	});	
	// link click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f29-question"), "click", function(){
			  clickHandle("internal");
			  timerName = "timerf30";
			  frame30Animation();
		});
	});
	document.getElementById('f29-question').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						clickHandle("internal");
			  			timerName = "timerf30";
			  			frame30Animation();	
					}
				break;			
			}
		  };		
}
function frame30Animation(){
	frameID = 30;
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");
	hideFrame29();	
	showFrame30();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 14 sec
			a=document.getElementById('f30audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f30Audio');
			vo.autoplay = true;
			if(audio30ready == 0){ audio30ready = 1;}	
			else{		
				vo.currentTime = 0; audio30ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f30-title", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f30-acc1", properties: {top:{start: 79, end: 107},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f30-acc2", properties: {top:{start: 87, end: 107},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f30-acc3", properties: {left:{start: 510, end: 542},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f30-acc4", properties: {left:{start: 572, end: 542},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu2"));
				});		
				timerName = "timerf31";	
				if( isIE8  === true){timerf31 = setTimeout(function(){frame31Animation()},14000);}
				else{timerf31 = setTimeout(function(){frame31Animation()},playSec);}
			}});animation.play();
			}});animation.play();					
			}});animation.play();			
			}});animation.play();				
			}});animation.play();
	});		
}
function frame31Animation(){
	frameID = 31;
	showFrameID(frameID);
	hideFrame30();	
	showFrame31();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 13 sec
			a=document.getElementById('f31audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f31Audio');
			vo.autoplay = true;
			if(audio31ready == 0){ audio31ready = 1;}	
			else{		
				vo.currentTime = 0; audio31ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f31-cloud", properties: {top:{start: 0, end: 30},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f31-grass", properties: {top:{start: 360, end: 331},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f31-title", properties: {top:{start: 129, end: 159},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f31-text1", properties: {top:{start: 194, end: 224},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f31-text3", properties: {top:{start: 194, end: 224},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){		
					require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f31-text1"));
					});
					timerName = "timerf33";
					if( isIE8  === true){timerf33 = setTimeout(function(){frame33Animation()},13000);}
					else{timerf33 = setTimeout(function(){frame33Animation()},playSec);}
			}});animation.play();		
			}});animation.play();
			}});animation.play();					
			}});animation.play();			
			}});animation.play();		
	});
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f31-text3"), "click", function(){	
				frameID = 32;			
				getScriptforFrameID(frameID); // get closed caption script
				if(isIE8  === true){
						inLinkPressie8.play();
						if(a.paused){
							a.play();
						}
						else{		
							a.stop();
							a2=document.getElementById('f32audio_ie8');
							isPlaying=function(audio){return audio.playState==3;};
							isPlayingVar = isPlaying(a);
							a2.play=function(){this.controls.play();}
							a2.pause=function(){this.controls.pause();}	
							a2.stop=function(){this.controls.stop();}
							a2.play();
							//a2.pause();
							// clean this frame in frame 36
							animation.pause();
							isPlayingVar = true;
							bgm.play();
							dojo.addClass("playpause", "pause");
							dojo.removeClass("playpause", "play");
							cleanEveryTimer();
							
							timerName = "timerf36";
							timerf36 = setTimeout(function(){frame36Animation()},8000);		
						}
				}
				else{
						inLinkPress.play();
						if(vo.paused){
							vo.play();
						}
						else{			
							vo.pause();
							vo2=document.getElementById('f32Audio');
							vo2.autoplay = true;
							if(audio32ready == 0){ audio32ready = 1;}	
							else{		
								vo2.currentTime = 0; audio32ready = 1;
							}
							vo2.play();	
							playSec2 = getScriptTime(vo); // get voice length
			//				cleanEverything();
							// clean this frame in frame 36
						  	animation.pause();
						  	isPlayingVar = true;
						  	dojo.addClass("playpause", "pause");
						  	dojo.removeClass("playpause", "play");							
							cleanEveryTimer();
							timerName = "timerf36";
							timerf36 = setTimeout(function(){frame36Animation()},8000);		
						}
				}
				
		});
	});
	document.getElementById('f31-text3').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						frameID = 32;			
						getScriptforFrameID(frameID); // get closed caption script
						if(isIE8  === true){
								if(a.paused){
									a.play();
								}
		
								else{		
									a.stop();
									a2=document.getElementById('f32audio_ie8');
									a2.play=function(){this.controls.play();}
									a2.pause=function(){this.controls.pause();}	
									a2.stop=function(){this.controls.stop();}
									a2.play();
									isPlayingVar = true;
									// clean this frame in frame 36
									cleanEveryTimer();
									timerName = "timerf36";
									timerf36 = setTimeout(function(){frame36Animation()},8000);		
								}
						}
						else{
								if(vo.paused){
									vo.play();
								}
								else{			
									vo.pause();
									vo2=document.getElementById('f32Audio');
									vo2.autoplay = true;
									if(audio32ready == 0){ audio32ready = 1;}	
									else{		
										vo2.currentTime = 0; audio32ready = 1;
									}
									vo2.play();	
									playSec2 = getScriptTime(vo); // get voice length
									// clean this frame in frame 36
									cleanEveryTimer();
									timerName = "timerf36";
									timerf36 = setTimeout(function(){frame36Animation()},8000);		
								}
						}
					}
				break;			
			}
		  };			
}
function frame33Animation(){
	frameID = 33
	showFrameID(frameID);
	hideFrame31(); // keep cloud and grass
	showFrame33();
	getScriptforFrameID(frameID); // get closed caption script	
	if( isIE8  === true){
			// 9 sec
			a=document.getElementById('f33audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f33Audio');
			vo.autoplay = true;
			if(audio33ready == 0){ audio33ready = 1;}	
			else{		
				vo.currentTime = 0; audio33ready = 1;
			}
			vo.play();		
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f33-sun", properties: {opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f33-house", properties: {top:{start: 24, end: 8},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f33-tree", properties: {top:{start: 340, end: 318},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f33-pole", properties: {top:{start: 39, end: 51},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f33-wind", properties: {opacity: { start: 0, end: 1 }},duration: 800, onEnd: function(){
			animation = fx.animateProperty({node: "f33-ac", properties: {top:{start: 259, end: 301},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f33-air", properties: {opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
				  		require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  		focusUtil.focus(dom.byId("menu2"));
					  	});
						timerName = "timerf34";
						timerf34 = setTimeout(function(){frame34Animation()},4000);	  
			}});animation.play();				
			}});animation.play();				
			}});animation.play();
			}});animation.play();					
			}});animation.play();			
			}});animation.play();				
			}});animation.play();
	});	
}
function frame34Animation(){
	frameID = 34;
	showFrameID(frameID);
	//replace house image
    timerf35 = setTimeout(function(){frame35Animation()},2000);
	dojo.style("f33-house","opacity","0");
	dojo.style("f33-house","display","none");	
	dojo.style("f34-house","opacity","1");
	dojo.style("f34-house","display","block");
	require(["dojo/_base/fx"], function(fx){
		animation = fx.animateProperty({node: "f33-wind", properties: {opacity: { start: 1, end: 0 }},duration: 1000, onEnd: function(){
			  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
					  focusUtil.focus(dom.byId("menu2"));
				  });			
		}});animation.play();	
	});				
}

function frame35Animation(){
	frameID = 35;
	showFrameID(frameID);
	hideFrame33();
	showFrame35();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 3 sec
			a=document.getElementById('f35Aaudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f35AudioA');
			vo.autoplay = true;
			if(audio35Aready == 0){ audio35Aready = 1;}	
			else{		
				vo.currentTime = 0; audio35Aready = 1;
			}
			vo.play();					
	}	
	timerName = "timerf35b";
	timerf35b = setTimeout(function(){frame35BAnimation()},4000);	
	require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
				  focusUtil.focus(dom.byId("menu2"));
	});	
}
function frame35BAnimation(){
	frameID = 35;
	showFrameID(frameID);
	if( isIE8  === true){
			a=document.getElementById('f35Baudio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f35AudioB');
			vo.autoplay = true;
			if(audio35Bready == 0){ audio35Bready = 1;}	
			else{		
				vo.currentTime = 0; audio35Bready = 1;
			}
			vo.play();		
	}
	require(["dojo/_base/fx"], function(fx){	
			animation = fx.animateProperty({node: "f33-sun", properties: {opacity: { start: 1, end: 0 }},duration: 1000, onEnd: function(){		
			animation = fx.animateProperty({node: "f35-sun", properties: {opacity: { start: 0, end: 1 }},duration: 2000, onEnd: function(){
					require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
					  focusUtil.focus(dom.byId("menu2"));
					});	
					timerf36 = setTimeout(function(){frame36Animation()},4000);
			}});animation.play();	
			}});animation.play();	
	});				
}
function frame36Animation(){
	frameID = 36;
	showFrameID(frameID);
	showMainMenu();
	hideFrame31();
	hideFrame35();
	showFrame36();
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");	
	activeMenu3();	
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 7 sec
			a=document.getElementById('f36audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f36Audio');
			vo.autoplay = true;
			if(audio36ready == 0){ audio36ready = 1;}	
			else{		
				vo.currentTime = 0; audio36ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}	
	require(["dojo/_base/fx"], function(fx){
			
			animation = fx.animateProperty({node: "f36-actext", properties: {top:{start: 69, end: 76},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f36-ac", properties: {top:{start: 119, end: 158},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
									if( isIE8  === true){iconPopie8.play();}
									else{iconPop.play();}					
				  		require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  		focusUtil.focus(dom.byId("f36-actext"));
					  	});	
						timerName = "timerf37";
						if( isIE8  === true){timerf37 = setTimeout(function(){frame37Animation()},7000);}
						else{	timerf37 = setTimeout(function(){frame37Animation()},playSec);}
			}});animation.play();				
			}});animation.play();	
	});	

	// ac
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f36-ac"), mouse.enter, function(evt){
			dojo.style("f36ac_sml", "display", "none");
			dojo.style("f36ac", "display", "block");				  
	});});
	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f36-ac"), mouse.leave, function(evt){				  
			dojo.style("f36ac_sml", "display", "block");
			dojo.style("f36ac", "display", "none");	
	});});	
	// ac click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f36-ac"), "click", function(){
			  acClick();
		});
	});
	document.getElementById('f36-ac').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:
					{
						  acClick();
					}
				break;			
			}
		  };	
	// actext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f36-actext"), "click", function(){
			  acClick();
		});
	});	
	document.getElementById('f36-actext').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  acClick();
					}
				break;			
			}
	};		
}
function frame37Animation(){
	frameID = 37;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 11 sec + 5sec
			a=document.getElementById('f37audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f37Audio');
			vo.autoplay = true;
			if(audio37ready == 0){ audio37ready = 1;}	
			else{		
				vo.currentTime = 0; audio37ready = 1;
			}
			vo.play();	
	}		
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f36-pooltext", properties: {top:{start: 69, end: 76},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f36-pool", properties: {top:{start: 119, end: 149},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){iconPopie8.play();}
									else{iconPop.play();}	
			animation = fx.animateProperty({node: "f36-fridgetext", properties: {top:{start: 69, end: 76},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f36-fridge", properties: {top:{start: 109, end: 145},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){iconPopie8.play();}
									else{iconPop.play();}		
				  		require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  		focusUtil.focus(dom.byId("f36-actext"));
					  	});
						timerName = "timerf38";
						timerf38 = setTimeout(function(){frame38Animation()},16000);	
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
			}});animation.play();		
	});
	// pool
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f36-pool"), mouse.enter, function(evt){
			dojo.style("f36pool_sml", "display", "none");
			dojo.style("f36pool", "display", "block");					  
	});});
	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f36-pool"), mouse.leave, function(evt){				  
			dojo.style("f36pool_sml", "display", "block");
			dojo.style("f36pool", "display", "none");	
	});});
	
	// fridge
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f36-fridge"), mouse.enter, function(evt){
			dojo.style("f36fridge_sml", "display", "none");
			dojo.style("f36fridge", "display", "block");	
				  
	});});
	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f36-fridge"), mouse.leave, function(evt){				  
			dojo.style("f36fridge_sml", "display", "block");
			dojo.style("f36fridge", "display", "none");	
	});});
	
	// pool click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f36-pool"), "click", function(){
			  poolClick();
		});
	});
	document.getElementById('f36-pool').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						 poolClick();
					}
				break;			
			}
	};	
	// pooltext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f36-pooltext"), "click", function(){
			  poolClick();
		});
	});	
	document.getElementById('f36-pooltext').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  poolClick();
					}
				break;			
			}
};
	// fridgetext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f36-fridgetext"), "click", function(){
			  fridgeClick(); 
		});
	});
	document.getElementById('f36-fridgetext').onkeydown = function(evt) {
				evt = evt || window.event;			
				switch(evt.keyCode){
				  case 13:
						{
							  fridgeClick(); 
						}
					break;			
				}
	};	
	// fridge click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f36-fridge"), "click", function(){
			  fridgeClick(); 
		});
	});	
	document.getElementById('f36-fridge').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  fridgeClick(); 
					}
				break;			
			}
};
}


function frame38Animation(){
	frameID = 38;
	showFrameID(frameID);
	dojo.removeClass("frame1","bluebg");
	dojo.addClass("frame1","yellowbg");
	showMainMenu();
	hideFrame36();	
	showFrame38();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 5 sec + 1sec
			a=document.getElementById('f38audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f38Audio');
			vo.autoplay = true;
			if(audio38ready == 0){ audio38ready = 1;}	
			else{		
				vo.currentTime = 0; audio38ready = 1;
			}
			vo.play();	
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f31-cloud", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f38-title", properties: {top:{start: 5, end: 25},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f38-hvac", properties: {left:{start: 80, end: 102},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f38-ac", properties: {top:{start: 169, end: 197},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  		require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf39";
					  timerf39 = setTimeout(function(){frame39Animation()},6000);
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
			}});animation.play();
	});							
}

function frame39Animation(){
	frameID = 39;
	showFrameID(frameID);
	hideFrame38();	
	showFrame39();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 7 sec
			a=document.getElementById('f39audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f39Audio');
			vo.autoplay = true;
			if(audio39ready == 0){ audio39ready = 1;}	
			else{		
				vo.currentTime = 0; audio39ready = 1;
			}
			vo.play();	
	}	
	// 7 sec length shared with f40
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f39-sun", properties: {top:{start: -61, end: -41},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac1", properties: {top:{start: 39, end: 67},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac2", properties: {top:{start: 39, end: 67},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac3", properties: {top:{start: 39, end: 67},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac4", properties: {top:{start: 39, end: 67},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac5", properties: {top:{start: 149, end: 181},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac6", properties: {top:{start: 149, end: 181},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac7", properties: {top:{start: 149, end: 181},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac8", properties: {top:{start: 149, end: 181},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac9", properties: {top:{start: 259, end: 295},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac10", properties: {top:{start: 259, end: 295},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac11", properties: {top:{start: 259, end: 295},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-ac12", properties: {top:{start: 259, end: 295},opacity: { start: 0, end: 1 }},duration: 100, onEnd: function(){
			animation = fx.animateProperty({node: "f39-wind", properties: {left:{start: 0, end: 23},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){f39psie8.play();}
				else{f39ps.play();}						
							require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
										focusUtil.focus(dom.byId("menu3"));
							});
							timerName = "timerf40";
					  		timerf40 = setTimeout(function(){frame40Animation()},4000);		
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
			}});animation.play();	
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
			}});animation.play();	
			}});animation.play();				
			}});animation.play();	
			}});animation.play();		
	 });					
}

function frame40Animation(){
	frameID = 40;
	showFrameID(frameID);
	hideFrame39();	
	showFrame40();
	showMainMenu();	
	dojo.removeClass("frame1","bluebg");
	dojo.removeClass("frame1","yellowbg");	
	getScriptforFrameID(frameID); // get closed caption script
	var glow = document.getElementById('f40-glow');
    var noglow = document.getElementById('f40-noglow');
	timer = setInterval(function(){
		if(glow.style.opacity == '0') {
            noglow.style.opacity = '0';
			glow.style.opacity = '1';
		} else {
			glow.style.opacity = '0';
            noglow.style.opacity = '1';
		}
	}, 1000);
	require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
			  focusUtil.focus(dom.byId("menu3"));
	});
	timerName = "timerf41";
	timerf41 = setTimeout(function(){frame41Animation()},5500);						
}
function frame41Animation(){
	frameID = 41;
	showFrameID(frameID);
	clearInterval(timer); // stop frame 40 blink
	dojo.removeClass("frame1","bluebg");
	dojo.addClass("frame1","yellowbg");	
	hideFrame40();	
	showFrame41();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 15 sec
			a=document.getElementById('f41audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f41Audio');
			vo.autoplay = true;
			if(audio41ready == 0){ audio41ready = 1;}	
			else{		
				vo.currentTime = 0; audio41ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo)  ; 
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f41-cloud", properties: {top:{start: 0, end: 30},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f41-ther", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f41-light", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){						
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf43";
					  if( isIE8  === true){timerf43 = setTimeout(function(){frame43Animation()},15000);}
					  else{timerf43 = setTimeout(function(){frame43Animation()},playSec);}
			}});animation.play();				
			}});animation.play();				
			}});animation.play();
	});						
}

function frame43Animation(){
	frameID = 43;
	showFrameID(frameID);
	hideFrame41();	
	showFrame43();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f43audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f43Audio');
			vo.autoplay = true;
			if(audio43ready == 0){ audio43ready = 1;}	
			else{		
				vo.currentTime = 0; audio43ready = 1;
			}
			vo.play();		
	}		
	// audio 43 has 14 sec
	// 10 sec here
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f43-title", properties: {top:{start:42, end: 67},opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
			animation = fx.animateProperty({node: "f43ac78", properties: {opacity: { start: 0, end: 1 }},duration: 2000, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
			animation = fx.animateProperty({node: "f43ac83", properties: {opacity: { start: 0, end: 1 }},duration: 2000, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf45";
					timerf45 = setTimeout(function(){frame45Animation()},10000);  
			}});animation.play();				
			}});animation.play();				
			}});animation.play();				
	});					
}
function frame45Animation(){
	frameID = 45;
	showFrameID(frameID);
	hideFrame43();	
	showFrame45();
	getScriptforFrameID(frameID); // get closed caption script
	// another 7 sec here
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f45-clock", properties: {top:{start: 89, end: 134},opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
				  });
				  timerName = "timerf46";
				  timerf46 = setTimeout(function(){frame46Animation()},4000);	
			}});animation.play();				
	});			
}
function frame46Animation(){
	frameID = 46;
	showFrameID(frameID);
	hideFrame45();
	showFrame46();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 8 sec
			a=document.getElementById('f46audio_ie8');
			ie8AudioPlay(a);		
	}
	else{	
			vo=document.getElementById('f46Audio');
			vo.autoplay = true;
			if(audio46ready == 0){ audio46ready = 1;}	
			else{		
				vo.currentTime = 0; audio46ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length		
	}	
	require(["dojo/_base/fx"], function(fx){		
			animation = fx.animateProperty({node: "f46-mobile", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
					if( isIE8  === true){f46alertie8.play();}
					else{f46alert.play();}
				    require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					});
					timerName = "timerf47";
					if( isIE8  === true){timerf47 = setTimeout(function(){frame47Animation()},6000);}
					else{timerf47 = setTimeout(function(){frame47Animation()},playSec);}  
			}});animation.play();				
	});				
}
function frame47Animation(){
	frameID = 47;
	showFrameID(frameID);
	hideFrame46();	
	showFrame47();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 8 sec
			a=document.getElementById('f47audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f47Audio');
			vo.autoplay = true;
			if(audio47ready == 0){ audio47ready = 1;}	
			else{		
				vo.currentTime = 0; audio47ready = 1;
			}
			vo.play();		
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f47-title", properties: {top:{start: 109, end: 124},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f47-more", properties: {top:{start: 167, end: 190},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
			animation = fx.animateProperty({node: "f47-disclaimer", properties: {top:{start: 317, end: 357},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f47-more"));
				  });
				  timerName = "timerf48";
				  timerf48 = setTimeout(function(){frame48Animation()},8000);	
			}});animation.play();				
			}});animation.play();
			}});animation.play();
	});		
}
function frame48Animation(){
	frameID = 48;
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");
	hideFrame47();	
	showFrame48();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f48audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f48Audio');
			vo.autoplay = true;
			if(audio48ready == 0){ audio48ready = 1;}	
			else{		
				vo.currentTime = 0; audio48ready = 1;
			}
			vo.play();		
	} // 15 sec + 0.5s
	require(["dojo/_base/fx"], function(fx){		
			animation = fx.animateProperty({node: "f48-logo", properties: {opacity: { start: 0, end: 1 }},duration: 2000, onEnd: function(){		
				  	require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf49";
					  timerf49 = setTimeout(function(){frame49Animation()},15500);
			}});animation.play();
	});
}
function frame49Animation(){
	frameID = 49;
	showFrameID(frameID);
	hideFrame48();
	showFrame49();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f49audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f49Audio');
			vo.autoplay = true;
			if(audio49ready == 0){ audio49ready = 1;}	
			else{		
				vo.currentTime = 0; audio49ready = 1;
			}
			vo.play();		
	}
	// 6s + 1s
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){semoneyie8.play();}
			else{semoney.play();}
			animation = fx.animateProperty({node: "f49-line1", properties: {top:{start: 79, end: 104},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f49-line2", properties: {top:{start: 139, end: 161},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f49-line3", properties: {top:{start: 169, end: 206},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f49-link", properties: {top:{start: 265, end: 295},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f49-line4", properties: {top:{start: 359, end: 390},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f49-link"));
					  });
					  timerName = "timerf50";
					  timerf50 = setTimeout(function(){frame50Animation()},7000);		
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();		
			}});animation.play();
	});
}
function frame50Animation(){
	frameID = 50;
	showFrameID(frameID);
	hideFrame49();	
	showFrame50();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f50audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f50Audio');
			vo.autoplay = true;
			if(audio50ready == 0){ audio50ready = 1;}	
			else{		
				vo.currentTime = 0; audio50ready = 1;
			}
			vo.play();		
	}	// 7s + 2s
	dojo.style("f49-link","top","350px");
	require(["dojo/_base/fx"], function(fx){	
			animation = fx.animateProperty({node: "f50-icon1", properties: {top:{start: 0, end: 42},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f50-text1", properties: {top:{start: 169, end: 211},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f50-icon2", properties: {top:{start: 9, end: 45},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f50-text2", properties: {top:{start: 169, end: 211},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f50-icon3", properties: {top:{start: 9, end: 59},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f50-text3", properties: {top:{start: 169, end: 211},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f49-link", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f49-link"));
					  });
					  timerName = "timerf51";
					  timerf51 = setTimeout(function(){frame51Animation()},9000);	
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();		
			}});animation.play();
			}});animation.play();	
			}});animation.play();		
	});
}
function frame51Animation(){
	frameID = 51;
	showFrameID(frameID);
	hideFrame50();	
	showFrame51();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f51audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f51Audio');
			vo.autoplay = true;
			if(audio51ready == 0){ audio51ready = 1;}	
			else{		
				vo.currentTime = 0; audio51ready = 1;
			}
			vo.play();		
	}
	// get voice length	: 3 sec too short		
	require(["dojo/_base/fx"], function(fx){ 
			animation = fx.animateProperty({node: "f51-pooltext", properties: {top:{start: 0, end: 48},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f51-pool", properties: {top:{start: 0, end: 106},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
					if( isIE8  === true){iconPopie8.play();}
					else{iconPop.play();}	
			animation = fx.animateProperty({node: "f51-fridgetext", properties: {top:{start: 0, end: 48},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f51-fridge", properties: {top:{start: 0, end: 106},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
						if( isIE8  === true){iconPopie8.play();}
						else{iconPop.play();}	
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f51-pooltext"));
					  });
					  timerName = "timerf52"
					timerf52 = setTimeout(function(){frame52Animation()}, 8000);  
			}});animation.play();
			}});animation.play();		
			}});animation.play();
			}});animation.play();	
	});
	// pool
		require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f51-pool"), mouse.enter, function(evt){
			dojo.style("f51pool_sml", "display", "none");
			dojo.style("f51pool", "display", "block");				  
	});});
	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f51-pool"), mouse.leave, function(evt){				  
			dojo.style("f51pool_sml", "display", "block");
			dojo.style("f51pool", "display", "none");
	});});
	
	// fridge
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f51-fridge"), mouse.enter, function(evt){
			dojo.style("f51fridge_sml", "display", "none");
			dojo.style("f51fridge", "display", "block");			  
	});});	
	require(["dojo/mouse", "dojo/on", "dojo/dom"], function(mouse, on, dom){
		on(dom.byId("f51-fridge"), mouse.leave, function(evt){				  
			dojo.style("f51fridge_sml", "display", "block");
			dojo.style("f51fridge", "display", "none");
	});});
	
	// pool click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f51-pool"), "click", function(){
			  poolClick();
		});
	});
document.getElementById('f51-pool').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  poolClick();
					}
				break;			
			}
};	
	// fridge click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f51-fridge"), "click", function(){
			  fridgeClick(); 
		});
	});
document.getElementById('f51-fridge').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  fridgeClick(); 
					}
				break;			
			}
};	
	// pooltext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f51-pooltext"), "click", function(){
			  poolClick();
		});
	});	
document.getElementById('f51-pooltext').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  poolClick();
					}
				break;			
			}
};	
	// fridgetext click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f51-fridgetext"), "click", function(){
			  fridgeClick();
		});
	});
document.getElementById('f51-fridgetext').onkeydown = function(evt) {
			evt = evt || window.event;			
			switch(evt.keyCode){
			  case 13:{
						  fridgeClick();
					}
				break;			
			}
};		
}
function frame52Animation(){
	frameID = 52;
	showFrameID(frameID);
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");
	showMainMenu();
	hideFrame51();
	showFrame52();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f52audio_ie8');
			ie8AudioPlay(a);
	}
	else{		
			vo=document.getElementById('f52Audio');
			vo.autoplay = true;
			if(audio52ready == 0){ audio52ready = 1;}	
			else{		
				vo.currentTime = 0; audio52ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f52-title", properties: {top:{start: -11, end: 19},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f52-sun", properties: {top:{start: -41, end: -16},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f52-cloud", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f52-pump", properties: {left:{start: 700, end: 720},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f52-pool", properties: {top:{start: 179, end: 170},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f52-splash", properties: {top:{start: 265, end: 271},opacity: { start: 0, end: 1 }},duration: 200, onEnd: function(){
					if( isIE8  === true){sesplashie8.play();}
					else{sesplash.play();}
				 	require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
				    });
				    timerName = "timerf53";
				    if( isIE8  === true){timerf53 = setTimeout(function(){frame53Animation()},10000);}
				    else{timerf53 = setTimeout(function(){frame53Animation()},playSec);	}
			}});animation.play();
			}});animation.play();		
			}});animation.play();
			}});animation.play();		
			}});animation.play();
			}});animation.play();	
	});
}
function frame53Animation(){
	frameID = 53;
	showFrameID(frameID);
	hideFrame52();	
	showFrame53();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
		//9s + 2s
			a=document.getElementById('f53audio_ie8');
			ie8AudioPlay(a);
	}
	else{		
			vo=document.getElementById('f53Audio');
			vo.autoplay = true;
			if(audio53ready == 0){ audio53ready = 1;}	
			else{		
				vo.currentTime = 0; audio53ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){sewhooshie8.play();}
			else{sewhoosh.play();}
			animation = fx.animateProperty({node: "f53-title", properties: {top:{start: -21, end: 15},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f53-apply", properties: {top:{start: 79, end: 115},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f53-apply"));
					  });
					  timerName = "timerf54";
					  if( isIE8  === true){timerf54 = setTimeout(function(){frame54Animation()},9000);	}
					  else{timerf54 = setTimeout(function(){frame54Animation()},playSec);	}
			}});animation.play();
			}});animation.play();
	});
}
function frame54Animation(){
	frameID = 54;
	showFrameID(frameID);
	hideFrame53();	
	showFrame54();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f54audio_ie8');
			ie8AudioPlay(a);	
	}
	else{		
			vo=document.getElementById('f54Audio');
			vo.autoplay = true;
			if(audio54ready == 0){ audio54ready = 1;}	
			else{		
				vo.currentTime = 0; audio54ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length			
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){sewhooshie8.play();}
			else{sewhoosh.play();}
			animation = fx.animateProperty({node: "f54-title", properties: {top:{start: -31, end: 25},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f52-pool", properties: {opacity: { start: 1, end: 0 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f54-pool", properties: {opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f54-wave", properties: {top:{start: 389, end: 351},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf55";
					  if( isIE8  === true){timerf55 = setTimeout(function(){frame55Animation()},16000);}
					  else{timerf55 = setTimeout(function(){frame55Animation()},playSec);}
			}});animation.play();
			}});animation.play();	
			}});animation.play();
			}});animation.play();
	});
}
function frame55Animation(){
	frameID = 55;
	showFrameID(frameID);	
	showFrame55();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f55audio_ie8');
			ie8AudioPlay(a);
	}
	else{		
			vo=document.getElementById('f55Audio');
			vo.autoplay = true;
			if(audio55ready == 0){ audio55ready = 1;}	
			else{		
				vo.currentTime = 0; audio55ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){iconPopie8.play();}
			else{iconPop.play();}
			animation = fx.animateProperty({node: "f55-bullet1", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f55-waterjar", properties: {left:{start: 530, end: 564},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
					if( isIE8  === true){sebubbleie8.play();}
					else{sebubble.play();}
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf56";
					  if( isIE8  === true){timerf56 = setTimeout(function(){frame56Animation()},9000);}
					  else{timerf56 = setTimeout(function(){frame56Animation()},playSec);}
			}});animation.play();
			}});animation.play();
	});
}
function frame56Animation(){
	frameID = 56;
	showFrameID(frameID);
	hideFrame55();
	showFrame56();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 10s+2s
			a=document.getElementById('f56audio_ie8');
			ie8AudioPlay(a);	
	}
	else{	
			vo=document.getElementById('f56Audio');
			vo.autoplay = true;
			if(audio56ready == 0){ audio56ready = 1;}	
			else{		
				vo.currentTime = 0; audio56ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length		
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){iconPopie8.play();}
			else{iconPop.play();}
			animation = fx.animateProperty({node: "f56-bullet2", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){seclockie8.play();}
				else{seclock.play();}
			animation = fx.animateProperty({node: "f56-clock", properties: {left:{start: 538, end: 558},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f56-3hour", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf57"
					if( isIE8  === true){timerf57 = setTimeout(function(){frame57Animation()},12000);	}
					else{timerf57 = setTimeout(function(){frame57Animation()},playSec);}  
			}});animation.play();
			}});animation.play();
			}});animation.play();
	});
}
function frame57Animation(){
	frameID = 57;
	showFrameID(frameID);
	hideFrame56();
	showFrame57();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f57audio_ie8');
			ie8AudioPlay(a);
	}
	else{		
			vo=document.getElementById('f57Audio');
			vo.autoplay = true;
			if(audio57ready == 0){ audio57ready = 1;}	
			else{		
				vo.currentTime = 0; audio57ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){iconPopie8.play();}
			else{iconPop.play();}
			animation = fx.animateProperty({node: "f57-bullet3", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){sesplashie8.play();}
				else{sesplash.play();}
			animation = fx.animateProperty({node: "f57-net", properties: {top:{start: 159, end: 206},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f57-leaves", properties: {top:{start: 339, end: 349},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f57-text", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf58";
					if( isIE8  === true){timerf58 = setTimeout(function(){frame58Animation()},13000);	}
					else{timerf58 = setTimeout(function(){frame58Animation()},playSec);	}  
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
	});
}
function frame58Animation(){
	frameID = 58;
	showFrameID(frameID);
	hideFrame57();
	showFrame58();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f58audio_ie8');
			ie8AudioPlay(a);	
	}
	else{		
			vo=document.getElementById('f58Audio');
			vo.autoplay = true;
			if(audio58ready == 0){ audio58ready = 1;}	
			else{		
				vo.currentTime = 0; audio58ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
			// 16 sec
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){iconPopie8.play();}
			else{iconPop.play();}
			animation = fx.animateProperty({node: "f58-bullet4", properties: {opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
				if( isIE8  === true){seclockie8.play();}
				else{seclock.play();}
			animation = fx.animateProperty({node: "f56-clock", properties: {left:{start: 538, end: 558},opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
			animation = fx.animateProperty({node: "f56-3hour", properties: {opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
			animation = fx.animateProperty({node: "f58-text", properties: {opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
				
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf59";
					  if( isIE8  === true){timerf59 = setTimeout(function(){frame59Animation()},16000);}
					  else{timerf59 = setTimeout(function(){frame59Animation()},playSec);}
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
	});
}
function frame59Animation(){
	frameID = 59;
	showFrameID(frameID);
	hideFrame58();
	showFrame59();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			// 12s+2s
			a=document.getElementById('f59audio_ie8');
			ie8AudioPlay(a);
	}
	else{			
			vo=document.getElementById('f59Audio');
			vo.autoplay = true;
			if(audio59ready == 0){ audio59ready = 1;}	
			else{		
				vo.currentTime = 0; audio59ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); // get voice length	
			// 12 sec
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){iconPopie8.play();}
			else{iconPop.play();}
			animation = fx.animateProperty({node: "f59-bullet5", properties: {opacity: { start: 0, end: 1 }},duration: 700, onEnd: function(){
			animation = fx.animateProperty({node: "f59-drain1", properties: {top:{start: 329, end: 359},opacity: { start: 0, end: 1 }},duration: 700, onEnd: function(){
				if( isIE8  === true){sebubbleie8.play();}
				else{sebubble.play();}
			animation = fx.animateProperty({node: "f59-bubble1", properties: {top:{start:339, end: 324},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f59-drain2", properties: {top:{start: 329, end: 359},opacity: { start: 0, end: 1 }},duration: 700, onEnd: function(){
			animation = fx.animateProperty({node: "f59-bubble2", properties: {top:{start: 339, end: 324},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
			animation = fx.animateProperty({node: "f59-drain3", properties: {top:{start: 329, end: 359},opacity: { start: 0, end: 1 }},duration: 700, onEnd: function(){
			animation = fx.animateProperty({node: "f59-bubble3", properties: {top:{start: 339, end: 324},opacity: { start: 0, end: 1 }},duration: 400, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf60";
					if( isIE8  === true){timerf60 = setTimeout(function(){frame60Animation()},14000);}
					else{timerf60 = setTimeout(function(){frame60Animation()},playSec);	}  
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();	
	});
}
function frame60Animation(){
	frameID = 60;
	showFrameID(frameID);
	dojo.removeClass("frame1","bluebg");
	dojo.addClass("frame1","yellowbg");		
	hideFrame59();
	showFrame60();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f60audio_ie8');
			ie8AudioPlay(a);
	}
	else{		
			vo=document.getElementById('f60Audio');
			vo.autoplay = true;
			if(audio60ready == 0){ audio60ready = 1;}	
			else{		
				vo.currentTime = 0; audio60ready = 1;
			}
			vo.play();		
	}
	// 12 sec 6 here
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f60-sun", properties: {top:{start: -31, end: 7},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f60-cloud", properties: {top:{start: -21, end: 15},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f60-mountain", properties: {top:{start: 319, end: 297},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f60-grass", properties: {top:{start: 359, end: 308},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f60-title", properties: {top:{start: -21, end: 26},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f60-fridge", properties: {top:{start: 159, end: 135},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf61";
					  timerf61 = setTimeout(function(){frame61Animation()},6000);	
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();	
	});
}
function frame61Animation(){
	frameID = 61;
	showFrameID(frameID);
	hideFrame60();
	showFrame61();
	getScriptforFrameID(frameID); // get closed caption script
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f61-fridge", properties: {opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
				timerf62 = setTimeout(function(){frame62Animation()}, 6000);	
			}});animation.play();
	});
}
function frame62Animation(){
	frameID = 62;
	showFrameID(frameID);
	hideFrame61();
	showFrame62();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f62audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f62Audio');
			vo.autoplay = true;
			if(audio62ready == 0){ audio62ready = 1;}	
			else{		
				vo.currentTime = 0; audio62ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo); 
			// 11 sec	
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f62-title", properties: {top:{start: -11, end: 23},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f62-energystar", properties: {left:{start: 580, end: 610}, top:{start: 98, end: 113}, opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf63";
					  if( isIE8  === true){timerf63 = setTimeout(function(){frame63Animation()},11000);}
					  else{timerf63 = setTimeout(function(){frame63Animation()},playSec);}
			}});animation.play();
			}});animation.play();
	});
}
function frame63Animation(){
	frameID = 63;
	showFrameID(frameID);
	hideFrame62();
	showFrame63();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f63audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f63Audio');
			vo.autoplay = true;
			if(audio63ready == 0){ audio63ready = 1;}	
			else{		
				vo.currentTime = 0; audio63ready = 1;
			}
			vo.play();		
	}
	require(["dojo/_base/fx"], function(fx){
			if( isIE8  === true){f63tie8.play();}
			else{f63t.play();}
			animation = fx.animateProperty({node: "f63-title", properties: {opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
			animation = fx.animateProperty({node: "f63-truck", properties: {left:{start: 290, end: 265},opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
			animation = fx.animateProperty({node: "f63-dollyfridge", properties: {left:{start:700, end: 658},opacity: { start: 0, end: 1 }},duration: 1000, onEnd: function(){
				if( isIE8  === true){semoneyie8.play();}
				else{semoney.play();}	
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("menu3"));
					  });
					  timerName = "timerf64";
					  timerf64 = setTimeout(function(){frame64Animation()},12000);	
			}});animation.play();
			}});animation.play();
			}});animation.play();
	});
}
function frame64Animation(){
	frameID = 64;
	showFrameID(frameID);
	hideFrame63();
	showFrame64();
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){ 
			// 12s + 2s
			a=document.getElementById('f64audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f64Audio');
			vo.autoplay = true;
			if(audio64ready == 0){ audio64ready = 1;}	
			else{		
				vo.currentTime = 0; audio64ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo);
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f64-title", properties: {top:{start: 109, end: 144},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f64-ac", properties: {top:{start: 179, end: 208},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
			animation = fx.animateProperty({node: "f64-pool", properties: {top:{start: 179, end: 208},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){	
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f64-ac"));
					  });
					  timerName = "timerf65";
					  if( isIE8  === true){timerf65 = setTimeout(function(){frame65Animation()},14000); }
					  else{timerf65 = setTimeout(function(){frame65Animation()},playSec);}
			}});animation.play();
			}});animation.play();
			}});animation.play();
	});
	// ac click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f64-ac"), "click", function(){
			  acClick();
		});
	});
	document.getElementById('f64-ac').onkeydown = function(evt) {
				evt = evt || window.event;			
				switch(evt.keyCode){
				  case 13:{
							  acClick();
						}
					break;			
				}
	};	
	// pool click
	require(["dojo/html", "dojo/dom", "dojo/on", "dojo/domReady!"],
  	function(html, dom, on){
		on(dom.byId("f64-pool"), "click", function(){
			poolClick(); 	 
		});
	});
	document.getElementById('f64-pool').onkeydown = function(evt) {
				evt = evt || window.event;			
				switch(evt.keyCode){
				  case 13:{
							  poolClick(); 
						}
					break;			
				}
	};	
}
function frame65Animation(){
	frameID = 65;
	showFrameID(frameID);
	showMainMenu();
	dojo.removeClass("frame1","yellowbg");
	dojo.addClass("frame1","bluebg");	
	activeMenu4();
	hideFrame64();
	showFrame65();
	getScriptforFrameID(frameID); // get closed caption script

	if( isIE8  === true){
			a=document.getElementById('f65audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f65Audio');
			vo.autoplay = true;
			if(audio65ready == 0){ audio65ready = 1;}	
			else{		
				vo.currentTime = 0; audio65ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo);
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f65-sun", properties: {top:{start: -31, end: -6},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f65-cloud", properties: {top:{start: -11, end: 28},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f65-mountain", properties: {top:{start: 289, end: 269},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f65-tree", properties: {top:{start: 319, end: 334},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f65-fruittree", properties: {top:{start: 249, end: 277},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f65-house", properties: {top:{start: 359, end: 322},opacity: { start: 0, end: 1 }},duration: 500, onEnd: function(){
			animation = fx.animateProperty({node: "f65-myaccount", properties: {top:{start: -41, end: 17},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f65-myaccount"));
					  });	
					  timerName = "timerf66";
					  if( isIE8  === true){timerf66 = setTimeout(function(){frame66Animation()},10000);}
					  else{timerf66 = setTimeout(function(){frame66Animation()},playSec);}		
			}});animation.play();
			}});animation.play();	
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
			}});animation.play();
	});	
}
function frame66Animation(){
	frameID = 66;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
		if( isIE8  === true){
			a=document.getElementById('f66audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f66Audio');
			vo.autoplay = true;
			if(audio66ready == 0){ audio66ready = 1;}	
			else{		
				vo.currentTime = 0; audio66ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo);
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f65-budget", properties: {top:{start: 19, end: 55},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f65-budget"));
					  });	
					  timerName = "timerf67";
				  if( isIE8  === true){timerf67 = setTimeout(function(){frame67Animation()},10000);}
				  else{timerf67 = setTimeout(function(){frame67Animation()},playSec);}
			}});animation.play();
	});
}
function frame67Animation(){
	frameID = 67;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f67audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f67Audio');
			vo.autoplay = true;
			if(audio67ready == 0){ audio67ready = 1;}	
			else{		
				vo.currentTime = 0; audio67ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo);
	}	
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f65-savepower", properties: {top:{start: 58, end: 97},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f65-savepower"));
					  });
					  timerName ="timerf68";
					if( isIE8  === true){timerf68 = setTimeout(function(){frame68Animation()},14000);}
					else{timerf68 = setTimeout(function(){frame68Animation()},playSec);}  
			}});animation.play();
	});	
}
function frame68Animation(){
	frameID = 68;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f68audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f68Audio');
			vo.autoplay = true;
			if(audio68ready == 0){ audio68ready = 1;}	
			else{		
				vo.currentTime = 0; audio68ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo);
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f65-rebates", properties: {top:{start: 117, end: 139},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f65-rebates"));
					  });	
					  timerName ="timerf69";
					  if( isIE8  === true){timerf69 = setTimeout(function(){frame69Animation()},7000);}
					  else{timerf69 = setTimeout(function(){frame69Animation()},playSec);}
			}});animation.play();
	});
}

function frame69Animation(){
	frameID = 69;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f69audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f69Audio');
			vo.autoplay = true;
			if(audio69ready == 0){ audio69ready = 1;}	
			else{		
				vo.currentTime = 0; audio69ready = 1;
			}
			vo.play();		
			playSec = getScriptTime(vo);	
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f65-video", properties: {top:{start: 159, end: 183},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f65-video"));
					  });
					  timerName = "timerf70";	
				if( isIE8  === true){timerf70 = setTimeout(function(){frame70Animation()},6000);	}
				else{timerf70 = setTimeout(function(){frame70Animation()},playSec);	}	  
			}});animation.play();
	});
}
function frame70Animation(){
	frameID = 70;
	showFrameID(frameID);
	getScriptforFrameID(frameID); // get closed caption script
	if( isIE8  === true){
			a=document.getElementById('f70audio_ie8');
			ie8AudioPlay(a);
	}
	else{	
			vo=document.getElementById('f70Audio');
			vo.autoplay = true;
			if(audio70ready == 0){ audio70ready = 1;}	
			else{		
				vo.currentTime = 0; audio70ready = 1;
			}
			vo.play();
	}
	require(["dojo/_base/fx"], function(fx){
			animation = fx.animateProperty({node: "f65-baselinerate", properties: {top:{start: 212, end: 226},opacity: { start: 0, end: 1 }},duration: 300, onEnd: function(){
				  require([ "dijit/focus", "dojo/dom", "dojo/domReady!" ], function(focusUtil, dom){
						  focusUtil.focus(dom.byId("f65-baselinerate"));
					  });
			}});animation.play();
	});
}
function acClick(){
	clickHandle("internal");
	timerName = "timerf38";
	frame38Animation();
}
function poolClick(){
	clickHandle("internal");
	timerName = "timerf52";
	frame52Animation();
}
function fridgeClick(){
	clickHandle("internal");
	timerName = "timerf60";
	frame60Animation();
}

function showFrame1()
{
	dojo.style("f1-cloud", "display", "block");
	dojo.style("f1-cloud", "opacity", "0");
	dojo.style("f1-sun", "display", "block");
	dojo.style("f1-sun", "opacity", "0");
	dojo.style("f1-grass", "display", "block");
	dojo.style("f1-grass", "opacity", "0");
	dojo.style("f1-logo", "display", "block");
	dojo.style("f1-logo", "opacity", "0");

	dojo.style("mainmenu", "display", "block");
	dojo.style("mainmenu", "opacity", "0");
}
function hideFrame1(){
	dojo.style("f1-logo", "opacity", "0");
	dojo.style("f1-sun", "opacity", "1");
	
	dojo.style("f1-logo", "display", "none");
    dojo.style("f1-sun", "display", "block");
}
function showFrame2(){
	dojo.style("f2-maintitle", "display", "block");
	dojo.style("f2-maintitle", "opacity", "0");
	dojo.style("f2-subtitle", "display", "block");
	dojo.style("f2-subtitle", "opacity", "0");
	dojo.style("f2-bottomtitle", "display", "block");
	dojo.style("f2-bottomtitle", "opacity", "0");	
	dojo.style("f1-grass", "display", "block");
	dojo.style("f1-grass", "opacity", "0");
	dojo.style("f1-sun", "display", "block");
	dojo.style("f1-sun", "opacity", "1");
}
function hideFrame2(){
	dojo.style("f2-maintitle", "display", "none");
	dojo.style("f2-maintitle", "opacity", "0");
	dojo.style("f2-subtitle", "display", "none");
	dojo.style("f2-subtitle", "opacity", "0");
	dojo.style("f2-bottomtitle", "display", "none");
	dojo.style("f2-bottomtitle", "opacity", "0");
}
function showFrame3(){
	dojo.style("f3-maintitle", "display", "block");
	dojo.style("f3-maintitle", "opacity", "0");
	dojo.style("f3-link", "display", "block");
	dojo.style("f3-link", "opacity", "0");
	dojo.style("f3-question", "display", "block");
	dojo.style("f3-question", "opacity", "0");
	dojo.style("f1-grass", "display", "block");
	dojo.style("f1-grass", "opacity", "1");
	dojo.style("f1-sun", "display", "block");
	dojo.style("f1-sun", "opacity", "1");	
}

function hideFrame3(){
	dojo.style("f1-sun", "display", "none");
	dojo.style("f1-sun", "opacity", "0");
	dojo.style("f3-maintitle", "display", "none");
	dojo.style("f3-maintitle", "opacity", "0");
	dojo.style("f3-link", "display", "none");
	dojo.style("f3-link", "opacity", "0");
	dojo.style("f3-question", "display", "none");
	dojo.style("f3-question", "opacity", "0");	
	dojo.style("f1-cloud", "display", "none");
	dojo.style("f1-grass", "display", "none");	
	dojo.style("f1-cloud", "opacity", "0");
	dojo.style("f1-grass", "opacity", "0");
}

function showFrame4(){
	dojo.style("f4-bill", "display", "block");
	dojo.style("f4-bill", "opacity", "0");
	dojo.style("f4-qcharge", "display", "block");
	dojo.style("f4-qcharge", "opacity", "0");
	dojo.style("f4-qtier", "display", "block");
	dojo.style("f4-qtier", "opacity", "0");
	dojo.style("f4-qkwh", "display", "block");
	dojo.style("f4-qkwh", "opacity", "0");
	dojo.style("f4-qbasics", "display", "block");
	dojo.style("f4-qbasics", "opacity", "0");		
		
}
function hideFrame4(){
	dojo.style("f4-bill", "display", "none");
	dojo.style("f4-qcharge", "display", "none");
	dojo.style("f4-qtier", "display", "none");
	dojo.style("f4-qkwh", "display", "none");
	dojo.style("f4-qbasics", "display", "none");	
	dojo.style("f4-bill", "opacity", "0");
	dojo.style("f4-qcharge", "opacity", "0");
	dojo.style("f4-qtier", "opacity", "0");
	dojo.style("f4-qkwh", "opacity", "0");
	dojo.style("f4-qbasics", "opacity", "0");	
		
}

function showFrame5(){
	dojo.style("f5-bill", "display", "block");
	dojo.style("f5-bill", "opacity", "0");
	dojo.style("f5-bg", "display", "block");
	dojo.style("f5-bg", "opacity", "0");
	dojo.style("f5-kwh", "display", "block");
	dojo.style("f5-kwh", "opacity", "0");
	
}
function hideFrame5(){
	dojo.style("f5-bill", "display", "none");	
	dojo.style("f5-kwh", "display", "none");	
	dojo.style("f5-bill", "opacity", "0");
	dojo.style("f5-kwh", "opacity", "0");	
}

function showFrame6(){
	dojo.style("f6-title", "display", "block");
	dojo.style("f6-title", "opacity", "0");
	dojo.style("f6-equal", "display", "block");
	dojo.style("f6-equal", "opacity", "0");
	dojo.style("f6-hours", "display", "block");
	dojo.style("f6-hours", "opacity", "0");	
}
function hideFrame6(){
	dojo.style("f6-title", "display", "none");
	dojo.style("f6-title", "opacity", "0");
	dojo.style("f6-equal", "display", "none");
	dojo.style("f6-equal", "opacity", "0");
	dojo.style("f6-hours", "display", "none");
	dojo.style("f6-hours", "opacity", "0");	
}
function showFrame7(){
	dojo.style("f7-lightbulb", "display", "block");
	dojo.style("f7-lightbulb", "opacity", "0");
	dojo.style("f7-watts", "display", "block");
	dojo.style("f7-watts", "opacity", "0");
}

function showFrame8(){
	dojo.style("f8-clock", "display", "block");
	dojo.style("f8-clock", "opacity", "0");
	dojo.style("f8-x", "display", "block");
	dojo.style("f8-x", "opacity", "0");
	dojo.style("f8-hours", "display", "block");
	dojo.style("f8-hours", "opacity", "0");
}

function hideFrame8(){
	dojo.style("f7-lightbulb", "display", "none");
	dojo.style("f7-lightbulb", "opacity", "0");
	dojo.style("f8-clock", "display", "none");
	dojo.style("f8-clock", "opacity", "0");
	dojo.style("f7-watts", "display", "none");
	dojo.style("f7-watts", "opacity", "0");
	dojo.style("f8-x", "display", "none");
	dojo.style("f8-x", "opacity", "0");
	dojo.style("f8-hours", "display", "none");
	dojo.style("f8-hours", "opacity", "0");
}

function showFrame9(){	
	dojo.style("f9-lb1", "display", "block");
	dojo.style("f9-lb2", "display", "block");
	dojo.style("f9-lb3", "display", "block");
	dojo.style("f9-lb4", "display", "block");
	dojo.style("f9-lb5", "display", "block");
	dojo.style("f9-lb6", "display", "block");
	dojo.style("f9-lb7", "display", "block");
	dojo.style("f9-lb8", "display", "block");
	dojo.style("f9-lb9", "display", "block");
	dojo.style("f9-lb10", "display", "block");
    dojo.style("f9-10", "display", "block");
	dojo.style("f9-x", "display", "block");
	dojo.style("f9-watts", "display", "block");
	dojo.style("f9-x1", "display", "block");
	dojo.style("f9-hour", "display", "block");
	
	dojo.style("f9-lb1", "opacity", "0");
	dojo.style("f9-lb2", "opacity", "0");
	dojo.style("f9-lb3", "opacity", "0");
	dojo.style("f9-lb4", "opacity", "0");
	dojo.style("f9-lb5", "opacity", "0");
	dojo.style("f9-lb6", "opacity", "0");
	dojo.style("f9-lb7", "opacity", "0");
	dojo.style("f9-lb8", "opacity", "0");
	dojo.style("f9-lb9", "opacity", "0");
	dojo.style("f9-lb10", "opacity", "0");
    dojo.style("f9-10", "opacity", "0");
	dojo.style("f9-x", "opacity", "0");
	dojo.style("f9-watts", "opacity", "0");
	dojo.style("f9-x1", "opacity", "0");
	dojo.style("f9-hour", "opacity", "0");
}

function hideFrame9(){	
	dojo.style("f9-lb1", "display", "none");
	dojo.style("f9-lb2", "display", "none");
	dojo.style("f9-lb3", "display", "none");
	dojo.style("f9-lb4", "display", "none");
	dojo.style("f9-lb5", "display", "none");
	dojo.style("f9-lb6", "display", "none");
	dojo.style("f9-lb7", "display", "none");
	dojo.style("f9-lb8", "display", "none");
	dojo.style("f9-lb9", "display", "none");
	dojo.style("f9-lb10", "display", "none");
    dojo.style("f9-10", "display", "none");
	dojo.style("f9-x", "display", "none");
	dojo.style("f9-watts", "display", "none");
	dojo.style("f9-x1", "display", "none");
	dojo.style("f9-hour", "display", "none");
	
	dojo.style("f9-lb1", "opacity", "0");
	dojo.style("f9-lb2", "opacity", "0");
	dojo.style("f9-lb3", "opacity", "0");
	dojo.style("f9-lb4", "opacity", "0");
	dojo.style("f9-lb5", "opacity", "0");
	dojo.style("f9-lb6", "opacity", "0");
	dojo.style("f9-lb7", "opacity", "0");
	dojo.style("f9-lb8", "opacity", "0");
	dojo.style("f9-lb9", "opacity", "0");
	dojo.style("f9-lb10", "opacity", "0");
    dojo.style("f9-10", "opacity", "0");
	dojo.style("f9-x", "opacity", "0");
	dojo.style("f9-watts", "opacity", "0");
	dojo.style("f9-x1", "opacity", "0");
	dojo.style("f9-hour", "opacity", "0");
}

function showFrame10(){
	dojo.style("f10-house", "display", "block");
	dojo.style("f10-house", "opacity", "0");
	dojo.style("f10-tv", "display", "block");
	dojo.style("f10-tv", "opacity", "0");
	dojo.style("f10-tree", "display", "block");
	dojo.style("f10-tree", "opacity", "0");
	dojo.style("f10-land", "display", "block");
	dojo.style("f10-land", "opacity", "0");
	dojo.style("f10-title", "display", "block");
	dojo.style("f10-title", "opacity", "0");	
	dojo.style("f10-text", "display", "block");
	dojo.style("f10-text", "opacity", "0");
}

function hideFrame10(){
	dojo.style("f5-bg", "display", "none");
	dojo.style("f10-title", "display", "none");
	dojo.style("f5-bg", "opacity", "0");
	dojo.style("f10-title", "opacity", "0");
}

function showFrame11(){
	dojo.style("f11-nightbg", "display", "block");
	dojo.style("f11-nightbg", "opacity", "0");
	dojo.style("f11-moon", "display", "block");
	dojo.style("f11-moon", "opacity", "0");
	dojo.style("f11-stars", "display", "block");
	dojo.style("f11-stars", "opacity", "0");	
	dojo.style("f11-washer", "display", "block");
	dojo.style("f11-washer", "opacity", "0");
	dojo.style("f11-laundry", "display", "block");
	dojo.style("f11-laundry", "opacity", "0");
}

function hideFrame11(){
	dojo.style("f11-moon", "display", "none");
	dojo.style("f11-moon", "opacity", "0");
	dojo.style("f11-laundry", "display", "none");
	dojo.style("f11-laundry", "opacity", "0");	
}

function showFrame12(){
	// change moon opacity to 1, only move up
	dojo.style("f12-moon", "display", "block");
	dojo.style("f12-moon", "opacity", "1");
	dojo.style("f12-computer", "display", "block");
	dojo.style("f12-computer", "opacity", "0");
	dojo.style("f12-title", "display", "block");
	dojo.style("f12-title", "opacity", "0");	

}

function hideFrame12(){

	dojo.style("f12-moon", "display", "none");
	dojo.style("f12-moon", "opacity", "0");	
	dojo.style("f12-computer", "display", "none");
	dojo.style("f12-computer", "opacity", "0");	
	dojo.style("f12-title", "display", "none");
	dojo.style("f12-title", "opacity", "0");
	
	dojo.style("f11-nightbg", "display", "none");
	dojo.style("f11-nightbg", "opacity", "0");
	dojo.style("f11-stars", "display", "none");
	dojo.style("f11-stars", "opacity", "0");	
	dojo.style("f11-washer", "display", "none");
	dojo.style("f11-washer", "opacity", "0");	
	
	dojo.style("f10-house", "display", "none");
	dojo.style("f10-house", "opacity", "0");
	dojo.style("f10-tv", "display", "none");
	dojo.style("f10-tv", "opacity", "0");
	dojo.style("f10-tree", "display", "none");
	dojo.style("f10-tree", "opacity", "0");	
	dojo.style("f10-land", "display", "none");
	dojo.style("f10-land", "opacity", "0");
	dojo.style("f10-text", "display", "none");
	dojo.style("f10-text", "opacity", "0");	
}

function showFrame13(){
	dojo.style("f13-bg", "display", "block");
	dojo.style("f13-bg", "opacity", "0");
	dojo.style("f13-kwh", "display", "block");
	dojo.style("f13-kwh", "opacity", "0");
	dojo.style("f13-equal", "display", "block");
	dojo.style("f13-equal", "opacity", "0");
	dojo.style("f13-cent", "display", "block");
	dojo.style("f13-cent", "opacity", "0");
	dojo.style("f13-bar1", "display", "block");
	dojo.style("f13-bar1", "opacity", "0");
	dojo.style("f13-bar2", "display", "block");
	dojo.style("f13-bar2", "opacity", "0");
	dojo.style("f13-bar3", "display", "block");
	dojo.style("f13-bar3", "opacity", "0");	
	dojo.style("f13-legal", "display", "block");
	dojo.style("f13-legal", "opacity", "0");
	
}

function hideFrame13(){
	dojo.style("f13-kwh", "display", "none");
	dojo.style("f13-equal", "display", "none");
	dojo.style("f13-cent", "display", "none");

	dojo.style("f13-kwh", "opacity", "0");
	dojo.style("f13-equal", "opacity", "0");
	dojo.style("f13-cent", "opacity", "0");
	dojo.style("f13-bar1", "display", "none");
	dojo.style("f13-bar1", "opacity", "0");
	dojo.style("f13-bar2", "display", "none");
	dojo.style("f13-bar2", "opacity", "0");
	dojo.style("f13-bar3", "display", "none");
	dojo.style("f13-bar3", "opacity", "0");	
	dojo.style("f13-legal", "display", "none");
	dojo.style("f13-legal", "opacity", "0");

}

function showFrame14(){
	dojo.style("f14-map", "display", "block");
	dojo.style("f14-title", "display", "block");
	dojo.style("f14-map", "opacity", "0");
	dojo.style("f14-title", "opacity", "0");
	
}

function hideFrame14(){
	dojo.style("f14-map", "display", "none");
	dojo.style("f14-title", "display", "none");
	dojo.style("f14-map", "opacity", "0");
	dojo.style("f14-title", "opacity", "0");

}

function showFrame15(){
	dojo.style("f15-sky", "display", "block");
	dojo.style("f15-sky", "opacity", "0");
	dojo.style("f15-season", "display", "block");
	dojo.style("f15-season", "opacity", "0");	
	dojo.style("f15-suncloud", "display", "block");
	dojo.style("f15-suncloud", "opacity", "0");
	dojo.style("f15-mooncloud", "display", "block");
	dojo.style("f15-mooncloud", "opacity", "0");
	dojo.style("f15-rain", "display", "block");
	dojo.style("f15-rain", "opacity", "0");
	dojo.style("f15-beach", "display", "block");
	dojo.style("f15-beach", "opacity", "0");
	dojo.style("f15-mountain", "display", "block");
	dojo.style("f15-mountain", "opacity", "0");

}

function hideFrame15(){
	dojo.style("f15-sky", "display", "none");
	dojo.style("f15-sky", "opacity", "0");
	dojo.style("f15-season", "display", "none");
	dojo.style("f15-season", "opacity", "0");	
	dojo.style("f15-suncloud", "display", "none");
	dojo.style("f15-suncloud", "opacity", "0");
	dojo.style("f15-mooncloud", "display", "none");
	dojo.style("f15-mooncloud", "opacity", "0");
	dojo.style("f15-rain", "display", "none");
	dojo.style("f15-rain", "opacity", "0");
	dojo.style("f15-beach", "display", "none");
	dojo.style("f15-beach", "opacity", "0");
	dojo.style("f15-mountain", "display", "none");
	dojo.style("f15-mountain", "opacity", "0");
}

function showFrame16(){
	dojo.style("f13-bg", "display", "block");
	dojo.style("f13-bg", "opacity", "1");	
	dojo.style("f16-clock", "display", "block");
	dojo.style("f16-clock", "opacity", "0");
	dojo.style("f16-meter", "display", "block");
	dojo.style("f16-meter", "opacity", "0");	
}

function hideFrame16(){
	dojo.style("f16-clock", "display", "none");
	dojo.style("f16-meter", "display", "none");
	dojo.style("f16-clock", "opacity", "0");
	dojo.style("f16-meter", "opacity", "0");
	dojo.style("f13-bg", "display", "none");
	dojo.style("f13-bg", "opacity", "0");		
}

function showFrame17(){


	dojo.style("f17-title", "display", "block");
	dojo.style("f17-title", "opacity", "0");
	dojo.style("f17-actext", "display", "block");
	dojo.style("f17-actext", "opacity", "0");
	dojo.style("f17-ac", "display", "block");
	dojo.style("f17-ac", "opacity", "0");
	dojo.style("f17-pooltext", "display", "block");
	dojo.style("f17-pooltext", "opacity", "0");
	dojo.style("f17-pool", "display", "block");
	dojo.style("f17-pool", "opacity", "0");
	dojo.style("f17-fridgetext", "display", "block");
	dojo.style("f17-fridgetext", "opacity", "0");	
	dojo.style("f17-fridge", "display", "block");
	dojo.style("f17-fridge", "opacity", "0");
	dojo.style("f17-continue", "display", "block");
	dojo.style("f17-continue", "opacity", "0");	
	dojo.style("f17-question", "display", "block");
	dojo.style("f17-question", "opacity", "0");	
}

function hideFrame17(){
	dojo.style("f17-title", "display", "none");
	dojo.style("f17-title", "opacity", "0");
	dojo.style("f17-actext", "display", "none");
	dojo.style("f17-actext", "opacity", "0");
	dojo.style("f17-ac", "display", "none");
	dojo.style("f17-ac", "opacity", "0");
	dojo.style("f17-pooltext", "display", "none");
	dojo.style("f17-pooltext", "opacity", "0");
	dojo.style("f17-pool", "display", "none");
	dojo.style("f17-pool", "opacity", "0");
	dojo.style("f17-fridgetext", "display", "none");
	dojo.style("f17-fridgetext", "opacity", "0");	
	dojo.style("f17-fridge", "display", "none");
	dojo.style("f17-fridge", "opacity", "0");
	dojo.style("f17-continue", "display", "none");
	dojo.style("f17-continue", "opacity", "0");	
	dojo.style("f17-question", "display", "none");
	dojo.style("f17-question", "opacity", "0");	
}

function showFrame18(){

	dojo.style("f18-cloud", "display", "block");
	dojo.style("f18-cloud", "opacity", "0");
	dojo.style("f18-gentext", "display", "block");
	dojo.style("f18-gentext", "opacity", "0");
	dojo.style("f18-gen", "display", "block");
	dojo.style("f18-gen", "opacity", "0");
	dojo.style("f18-deltext", "display", "block");
	dojo.style("f18-deltext", "opacity", "0");
	dojo.style("f18-del", "display", "block");
	dojo.style("f18-del", "opacity", "0");
	dojo.style("f18-grass", "display", "block");
	dojo.style("f18-grass", "opacity", "0");

}

function hideFrame18(){
	dojo.style("f18-cloud", "display", "none");
	dojo.style("f18-cloud", "opacity", "0");
	dojo.style("f18-gentext", "display", "none");
	dojo.style("f18-gentext", "opacity", "0");
	dojo.style("f18-gen", "display", "none");
	dojo.style("f18-gen", "opacity", "0");
	dojo.style("f18-deltext", "display", "none");
	dojo.style("f18-deltext", "opacity", "0");
	dojo.style("f18-del", "display", "none");
	dojo.style("f18-del", "opacity", "0");
	dojo.style("f18-grass", "display", "none");
	dojo.style("f18-grass", "opacity", "0");
}

function showFrame19(){
	dojo.style("f19-text1", "display", "block"); 
	dojo.style("f19-text1", "opacity", "0");	
	dojo.style("f19-text2", "display", "block");
	dojo.style("f19-text2", "opacity", "0");
	dojo.style("f19-text3", "display", "block");
	dojo.style("f19-text3", "opacity", "0");
	dojo.style("f19-s1", "display", "block");
	dojo.style("f19-s1", "opacity", "0");
	dojo.style("f19-s2", "display", "block");
	dojo.style("f19-s2", "opacity", "0");
	dojo.style("f19-s3", "display", "block");
	dojo.style("f19-s3", "opacity", "0");
	dojo.style("f19-cash1", "display", "block");
	dojo.style("f19-cash1", "opacity", "0");
	dojo.style("f19-cash2", "display", "block");
	dojo.style("f19-cash2", "opacity", "0");
	dojo.style("f19-cash3", "display", "block");
	dojo.style("f19-cash3", "opacity", "0");
}

function hideFrame19(){
	dojo.style("f19-text1", "display", "none"); 
	dojo.style("f19-text1", "opacity", "0");	
	dojo.style("f19-text2", "display", "none");
	dojo.style("f19-text2", "opacity", "0");
	dojo.style("f19-text3", "display", "none");
	dojo.style("f19-text3", "opacity", "0");
	dojo.style("f19-s1", "display", "none");
	dojo.style("f19-s1", "opacity", "0");
	dojo.style("f19-s2", "display", "none");
	dojo.style("f19-s2", "opacity", "0");
	dojo.style("f19-s3", "display", "none");
	dojo.style("f19-s3", "opacity", "0");
	dojo.style("f19-cash1", "display", "none");
	dojo.style("f19-cash1", "opacity", "0");
	dojo.style("f19-cash2", "display", "none");
	dojo.style("f19-cash2", "opacity", "0");
	dojo.style("f19-cash3", "display", "none");
	dojo.style("f19-cash3", "opacity", "0");
}

function showFrame20(){
	dojo.style("f20-bar1", "display", "block"); 
	dojo.style("f20-bar1", "opacity", "0");	
	dojo.style("f20-label1", "display", "block");
	dojo.style("f20-label1", "opacity", "0");
	dojo.style("f20-bar2", "display", "block");
	dojo.style("f20-bar2", "opacity", "0");
	dojo.style("f20-label2", "display", "block");
	dojo.style("f20-label2", "opacity", "0");
	dojo.style("f18-cloud", "display", "block");
	dojo.style("f18-cloud", "opacity", "0");	
}

function hideFrame20(){
	dojo.style("f20-bar1", "display", "none"); 
	dojo.style("f20-bar1", "opacity", "0");	
	dojo.style("f20-label1", "display", "none");
	dojo.style("f20-label1", "opacity", "0");
	dojo.style("f20-bar2", "display", "none");
	dojo.style("f20-bar2", "opacity", "0");
	dojo.style("f20-label2", "display", "none");
	dojo.style("f20-label2", "opacity", "0");
	dojo.style("f18-cloud", "display", "none");
	dojo.style("f18-cloud", "opacity", "0");	
}
function showFrame21(){
	dojo.style("f21-grass", "display", "block"); 
	dojo.style("f21-grass", "opacity", "0");	
	dojo.style("f21-greenbox", "display", "block");
	dojo.style("f21-greenbox", "opacity", "0");
	dojo.style("f21-text", "display", "block");
	dojo.style("f21-text", "opacity", "0");
}
function showFrame22(){
	dojo.style("f22-yellowbox", "display", "block");
	dojo.style("f22-yellowbox", "opacity", "0");
	dojo.style("f22-text", "display", "block");
	dojo.style("f22-text", "opacity", "0");
}
function showFrame23(){
	dojo.style("f23-yellowbox", "display", "block");
	dojo.style("f23-yellowbox", "opacity", "0");
	dojo.style("f23-text", "display", "block");
	dojo.style("f23-text", "opacity", "0");
}
function hideFrame23(){
	dojo.style("f23-yellowbox", "display", "none");
	dojo.style("f23-yellowbox", "opacity", "0");
	dojo.style("f23-text", "display", "none");
	dojo.style("f23-text", "opacity", "0");
	
	dojo.style("f21-grass", "display", "none"); 
	dojo.style("f21-grass", "opacity", "0");	
	dojo.style("f21-greenbox", "display", "none");
	dojo.style("f21-greenbox", "opacity", "0");
	dojo.style("f21-text", "display", "none");
	dojo.style("f21-text", "opacity", "0");
	
	dojo.style("f22-yellowbox", "display", "none");
	dojo.style("f22-yellowbox", "opacity", "0");
	dojo.style("f22-text", "display", "none");
	dojo.style("f22-text", "opacity", "0");
}

function showFrame24(){
	dojo.style("f24-greenbox", "display", "block");
	dojo.style("f24-greenbox", "opacity", "0");
	dojo.style("f24-tier1text", "display", "block");
	dojo.style("f24-tier1text", "opacity", "0");
	dojo.style("f24-tier2bar", "display", "block");
	dojo.style("f24-tier2bar", "opacity", "0");
	dojo.style("f24-tier2text", "display", "block");
	dojo.style("f24-tier2text", "opacity", "0");
	dojo.style("f24-tier3bar", "display", "block");
	dojo.style("f24-tier3bar", "opacity", "0");
	dojo.style("f24-tier3text", "display", "block");
	dojo.style("f24-tier3text", "opacity", "0");	
}
function showFrame25(){
	dojo.style("f25-word1", "display", "block");
	dojo.style("f25-word1", "opacity", "0");
	dojo.style("f25-word2", "display", "block");
	dojo.style("f25-word2", "opacity", "0");
	dojo.style("f25-word3", "display", "block");
	dojo.style("f25-word3", "opacity", "0");
	dojo.style("f25-disclaimer", "display", "block");
	dojo.style("f25-disclaimer", "opacity", "0");	
	dojo.style("f25-arrow", "display", "block");
	dojo.style("f25-arrow", "opacity", "0");
}

function hideFrame25(){
	dojo.style("f25-word1", "display", "none");
	dojo.style("f25-word1", "opacity", "0");
	dojo.style("f25-word2", "display", "none");
	dojo.style("f25-word2", "opacity", "0");
	dojo.style("f25-word3", "display", "none");
	dojo.style("f25-word3", "opacity", "0");
	dojo.style("f25-disclaimer", "display", "none");
	dojo.style("f25-disclaimer", "opacity", "0");
	dojo.style("f25-arrow", "display", "none");
	dojo.style("f25-arrow", "opacity", "0");
	dojo.style("f24-greenbox", "display", "none");
	dojo.style("f24-greenbox", "opacity", "0");
	dojo.style("f24-tier1text", "display", "none");
	dojo.style("f24-tier1text", "opacity", "0");
	dojo.style("f24-tier2bar", "display", "none");
	dojo.style("f24-tier2bar", "opacity", "0");
	dojo.style("f24-tier2text", "display", "none");
	dojo.style("f24-tier2text", "opacity", "0");
	dojo.style("f24-tier3bar", "display", "none");
	dojo.style("f24-tier3bar", "opacity", "0");
	dojo.style("f24-tier3text", "display", "none");
	dojo.style("f24-tier3text", "opacity", "0");	
}

function showFrame26(){

	dojo.style("f26-word1", "display", "block");
	dojo.style("f26-word1", "opacity", "0");
	dojo.style("f26-word2", "display", "block");
	dojo.style("f26-word2", "opacity", "0");
	dojo.style("f26-dot1", "display", "block");
	dojo.style("f26-dot1", "opacity", "0");
	dojo.style("f26-dot2", "display", "block");
	dojo.style("f26-dot2", "opacity", "0");
}

function hideFrame26(){
	dojo.style("f26-word1", "display", "none");
	dojo.style("f26-word1", "opacity", "0");
	dojo.style("f26-word2", "display", "none");
	dojo.style("f26-word2", "opacity", "0");
	dojo.style("f26-dot1", "display", "none");
	dojo.style("f26-dot1", "opacity", "0");
	dojo.style("f26-dot2", "display", "none");
	dojo.style("f26-dot2", "opacity", "0");

}

function showFrame27(){
	dojo.style("f27-cloud", "display", "block");
	dojo.style("f27-cloud", "opacity", "0");
	dojo.style("f27-title", "display", "block");
	dojo.style("f27-title", "opacity", "0");
	dojo.style("f27-tier1", "display", "block");
	dojo.style("f27-tier1", "opacity", "0");
	dojo.style("f27-fan", "display", "block");
	dojo.style("f27-fan", "opacity", "0");
	dojo.style("f27-treegrass", "display", "block");
	dojo.style("f27-treegrass", "opacity", "0");
	dojo.style("f27-mountain", "display", "block");
	dojo.style("f27-mountain", "opacity", "0");
	dojo.style("f27-wave", "display", "block");
	dojo.style("f27-wave", "opacity", "0");
		

}

function hideFrame27(){
	dojo.style("f27-cloud", "display", "none");
	dojo.style("f27-cloud", "opacity", "0");
	dojo.style("f27-treegrass", "display", "none");
	dojo.style("f27-treegrass", "opacity", "0");
	dojo.style("f27-fan", "display", "none");
	dojo.style("f27-fan", "opacity", "0");
	dojo.style("f27-mountain", "display", "none");
	dojo.style("f27-mountain", "opacity", "0");
	dojo.style("f27-wave", "display", "none");
	dojo.style("f27-wave", "opacity", "0");
}

function showFrame28(){
	dojo.style("f28-bg", "display", "block");
	dojo.style("f28-bg", "opacity", "0");
	dojo.style("f28-sun", "display", "block");
	dojo.style("f28-sun", "opacity", "0");
	dojo.style("f28-tier", "display", "block");
	dojo.style("f28-tier", "opacity", "0");
	dojo.style("f28-ac", "display", "block");
	dojo.style("f28-ac", "opacity", "0");
	dojo.style("f28-air", "display", "block");
	dojo.style("f28-air", "opacity", "0");
	dojo.style("f28-mountain", "display", "block");
	dojo.style("f28-mountain", "opacity", "0");
}

function hideFrame28(){
	dojo.style("f28-sun", "display", "none");
	dojo.style("f28-sun", "opacity", "0");
	dojo.style("f28-tier", "display", "none");
	dojo.style("f28-tier", "opacity", "0");
	dojo.style("f28-ac", "display", "none");
	dojo.style("f28-ac", "opacity", "0");
	dojo.style("f28-air", "display", "none");
	dojo.style("f28-air", "opacity", "0");
	dojo.style("f28-mountain", "display", "none");
	dojo.style("f28-mountain", "opacity", "0");
	
	dojo.style("f27-title", "display", "none");
	dojo.style("f27-title", "opacity", "0");
	dojo.style("f27-tier1", "display", "none");
	dojo.style("f27-tier1", "opacity", "0");
}

function showFrame29(){
	dojo.style("f29-sun", "display", "block");
	dojo.style("f29-sun", "opacity", "0");	
	dojo.style("f29-cloud", "display", "block");
	dojo.style("f29-cloud", "opacity", "0");
	dojo.style("f29-title", "display", "block");
	dojo.style("f29-title", "opacity", "0");
	dojo.style("f29-learnmore", "display", "block");
	dojo.style("f29-learnmore", "opacity", "0");
	dojo.style("f29-question", "display", "block");
	dojo.style("f29-question", "opacity", "0");
	dojo.style("f29-grass", "display", "block");
	dojo.style("f29-grass", "opacity", "0");
}

function hideFrame29(){
	dojo.style("f29-sun", "display", "none");
	dojo.style("f29-sun", "opacity", "0");		
	dojo.style("f29-cloud", "display", "none");
	dojo.style("f29-cloud", "opacity", "0");
	dojo.style("f29-title", "display", "none");
	dojo.style("f29-title", "opacity", "0");
	dojo.style("f29-learnmore", "display", "none");
	dojo.style("f29-learnmore", "opacity", "0");
	dojo.style("f29-question", "display", "none");
	dojo.style("f29-question", "opacity", "0");
	dojo.style("f29-grass", "display", "none");
	dojo.style("f29-grass", "opacity", "0");
	dojo.style("f28-bg", "display", "none");
	dojo.style("f28-bg", "opacity", "0");		
}

function showFrame30(){
	dojo.style("f30-bg", "display", "block");
	dojo.style("f30-bg", "opacity", "0");
	dojo.style("f30-title", "display", "block");
	dojo.style("f30-title", "opacity", "0");
	dojo.style("f30-acc1", "display", "block");
	dojo.style("f30-acc1", "opacity", "0");
	dojo.style("f30-acc2", "display", "block");
	dojo.style("f30-acc2", "opacity", "0");
	dojo.style("f30-acc3", "display", "block");
	dojo.style("f30-acc3", "opacity", "0");
	dojo.style("f30-acc4", "display", "block");
	dojo.style("f30-acc4", "opacity", "0");	
}

function hideFrame30(){

	dojo.style("f30-title", "display", "none");
	dojo.style("f30-title", "opacity", "0");
	dojo.style("f30-acc1", "display", "none");
	dojo.style("f30-acc1", "opacity", "0");
	dojo.style("f30-acc2", "display", "none");
	dojo.style("f30-acc2", "opacity", "0");
	dojo.style("f30-acc3", "display", "none");
	dojo.style("f30-acc3", "opacity", "0");
	dojo.style("f30-acc4", "display", "none");
	dojo.style("f30-acc4", "opacity", "0");
}

function showFrame31(){
	dojo.style("f31-cloud", "display", "block");
	dojo.style("f31-cloud", "opacity", "0");
	dojo.style("f31-title", "display", "block");
	dojo.style("f31-title", "opacity", "0");
	dojo.style("f31-text1", "display", "block");
	dojo.style("f31-text1", "opacity", "0");
	dojo.style("f31-text3", "display", "block");
	dojo.style("f31-text3", "opacity", "0");	
	dojo.style("f31-grass", "display", "block");
	dojo.style("f31-grass", "opacity", "0");

}

function hideFrame31(){
	dojo.style("f31-title", "display", "none");
	dojo.style("f31-title", "opacity", "0");
	dojo.style("f31-text1", "display", "none");
	dojo.style("f31-text1", "opacity", "0");
	dojo.style("f31-text3", "display", "none");
	dojo.style("f31-text3", "opacity", "0");	
}

function showFrame33(){
	dojo.style("f33-sun", "display", "block");
	dojo.style("f33-sun", "opacity", "0");
	dojo.style("f33-house", "display", "block");
	dojo.style("f33-house", "opacity", "0");
	dojo.style("f33-pole", "display", "block");
	dojo.style("f33-pole", "opacity", "0");
	dojo.style("f33-wind", "display", "block");
	dojo.style("f33-wind", "opacity", "0");
	dojo.style("f33-ac", "display", "block");
	dojo.style("f33-ac", "opacity", "0");	
	dojo.style("f33-air", "display", "block");
	dojo.style("f33-air", "opacity", "0");
	dojo.style("f33-tree", "display", "block");
	dojo.style("f33-tree", "opacity", "0");	
}

function hideFrame33(){	
	dojo.style("f33-pole","opacity","0");
	dojo.style("f33-pole","display","none");	
	dojo.style("f33-wind","opacity","0");
	dojo.style("f33-wind","display","none");	
	dojo.style("f33-house","opacity","0");
	dojo.style("f33-house","display","none");		
	dojo.style("f34-house","opacity","0");
	dojo.style("f34-house","display","none");	
}

function showFrame35(){
	dojo.style("f35-wire","opacity","1");
	dojo.style("f35-wire","display","block");
	dojo.style("f35-pole","opacity","1");
	dojo.style("f35-pole","display","block");
	dojo.style("f35-house","display","block");	
	dojo.style("f35-house","opacity","1");	
	dojo.style("f35-sun","opacity","0");
	dojo.style("f35-sun","display","block");			
}

function hideFrame35(){
	dojo.style("f35-wire","opacity","0");
	dojo.style("f35-wire","display","none");
	dojo.style("f35-pole","opacity","0");
	dojo.style("f35-pole","display","none");
	dojo.style("f35-house","display","none");	
	dojo.style("f35-house","opacity","0");	
	dojo.style("f33-sun", "display", "none");
	dojo.style("f33-sun", "opacity", "0");
	dojo.style("f33-house", "display", "none");
	dojo.style("f33-house", "opacity", "0");	
	dojo.style("f33-pole", "display", "none");
	dojo.style("f33-pole", "opacity", "0");
	dojo.style("f33-wind", "display", "none");
	dojo.style("f33-wind", "opacity", "0");
	dojo.style("f33-ac", "display", "none");
	dojo.style("f33-ac", "opacity", "0");	
	dojo.style("f33-air", "display", "none");
	dojo.style("f33-air", "opacity", "0");
	dojo.style("f33-tree", "display", "none");
	dojo.style("f33-tree", "opacity", "0");	
	dojo.style("f35-wire", "display", "none");
	dojo.style("f35-wire", "opacity", "0");	
	dojo.style("f35-sun", "display", "none");
	dojo.style("f35-sun", "opacity", "0");		
	dojo.style("f31-cloud", "display", "none");
	dojo.style("f31-cloud", "opacity", "0");
	dojo.style("f31-grass", "display", "none");
	dojo.style("f31-grass", "opacity", "0");		
}
function showFrame36(){
	dojo.style("f36-actext", "display", "block");
	dojo.style("f36-actext", "opacity", "0");
	dojo.style("f36-ac", "display", "block");
	dojo.style("f36-ac", "opacity", "0");
	dojo.style("f36-pooltext", "display", "block");
	dojo.style("f36-pooltext", "opacity", "0");
	dojo.style("f36-pool", "display", "block");
	dojo.style("f36-pool", "opacity", "0");
	dojo.style("f36-fridgetext", "display", "block");
	dojo.style("f36-fridgetext", "opacity", "0");
	dojo.style("f36-fridge", "display", "block");
	dojo.style("f36-fridge", "opacity", "0");	

}
function hideFrame36(){
	dojo.style("f36-actext", "display", "none");
	dojo.style("f36-actext", "opacity", "0");
	dojo.style("f36-ac", "display", "none");
	dojo.style("f36-ac", "opacity", "0");
	dojo.style("f36-pooltext", "display", "none");
	dojo.style("f36-pooltext", "opacity", "0");
	dojo.style("f36-pool", "display", "none");
	dojo.style("f36-pool", "opacity", "0");
	dojo.style("f36-fridgetext", "display", "none");
	dojo.style("f36-fridgetext", "opacity", "0");
	dojo.style("f36-fridge", "display", "none");
	dojo.style("f36-fridge", "opacity", "0");	
}

function showFrame38(){
	dojo.style("f31-cloud", "display", "block");
	dojo.style("f31-cloud", "opacity", "0");
	dojo.style("f38-hvac", "display", "block");
	dojo.style("f38-hvac", "opacity", "0");
	dojo.style("f38-title", "display", "block");
	dojo.style("f38-title", "opacity", "0");	
	dojo.style("f38-ac", "display", "block");
	dojo.style("f38-ac", "opacity", "0");
}
function hideFrame38(){
	dojo.style("f38-hvac", "display", "none");
	dojo.style("f38-hvac", "opacity", "0");
	dojo.style("f38-title", "display", "none");
	dojo.style("f38-title", "opacity", "0");	
	dojo.style("f38-ac", "display", "none");
	dojo.style("f38-ac", "opacity", "0");
}

function showFrame39(){
	dojo.style("f39-ac1", "display", "block");
	dojo.style("f39-ac1", "opacity", "0");
	dojo.style("f39-ac2", "display", "block");
	dojo.style("f39-ac2", "opacity", "0");
	dojo.style("f39-ac3", "display", "block");
	dojo.style("f39-ac3", "opacity", "0");	
	dojo.style("f39-ac4", "display", "block");
	dojo.style("f39-ac4", "opacity", "0");
	dojo.style("f39-ac5", "display", "block");
	dojo.style("f39-ac5", "opacity", "0");
	dojo.style("f39-ac6", "display", "block");
	dojo.style("f39-ac6", "opacity", "0");
	dojo.style("f39-ac7", "display", "block");
	dojo.style("f39-ac7", "opacity", "0");	
	dojo.style("f39-ac8", "display", "block");
	dojo.style("f39-ac8", "opacity", "0");
	dojo.style("f39-ac9", "display", "block");
	dojo.style("f39-ac9", "opacity", "0");
	dojo.style("f39-ac10", "display", "block");
	dojo.style("f39-ac10", "opacity", "0");
	dojo.style("f39-ac11", "display", "block");
	dojo.style("f39-ac11", "opacity", "0");	
	dojo.style("f39-ac12", "display", "block");
	dojo.style("f39-ac12", "opacity", "0");
	dojo.style("f39-wind", "display", "block");
	dojo.style("f39-wind", "opacity", "0");	
	dojo.style("f39-sun", "display", "block");
	dojo.style("f39-sun", "opacity", "0");
	
}
function hideFrame39(){
	dojo.style("f39-ac1", "display", "none");
	dojo.style("f39-ac1", "opacity", "0");
	dojo.style("f39-ac2", "display", "none");
	dojo.style("f39-ac2", "opacity", "0");
	dojo.style("f39-ac3", "display", "none");
	dojo.style("f39-ac3", "opacity", "0");	
	dojo.style("f39-ac4", "display", "none");
	dojo.style("f39-ac4", "opacity", "0");
	dojo.style("f39-ac5", "display", "none");
	dojo.style("f39-ac5", "opacity", "0");
	dojo.style("f39-ac6", "display", "none");
	dojo.style("f39-ac6", "opacity", "0");
	dojo.style("f39-ac7", "display", "none");
	dojo.style("f39-ac7", "opacity", "0");	
	dojo.style("f39-ac8", "display", "none");
	dojo.style("f39-ac8", "opacity", "0");
	dojo.style("f39-ac9", "display", "none");
	dojo.style("f39-ac9", "opacity", "0");
	dojo.style("f39-ac10", "display", "none");
	dojo.style("f39-ac10", "opacity", "0");
	dojo.style("f39-ac11", "display", "none");
	dojo.style("f39-ac11", "opacity", "0");	
	dojo.style("f39-ac12", "display", "none");
	dojo.style("f39-ac12", "opacity", "0");
	dojo.style("f39-wind", "display", "none");
	dojo.style("f39-wind", "opacity", "0");	
	dojo.style("f39-sun", "display", "none");
	dojo.style("f39-sun", "opacity", "0");
	dojo.style("f31-cloud", "display", "none");
	dojo.style("f31-cloud", "opacity", "0");
}

function showFrame40(){
	dojo.style("f40-glow", "display", "block");
	dojo.style("f40-glow", "opacity", "1");
	dojo.style("f40-noglow", "display", "block");
	dojo.style("f40-noglow", "opacity", "1");	
}
function hideFrame40(){
	dojo.style("f40-noglow", "display", "none");
	dojo.style("f40-noglow", "opacity", "0");
	dojo.style("f40-glow", "display", "none");
	dojo.style("f40-glow", "opacity", "0");	
}

function showFrame41(){
	dojo.style("f41-cloud", "display", "block");
	dojo.style("f41-cloud", "opacity", "0");
	dojo.style("f41-ther", "display", "block");
	dojo.style("f41-ther", "opacity", "0");	
	dojo.style("f41-light", "display", "block");
	dojo.style("f41-light", "opacity", "0");		
}
function hideFrame41(){
	dojo.style("f41-ther", "display", "none");
	dojo.style("f41-ther", "opacity", "0");	
	dojo.style("f41-light", "display", "none");
	dojo.style("f41-light", "opacity", "0");

}

function showFrame43(){
	dojo.style("f43-title", "display", "block");
	dojo.style("f43-title", "opacity", "0");
	dojo.style("f43ac78", "display", "block");
	dojo.style("f43ac78", "opacity", "0");
	dojo.style("f43ac83", "display", "block");
	dojo.style("f43ac83", "opacity", "0");

	
}
function hideFrame43(){
	dojo.style("f43ac78", "display", "none");
	dojo.style("f43ac78", "opacity", "0");
	dojo.style("f43ac83", "display", "none");
	dojo.style("f43ac83", "opacity", "0");	
}

function showFrame45(){
	dojo.style("f45-clock", "display", "block");
	dojo.style("f45-clock", "opacity", "0");
}
function hideFrame45(){
	dojo.style("f45-clock", "display", "none");
	dojo.style("f45-clock", "opacity", "0");

}

function showFrame46(){
	dojo.style("f46-mobile", "display", "block");
	dojo.style("f46-mobile", "opacity", "0");
}
function hideFrame46(){
	dojo.style("f46-mobile", "display", "none");
	dojo.style("f46-mobile", "opacity", "0");
	dojo.style("f43-title", "display", "none");
	dojo.style("f43-title", "opacity", "0");
}

function showFrame47(){
	dojo.style("f47-title", "display", "block");
	dojo.style("f47-title", "opacity", "0");
	dojo.style("f47-more", "display", "block");
	dojo.style("f47-more", "opacity", "0");	
	dojo.style("f47-disclaimer", "display", "block");
	dojo.style("f47-disclaimer", "opacity", "0");		
}
function hideFrame47(){
	dojo.style("f47-title", "display", "none");
	dojo.style("f47-title", "opacity", "0");
	dojo.style("f47-more", "display", "none");
	dojo.style("f47-more", "opacity", "0");
	dojo.style("f47-disclaimer", "display", "none");
	dojo.style("f47-disclaimer", "opacity", "0");	
}
function showFrame48(){
	dojo.style("f48-logo", "display", "block");
	dojo.style("f48-logo", "opacity", "0");

}
function hideFrame48(){
	dojo.style("f48-logo", "display", "none");
	dojo.style("f48-logo", "opacity", "0");

}
function showFrame49(){
	dojo.style("f49-line1", "display", "block");
	dojo.style("f49-line1", "opacity", "0");
	dojo.style("f49-line2", "display", "block");
	dojo.style("f49-line2", "opacity", "0");
	dojo.style("f49-line3", "display", "block");
	dojo.style("f49-line3", "opacity", "0");
	dojo.style("f49-line4", "display", "block");
	dojo.style("f49-line4", "opacity", "0");			
	dojo.style("f49-link", "display", "block");
	dojo.style("f49-link", "opacity", "0");
}
function hideFrame49(){
	dojo.style("f49-line1", "display", "none");
	dojo.style("f49-line1", "opacity", "0");
	dojo.style("f49-line2", "display", "none");
	dojo.style("f49-line2", "opacity", "0");
	dojo.style("f49-line3", "display", "none");
	dojo.style("f49-line3", "opacity", "0");
	dojo.style("f49-line4", "display", "none");
	dojo.style("f49-line4", "opacity", "0");	
	dojo.style("f49-link", "display", "none");
	dojo.style("f49-link", "opacity", "0");			
}
function showFrame50(){
	dojo.style("f50-icon1", "display", "block");
	dojo.style("f50-icon1", "opacity", "0");	
	dojo.style("f50-text1", "display", "block");
	dojo.style("f50-text1", "opacity", "0");
	dojo.style("f50-icon2", "display", "block");
	dojo.style("f50-icon2", "opacity", "0");
	dojo.style("f50-text2", "display", "block");
	dojo.style("f50-text2", "opacity", "0");			
	dojo.style("f50-icon3", "display", "block");
	dojo.style("f50-icon3", "opacity", "0");
	dojo.style("f50-text3", "display", "block");
	dojo.style("f50-text3", "opacity", "0");
	dojo.style("f49-link", "display", "block");
	dojo.style("f49-link", "opacity", "0");
	
	
}
function hideFrame50(){
	dojo.style("f50-icon1", "display", "none");
	dojo.style("f50-icon1", "opacity", "0");	
	dojo.style("f50-text1", "display", "none");
	dojo.style("f50-text1", "opacity", "0");
	dojo.style("f50-icon2", "display", "none");
	dojo.style("f50-icon2", "opacity", "0");
	dojo.style("f50-text2", "display", "none");
	dojo.style("f50-text2", "opacity", "0");			
	dojo.style("f50-icon3", "display", "none");
	dojo.style("f50-icon3", "opacity", "0");
	dojo.style("f50-text3", "display", "none");
	dojo.style("f50-text3", "opacity", "0");
	dojo.style("f49-link", "display", "none");
	dojo.style("f49-link", "opacity", "0");	
	dojo.style("f41-cloud", "display", "none");
	dojo.style("f41-cloud", "opacity", "0");
}

function showFrame51(){
	dojo.style("f51-pooltext", "display", "block");
	dojo.style("f51-pooltext", "opacity", "0");	
	dojo.style("f51-pool", "display", "block");
	dojo.style("f51-pool", "opacity", "0");
	dojo.style("f51-fridgetext", "display", "block");
	dojo.style("f51-fridgetext", "opacity", "0");			
	dojo.style("f51-fridge", "display", "block");
	dojo.style("f51-fridge", "opacity", "0");
}
function hideFrame51(){
	dojo.style("f51-pooltext", "display", "none");
	dojo.style("f51-pooltext", "opacity", "0");	
	dojo.style("f51-pool", "display", "none");
	dojo.style("f51-pool", "opacity", "0");
	dojo.style("f51-fridgetext", "display", "none");
	dojo.style("f51-fridgetext", "opacity", "0");			
	dojo.style("f51-fridge", "display", "none");
	dojo.style("f51-fridge", "opacity", "0");
}

function showFrame52(){
	dojo.style("f52-title", "display", "block");
	dojo.style("f52-title", "opacity", "0");	
	dojo.style("f52-sun", "display", "block");
	dojo.style("f52-sun", "opacity", "0");
	dojo.style("f52-cloud", "display", "block");
	dojo.style("f52-cloud", "opacity", "0");	
	dojo.style("f52-pump", "display", "block");
	dojo.style("f52-pump", "opacity", "0");
	dojo.style("f52-pool", "display", "block");
	dojo.style("f52-pool", "opacity", "0");
	dojo.style("f52-splash", "display", "block");
	dojo.style("f52-splash", "opacity", "0");

}
function hideFrame52(){
	dojo.style("f52-title", "display", "none");
	dojo.style("f52-title", "opacity", "0");	
}

function showFrame53(){
	dojo.style("f53-title", "display", "block");
	dojo.style("f53-title", "opacity", "0");	
	dojo.style("f53-apply", "display", "block");
	dojo.style("f53-apply", "opacity", "0");
	
}
function hideFrame53(){
	dojo.style("f53-title", "display", "none");
	dojo.style("f53-title", "opacity", "0");	
	dojo.style("f53-apply", "display", "none");
	dojo.style("f53-apply", "opacity", "0");
	dojo.style("f52-splash", "display", "none");
	dojo.style("f52-splash", "opacity", "0");
}
function showFrame54(){
	dojo.style("f54-title", "display", "block");
	dojo.style("f54-title", "opacity", "0");	
	dojo.style("f54-pool", "display", "block");
	dojo.style("f54-pool", "opacity", "0");	
	dojo.style("f54-wave", "display", "block");
	dojo.style("f54-wave", "opacity", "0");	
}
function showFrame55(){
	dojo.style("f55-bullet1", "display", "block");
	dojo.style("f55-bullet1", "opacity", "0");	
	dojo.style("f55-waterjar", "display", "block");
	dojo.style("f55-waterjar", "opacity", "0");	
	
}
function hideFrame55(){
	dojo.style("f55-waterjar", "display", "none");
	dojo.style("f55-waterjar", "opacity", "0");	
}

function showFrame56(){
	dojo.style("f56-bullet2", "display", "block");
	dojo.style("f56-bullet2", "opacity", "0");	
	dojo.style("f56-clock", "display", "block");
	dojo.style("f56-clock", "opacity", "0");	
	dojo.style("f56-3hour", "display", "block");
	dojo.style("f56-3hour", "opacity", "0");		
}
function hideFrame56(){
	dojo.style("f56-clock", "display", "none");
	dojo.style("f56-clock", "opacity", "0");	
	dojo.style("f56-3hour", "display", "none");
	dojo.style("f56-3hour", "opacity", "0");	
	dojo.style("f54-wave", "display", "none");
	dojo.style("f54-wave", "opacity", "0");		
}
function showFrame57(){
	dojo.style("f57-bullet3", "display", "block");
	dojo.style("f57-bullet3", "opacity", "0");	
	dojo.style("f57-net", "display", "block");
	dojo.style("f57-net", "opacity", "0");	
	dojo.style("f57-leaves", "display", "block");
	dojo.style("f57-leaves", "opacity", "0");	
	dojo.style("f57-text", "display", "block");
	dojo.style("f57-text", "opacity", "0");				
}
function hideFrame57(){
	dojo.style("f57-net", "display", "none");
	dojo.style("f57-net", "opacity", "0");	
	dojo.style("f57-leaves", "display", "none");
	dojo.style("f57-leaves", "opacity", "0");	
	dojo.style("f57-text", "display", "none");
	dojo.style("f57-text", "opacity", "0");		
}
function showFrame58(){
	dojo.style("f58-bullet4", "display", "block");
	dojo.style("f58-bullet4", "opacity", "0");	
	dojo.style("f56-clock", "display", "block");
	dojo.style("f56-clock", "opacity", "0");	
	dojo.style("f56-3hour", "display", "block");
	dojo.style("f56-3hour", "opacity", "0");	
	dojo.style("f58-text", "display", "block");
	dojo.style("f58-text", "opacity", "0");				
}
function hideFrame58(){
	dojo.style("f56-3hour", "display", "none");
	dojo.style("f56-3hour", "opacity", "0");	
	dojo.style("f56-clock", "display", "none");
	dojo.style("f56-clock", "opacity", "0");	
	dojo.style("f58-text", "display", "none");
	dojo.style("f58-text", "opacity", "0");		
}
function showFrame59(){
	dojo.style("f59-bullet5", "display", "block");
	dojo.style("f59-bullet5", "opacity", "0");	
	dojo.style("f59-bubble1", "display", "block");
	dojo.style("f59-bubble1", "opacity", "0");	
	dojo.style("f59-bubble2", "display", "block");
	dojo.style("f59-bubble2", "opacity", "0");	
	dojo.style("f59-bubble3", "display", "block");
	dojo.style("f59-bubble3", "opacity", "0");		
	dojo.style("f59-drain1", "display", "block");
	dojo.style("f59-drain1", "opacity", "0");	
	dojo.style("f59-drain2", "display", "block");
	dojo.style("f59-drain2", "opacity", "0");	
	dojo.style("f59-drain3", "display", "block");
	dojo.style("f59-drain3", "opacity", "0");				
}
function hideFrame59(){
	dojo.style("f59-bullet5", "display", "none");
	dojo.style("f59-bullet5", "opacity", "0");	
	dojo.style("f59-bubble1", "display", "none");
	dojo.style("f59-bubble1", "opacity", "0");	
	dojo.style("f59-bubble2", "display", "none");
	dojo.style("f59-bubble2", "opacity", "0");	
	dojo.style("f59-bubble3", "display", "none");
	dojo.style("f59-bubble3", "opacity", "0");	
	dojo.style("f59-drain1", "display", "none");
	dojo.style("f59-drain1", "opacity", "0");	
	dojo.style("f59-drain2", "display", "none");
	dojo.style("f59-drain2", "opacity", "0");	
	dojo.style("f59-drain3", "display", "none");
	dojo.style("f59-drain3", "opacity", "0");	
	
	dojo.style("f58-bullet4", "display", "none");
	dojo.style("f58-bullet4", "opacity", "0");
	dojo.style("f57-bullet3", "display", "none");
	dojo.style("f57-bullet3", "opacity", "0");	
	dojo.style("f56-bullet2", "display", "none");
	dojo.style("f56-bullet2", "opacity", "0");	
	dojo.style("f55-bullet1", "display", "none");
	dojo.style("f55-bullet1", "opacity", "0");	
	dojo.style("f54-title", "display", "none");
	dojo.style("f54-title", "opacity", "0");	
	dojo.style("f54-pool", "display", "none");
	dojo.style("f54-pool", "opacity", "0");	
	dojo.style("f52-sun", "display", "none");
	dojo.style("f52-sun", "opacity", "0");
	dojo.style("f52-cloud", "display", "none");
	dojo.style("f52-cloud", "opacity", "0");		
	dojo.style("f52-pump", "display", "none");
	dojo.style("f52-pump", "opacity", "0");
	dojo.style("f52-pool", "display", "none");
	dojo.style("f52-pool", "opacity", "0");

}

function showFrame60(){
	dojo.style("f60-sun", "display", "block");
	dojo.style("f60-sun", "opacity", "0");	
	dojo.style("f60-cloud", "display", "block");
	dojo.style("f60-cloud", "opacity", "0");	
	dojo.style("f60-mountain", "display", "block");
	dojo.style("f60-mountain", "opacity", "0");	
	dojo.style("f60-grass", "display", "block");
	dojo.style("f60-grass", "opacity", "0");	
	dojo.style("f60-title", "display", "block");
	dojo.style("f60-title", "opacity", "0");
	dojo.style("f60-fridge", "display", "block");
	dojo.style("f60-fridge", "opacity", "0");					
}
function hideFrame60(){
	dojo.style("f60-fridge", "display", "none");
	dojo.style("f60-fridge", "opacity", "0");	

}
function showFrame61(){
	dojo.style("f61-fridge", "display", "block");
	dojo.style("f61-fridge", "opacity", "0");	
				
}

function hideFrame61(){
	dojo.style("f60-title", "display", "none");
	dojo.style("f60-title", "opacity", "0");	

}
function showFrame62(){
	dojo.style("f62-energystar", "display", "block");
	dojo.style("f62-energystar", "opacity", "0");	
	
	dojo.style("f62-title", "display", "block");
	dojo.style("f62-title", "opacity", "0");		
				
}
function hideFrame62(){
	dojo.style("f62-title", "display", "none");
	dojo.style("f62-title", "opacity", "0");	
	dojo.style("f62-energystar", "display", "none");
	dojo.style("f62-energystar", "opacity", "0");		
	dojo.style("f61-fridge", "display", "none");
	dojo.style("f61-fridge", "opacity", "0");	
}
function showFrame63(){
	dojo.style("f63-title", "display", "block");
	dojo.style("f63-title", "opacity", "0");	
	dojo.style("f63-truck", "display", "block");
	dojo.style("f63-truck", "opacity", "0");	
	dojo.style("f63-dollyfridge", "display", "block");
	dojo.style("f63-dollyfridge", "opacity", "0");					
}
function hideFrame63(){
	dojo.style("f63-title", "display", "none");
	dojo.style("f63-title", "opacity", "0");	
	dojo.style("f63-truck", "display", "none");
	dojo.style("f63-truck", "opacity", "0");	
	dojo.style("f63-dollyfridge", "display", "none");
	dojo.style("f63-dollyfridge", "opacity", "0");	
}
function showFrame64(){
	dojo.style("f64-title", "display", "block");
	dojo.style("f64-title", "opacity", "0");	
	dojo.style("f64-ac", "display", "block");
	dojo.style("f64-ac", "opacity", "0");	
	dojo.style("f64-pool", "display", "block");
	dojo.style("f64-pool", "opacity", "0");					
}
function hideFrame64(){
	dojo.style("f64-title", "display", "none");
	dojo.style("f64-title", "opacity", "0");	
	dojo.style("f64-ac", "display", "none");
	dojo.style("f64-ac", "opacity", "0");	
	dojo.style("f64-pool", "display", "none");
	dojo.style("f64-pool", "opacity", "0");
	dojo.style("f60-sun", "display", "none");
	dojo.style("f60-sun", "opacity", "0");		
	dojo.style("f60-cloud", "display", "none");
	dojo.style("f60-cloud", "opacity", "0");	
	dojo.style("f60-mountain", "display", "block");
	dojo.style("f60-mountain", "opacity", "0");	
	dojo.style("f60-grass", "display", "block");
	dojo.style("f60-grass", "opacity", "0");			
}
function showFrame65(){
	dojo.style("f65-myaccount", "display", "block");
	dojo.style("f65-myaccount", "opacity", "0");	
	dojo.style("f65-cloud", "display", "block");
	dojo.style("f65-cloud", "opacity", "0");	
	dojo.style("f65-sun", "display", "block");
	dojo.style("f65-sun", "opacity", "0");	
	dojo.style("f65-mountain", "display", "block");
	dojo.style("f65-mountain", "opacity", "0");	

	dojo.style("f65-tree", "display", "block");
	dojo.style("f65-tree", "opacity", "0");
	dojo.style("f65-fruittree", "display", "block");
	dojo.style("f65-fruittree", "opacity", "0");	
	dojo.style("f65-house", "display", "block");
	dojo.style("f65-house", "opacity", "0");	
	dojo.style("f65-budget", "display", "block");
	dojo.style("f65-budget", "opacity", "0");	
	dojo.style("f65-savepower", "display", "block");
	dojo.style("f65-savepower", "opacity", "0");
	dojo.style("f65-rebates", "display", "block");
	dojo.style("f65-rebates", "opacity", "0");		
	dojo.style("f65-video", "display", "block");
	dojo.style("f65-video", "opacity", "0");											
	dojo.style("f65-baselinerate", "display", "block");
	dojo.style("f65-baselinerate", "opacity", "0");		
}
function hideMainMenu(){
	dojo.style("mainmenu", "display", "none");
	dojo.style("mainmenu", "opacity", "0");	
}
function showMainMenu(){
	dojo.style("mainmenu", "display", "block");
	dojo.style("mainmenu", "opacity", "1");		
}
function cleanEverything(){
	require(["dojo/query"], function(query){
		query(".frameob").forEach(function(node, index, arr){
			dojo.style(node, "display", "none");
			dojo.style(node, "opacity", "0");			
		  });
	});
}
function cleanEveryTimer(){
	clearTimeout(timerf2);
	clearTimeout(timerf3);
	clearTimeout(timerf4);
	clearTimeout(timerf5);
	clearTimeout(timerf6);
	clearTimeout(timerf7);
	clearTimeout(timerf8);
	clearTimeout(timerf9);
	clearTimeout(timerf10);
	clearTimeout(timerf11);
	clearTimeout(timerf12);
	clearTimeout(timerf13);
	clearTimeout(timerf14);
	clearTimeout(timerf15);
	clearTimeout(timerf16);
	clearTimeout(timerf17);
	clearTimeout(timerf18);
	clearTimeout(timerf18b);
	clearTimeout(timerf19);
	clearTimeout(timerf20);
	clearTimeout(timerf21);
	clearTimeout(timerf22);
	clearTimeout(timerf23);
	clearTimeout(timerf24);
	clearTimeout(timerf25);clearTimeout(timerf26);clearTimeout(timerf27);clearTimeout(timerf28);
	clearTimeout(timerf29);clearTimeout(timerf30);clearTimeout(timerf31);
	clearTimeout(timerf33);clearTimeout(timerf34);clearTimeout(timerf35);clearTimeout(timerf35b);clearTimeout(timerf36);clearTimeout(timerf37);clearTimeout(timerf38);clearTimeout(timerf39);
	clearTimeout(timerf40);clearTimeout(timerf41);
	clearTimeout(timerf43);
	clearTimeout(timerf45);clearTimeout(timerf46);clearTimeout(timerf47);
	clearTimeout(timerf48);clearTimeout(timerf49);clearTimeout(timerf50);clearTimeout(timerf51);clearTimeout(timerf52);clearTimeout(timerf53);clearTimeout(timerf54);
	clearTimeout(timerf55);clearTimeout(timerf56);clearTimeout(timerf57);clearTimeout(timerf58);clearTimeout(timerf59);clearTimeout(timerf60);clearTimeout(timerf61);
	clearTimeout(timerf62);clearTimeout(timerf63);clearTimeout(timerf64);clearTimeout(timerf65);clearTimeout(timerf66);clearTimeout(timerf67);
	clearTimeout(timerf68);clearTimeout(timerf69);
	clearTimeout(timerf70);
	
		
	console.log("cleanAllTimer");
	
}

function showFrameID(id){
	document.getElementById("frameNum").innerHTML=id;
}

function getScriptforFrameID(id){
			if(id == 1 || id == 2){
					document.getElementById("cc-content").innerHTML="";
			}
			if(id == 3){
					document.getElementById("cc-content").innerHTML="Have you ever been confused by your bill? Or maybe you just want to know how to reduce your energy costs. Well, we can help! Make a selection below to get started. ";

			}
			if(id == 4){
				document.getElementById("cc-content").innerHTML="Okay. We know your bill seems complicated. We can help break it down. What are you curious about? If you prefer, you don’t have to make a selection, and we will just guide you through each section.";
			}
			if(id == 5){
				document.getElementById("cc-content").innerHTML="You’ve probably seen the letters “kWh” on your bill before. Ah, there it is. kWh stands for kilowatt hour. ";
			
			}
			if(id == 6){
				document.getElementById("cc-content").innerHTML="Electricity is measured in kilowatt-hours or kWh. One kilowatt of energy is equal to 1,000-watt hours";
			}	
			if(id == 7 || id == 8 || id == 9){
				document.getElementById("cc-content").innerHTML="and will power a 100-watt light bulb for 10 hours, or 10 100-watt light bulbs for 1 hour.";
			}	
			if(id == 10){
				document.getElementById("cc-content").innerHTML="Usually, one kilowatt-hour of electricity provides enough power to: Watch television for 10 hours ";
			}	
			if(id == 11){
				document.getElementById("cc-content").innerHTML="Wash about 12 medium loads of laundry";
			}	
			if(id == 12){
				document.getElementById("cc-content").innerHTML="Work on a computer for about 7 ½ hours";
			}	
			if(id == 13){
				document.getElementById("cc-content").innerHTML="Our average price per kilowatt-hour for residential customers is around 18 cents*.";
			}	
			if(id == 14 || id == 15 || id == 16){
				document.getElementById("cc-content").innerHTML="The actual price may vary based on where you live, the season, and the amount of electricity you use. As a residential customer, your cost per kilowatt-hour depends on a few other variables as well.";
			}	
			if(id == 17){
				document.getElementById("cc-content").innerHTML="So now you know a little more about kilowatt-hours. To learn about how you can reduce energy usage select one of the appliances, or continue on to learn more about the monthly charges that make up your bill.";
			}	
			if(id == 18){
				document.getElementById("cc-content").innerHTML="Your monthly bill is primarily comprised of two cost elements: Generation charges and delivery charges. ";
			}
			if(id == 19){
				document.getElementById("cc-content").innerHTML="These costs are recovered through the price you pay for electricity. ";
			}				
			if(id == 20){
				document.getElementById("cc-content").innerHTML="Although you don’t have much control over the price you pay for electricity, You DO have control over the amount of electricity you use, so let's start there. ";
			}
			if(id == 21 || id == 22 || id == 23){
				document.getElementById("cc-content").innerHTML="The price per kilowatt-hour of electricity is based on a tiered rate structure and can vary depending upon how much you use. ";
			}
			if(id == 24){
				document.getElementById("cc-content").innerHTML="You may have noticed this on your bill. The basic residential rate plan is made up of various price levels known as tiers.";
			}
			if(id == 25){
				document.getElementById("cc-content").innerHTML="The price you pay for electricity is lowest in the 1st tier also known as your baseline, and the highest price is in the top tier.";
			}
			if(id == 26){
				document.getElementById("cc-content").innerHTML="Remember, this is just an example. While the price you pay per kWh is fixed, the overall price you pay and the number of tiers could vary depending on how much electricity you use and other factors.";
			}
			if(id == 27 || id == 28){
				document.getElementById("cc-content").innerHTML='In Southern California, climates vary from "coastal cool" to "desert hot," and everything in between. Depending on where you live your baseline rate will vary. ';
			}
			if(id == 29){
				document.getElementById("cc-content").innerHTML="If you're curious what your baseline rate is, click on the link to learn more.  ";
			}
			if(id == 30){
				
				document.getElementById("cc-content").innerHTML="You can check your energy usage by visiting “My Account.” If you haven't signed up already, it's a good idea to enroll. You can see what tier you're in today, your current costs, and even your projected next bill. ";
			}
			if(id == 31){
				document.getElementById("cc-content").innerHTML="Want to get started? Go to on.sce.com/myaccount to sign in or sign up for My Account. Or continue on and discover Ways to Save.";
			}
			if(id == 32){
				document.getElementById("cc-content").innerHTML="We've already discussed how usage affects your bill, Now let’s talk about how to reduce your usage to help lower your electricity costs. ";
			}
			if(id == 33 || id == 34){
				document.getElementById("cc-content").innerHTML="By keeping your home energy efficient, you don't just save electricity...";
			}
			if(id == 35){
				document.getElementById("cc-content").innerHTML="you help us keep energy flowing smoothly through the electricity grid...especially in the hot summer months.";
			}
			if(id == 36){
				document.getElementById("cc-content").innerHTML="The biggest energy guzzler in Southern California for residential customers is – surprise, surprise – air conditioning.";
			}
			if(id == 37){
				document.getElementById("cc-content").innerHTML="Followed closely by swimming pool pumps and older model refrigerators. Select one for tips on how to start saving and to learn about our most popular rebates and incentives.";
			}
			if(id == 38){
				document.getElementById("cc-content").innerHTML="HVAC stands for heating, ventilation, and air conditioning.";
			}
			if(id == 39 || id == 40){
				document.getElementById("cc-content").innerHTML="On summer days, when a lot of homes and businesses crank up the A/C, it puts a lot of stress on the electricity grid.  ";
			}
			if(id == 41 ){
				document.getElementById("cc-content").innerHTML="You can help to reduce energy demand and keep the electric grid running smoothly by taking steps to lower your usage during weekday afternoons. We also offer several incentive programs that reward you for using less during certain times and help you save money.";
			}
			if(id == 43 || id == 45){
				document.getElementById("cc-content").innerHTML="One example is our Save Power Days Incentive program.  This program rewards you with bill credits for reducing your energy use below what you would normally use during select weekday afternoons between the hours of 2 and 6 p.m.";
			}
			if(id == 46){
				document.getElementById("cc-content").innerHTML="We'll notify you one day in advance of a Save Power Day by your choice of phone, text, or email...";
			}
			if(id == 47){
				document.getElementById("cc-content").innerHTML="And by participating and reducing your usage, you can earn bill credits that will help lower your bill. How cool is that?";
			}
			if(id == 48){
				document.getElementById("cc-content").innerHTML="You can also help California stay golden by visiting the Energy Upgrade California web site to learn about the State's energy goals, how energy affects our climate, and about receiving annual climate credits that can also help to reduce your bill.";
			}
			if(id == 49){
				document.getElementById("cc-content").innerHTML="Visit the site to find out how you can save up $6,500 with a home upgrade.";
			}
			if(id == 50){
				document.getElementById("cc-content").innerHTML="Plus, there are rebates and incentive programs available, and other assistance programs for those who qualify.";
			}
			if(id == 51){
				document.getElementById("cc-content").innerHTML="Now let's jump into the pool.";
			}
			if(id == 52){
				document.getElementById("cc-content").innerHTML="Do you have a swimming pool or spa?  Interested in saving money? You might qualify to receive rebates for the purchase and installation of a more efficient pool pump.";
			}
			if(id == 53){
				document.getElementById("cc-content").innerHTML="Variable speed pool pumps are more efficient than single speed. Get a rebate now, and use less energy in the future.  That's double savings!";
			}
			if(id == 54){
				document.getElementById("cc-content").innerHTML="You can also reduce your pool's energy use just by making some small changes to your pool's maintenance program. Even though every pool is different, most of the following suggestions won't have any negative effect on your pool's cleanliness or chemical balance. Here are some tips:";
			}
			if(id == 55){
				document.getElementById("cc-content").innerHTML="You don't have to keep the water moving to keep the pool chemicals mixed. If the water is running while adding the chemicals, they will dissolve and stay mixed.";
			}
			if(id == 56){
				document.getElementById("cc-content").innerHTML="Use a timer to set the pump to several short cycles per day. This is better at preventing debris than cycling the pump for 3 or more continuous hours.";
			}
			if(id == 57){
				document.getElementById("cc-content").innerHTML="When cleaning your pool, turn off the pump and use a net or skimmer to physically remove debris. You may have heard the myth that algae grow less quickly if the pool water circulates constantly––it's not true! ";
			}
			if(id == 58){
				document.getElementById("cc-content").innerHTML="Filter for 3 hours a day, and increase by ½-hour increments if the water doesn't stay clean. A Center for Energy Conservation study found that homeowners who cut filtration time to 3 hours saved 60% of their pump's electricity use.";
			}
			if(id == 59){
				document.getElementById("cc-content").innerHTML="Any blockage will make your pool pump work harder, so remember to clean the screens frequently. Backwashing will help keep the filter clean, but don't do this too often, as it tends to waste water.";
			}
			if(id == 60){
				document.getElementById("cc-content").innerHTML="Now let's move on to a chilly subject: Your refrigerator.";
			}
			if(id == 61){
				document.getElementById("cc-content").innerHTML="Now let's move on to a chilly subject: Your refrigerator. Here are a couple of fun facts: Replacing your old fridge or freezer could save you $105 a year.";
			}
			if(id == 62){
				document.getElementById("cc-content").innerHTML="Purchase a new Energy Star&reg;-qualified refrigerator and get a $35 rebate or purchase an Energy Star Most Efficient refrigerator and get a $75 rebate.";
			}
			if(id == 63){
				document.getElementById("cc-content").innerHTML="Here's another great incentive: We'll come get your old fridge or freezer, haul it away, recycle it properly...AND give you 50 bucks.";
			}
			if(id == 64){
				document.getElementById("cc-content").innerHTML="Speaking of savings, have you learned how to save on your air conditioner or pool pump yet? If not, check out the resources section to quickly access all the information shared in this tool.";
			}
			if(id == 65){
				document.getElementById("cc-content").innerHTML="Did you know that you can check your current energy usage and costs at any time in My Account? If you haven't already, it's a good idea to sign up.";
			}
			if(id == 66){
				document.getElementById("cc-content").innerHTML="You can also see your hourly kilowatt consumption, a forecast of your next bill, and get access to other helpful tools like Budget Assistant...";
			}
			if(id == 67){
				document.getElementById("cc-content").innerHTML="...and take advantage of great programs like Save Power Days. On Save Power Days, you can get rewarded with bill credits for reducing your energy use below what you would normally use during select weekday afternoons between 2 and 6 p.m.";
			}
			if(id == 68){
				document.getElementById("cc-content").innerHTML="You can increase your savings by taking advantage of the variety of Rebates we offer too. Go check them out!";
			}	
			if(id == 69){
				document.getElementById("cc-content").innerHTML="Get a quick overview of your bill, select with the Bill Explainer Video.";

			}
			if(id == 70){
				document.getElementById("cc-content").innerHTML="Or learn more about our rates and how they work.";
			}
}

