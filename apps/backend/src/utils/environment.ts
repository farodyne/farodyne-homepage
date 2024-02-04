/**
 * Utility class used to read in the environment variables used by this application.
 */
import { EnvironmentParameters } from '@/types';

export class Environment implements EnvironmentParameters {
    databaseUser?: string;
    databasePassword?: string;
    databaseHost?: string;

    constructor() {
        this.databaseUser = process.env.FARODYNE_DB_USERNAME;
        this.databasePassword = process.env.FARODYNE_DB_PASSWORD;
        this.databaseHost = process.env.FARODYNE_DB_HOST;
    }
}
