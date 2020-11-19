import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
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
