/**
 * This utility object acts as a convinient mechanism in which to read the settings
 * that apply in our frontend application. It neatly hides away default values from
 * the rest of the code.
 */
export const settings = {
    apiUser: import.meta.env.VITE_FARODYNE_API_USER,
    apiPassword: import.meta.env.VITE_FARODYNE_API_PASSWORD
};
