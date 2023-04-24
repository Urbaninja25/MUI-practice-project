import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
// import TeamWorkingIllustration from 'svg/illustrations/TeamWorking';

const Story = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Our story
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          We design and implement creative solutions
          <br />
          to everyday business problems
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          We are a team of creative consultants who help bridge the digital gap
          between companies and their clients with websites that not only serve
          as marketing platforms but also provide solutions to online business
          problems and digital marketing strategies that connect you with the
          ideal client and help create a loyal customer.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={4}
      ></Box>
      <Box>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          loved by brands around the world
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
          {[
            '/img/svg-1.svg',
            '/img/svg-2.svg',
            '/img/svg-5.svg',
            '/img/img-6.jpg',
            '/img/svg-3.svg',
            '/img/svg-4.svg',
          ].map((item, i) => (
            <Box
              key={i}
              maxWidth={90}
              marginTop={2}
              marginRight={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                height={90}
                width={90}
                src={item}
                alt="..."
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Story;
