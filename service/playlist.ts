export default class Playlist {
    private urlList: { [url: string] : boolean };
    private positionMap: string[];
    private listSize: number; // Kept in sync with urlList size
    private position: number;

    constructor(startPos: number = 0) {
        this.position = startPos;
        this.listSize = 0;
        this.urlList = {};
        this.positionMap = [];
    }

    public get all(): any {
        return this.positionMap;
    }

    public get current(): string {
        return this.positionMap[this.position];
    }

    public get next(): string {
        this.position = (this.position + 1) % this.listSize;
        return this.positionMap[this.position];
    }

    public get previous(): string {
        this.position = (this.position - 1) % this.listSize;
        return this.positionMap[this.position];
    }
    
    // Returns new size of list
    public addSong(url: string): number {
        if (this.urlList[url]) {
            return this.listSize;
        }

        this.listSize++;
        this.urlList[url] = true;
        this.positionMap.push(url);
        return this.listSize;
    }
    
    // Returns removed Urls
    public removeSong(index: number = this.position): string[] {
        var urlToRemove: string = this.positionMap[index];
        if (urlToRemove && this.urlList[urlToRemove]) {
            --this.listSize;
            delete this.urlList[urlToRemove];
            return this.positionMap.splice(index, 1);
        }
        
        return [];
    }
}