var button = document.getElementById("button"),
	buttonText = document.getElementById("buttontext"),
	c = document.querySelector("#button"),
	root = document.documentElement;

/* Phrase Changer Code */
/* You can edit the phrases and images here.*/

button.onclick = (function () {
	var phrases = [
			"Click vào em đi",
			"Chúc mừng sinh nhật nhé Thắng onii-chan!!, click típ nào",
			"Onii-chan là một người tuyệt vời, típ nào",
			"Anh đẹp trai, đẹp trai và đẹp trai vailoz, còn gì nữa nhỉ ?",
			"Thắng-kun cũng wjbu nữa nè, đúng là ai đẹp trai cũng wjbu cả",
			"Nhưng ko sao, đẹp trai là được UwU",
			"Ở ngoài Hà Lội nhớ né phóng lợn cẩn thận nhé onii-chan",
			"Gặp lại onii-chan sau > <",
			"Chúc mừng sinh nhật lần nữa nè !!",
		],
		bImages = [
			"https://media1.tenor.com/images/90975d9b5cc7a3b48147514308fd1e17/tenor.gif?itemid=8390761",
			"https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-happy-birthday-image-95.jpg",
			"https://static.fandomspot.com/images/05/6829/01-makise-kurisu-steins-gate-anime.jpg",
			"https://images3.alphacoders.com/120/1204640.png",
			"https://64.media.tumblr.com/8af984bfef225ac4cd8bd2c115f0db62/6838955d702cfa84-8f/s1280x1920/1c2fa72a2495de3616aac3aaa2327cf5e354e328.jpg",
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2482750.jpg&f=1&nofb=1",
			"https://cutewallpaper.org/22/anime-girl-scared-wallpapers/scared-anime-girl-gifs-tenor.png",
			"https://i0.wp.com/animeavenue.co/wp-content/uploads/2018/03/wave.jpg?fit=1280%2C720&ssl=1",
			"https://images.alphacoders.com/648/648557.jpg",
		];

	var count = 0;
	var imageCount = 0;
	return function () {
		root.style.setProperty(
			"--image",
			"url(" + bImages[++count % phrases.length] + ")"
		);
		buttonText.textContent = phrases[++imageCount % phrases.length];
	};
})();
