import { AxiosError } from 'axios'

export const instanceOfAxios = (error: any | unknown) =>
  error instanceof AxiosError && error
