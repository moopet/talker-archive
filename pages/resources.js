import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ResourceList from '../components/ResourceList';

import data from '../data/talkers.json';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const ResourcesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation title="resources" />

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
              This is an attempt to collect talker-related resources that might get missed on a casual web search.
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This sort of page used to be called "bookmarks", or "useful links" back in the day. Nobody used to read them then, either.
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">

          <ResourceList title="External resources" resources={data.resources} />
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
};

export default ResourcesPage;
