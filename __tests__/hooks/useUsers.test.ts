import { renderHook } from '@testing-library/react-hooks'
import useUsers from '../../app/hooks/useUsers'


const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('useUsers hook test', () => {
  test('should return isLoading false', async () => {
    const { result } = renderHook(() => useUsers())
    expect(result.current.isLoading).toEqual(false)
  })
})
