import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TalkerGrid from '../components/TalkerGrid';
import TalkerList from '../components/TalkerList';
import TalkerTable from '../components/TalkerTable';
import data from '../data/talkers.json';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const TalkerListPage = () => {
  const talkers = data.talkers.filter(talker => {
    return !talker?.hide;
  });

  const ignnoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');
  talkers.sort((a, b) => a.name.replace(ignnoreWords, "").localeCompare(b.name.replace(ignnoreWords, "")));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ChatIcon sx={{ mr: 2 }} />
          <Typography variant="h1" sx={{ fontSize: "1rem" }} color="inherit" noWrap>
            Talker archive
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This is a collection of talkers. Some still exist!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}

          <Tabs>
            <Tab>Grid</Tab>
            <Tab>Table</Tab>
          </Tabs>
          <TalkerTable talkers={talkers} codebases={data.codebases} />
          <TalkerList talkers={talkers} codebases={data.codebases} />
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default TalkerListPage;
