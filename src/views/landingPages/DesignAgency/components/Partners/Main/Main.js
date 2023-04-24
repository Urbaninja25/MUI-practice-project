import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
// import Blog from 'views/supportingPages/Blog/Blog';

const Main = () => {
  const theme = useTheme();
  // const [selectedItem, setSelectedItem] = useState(null);

  const handleLearnMoreClick = (event, item) => {
    event.preventDefault();

    const urlParams = new URLSearchParams();
    urlParams.set('id', item.id);
    urlParams.set('title', item.title);
    urlParams.set('subtitle', item.subtitle);
    urlParams.set('description', item.description);

    window.location.href = `/page-blog?${urlParams.toString()}`;
  };

  return (
    <>
      {/* {selectedItem && <Blog item={selectedItem} />} */}

      <Box>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            Our work
          </Typography>
          <Box
            component={Typography}
            fontWeight={700}
            variant={'h3'}
            gutterBottom
            align={'center'}
            data-aos={'fade-up'}
          >
            Our team aims to deliver
            <br /> the most outstanding work in every pixel.
          </Box>
          <Typography
            variant={'h6'}
            component={'p'}
            color={'textSecondary'}
            align={'center'}
            data-aos={'fade-up'}
          >
            From your new website idea, to design, development, launch and
            scale!
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {[
            {
              id: 1,
              media: 'https://assets.maccarianagency.com/backgrounds/img10.jpg',
              title: 'Curology',
              subtitle:
                'For healthy and beautiful skin, get skincare customized just for you from experts at Curology.',
              description:
                'Thinking of renovating your home? Here are some tips to help you make the most of your space while keeping costs low.',
            },
            {
              id: 2,
              media: 'https://assets.maccarianagency.com/backgrounds/img7.jpg',
              title: 'Hubble',
              subtitle:
                'The more affordable daily contact lens. Modify or cancel anytime.',
              description:
                'Thinking of renovating your home? Here are some tips to help you make the most of your space while keeping costs low.',
            },
            {
              id: 3,
              media: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
              title: 'Larq',
              subtitle:
                'LARQ Bottle Benefit Edition. 0. Lives will be saved with access. to clean water.',
              description:
                'Thinking of renovating your home? Here are some tips to help you make the most of your space while keeping costs low.',
            },
            {
              id: 4,
              media: 'https://assets.maccarianagency.com/backgrounds/img6.jpg',
              title: 'Tadao Ando Inspirational Home Designs',
              subtitle:
                'Discover the work of Japanese architect Tadao Ando and be inspired by his innovative and minimalist designs.',
              description:
                'Tadao Ando is a highly influential architect whose designs blend modernism, minimalism, and traditional Japanese design. His work is characterized by clean lines, natural materials, and a harmonious balance between light and shadow. Some of his most inspirational designs include a minimalist house in Osaka, a Kyoto house featuring a garden courtyard, a church in Osaka with a cross-shaped opening, an art museum in Venice blending tradition and innovation, and a small house in Kobe demonstrating Andos belief in simplicity. Overall,Andos designs inspire architects and designers around the world and will continue to influence the world of architecture for generations to come.',
            },

            {
              id: 5,
              media: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
              title: 'Hubble',
              subtitle:
                'The more affordable daily contact lens. Modify or cancel anytime.',
              description:
                'Thinking of renovating your home? Here are some tips to help you make the most of your space while keeping costs low.',
            },
            {
              id: 6,
              media: 'https://assets.maccarianagency.com/backgrounds/img5.jpg',
              title: 'Larq',
              subtitle:
                'LARQ Bottle Benefit Edition. 0. Lives will be saved with access. to clean water.',
              description:
                'Thinking of renovating your home? Here are some tips to help you make the most of your space while keeping costs low.',
            },
            {
              id: 7,
              media: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
              title: 'Curology',
              subtitle:
                'For healthy and beautiful skin, get skincare customized just for you from experts at Curology.',
              description:
                'Thinking of renovating your home? Here are some tips to help you make the most of your space while keeping costs low.',
            },
            {
              id: 8,
              media: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
              title: 'Hubble',
              subtitle:
                'The more affordable daily contact lens. Modify or cancel anytime.',
              description:
                'Thinking of renovating your home? Here are some tips to help you make the most of your space while keeping costs low.',
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
              <Box
                component={'a'}
                // href={'/page-blog'}

                display={'block'}
                width={'100%'}
                height={'100%'}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={'100%'}
                  height={'100%'}
                  borderRadius={3}
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <CardMedia
                    image={item.media}
                    title={item.title}
                    sx={{
                      height: 240,
                    }}
                  />
                  <Box component={CardContent}>
                    <Box
                      component={Typography}
                      variant={'h6'}
                      gutterBottom
                      fontWeight={500}
                      align={'left'}
                    >
                      {item.title}
                    </Box>
                    <Typography
                      align={'left'}
                      variant={'body2'}
                      color="textSecondary"
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                  <Box component={CardActions} justifyContent={'flex-end'}>
                    <Button
                      size="small"
                      color="primary"
                      onClick={(event) => handleLearnMoreClick(event, item)}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Main;
