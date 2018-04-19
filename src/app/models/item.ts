export class Item {
    private reference: string;
    private name: string;
    private state: number;

    constructor(data:any){
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
    }
}