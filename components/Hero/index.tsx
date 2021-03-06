import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type HeroProps = {
  title: string,
  subtitle: string,
  image: string
}

const Hero = ({image, title, subtitle}: HeroProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="xl">
        <Paper variant="elevation">
          <Grid container justifyContent="space-between" alignItems="center" direction="row">
            <Grid item xs={12} sm={6} md={3}>
              <Image src={image} alt="" width={320} height={240} layout="responsive" />
            </Grid>
            <Grid item xs={12} sm={5} md={8}>
              <Typography
                variant="h5"
                color="text.primary"
                paragraph
              >
                {title}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
              >
                {subtitle}
              </Typography>
            </Grid>
          </Grid>
      </Paper>
      </Container>
    </Box>
  );
};

export default Hero;
