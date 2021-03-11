import * as fs from 'fs';

export class save {

    public log(text:string) {
        
        console.log(text);

        fs.appendFile('./logs.txt', text, (err) => {

        if (err) throw err

        });

    }

    public silentlog(text:string) {

        fs.appendFile('./logs.txt', text, (err) => {

            if (err) throw err

        })

    }

}