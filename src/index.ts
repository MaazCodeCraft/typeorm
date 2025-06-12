import { createConnection } from "typeorm";

const main = async () => {
    try {
        const connection = await createConnection ({
        type: "mariadb",
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "Pak@1947",
        database: "typeorm",
        synchronize: true
    });
        console.log("Successful Connected");
    } catch (err) {
        console.log(err);
        throw new Error('Unable to connect to database');
    }
    
}

main ();