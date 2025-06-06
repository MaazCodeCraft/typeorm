import { createConnection } from "typeorm";
import { Client } from "./entities/Clients";
import { Banker } from "./Bankers";

const main = async () => {
    try {
        const connection = await createConnection ({
        type: "mariadb",
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "Pak@1947",
        database: "typeorm",
        entities: [Client, Banker],
        synchronize: true
    })
    console.log('Successfully Connected');
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to database");
    }
}

main();