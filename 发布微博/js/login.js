class Login {
	constructor(btn) {
		// 找到点击弹框按钮
		// 传参或者直接查找根据实际情况决定
	    this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
		this.ctn = document.querySelector(".ctn")
	}
	
	bindEvents () {
		// 给登录弹框按钮绑定事件
		let _this = this;
		this.btn.onclick = function () {
			// 给container插入内容
			_this.container.innerHTML = '<h4>发布微博</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>文件名：<input id="username" type="text"></label></p>'+
			'<p><textarea id="password" placeholder="请输入内容" cols="36" rows="3"></textarea></p>'+
			'<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>';
			// 让container显示并且居中
			tools.showCenter(_this.container);
			// 创建模态层
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
			
			// container可拖拽
			new Drag(_this.container, "h4").init();
			
			
		}
		
		// 给删除按钮绑事件（委托给container）
		this.container.onclick = e => {
			e = e || window.event;
			var target = e.target || e.srcElement;
			
			// 利用case穿透
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let password = document.querySelector("#password").value;
					
					let time = new Date().getTime();
					//发布
					this.issue(username,password,time);
				case "closeBtn" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
			}	
		}
	}
	issue(username,password,time){
		let weibo = document.createElement("div")
		weibo.className = "content";
		let html = `<p>用户名:${username}</p>
					<p>内容:${password}</p>
					<button>删除</button>`
		weibo.innerHTML = html;
		this.ctn.appendChild(weibo);
	}
}
