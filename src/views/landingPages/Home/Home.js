import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
// import { Footer } from './components';
import Cover from '../../../views/supportingPages/Cover';
import { Benefits } from '../Advertisement/components';
import { Process } from '../DesignAgency/components';
import Reviews from '../Course/components/Reviews';
import ReviewSection from '../Advertisement/components/ReviewSection';
import Team from '../Crypto/components/Team';
import Contact from '../DesignAgency/components/Contact';
import Main from '../DesignAgency/components/Partners/Main';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Cover />
        </Container>
      </Box>
      <Container>
        <Benefits />
      </Container>
      <Container>
        <Process />
      </Container>
      <Container>
        <Reviews />
      </Container>
      <Container>
        <ReviewSection />
      </Container>
      <Container>
        <Main />
      </Container>
      <Container>
        <Team />
      </Container>
      <Box bgcolor={theme.palette.primary.main}>
        <Container>
          <Contact />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
