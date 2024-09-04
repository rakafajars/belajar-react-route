import React from "react"
import { Header } from "./header"

export const MainLayout = ({children} : React.PropsWithChildren) => {
  return (
    <div>
        <Header/>
        <div>{children}</div>
    </div>
  )
}
