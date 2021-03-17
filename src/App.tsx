import React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import theme from "./theme/theme"
import { Router } from "./router/Router"
import { WantedProvider } from "./providers/WantedProvider"

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <WantedProvider>
        <Router />
      </WantedProvider>
    </ChakraProvider>
  )
}

export default App
