import { DataSource, DataSourceOptions } from "typeorm"
import path from "node:path"
import "dotenv/config"
import { Client } from "./entities/client.entitie"
import { Contact } from "./entities/contact.entitie"
import { CreateTable1686163373685 } from "./migrations/1686163373685-CreateTable"




const DataSourceConfig = (): DataSourceOptions => {
    /*  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}")
     const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}") */

    if (!process.env.DATABASE_URL) {
        throw new Error("Env var DATABASE_URL does not exists")
    }
    return {
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [Client, Contact],
        migrations: [CreateTable1686163373685]
    }
}

const AppDataSource: DataSource = new DataSource(DataSourceConfig())

export { AppDataSource }