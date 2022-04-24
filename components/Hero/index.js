import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Hero = ({image, title, subtitle}) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="xl">
        <Paper variant="outlined">
          <Grid container justifyContent="flex-start" alignItems="center" direction="row">
            <Grid item xs={4}>
              <Image src={image} alt="" width={400} height={208} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {title}
              </Typography>

              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                dangerouslySetInnerHTML={{__html: subtitle}}
              />
            </Grid>
          </Grid>
      </Paper>
      </Container>
    </Box>
  );
};

export default Hero;
