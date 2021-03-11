export default class Test {

    public run(bot, message, args:Array<string>){

        message.reply("aaa")

    }

}

export class info {

    name:string = "test" // name
    description:string = "test command" // about the command
    command:string = "t" // the command.
    aliases:Array<string> = ["test"] // aliases to the command.

}