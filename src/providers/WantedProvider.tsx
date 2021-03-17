import { createContext, ReactNode, useState, VFC } from "react"

export const WantedContext = createContext({})

type Props = {
  children: ReactNode
}

export const WantedProvider: VFC<Props> = (props) => {
  const { children } = props
  const [wantedInfo, setWantedInfo] = useState(null)

  return (
    <WantedContext.Provider value={{ wantedInfo, setWantedInfo }}>
      {children}
    </WantedContext.Provider>
  )
}
