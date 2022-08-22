class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.pauseButton.addEventListener("click", this.pause);
    this.startButton.addEventListener("click", this.start);
  }
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    if (!this.timerInterval) this.timerInterval = setInterval(this.tick, 10);
  };
  pause = () => {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.durationInput.disabled = false;
  };

  tick = () => {
    let v = this.durationInput.value;
    if (Number(this.durationInput.value) <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.durationInput.value = (Number(v) - 0.01).toFixed(2);
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return Number(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}
