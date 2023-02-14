import { LoginResultType } from "../../types";
import { loginApiCall } from "../../utils/api";

describe('Call API', () => {
    const un: string = "username";
    const pw: string = "password";
    const resultSuccess: LoginResultType = {
        result: "SUCCESS"
    }
    const resultFailed: LoginResultType = {
        result: "FAILED"
    }

    it('Should run', async () => {
        const result =  await loginApiCall(un, pw);
        expect(result).toHaveProperty("result");
    });

    it('Should return SUCCESS', async () => {
        const result =  await loginApiCall(un, pw, true);
        expect(result).toMatchObject(resultSuccess);
    });

    it('Should return FAILED', async () => {
        const result =  await loginApiCall(un, pw, false);
        expect(result).toMatchObject(resultFailed);
    });
})