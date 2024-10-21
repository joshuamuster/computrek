// src/soundEffects.js

// Import sound files
import denyBeep01 from './assets/media/sounds/deny_beep_01.mp3';
import panelBeep03 from './assets/media/sounds/panel_beep_03.mp3';
import panelBeep07 from './assets/media/sounds/panel_beep_07.mp3';
import panelBeep08 from './assets/media/sounds/panel_beep_08.mp3';
import panelBeep13 from './assets/media/sounds/panel_beep_13.mp3';
import panelBeep14 from './assets/media/sounds/panel_beep_14.mp3';

import keyOkay01 from './assets/media/sounds/SFXcomputer/keyok1.wav';
import keyOkay02 from './assets/media/sounds/SFXcomputer/keyok2.wav';
import keyOkay03 from './assets/media/sounds/SFXcomputer/keyok3.wav';

import voiceInput03 from './assets/media/sounds/SFXcomputer/voiceinput3.wav';
import voiceInput04 from './assets/media/sounds/SFXcomputer/voiceinput4.wav';

const playSound = (soundPath) => {
  const audio = new Audio(soundPath);
  audio.play().catch(error => console.error('Error playing sound:', error));
};

export const playAlertSound = () => playSound(denyBeep01);
export const playButtonSound01 = () => playSound(panelBeep14);
export const playButtonSound02 = () => playSound(panelBeep03);
export const playButtonSound03 = () => playSound(panelBeep07);
export const playButtonSound04 = () => playSound(panelBeep08);
export const playNotificationSound = () => playSound(panelBeep13);

// Computer sound effects
export const playKeyOk01 = () => playSound(keyOkay01);
export const playKeyOk02 = () => playSound(keyOkay02);
export const playKeyOk03 = () => playSound(keyOkay03);
export const playSFXSound03 = () => playSound(voiceInput03);
export const playSFXSound04 = () => playSound(voiceInput04);
