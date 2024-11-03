// solo funciona con un url correcta en localhost no
//
// const getLocationFromIP = async (ip: string) => {
//   try {
//     const response = await axios.get(
//       `https://ipinfo.io/${ip}?token=899de71c5ce1ba`
//     )
//     console.log(response.data.country)
// const location = response.data

import Login from "./login/login"

// const { country } = response.data
// return country
//   } catch (error) {
//     console.error('Error obteniendo la ubicación:', error)
//     return null
//   }
// }

export default function Home() {
  // Obtener la IP de las cookies
  // const ip = cookies().get('user-ip')?.value || 'Unknown IP'
 
  // await getLocationFromIP(ip)
  // console.log(data)

  return (
    <>
      <Login />
    </>
  )
}
