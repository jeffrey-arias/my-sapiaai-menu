
import { LoginResultType } from "../types";

/**
 * 
 * @param username the user name
 * @param password the password
 * @param forceSuccess test parameter to force SUCCESS/FAIL
 * @returns LoginResultType
 * 
 * * This is a false API call.
 * If the generated random number is greater than 5, then we return a successful login.
 * If the generated random number is less than 5, then we return a failed login.
 */
export const loginApiCall = async (username: string, password: string, forceSuccess? : boolean ): Promise<LoginResultType> => {
    const min: number = Math.ceil(1);
    const max: number = Math.floor(10);
    const randomNumber: number =  Math.floor(Math.random() * (max - min + 1) + min);

    if (forceSuccess) {
        return new Promise (resolve=> resolve({ result: "SUCCESS" }));
    }
    if (forceSuccess == false) {
        return new Promise (resolve=> resolve({ result: "FAILED" }));
    }
    if (randomNumber > 5) {
        return new Promise (resolve=> resolve({ result: "SUCCESS" }));
    }
    else {
        return new Promise (resolve=> resolve({ result: "FAILED" }));

    }
};