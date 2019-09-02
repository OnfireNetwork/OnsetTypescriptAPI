/** @noSelfInFile */

let lastSoundPlayed: Sound;
let textRaceInfo: TextBox | undefined;
let updateTimer: Timer | undefined;
let currentCheckpoint: number;
let maxCheckpoints: number;
let currentPosition: number;
let maxRacers: number;
let raceTime: number;
let raceStartTime: number;

function playAudioFile(file: string): void {
	lastSoundPlayed = Client.createSound("client/" + file);
}

Client.listenRemote("PlayAudioFile2", playAudioFile);

Client.listenRemote("RaceCountdown", (time: number) => {
	Client.printChat("Race countdown: " + time);
	let countdownText = Client.createTextBox(new Vector2d(0.0, -200.0), '<span size="80" style="italic" color="#42f448">GO GO GO!</>', "center");
	countdownText.setAnchors(new Vector2d(0.5, 0.5), new Vector2d(0.5, 0.5));
	countdownText.setAlignment(new Vector2d(0.5, 0.5));
	if (time == 3) {
		playAudioFile("3.mp3");
		countdownText.setText('<span size="46" style="bold" color="#fc0000">3</>');
	} else if (time == 2) {
		playAudioFile("2.mp3");
		countdownText.setText('<span size="52" style="bold" color="#fc4300">2</>');
	} else if (time == 1) {
		playAudioFile("1.mp3");
		countdownText.setText('<span size="58" style="bold" color="#fcc900">1</>');
	} else if (time == 0) {
		playAudioFile("go.mp3");
		playAudioFile("MLG_Horn.mp3");
	}
	Client.delay(900, () => countdownText.destroy());
});

Client.listenRemote("OnRaceJoin", (worldTime: number) => {
	setInput(true);
	if (worldTime && worldTime != -1)
		Client.getWorld().setTime(worldTime);
});

Client.listenRemote("OnRaceStart", (timeForRace: number) => {
	Client.printChat('<span color="#88eb00" size="18">The race starts now!</>');
	setInput(false);
	textRaceInfo = Client.createTextBox(new Vector2d(50.0, 100.0), "-", "left");
	textRaceInfo.setAnchors(new Vector2d(0.0, 0.5), new Vector2d(0.0, 0.5));
	textRaceInfo.setAlignment(new Vector2d(0.0, 0.5));
	raceTime = timeForRace;
	raceStartTime = Client.getTimeSeconds();
	updateTimer = Client.createTimer(() => setRaceTextInfo(currentCheckpoint, maxCheckpoints, currentPosition, maxRacers), 50);
});

Client.listenRemote("OnRaceExit", () => {
	setInput(false);
	if (textRaceInfo !== undefined) {
		textRaceInfo.destroy();
		textRaceInfo = undefined;
	}
	if (updateTimer !== undefined) {
		updateTimer.destroy();
		updateTimer = undefined;
	}
	currentCheckpoint = 0
	maxCheckpoints = 0
	currentPosition = 0
	maxRacers = 0
	raceTime = 0
});

Client.listenRemote("ServerUpdateRaceData", (checkpoint: number, maxCheckpoints: number, position: number, maxRacers: number) => {
	currentCheckpoint = checkpoint
	maxCheckpoints = maxCheckpoints
	currentPosition = position
	maxRacers = maxRacers
});

function setRaceTextInfo(check: number, maxChecks: number, pos: number, maxRacers: number): void {
	let player = Client.getPlayer();
	if (textRaceInfo !== undefined && player.isInVehicle()) {
		let vehicle = player.getVehicle();
		let speed = Math.floor(vehicle.getSpeed());
		let gear = GetVehicleGear(vehicle.getGear());
		let rpm = Math.floor(vehicle.getRPM());
		let health = Math.floor(vehicle.getHealth());
		let time_left = raceTime - (Client.getTimeSeconds() - raceStartTime);
		textRaceInfo.setText(`
			<span size="30" style="bold" color="#fc4300">Checkpoint: ${check}/${maxChecks}</>
			<span size="30" style="bold" color="#fc4300">Time: ${formatTime(time_left)}</> 
			<span size="30" style="bold" color="#fc4300">Position: ${pos}/${maxRacers}'</>
			<span size="30" style="bold" color="#fc4300">Speed: ${speed} km/h</>
			<span size="30" style="bold" color="#fc4300">Gear: ${gear}</>
			<span size="30" style="bold" color="#fc4300">RPM: ${rpm}</>
			<span size="30" style="bold" color="#fc4300">Health: ${health}</>`);
	}
}

function formatTime(time: number): string {
	let minutes = Math.floor(time / 60.0);
	let seconds = Math.floor(time - (minutes * 60.0));
	let milliseconds = Math.floor((time - (minutes * 60.0) - seconds) * 1000);
	return pad(minutes, 2) + ':' + pad(seconds, 2) + ':' + pad(milliseconds, 2);
}

function pad(num: number, size: number) {
	var s = num + "";
	while (s.length < size) s = "0" + s;
	return s;
}

function setInput(val: boolean) {
	Client.setIgnoreMoveInput(val);
	Client.setIgnoreLookInput(val);
}