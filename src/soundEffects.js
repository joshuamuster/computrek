// src/soundEffects.js
const playSound = (soundPath) => {
  const audio = new Audio(soundPath);
  audio.play().catch(error => console.error('Error playing sound:', error));
};

export const playButtonSound01 = () => playSound('/assets/media/sounds/panel_beep_03.mp3');
export const playButtonSound02 = () => playSound('/assets/media/sounds/panel_beep_14.mp3');
export const playAlertSound = () => playSound('/assets/media/sounds/deny_beep_01.mp3');
export const playNotificationSound = () => playSound('/assets/media/sounds/panel_beep_13.mp3');
