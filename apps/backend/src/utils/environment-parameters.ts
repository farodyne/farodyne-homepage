/**
 * Utility object used to facilitate and simplify the reading of environment
 * variables in the codebase.
 */
export class EnvironmentParameters {
    // Database parameters.
    databaseUser?: string = process.env.FARODYNE_DB_USERNAME;
    databasePassword?: string = process.env.FARODYNE_DB_PASSWORD;
    databaseHost?: string = process.env.FARODYNE_DB_HOST;
    databasePort?: string = process.env.FARODYNE_DB_PORT;
    databaseName?: string = process.env.FARODYNE_DB_NAME;

    // API parameters.
    apiUser?: string = process.env.FARODYNE_API_USER;
    apiPassword?: string = process.env.FARODYNE_API_PASSWORD;
    apiPort?: string = process.env.FARODYNE_API_PORT;
    apiRoot?: string = process.env.FARODYNE_API_ROOT || '/rest/v1';
    contentUrl?: string = process.env.FARODYNE_CONTENT_URL || 'https://www.farodyne.com/media';
}
