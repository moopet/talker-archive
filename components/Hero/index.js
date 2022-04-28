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
            <Grid item xs={5}>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
              >
                {title}
              </Typography>

              <Typography
                variant="body"
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
