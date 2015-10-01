export default class Playlist {
    private urlList: string[];
    private position: number;

    constructor(startPos: number = 0) {
        this.position = startPos;
        this.urlList = [];
    }

    public get all(): string[] {
        return this.urlList;
    }

    public get current(): string {
        return this.urlList[this.position];
    }

    public get next(): string {
        this.position = (this.position + 1) % this.urlList.length;
        return this.urlList[this.position];
    }

    public get previous(): string {
        this.position = (this.position - 1) % this.urlList.length;
        return this.urlList[this.position];
    }

    public shuffle(): void {
        // Shuffle List
    }
    
    // Returns new size of list
    public addSong(url: string): number {
        return this.urlList.push(url);
    }
    
    // Returns removed Urls
    public removeSong(index: number = this.position): string[] {
        return this.urlList.splice(index, 1);
    }
}