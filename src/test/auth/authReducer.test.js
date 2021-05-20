import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";


describe('Test in authReducer', () => {

    test('must return the default state', () => {

        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });
    })

    test('must authenticate and enter the user name  ', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'María'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            name: 'María'
        });
    })

    test('must delete user name and logged in false', () => {

        const action = {
            type: types.logout,
        }

        const state = authReducer({ logged: true, name: 'Peter' }, action);
        expect( state ).toEqual({ logged: false });

    })

})
