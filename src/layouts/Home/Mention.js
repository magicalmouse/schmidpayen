import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './Mention.module.css';
import '@splidejs/splide/dist/css/splide.min.css';
import imageEric from 'assets/eric.png';
import imageDavid from 'assets/david.png';
import imageMachel from 'assets/machael.png';
import { Section } from 'components/Section';

export const Mention = ({ id, sectionRef, visible }) => {
  const data = [
    {
      image: imageEric,
      name: 'Eric P. Hassey',
      description:
        'Built our remote monitoring system following HIPPA Industry guidelines. Built us three excellent portals that are in excellent condition. The design work was impeccable.',
    },
    {
      image: imageMachel,
      name: 'Machael Jajou',
      description:
        'Very fast at delivering great work on time, and to top standard. Looking forward to working with him again.',
    },
    {
      image: imageDavid,
      name: 'David Goodman',
      description:
        'Great full stack design work. Consistently delivering excellent results for our website!',
    },
  ];

  return (
    <Section id={id} ref={sectionRef}>
      <Splide
        className={styles.splide + ' mt-10'}
        options={{
          rewind: true,
          gap: '0.5rem',
          perPage: 1,
          perMove: 1,
          arrows: true,
          autoplay: true,
          interval: 3000000000,
          pauseOnHover: true,
          pauseOnFocus: true,
          type: 'slide',
          classes: {
            pagination: `${styles.pagination} `,
            //   prev:
            //     'splide__arrow--prev !z-10 dark:!bg-gray-600 dark:!text-white ' +
            //     styles.arrows,
            //   next:
            //     'splide__arrow--next !z-10 dark:!bg-gray-600 dark:!text-white ' +
            //     styles.arrows,
          },
        }}
      >
        {data.map((item, index) => (
          <SplideSlide key={index}>
            <div className={styles.container}>
              <div className={styles.imageContainer}>
                <img src={item.image.src} alt={item.name} className={styles.image} />
                <div className={styles.mentionName}>-{item.name}-</div>
                <div className={styles.mentionDescription}>{item.description}</div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </Section>
  );
};
