export class Item {
    private reference: string;
    private name: string;
    private state: number;
    private image: string;

    constructor(data:any){
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
        this.image = data.image;
    }
}