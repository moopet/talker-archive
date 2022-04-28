import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import TalkerGrid from '../components/TalkerGrid';
import TalkerList from '../components/TalkerList';
import TalkerTable from '../components/TalkerTable';
import data from '../data/talkers.json';

const TalkerListPage = () => {
	const hideEmptyEntries = false;

  const talkers = data.talkers.filter(talker => {
    if (!talker.name) {
      return false;
    }

    if (hideEmptyEntries && !talker?.screencaps?.lengths && !talker?.emails?.length && !talker?.websites?.length ) {
      return false;
    }

    return !talker?.hide;
  });

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');
  talkers.sort((a, b) => a.name.replace(ignoreWords, "").localeCompare(b.name.replace(ignoreWords, "")));

  return (
    <>
      <Navigation />

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
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="lg">
          <TalkerGrid talkers={talkers} />
    {/*
          <Tabs>
            <Tab>Grid</Tab>
            <Tab>Table</Tab>
          </Tabs>
          <TalkerTable talkers={talkers} codebases={data.codebases} />
          <TalkerList talkers={talkers} codebases={data.codebases} />
          */}
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default TalkerListPage;
