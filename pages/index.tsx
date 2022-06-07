import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import Navigation from '../components/Navigation';
import TalkerGrid from '../components/TalkerGrid';
import data from '../data/talkers.json';

const TalkerListPage = () => {
	const hideEmptyEntries = false;

  const talkers = data.talkers.filter(talker => {
    if (!talker.name) {
      return false;
    }

    if (hideEmptyEntries && !talker?.screencaps?.length) {
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
              This is an archive of talkers.
            </Typography>

            <Typography variant="body2" align="center" color="text.secondary" paragraph>
              {data.talkers.length} talkers, to be precise.
            </Typography>

            <Typography variant="body2" align="center" color="text.secondary" paragraph>
              Some are still online...
              most, however, only live on in our memories.
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 2 }} maxWidth="lg">
          <TalkerGrid talkers={talkers} />
        </Container>
      </main>
    </>
  );
};

export default TalkerListPage;
