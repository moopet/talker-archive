import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import slugify from 'slugify';

import ContactList from '../../components/ContactList';
import Hero from '../../components/Hero';
import HostList from '../../components/HostList';
import Navigation from '../../components/Navigation';
import ResourceList from '../../components/ResourceList';
import ScreenCapturesList from '../../components/ScreenCapturesList';
import WebsiteList from '../../components/WebsiteList';
import data from '../../data/talkers.json';

const TalkerDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');

  const talkers = data.talkers.filter(talker => {
    const testSlug = slugify(talker.name.replace(ignoreWords, ""), {lower: true});

    return !talker?.hide && testSlug == slug;
  });

  if (!talkers.length) {
    return;
  }

  const talker = talkers[0];

  const emails = talker?.emails ?? [];
  const hosts = talker?.hosts ?? [];
  let resources = talker?.resources ?? [];
  const screencap = `/screencaps/${talker?.screencaps?.length ? talker.screencaps[0] : 'placeholder.png'}`;

  if (talker?.ewtooAbbr) {
    const ewtooUrl = `http://list.ewtoo.org/details.cgi?abbr=${talker.ewtooAbbr}`;

    resources = resources.filter(resource => resource.url != ewtooUrl);

    resources.push({
      name: talker.name,
      type: "Grim's list entry",
      icon: null,
      url: ewtooUrl
    });
  }

  if (talker?.wayback) {
    resources = resources.filter(resource => resource.url != talker.wayback);

    resources.push({
      name: "Website snapshot",
      type: "Wayback machine archive",
      icon: "History",
      url: talker.wayback
    });
  }

  let citation = '';

  if (talker?.dataOrigin?.length && data.dataOrigins.hasOwnProperty(talker.dataOrigin)) {
    citation = `Information presented here was - at least in part - provided by ${data.dataOrigins[talker.dataOrigin].name}.`
  }

  let codeDescription = '';

  if (talker?.codebase?.length) {
    codeDescription = `The talker is (was?) based on ${talker.codebase}.`;

    if (data.codebases.hasOwnProperty(talker.codebase)) {
      const codebaseInfo = data.codebases[talker.codebase];

      codeDescription = `The talker is (was?) based on ${codebaseInfo.name}`;

      if (codebaseInfo.hasOwnProperty('family')) {
        codeDescription += `, a ${data.codebases[codebaseInfo.family].name} derivative`;
      }
    }
  }

  return (
    <>
      <Navigation title={talker.name} />

      <main>
        <Hero
          title={talker.name}
          subtitle={talker.description ?? "There doesn't seem to be any description here..."}
          image={screencap}
        />

        <Container sx={{ py: 2 }} maxWidth="xl">
          {codeDescription &&
            <Typography variant="body2" color="text.secondary" paragraph>
              {codeDescription}.
            </Typography>
          }

          {codeDescription &&
            <Typography variant="body2" color="text.secondary" paragraph>
              {citation}
            </Typography>
          }

          <Typography variant="body2" color="text.secondary" paragraph>
            It's <em>highly</em> likely that most of the links presented here haven't worked for years.
          </Typography>

          <Grid container sx={{ marginTop: 4}} spacing={3} justifyContent="flex-start">
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <HostList hosts={talker?.hosts ?? []} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <ContactList contacts={talker?.emails ?? []} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <WebsiteList websites={talker?.websites ?? []} />
            </Grid>

            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} >
              <ResourceList resources={resources} />
            </Grid>

            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
              <ScreenCapturesList screencaps={talker?.screencaps ?? []} />
            </Grid>

          </Grid>
        </Container>
      </main>
    </>
  );
};

TalkerDetails.getInitialProps = ({ query }) => ({
    key: query.slug
});

export default TalkerDetails;
