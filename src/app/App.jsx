import React from "react"
import { Container, Box, Typography, TextField } from "@material-ui/core"

function App() {
  document.title = "Home Page"
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hi, I'm{" "}
          <Box
            fontFamily="Monospace"
            fontStyle="italic"
            display="inline"
            fontSize="h3.fontSize"
          >
            Axel Björnsson
          </Box>
          .
        </Typography>
      </Box>
    </Container>
  )
}

export default App
