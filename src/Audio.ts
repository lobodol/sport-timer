/**
 * Emit a 500 ms long sine sound at the given frequency
 */
export function beep(frequency: number): void {
  const audio = new AudioContext()
  const duration = 500
  const oscillator = audio.createOscillator()
  const gain = audio.createGain()

  oscillator.connect(gain)
  oscillator.frequency.value = frequency
  oscillator.type = 'sine'

  gain.connect(audio.destination)
  gain.gain.value = 100 * 0.01

  oscillator.start(audio.currentTime)
  oscillator.stop(audio.currentTime + duration * 0.001)
}
