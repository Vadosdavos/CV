import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Header } from '../header/header';
import styles from './main.module.css';
import 'swiper/css';

type DataValue = {
  img: string;
  description: string;
  link: string;
};

type Data = Record<string, DataValue>;

export const Main = () => {
  const data: Data = {
    'Chimeras Metaverse': {
      img: 'img/works/chimeras.jpg',
      description: 'Chimeras Metaverse.  Marketplace',
      link: 'https://marketplace.chimeras.io/',
    },
    'Skateboard 3d configurator': {
      img: 'img/works/skate.jpg',
      description: `In this small app I've made my first steps in learning Three.JS library.
      You can configure skateboard and view it in 3D.
      Used technologies: ReactJS, TypeScript, Redux, Three.JS`,
      link: 'https://vadosdavos.github.io/Skateboard-3d-configurator/',
    },
    'Async race': {
      img: 'img/works/async-race.jpg',
      description: `This SPA can manage the collection of the cars, operate its engines, and show races statistics.
      Used technologies: ReactJS, TypeScript, CSS`,
      link: 'https://vadadosdavos-async-race.netlify.app/',
    },
    'Christmas tree decorating game': {
      img: 'img/works/tree.jpg',
      description: `his is a litle game there you need to choose some toys and put them on the Christmas tree.
      Used technologies: HTML, SASS, TypeScript`,
      link: 'https://vadosdavos.github.io/my-works/christmas-task/',
    },
    'Art Quiz': {
      img: 'img/works/art-quiz.jpg',
      description: `Application-quiz on the knowledge of the masterpieces of painting and their authors.
      Used technologies: HTML, SASS, TypeScript`,
      link: 'https://vadosdavos.github.io/my-works/art-quiz/',
    },
    'Photo filter': {
      img: 'img/works/filter.jpg',
      description: `The application is a photo editor that allows you to edit an image by applying various properties and filters to them.
      Used technologies: HTML, CSS, JavaScript`,
      link: 'https://vadosdavos.github.io/photo-filter/',
    },
  };

  const workTitiles = Object.keys(data);

  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.worksContainer}>
        <div className={styles.worksPreview}>
          <Swiper
            allowTouchMove={false}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              renderBullet: (index, className) => `<li class="${`${styles.worksListItem} ${className}`}">${workTitiles[index]}</li>`,
            }}
            modules={[Pagination]}
          >
            {workTitiles.map((el) => (
              <SwiperSlide key={data[el].img}>
                <figure className={styles.work}>
                  <a href={data[el].link} target="_blank" rel="noreferrer">
                    <img
                      className={styles.workImage}
                      src={data[el].img}
                      alt={el}
                    />
                  </a>
                  <figcaption className={styles.workDescription}>
                    {data[el].description}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.worksTitles}>
          <h3>Works</h3>
          <ul className={`${styles.worksList} swiper-pagination`} />
        </div>
      </section>
    </main>
  );
};
