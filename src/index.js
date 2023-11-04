class KeypressCounter {
  constructor() {
    const btn = document.getElementById("main-Btn");
    const timer = document.getElementById("timer");
    const keyCounter = document.getElementById("keyCounter");
    const result = document.getElementById("result");
    let isRunning = false;
    let timerCount = timer.textContent;
    let keyCount = keyCounter.textContent;

    // Events Handler
    btn.addEventListener("click", (e) => {
      this.Start();
    });
  }

  // Functions
  Start(timeCount) {
    isRunning = true;
    this.startTimer();
    this.UpdateUi();
  }

  UpdateUi() {
    if (this.isRunning) {
    } else {
      this.btn.style.display = "none";
      this.startTimer(time);
    }
  }

  StartTimer(timeCount) {
    if (isRunning) {
      interval = setInterval(() => {
        if (timeCount > 0) {
          this.timerCount - 1;
          this.timer.textContent = this.timeCount;
        } else {
          this.isRunning = false;
          this.UpdateUi();
          clearInterval(interval);
        }
      }, 1000);
    }
  }
}

const keypressCounter = new KeypressCounter();
