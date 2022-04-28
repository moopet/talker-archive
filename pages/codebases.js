import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CodebaseTable from '../components/CodebaseTable';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import data from '../data/talkers.json';

const CodebasesPage = () => {
  return (
    <>
      <CssBaseline />
      <Navigation title="codebases" />

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
    </>
  );
};

export default CodebasesPage;
