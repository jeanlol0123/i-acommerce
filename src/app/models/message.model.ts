export class Message{
    sender: string
    content: string | any


    constructor(sender:string, content:string){
        this.sender = sender;
        this.content = content;
    }


}