import { Contacts } from './contacts/contacts';
import styles from './header.module.css';

export const Header = () => (
  <section className={styles.header}>
    <div className={styles.info}>
      <div className={styles.avatar}>
        <div className={styles.avatarFrame}>
          <img width={220} height={220} src="img/avatar-frame.png" alt="avatar frame" />
        </div>
        <div className={styles.avatarContainer}>
          <img width={190} height={190} src="img/avatar.webp" alt="avatar" />
        </div>
      </div>
      <div className={styles.name}>
        <h2>Vadim Bezymyannyi</h2>
        <p>
          29 years old. Have C&I Engineer degree. 1.5 years of commercial experience.
        </p>
        <p>
          Calm person with good communication skills, team player. Appreciate honesty and
          kindness in people.
        </p>
        <p>Interested in science-tech, astronomy, game-dev and extreme spots.</p>
        <Contacts />
      </div>
    </div>
    <div className={styles.profession}>
      <h2>Frontend developer</h2>
      <h4>Tech Stack</h4>
      <p className={styles.skills}>
        HTML, CSS, JavaScript/TypeScript, CSS-in-JS (Emotion), TailwindCss, Git
        <br />
        React.js, Next.js, Redux, Ethereum (Wagmi), i18next, OpenAPI (Swagger)
        <br />
        MongoDB, Jest, React Testing Library, AWS, Ant Design, Figma
      </p>
      <h4>Language skills</h4>
      <p>Russian: Native</p>
      <p>English: Intermediate (B1)</p>
    </div>
  </section>
);
