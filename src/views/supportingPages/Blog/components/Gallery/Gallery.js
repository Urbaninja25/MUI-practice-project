import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Photos from '../Gallery/data';

const Gallery = ({ id }) => {
  console.log(id);
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // stap 2 - როდესაც ცაირთო ეს ფუნქცია  currentimg გახდა 3
  const openLightbox = (id) => {
    const index = id - 1;
    const curImgIndex = Photos[index].indexOf(Photos[index][0]);

    setCurrentImage(curImgIndex);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photosToShow = isMd
    ? Photos[id - 1] || []
    : Photos[id - 1]?.slice(0, -1) || [];
  console.log(photosToShow);
  console.log('photos:', Photos);
  console.log('currentImage:', currentImage);
  return (
    <Box>
      <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
        <Button
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          // stap one - როდესაც დავაჭირე btn ს ჩავრთე ეს ფუნქცია
          onClick={() => openLightbox(id)}
        >
          Open the gallery
        </Button>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(id)}
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 4,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {viewerIsOpen && (
        // stap 3 ჩაირთო ეს lightbox
        <Lightbox
          mainSrc={Photos[id - 1][currentImage].src}
          nextSrc={
            Photos[id - 1][(currentImage + 1) % Photos[id - 1].length].src
          }
          prevSrc={
            Photos[id - 1][
              (currentImage - 1 + Photos[id - 1].length) % Photos[id - 1].length
            ].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage(
              (currentImage - 1 + Photos[id - 1].length) %
                Photos[id - 1].length,
            )
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % Photos[id - 1].length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};
Gallery.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Gallery;
