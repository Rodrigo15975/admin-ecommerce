// import { jwtDecode } from "jwt-decode"

// interface DecodedToken {
//   id: number
//   exp: number
//   iat: number
//   role: string
// }

// export const getIdFromToken = (token: string): number | undefined => {
//   try {
//     if (!token) return undefined

//     const decoded: DecodedToken = jwtDecode(token)
//     return decoded.id
//   } catch (error) {
//     console.error("Error decoding token", error)
//     return
//   }
// }

// // export const useGetUserId = () => {
// //   const [token] = useCookies(["auth"])
// //   console.log(token.auth)
// //   return getIdFromToken(token.auth)
// // }
