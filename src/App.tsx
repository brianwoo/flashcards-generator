import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Main from "./components/Main"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box padding={5}>
      <Main />
    </Box>
  </ChakraProvider>
)
