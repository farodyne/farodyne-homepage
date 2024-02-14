/**
 * Entry point for the backend application.
 */
import { environmentParameters } from 'farodyne-common';
import { DatabaseClient, RestApi } from './utils';

// Read the environment parameters and start the required services.
const databaseClient = new DatabaseClient(environmentParameters);
const restApi = new RestApi(databaseClient, environmentParameters);
restApi.start();
