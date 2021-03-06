import { Routes } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
