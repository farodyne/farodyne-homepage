/**
 * Entry point for the backend application.
 */
import { DatabaseClient, EnvironmentParameters, RestApi } from './utils/index.js';

// Read the environment parameters and start the required services.
const environmentParameters = new EnvironmentParameters();
const databaseClient = new DatabaseClient(environmentParameters);
const restApi = new RestApi(databaseClient, environmentParameters);
restApi.start();
