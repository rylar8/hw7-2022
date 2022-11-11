var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay:' + video.autoplay);
	console.log('Looping:'  + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Playing video");
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
});

document.querySelector('#pause').addEventListener('click', function() {
	console.log('Paused video');
	video.pause();

});

document.querySelector('#slower').addEventListener('click', function() {
	console.log('Slowing down play speed');
	video.playbackRate *= .9;
	console.log('Playback speed:' + video.playbackRate);

});

document.querySelector('#faster').addEventListener('click', function() {
	console.log('Speeding up play speed');
	video.playbackRate /= .9;
	console.log('Playback speed:' + video.playbackRate);

});

document.querySelector('#skip').addEventListener('click', function() {
	console.log('Skipping ahead');
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log('Video timestamp:' + video.currentTime);

});

document.querySelector('#slider').addEventListener('click', function() {
	console.log('Video volume:' + video.volume);
	video.volume = this.value / 100;
	console.log('Video volume:' + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'

});

document.querySelector('#mute').addEventListener('click', function(){
	if(video.muted == true){
		console.log('Unmuted')
		video.muted = false
		this.innerHTML = 'Mute'
	}

	else{
		console.log('Muted')
		video.muted = true
		this.innerHTML = 'Unmute'
	}

});

document.querySelector('#vintage').addEventListener('click', function(){
	console.log('Class: Vintage')
	video.classList.add('oldSchool')
})

document.querySelector('#orig').addEventListener('click', function(){
	console.log('Class: Original')
	video.classList.remove('oldSchool')
})

