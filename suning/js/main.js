window.onload=function(){
	
	

// 左侧导航
	var guide=document.getElementById("floor-guide");
	var flNav=guide.getElementsByTagName("li");
	var fla=guide.getElementsByTagName("a");
	setInterval(function(){
		
		
		var top=document.documentElement.scrollTop||document.body.scrollTop;

		if(top>1500&&top<9100){
			guide.style.display="block";
			if(top<2600){
				flon(0);
			}else if(top<3200){
				flon(1);
			}else if(top<3800){
				flon(2);
			}else if(top<4300){
				flon(3);
			}else if(top<5000){
				flon(4);
			}else if(top<5600){
				flon(5);
			}else if(top<6200){
				flon(6);
			}else if(top<6700){
				flon(7);
			}else if(top<7200){
				flon(8);
			}else if(top<7900){
				flon(9);
			}else if(top<8400){
				flon(10);
			}else if(top<9100){
				flon(11);
			}
			
		}

		else{
			guide.style.display="none";
		}
		for (var i = 0; i < flNav.length; i++) {
			flNav[i].index=i;
			flNav[i].onclick=function(){
				flon(this.index);
				if(document.documentElement.scrollTop){
					document.documentElement.scrollTop=2100+580*this.index;
				}else{
					document.body.scrollTop=2100+580*this.index;
				}
				
			}
		}
		function flon(j){
			for (var i = 0; i < flNav.length; i++) {
				flNav[i].style.backgroundColor="";
				fla[i].style.color="";
			}
			flNav[j].style.backgroundColor="#fa0";
			fla[j].style.color="#fff";
		}

		

	},200)
// 公告栏
		var not=document.getElementsByClassName("not");
		var notH=document.getElementById("notice-head");
		var notHead=notH.getElementsByTagName("li");
		not[0].style.display="block";
		notHead[1].onmouseover=function(){
			not[0].style.display="none";
			not[1].style.display="block";
		}
		notHead[0].onmouseover=function(){
			not[1].style.display="none";
			not[0].style.display="block";
		}
		

// 轮播图
	var banBg=['#46F4F5','#279603','#242223','#E7574E','#01A6EA'];
	var fx=['f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11']
	focus('ban','770','banner');
	for (var i = 0; i < fx.length; i++) {
		focus(fx[i],'404')
	}
	
	scroll('scroll','1200','scroll');
	scroll('club','999','disc');
	
	function focus(oDiv,move,bg){
		var backg=document.getElementById(bg);
		var oDiv=document.getElementById(oDiv);
		var oU=oDiv.getElementsByTagName('ul')[0];
		var oA=oDiv.getElementsByTagName('a');
		var pre=oDiv.getElementsByClassName('pre')[0];
		var next=oDiv.getElementsByClassName('next')[0];
		var move=move;
		var num=0;
		oA[num].style.backgroundColor="#f60";
		for (var i = 0; i < oA.length; i++) {
			oA[i].index=i;
			oA[i].onmouseover=function(){
				num=this.index;
				change();

			}
		}
		var timer=setInterval(function(){
			num++;
			change();
		},3000)
		
		pre.onclick=function(){
			num--;

			change();
		}
		next.onclick=function(){
			num++;change()
		}
		function change(){
			if(num<0) num+=oA.length;
			num%=oA.length;
			for (var i = 0; i < oA.length; i++) {
				oA[i].style.backgroundColor="#333";
			}
			oU.style.left='-'+num*move+'px';
			oA[num].style.backgroundColor="#f60";
			if(backg) backg.style.backgroundColor=banBg[num];
			
			
			
		}
	}
	function scroll(oDiv,move,oD){
	
		var oDiv=document.getElementById(oDiv);
		var oD=document.getElementById(oD);
		var oU=oDiv.getElementsByTagName('ul')[0];
		var oA=oD.getElementsByTagName('a');
		var pre=oDiv.getElementsByClassName('pre')[0];
		var next=oDiv.getElementsByClassName('next')[0];
		var move=move;
		var num=0;
		oA[num].style.backgroundColor="#f60";
		for (var i = 0; i < oA.length; i++) {
			oA[i].index=i;
			oA[i].onmouseover=function(){
				num=this.index;
				change();

			}
		}

		pre.onclick=function(){
			num--;change()
		}
		next.onclick=function(){
			num++;change()
		}
		function change(){
			if(num<0) num+=oA.length;
			num%=oA.length;
			for (var i = 0; i < oA.length; i++) {
				oA[i].style.backgroundColor="#fff";
			}
			oU.style.left='-'+num*move+'px';
			oA[num].style.backgroundColor="#f60";
			
			
		}
	}
// 换一换
	var chang=document.getElementById("change");
	var ha=true;
	chang.onclick=function(){
		var oDiv=document.getElementById("habit");
		if(ha){
			oDiv.style.left=-1200+'px';
			ha=false;
		}
		else{
			oDiv.style.left=0;
			ha=true;
		}
		 
		 
	}
// 选项卡
	var floor=document.getElementsByClassName("floor");
	var kinds=['cloth',"phone",'food','homeEle','lifeEle','computer','toy','daily','life','home','car','book']
	var head=['cloth-head','phone-head','foodHead','homeEleHead','lifeEleHead','computerHead','toyHead','dailyHead','lifeHead','homeHead','carHead','bookHead']
	for (var i = 0; i < floor.length; i++) {
		tabs(kinds[i],head[i]);
	}
	
	function tabs(kinds,head){
		var kinds=document.getElementById(kinds);
		var head=document.getElementById(head);
		var oLi=head.getElementsByTagName("li");
		var sp=head.getElementsByTagName("span");
		var page=kinds.getElementsByClassName("page");
		
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index=i;
			oLi[i].onmouseover=function(){
				for (var i = 0; i < sp.length; i++) {
					sp[i].style.display="none";
					page[i].style.display="none";
				}
				sp[this.index].style.display="block";
				page[this.index].style.display="block";
			}
		}
	}
// 点击收藏
	var brand=document.getElementById("brand");
	var heart=brand.getElementsByTagName("span");
	var off=true;
	for (var i = 0; i < heart.length; i++) {
		heart[i].onclick=function(){
			if(off){
				this.style.backgroundPosition=" -88px -70px";
				off=false;
			}else{
				this.style.backgroundPosition=" -88px -83px";
				off=true
			}
			
		}
	}

	
}





