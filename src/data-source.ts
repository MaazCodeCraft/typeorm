import { DataSource } from "typeorm"

export const AppDataSource = new DataSource ({
        type: "mariadb",
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "Pak@1947",
        database: "typeorm",
        synchronize: true,
})
