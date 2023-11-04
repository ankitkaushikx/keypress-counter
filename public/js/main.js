class KeypressCounter {
  constructor() {
    this.resultElement = document.getElementById("result");
    this.timerElement = document.getElementById("timer");
    this.keyCounterElement = document.getElementById("keyCounter");
    this.btn = document.getElementById("main-btn");
    this.resetBtn = document.getElementById("reset-btn");
    this.timePeriod = 0;
    this.currentTime = 0;
    this.keyCounts = 0;
    this.isStarted = false;
    this.reset = true;
    // Add an event listener to listen for keypress events
    document.addEventListener("keyup", this.Keypress.bind(this));
    this.btn.addEventListener("click", this.StartCounting.bind(this));
    this.resetBtn.addEventListener("click", this.Reset.bind(this));
  }

  Keypress(event) {
    if (!this.isStarted) {
      this.StartCounting();
    } else if (this.reset) {
      this.keyCounts++;
      this.keyCounterElement.textContent = this.keyCounts;
    }
  }

  StartCounting() {
    this.btn.style.display = "none";
    this.isStarted = true;
    this.timePeriod = parseInt(this.timerElement.textContent);
    this.currentTime = parseInt(this.timerElement.textContent);
    const timer = setInterval(() => {
      if (this.currentTime > 0) {
        this.currentTime--;
        this.timerElement.textContent = this.currentTime;
      } else {
        clearInterval(timer);
        this.StopCounting();
      }
    }, 1000);
  }

  StopCounting() {
    const resultContent = `You Clicked ${this.keyCounts} times in ${this.timePeriod}s`;
    this.reset = false;
    this.resultElement.textContent = resultContent;
    this.resultElement.style.display = "block";
  }
  Reset() {
    this.btn.style.display = "block";
    this.keyCounterElement.textContent = 0;
    this.keyCounts = 0;
    this.timerElement.textContent = 10;
    this.reset = true;

    // Unfocus the reset button
    this.resetBtn.blur();
  }
}

const keypressCounter = new KeypressCounter();
