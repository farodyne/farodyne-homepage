/**
 * Utility object used to facilitate and simplify the reading of environment
 * variables in the codebase.
 */
export interface EnvironmentParameters {
    // Database parameters.
    databaseUser?: string;
    databasePassword?: string;
    databaseHost?: string;
    databasePort?: string;
    databaseName?: string;

    // API parameters.
    apiUser?: string;
    apiPassword?: string;
    apiPort?: string;
    apiRoot?: string;
    contentUrl?: string;
}

export const environmentParameters: EnvironmentParameters = {
    // Database parameters.
    databaseUser: process.env.FARODYNE_DB_USERNAME,
    databasePassword: process.env.FARODYNE_DB_PASSWORD,
    databaseHost: process.env.FARODYNE_DB_HOST,
    databasePort: process.env.FARODYNE_DB_PORT,
    databaseName: process.env.FARODYNE_DB_NAME,

    // API parameters.
    apiUser: process.env.FARODYNE_API_USER,
    apiPassword: process.env.FARODYNE_API_PASSWORD,
    apiPort: process.env.FARODYNE_API_PORT,
    apiRoot: process.env.FARODYNE_API_ROOT || '/rest/v1',
    contentUrl: process.env.FARODYNE_CONTENT_URL || 'https://www.farodyne.com/content'
};
