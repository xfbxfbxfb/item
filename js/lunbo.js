//小轮播
			var index2 = 0;
			var t = setInterval(play1, 5000);

			function play1() {
				if(index2 == 5) {
					index2 = 0
				}

				$(".lunxia2 li").eq(index2).css({
					"background-color": "orange",
					"border": "1px solid white",
				}).siblings().css({
					"background-color": "white",
					"border": "1px solid white",
				});

				$(".box2 a").eq(index2).fadeIn(1000).siblings().fadeOut(1000);

				index2++;
			};

			$(function() {
				$(".lunb2").hover(function() {
						clearInterval(t);
					},
					function() {
						t = setInterval(play1, 5000);
					});

			});
			$(function() {

				$(".lunxia2 li").click(function() {
					var index2 = $(this).index();
					$(".lunxia2 li").eq(index2).css({
						"background-color": "orange",
					"border": "1px solid white",
					}).siblings().css({
						"background-color": "white",
					"border": "1px solid white",
					});

					$(".box2 a").eq(index2).fadeIn(1000).siblings().fadeOut(1000);

				});
			});

			var index = 0;
			var time = setInterval(play, 5000);
			$(function() {
				//悬浮时轮播停止
				$(".box,.boxleft,.boxright").hover(function() {
						clearInterval(time);
					},
					function() {
						time = setInterval(play, 5000);
					});

			});
			//   左右按钮

			$(function() {
				//  	左按钮
				$(".boxleft").click(function() {
					index--;
					if(index < 0) {
						index = 2;
					}
					//图标转换
					$(".lunxia li").eq(index).css({
						"background-color": "white",
						"border": "1px solid white",
					}).siblings().css({
						"background-color": "",
						"border": "1px solid white ",
					});

					//	图片转换
					$(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
				});
			});
			//右按钮
			$(function() {
				$(".boxright").click(function() {
					index++;
					if(index > 2) {
						index = 0;
					} //图标转换
					$(".lunxia li").eq(index).css({
						"background-color": "white",
						"border": "1px solid white",
					}).siblings().css({
						"background-color": "",
						"border": "1px solid white ",
					});

					//	图片转换
					$(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
				});
			});
			//图标按钮
			$(function() {
				$(".lunxia ul li").click(function() {

					var index = $(this).index();

					//图标转换
					$(".lunxia li").eq(index).css({
						"background-color": "white",
						"border": "1px solid white",
					}).siblings().css({
						"background-color": "",
						"border": "1px solid white ",
					});

					//	图片转换
					$(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);

				});
			});

			//自动播放
			function play() {
				if(index == 2) {
					index = 0;
				}

				//图标转换
				$(".lunxia li").eq(index).css({
					"background-color": "white",
					"border": "1px solid white",
				}).siblings().css({
					"background-color": "",
					"border": "1px solid white ",
				});

				//	图片转换
				$(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
				index++;
			}