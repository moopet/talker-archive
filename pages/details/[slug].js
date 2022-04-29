import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import slugify from 'slugify';

import ContactList from '../../components/ContactList';
import Footer from '../../components/Footer';
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

  if (talker?.wayback) {
    resources = resources.filter(resource => resource.url != talker.wayback);

    resources.push({
      name: "Website snapshot",
      type: "Wayback machine archive",
      icon: "History",
      url: talker.wayback
    });
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

        <Container sx={{ py: 8 }} maxWidth="xl">
          <Grid container spacing={3} justifyContent="flex-start">

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

      <Footer />
    </>
  );
};

TalkerDetails.getInitialProps = ({ query }) => ({
    key: query.slug
});

export default TalkerDetails;
