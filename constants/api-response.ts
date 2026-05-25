export interface IApiResponse<T>{
    message: string,
    statusCode: number,
    success: boolean,
    data:T
}