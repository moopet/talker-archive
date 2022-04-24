import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CodebaseTable from '../components/CodebaseTable';
import Footer from '../components/Footer';
import data from '../data/talkers.json';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const CodebasesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ChatIcon sx={{ mr: 2 }} />
          <Typography variant="h1" sx={{ fontSize: "1rem" }} color="inherit" noWrap>
            Talker archive: codebases
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 1,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A list of the most commonly-used talker codebases.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}

          <CodebaseTable codebases={data.codebases} />
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
};

export default CodebasesPage;
