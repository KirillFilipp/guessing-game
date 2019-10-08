class GuessingGame {
    constructor() {
        this.guessOne = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessOne = Math.round((this.min + this.max) / 2);
        return this.guessOne;
    }

    lower() {
        this.max = this.guessOne;
    }

    greater() {
        this.min = this.guessOne;
    }
}

module.exports = GuessingGame;
