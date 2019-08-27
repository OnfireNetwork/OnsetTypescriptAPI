import { CreateSound, AddRemoteEvent, AddPlayerChat, CreateTextBox, SetTextBoxAnchors, SetTextBoxAlignment, SetTextBoxText, DestroyTextBox, SetIgnoreMoveInput, SetIgnoreLookInput, SetTime, GetTimeSeconds, CreateTimer, DestroyTimer, IsPlayerInVehicle, GetVehicleForwardSpeed, GetPlayerVehicle, GetVehicleGear, GetVehicleEngineRPM, GetVehicleHealth } from "../../../src/definition/Client";

import { Delay } from "../../../src/definition/Common";

/** @noSelfInFile */


let lastSoundPlayed;
let textRaceInfo: number;
let updateTimer: number;
let currentCheckpoint: number;
let maxCheckpoints: number;
let currentPosition: number;
let maxRacers: number;
let raceTime: number;
let raceStartTime: number;

function PlayAudioFile2(file: string): void {
    let FileName = "client/" + file;

	lastSoundPlayed = CreateSound(FileName);
}
AddRemoteEvent("PlayAudioFile2", PlayAudioFile2);

function RaceCountdown(time: number): void {
    AddPlayerChat("Race countdown: " + time);

	let guiid = CreateTextBox(0.0, -200.0, '<span size="80" style="italic" color="#42f448">GO GO GO!</>', "center");
	SetTextBoxAnchors(guiid, 0.5, 0.5, 0.5, 0.5);
	SetTextBoxAlignment(guiid, 0.5, 0.5);

    if (time == 3) {
        PlayAudioFile2("3.mp3");
		SetTextBoxText(guiid, '<span size="46" style="bold" color="#fc0000">3</>');
    } else if (time == 2) {
        PlayAudioFile2("2.mp3");
		SetTextBoxText(guiid, '<span size="52" style="bold" color="#fc4300">2</>');
    } else if (time == 1) {
        PlayAudioFile2("1.mp3");
		SetTextBoxText(guiid, '<span size="58" style="bold" color="#fcc900">1</>');
    } else if (time == 0) {
        PlayAudioFile2("go.mp3");
		PlayAudioFile2("MLG_Horn.mp3");
    }

    Delay(900, function(this: void, guiid: number) {DestroyTextBox(guiid);}, guiid);
}
AddRemoteEvent("RaceCountdown", RaceCountdown)

function OnRaceJoin(world_time: number): void {
    // Disable player controls
	SetIgnoreMoveInput(true);
	SetIgnoreLookInput(true);

	if (world_time && world_time != -1)
		SetTime(world_time);
}
AddRemoteEvent("OnRaceJoin", OnRaceJoin);

function OnRaceStart(TimeForRaceSeconds: number): void {
    AddPlayerChat('<span color="#88eb00" size="18">The race starts now!</>');

	// Enable player controls
	SetIgnoreMoveInput(false);
	SetIgnoreLookInput(false);

	textRaceInfo = CreateTextBox(50.0, 100.0, "-");
	SetTextBoxAnchors(textRaceInfo, 0.0, 0.5, 0.0, 0.5);
	SetTextBoxAlignment(textRaceInfo, 0.0, 0.5);
	raceTime = TimeForRaceSeconds;
	raceStartTime = GetTimeSeconds()

	updateTimer = CreateTimer(() => SetRaceTextInfo(currentCheckpoint, maxCheckpoints, currentPosition, maxRacers), 50);
}
AddRemoteEvent("OnRaceStart", OnRaceStart);

function OnRaceExit(): void {
	// Enable player controls
	SetIgnoreMoveInput(false);
	SetIgnoreLookInput(false);

	// Destroy the race info text box
	DestroyTextBox(textRaceInfo);
	textRaceInfo = 0;

	// Destroy timer
	DestroyTimer(updateTimer);
	updateTimer = 0;

	// Reset other variables
	currentCheckpoint = 0
	maxCheckpoints = 0
	currentPosition = 0
	maxRacers = 0
	raceTime = 0
}
AddRemoteEvent("OnRaceExit", OnRaceExit);

function ServerUpdateRaceData(checkpoint: number, max_checkpoints: number, position: number, max_racers: number): void {
	currentCheckpoint = checkpoint
	maxCheckpoints = max_checkpoints
	currentPosition = position
	maxRacers = max_racers
}
AddRemoteEvent("ServerUpdateRaceData", ServerUpdateRaceData)


function SetRaceTextInfo(check: number, max_checks: number, pos: number, max_racers: number): void {
	if (textRaceInfo != 0 && IsPlayerInVehicle()) {
		let speed = Math.floor(GetVehicleForwardSpeed(GetPlayerVehicle()));
	    let gear = GetVehicleGear(GetPlayerVehicle());
	    let rpm = Math.floor(GetVehicleEngineRPM(GetPlayerVehicle()));
		let health = Math.floor(GetVehicleHealth(GetPlayerVehicle()));

	    let time_left = raceTime - (GetTimeSeconds() - raceStartTime);

		SetTextBoxText(textRaceInfo, `
			<span size="30" style="bold" color="#fc4300">Checkpoint: ${check}/${max_checks}</>
			<span size="30" style="bold" color="#fc4300">Time: ${FormatTime(time_left)}</> 
			<span size="30" style="bold" color="#fc4300">Position: ${pos}/${max_racers}'</>
			<span size="30" style="bold" color="#fc4300">Speed: ${speed} km/h</>
			<span size="30" style="bold" color="#fc4300">Gear: ${gear}</>
			<span size="30" style="bold" color="#fc4300">RPM: ${rpm}</>
			<span size="30" style="bold" color="#fc4300">Health: ${health}</>`);
	}
}
function FormatTime(time: number): string {
	let minutes = Math.floor(time / 60.0);
	let seconds = Math.floor(time - (minutes * 60.0));
	let milliseconds = Math.floor((time - (minutes * 60.0) - seconds) * 1000);
	return pad(minutes, 2) + ':' + pad(seconds, 2) + ':' + pad(milliseconds, 2);
}

function pad(num: number, size: number) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}