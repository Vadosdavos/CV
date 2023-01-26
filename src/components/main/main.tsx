import { Header } from '../header/header';
import styles from './main.module.css';

export const Main = () => (
  <main className={styles.mainContainer}>
    <Header />
    <section className={styles.worksContainer}>
      <figure className={styles.worksPreview}>
        <img
          src="img/works/skate.jpg"
          alt="Skateboard 3d configurator"
        />
        <figcaption className={styles.workDescription}>
          In this small app I've made my first steps in learning Three.JS library.
          You can configure skateboard and view it in 3D.
          Used technologies: ReactJS, TypeScript, Redux, Three.JS
        </figcaption>
      </figure>
      <div className={styles.works}>
        <h3>Works</h3>
        <ul className={styles.worksList}>
          <li>Skateboard 3d configurator</li>
        </ul>
      </div>
    </section>
  </main>
);
