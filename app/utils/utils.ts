import { ApiResponse, NETWORK_ERROR } from "apisauce"


export const extractRows: <T>(
    response: ApiResponse<T[]>,
  ) => T[] | undefined = (response) => response?.data


export const formatGroupResponse = <T>(
    response: ApiResponse<T[]>,
): T[] | undefined => {
    if (response && response.ok) {
        return extractRows(response)
    }
    const error =
        response?.status || response?.originalError.message || NETWORK_ERROR
    throw error
}