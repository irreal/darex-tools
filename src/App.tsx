import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { CsvToXslsXPage } from "./pages/csv-to-xlsx.page";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Box position="fixed" left="0" top="0" width="100vw" height="100vh" zIndex={-1} opacity="0.2">
                  <video id="video" className="h-v is-playing is-visible" muted loop autoPlay width="100%" height="100%" >
                    <source src="https://www.darex.rs/uploads/documents/empire_plugin/Sequence%2001_5.mp4" type="video/mp4" />
                  </video>
                </Box>
                <Heading>Darex Online Alati:</Heading>
                <Link to="/csv-xlsx">CSV u XLSX konverter</Link>
              </Route>
              <Route path="/csv-xlsx">
                <CsvToXslsXPage />
              </Route>
            </Switch>
          </Router>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
