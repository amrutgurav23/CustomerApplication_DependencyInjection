// browser console
// email
// db
export interface ILogger{
    Log(): void;
}
export class BaseLogger implements ILogger{
    Log(){
      
    }
}
export class ConsoleLogger extends BaseLogger{
    override Log(){
        console.log("Using console logger");
    }
}
export class DbLogger extends BaseLogger{
    override Log(){
        console.log("using Db logger");
    }
}
export class FileLogger extends BaseLogger{
    override Log(){
        console.log("using file logger");
    }
}