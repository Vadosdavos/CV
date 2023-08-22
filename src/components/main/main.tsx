import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import scapesmania from '../../assets/works/scapesmania.webp';
import chimeras from '../../assets/works/chimeras.webp';
import skate from '../../assets/works/skate.webp';
import asyncRace from '../../assets/works/async-race.webp';
import tree from '../../assets/works/tree.webp';
import artQuiz from '../../assets/works/art-quiz.webp';
import filter from '../../assets/works/filter.webp';
import serverEditor from '../../assets/works/server-editor.webp';
import { Header } from '../header/header';
import styles from './main.module.css';
import 'swiper/css';

type DataValue = {
  img: string;
  description: string;
  technologies: string;
  link: string;
};

type Data = Record<string, DataValue>;

export const Main = () => {
  const data: Data = {
    'ScapesMania - gaming ecosystem': {
      img: scapesmania,
      description: '(Commercial project) This project provides information about the ecosystem and allows users to purchase project tokens, as well as manage their finances through a personal account. I developed various projects features such as main landing page, buy page and personal account.',
      technologies: 'Used technologies: NextJS, TypeScript, CSS-in-JS (Emotion), ESLint, i18next, Ethereum, Wagmi',
      link: 'https://scapesmania.io/',
    },
    'Server config editor': {
      img: serverEditor,
      description: '(Commercial project) Small service (UI + API) for creating and editing server configs',
      technologies: 'Used technologies: NextJS, TypeScript, Ant.Design, NextAuth.js, MongoDB',
      link: 'https://github.com/Vadosdavos/server-config-editor',
    },
    'Chimeras Metaverse game': {
      img: chimeras,
      description: '(Commercial project) I took part in marketplace, user profile and admin panel features development. Sortable and filterable marketplace allows users to buy some game assets. User can control login methods and dispose of game assets.',
      technologies: 'Used technologies: NextJS, TypeScript, CSS-in-JS (Emotion), ESLint, JSON Schema, Ethereum, Metamask',
      link: 'https://marketplace.chimeras.io/',
    },
    'Skateboard 3d configurator': {
      img: skate,
      description: `(Pet project) In this small app I've made my first steps in learning Three.JS library.
      You can configure skateboard and view it in 3D.`,
      technologies: 'Used technologies: ReactJS, TypeScript, Redux, Three.JS',
      link: 'https://vadosdavos.github.io/Skateboard-3d-configurator/',
    },
    'Async race': {
      img: asyncRace,
      description: '(Pet project) This SPA can manage the collection of the cars, operate its engines, and show races statistics.',
      technologies: 'Used technologies: ReactJS, TypeScript, CSS',
      link: 'https://vadadosdavos-async-race.netlify.app/',
    },
    'Christmas tree decorating game': {
      img: tree,
      description: '(Pet project) This is a litle game there you need to choose some toys and put them on the Christmas tree.',
      technologies: 'Used technologies: HTML, SASS, TypeScript',
      link: 'https://vadosdavos.github.io/my-works/christmas-task/',
    },
    'Art Quiz': {
      img: artQuiz,
      description: '(Pet project) Application-quiz on the knowledge of the masterpieces of painting and their authors.',
      technologies: 'Used technologies: HTML, SASS, TypeScript',
      link: 'https://vadosdavos.github.io/my-works/art-quiz/',
    },
    'Photo filter': {
      img: filter,
      description: '(Pet project) The application is a photo editor that allows you to edit an image by applying various properties and filters to them.',
      technologies: 'Used technologies: HTML, CSS, JavaScript',
      link: 'https://vadosdavos.github.io/photo-filter/',
    },
  };

  const workTitiles = Object.keys(data);

  return (
    <main className={styles.mainLayout}>
      <div className={styles.mainContainer}>
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
              {workTitiles.map((el, index) => (
                <SwiperSlide key={data[el].img}>
                  <figure className={styles.work}>
                    <a href={data[el].link} target="_blank" rel="noreferrer">
                      <img
                        className={styles.workImage}
                        src={data[el].img}
                        alt={el}
                        loading={index > 0 ? 'lazy' : 'eager'}
                      />
                    </a>
                    <figcaption className={styles.workDescription}>
                      {data[el].description}
                      <p className={styles.workTechnologies}>{data[el].technologies}</p>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.worksTitles}>
            <div>
              <h3>Works</h3>
              <ul className={`${styles.worksList} swiper-pagination`} />
            </div>
            <div>
              <h3>Work experience</h3>
              <p>Aug 2022 - Present</p>
              <p>
                <a href="https://redpilldev.tech/" target="_blank" rel="noreferrer">RedPillStudio.</a>
                {' '}
                Frontend developer
              </p>
              <br />
              <p>Feb 2022 - Jun 2022</p>
              <p>
                <a href="https://www.epam.com/" target="_blank" rel="noreferrer">EPAM Systems.</a>
                {' '}
                Junior Software Engineer
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>

  );
};
