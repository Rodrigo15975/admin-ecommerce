interface HttpResponse {
  statusCode: number
  message: string
}
interface Cookies {
  auth: string
}

interface VerifyToken {
  message: string
  statusCode: number
  success: boolean
  token: string
  userId?: number
}
