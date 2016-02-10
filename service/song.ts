export default class Song {
    private _url: string;
    private elapsedTime: number;
    private playing: boolean;

    private _timerInterval: number;

    constructor(url: string) {
        this._url = url;
        this.playing = false;
        this.elapsedTime = 0;
        this._timerInterval = null;
    }

    public get url(): string {
        if (this.elapsedTime > 0) {
            return this._getInProgressUrl();
        }

        return this._url;
    }

    public play(): boolean {
        if (this.playing) {
            return true;
        }

        this._startTimer();
        this.playing = true;

        return this.playing;
    }

    public stop(): boolean {
        if (!this.playing) {
            return false;
        }

        this._stopTimer();
        this.elapsedTime = 0;
        this.playing = false;

        return true;
    }

    private _startTimer(): boolean {
        if (this._timerInterval) {
            return false;
        }

        this._timerInterval = setInterval(() => {
            this.elapsedTime++;
        }, 1000);
        return true;
    }

    private _stopTimer(): boolean {
        if (this._timerInterval) {
            clearInterval(this._timerInterval);
            this._timerInterval = null;

            return true;
        } else {
            return false;
        }
    }

    private _getInProgressUrl(): string {
        return this._url + "&" + "start=" + this.elapsedTime;
    }
}