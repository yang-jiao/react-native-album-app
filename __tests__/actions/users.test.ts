import { getUsers } from '../../app/selectors/users'
import { fetchUsersAction } from '../../app/actions/users'
import configureStore from '../../app/store/configureStore'

const { store } = configureStore()

const mockUsersPayload = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
    }]

jest.mock('../../app/services/users', () => ({
    fetchUsers: jest
        .fn()
        .mockResolvedValueOnce([
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
            },
            {
                id: 2,
                name: "Ervin Howell",
                username: "Antonette",
            }
        ])
        .mockRejectedValueOnce('Unable to format tips'),
}))

describe('users action', () => {
    it('should get users from service layer and make it available in the redux store', async () => {
        await store.dispatch(fetchUsersAction())
        const state = store.getState()
        expect(getUsers(state)).toEqual(
            expect.arrayContaining(mockUsersPayload)
        )
    })
})
