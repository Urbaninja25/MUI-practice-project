import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from 'common/Container';
import PropTypes from 'prop-types';
import { Gallery, Headline, Story, Team } from './components';
import { useLocation } from 'react-router-dom';

const Blog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const subtitle = searchParams.get('subtitle');
  const description = searchParams.get('description');
  return (
    <Box>
      <Container>
        <Headline title={title} subtitle={subtitle} description={description} />
      </Container>
      <Container paddingY={'0 !important'}>
        <Gallery id={id} />
      </Container>

      <Container paddingY={'0 !important'}>
        <Story />
        <Container>
          <Divider />
        </Container>
      </Container>
      <Container paddingTop={'0 !important'}>
        <Team />
      </Container>
    </Box>
  );
};

Blog.propTypes = {
  item: PropTypes.object,
};

Blog.defaultProps = {
  item: null,
};

export default Blog;
