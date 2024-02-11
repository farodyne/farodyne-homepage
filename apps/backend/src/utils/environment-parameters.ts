/**
 * Utility class used to read in the environment variables used by this application.
 */
export class EnvironmentParameters {
    databaseUser?: string;
    databasePassword?: string;
    databaseHost?: string;
    databasePort?: string;
    databaseName?: string;

    constructor() {
        this.databaseUser = process.env.FARODYNE_DB_USERNAME;
        this.databasePassword = process.env.FARODYNE_DB_PASSWORD;
        this.databaseHost = process.env.FARODYNE_DB_HOST;
        this.databasePort = process.env.FARODYNE_DB_PORT;
        this.databaseName = process.env.FARODYNE_DB_NAME;
    }
}
