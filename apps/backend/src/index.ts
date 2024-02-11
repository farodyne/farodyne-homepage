/**
 * Entry point for the backend application.
 */
import { DatabaseClient, EnvironmentParameters } from './utils';

const databaseClient = new DatabaseClient(new EnvironmentParameters());
