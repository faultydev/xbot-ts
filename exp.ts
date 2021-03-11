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

export class cmd {

    public load(module:string) {

        const index = require('./index')

        if (fs.existsSync(`./commands/${module}`)) {
            fs.readdir(`./commands/${module}`, (err, files) => {
            if(err) console.log(err);
        
            let file = files.filter(f => f.split(".").pop() === "ts");
        
            if(file.length <= 0){
            console.log("[ERR] Couldn't find commands.");
            return;
            }
        
            file.forEach((f, i) =>{
                const info = require(`./commands/${module}/${f}`);
                const dt = new info;
                index.loadCommand(dt.name, props);
                props.help.aliases.forEach(alias => {
                index.loadAlias(alias, props.help.name);
                });
                console.log(`[BOT] ${module}/${f} loaded!`);
            });
            })
        } else {
        console.log('tried to load ' + module + ' but could not find it.')
        }

    }

}