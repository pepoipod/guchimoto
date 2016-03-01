(function () {

	var selifs = [
		'そういうこともあるよ',
		'くよくよしないで、明日はハッピー！',
		'明日はいいことあるよ',
		'元気出して',
		'いつも頑張ってくれてありがとう。お疲れ様',
		'わかるよ、その気持ち',
		'しんどかったね、もう大丈夫だよ',
		'気にしない、気にしない♪',
		'心配ないよ。ほら、元気出して？',
		'大丈夫、大丈夫♪',
		'顔が曇ってるよ。ほら、笑顔笑顔♪',
		'お疲れ様、たまには休もう？'
	];

	var audioFileNames = [
		'souiukoto',
		'kuyokuyo',
		'ashitaha',
		'genki',
		'itsumo',
		'wakaruyo',
		'shindokatta',
		'kinishinai',
		'shinpai',
		'daijyobu',
		'kaoga',
		'otsukare'
	];

	var getGuchi = function (event) {
		event.preventDefault();
		var responseDom = document.getElementsByClassName('response')[0];
		var voiceDom = responseDom.getElementsByClassName('voice')[0];

		// toggle hiddeen dom.
		document.getElementsByClassName('guchi-form')[0].classList.add('hidden');
		responseDom.classList.remove('hidden');

		// random range is the number of shonin pictures.
		var rand = Math.floor(Math.random() * 9);

		document.querySelector('.main-visual img').src = 'assets/images/shonin_' + rand + '.jpg';

		rand = Math.floor(Math.random() * selifs.length);

		responseDom.getElementsByClassName('comment')[0].innerHTML = '「' + selifs[rand] + '」';

		// set audiofile and play.
		voiceDom.getElementsByTagName('source')[0].src = 'assets/audios/' + audioFileNames[rand] + '.mp3';
		voiceDom.load();
		voiceDom.play();

		return false;
	};

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelector('.guchi-form input[type=submit]').addEventListener('click', getGuchi, false);
	}, false);
}());


// twitter.
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');