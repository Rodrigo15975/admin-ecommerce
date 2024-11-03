import { Sidebar } from "@/components/common/Sidebar"
import { FC, PropsWithChildren } from "react"

const Protected: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default Protected
