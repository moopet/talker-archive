import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Talker archive
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Talking about talkers since talkers were a thing.
      </Typography>
    </Box>
  );
};

export default Footer;
