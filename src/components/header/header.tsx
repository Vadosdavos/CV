import styles from './header.module.css';

export const Header = () => (
  <header className={styles.head}>
    <div className={styles.avatar}>
      <div className={styles.avatarFrame}>
        <img src="./avatar-frame.png" alt="avatar frame" />
      </div>
      <div className={styles.avatarContainer}>
        <img src="./avatar.jpg" alt="avatar" />
      </div>
    </div>
    <div className={styles.info}>
      <div className={styles.name}>
        <h3>Vadim Bezymyannyi</h3>
        <p>
          I&apos;m 29 years old. Have C&I Engineer degree.
          Calm person, have good communication skills, can work easily in a team.
          I appreciate honesty and kindness in people.
          Interested in science-tech, astronomy, game-dev and extreme spots.
          Ready to learn new things and improve my skills.
        </p>
      </div>
      <div className={styles.skills}>
        <h3>Frontend developer</h3>
        <p>
          JavaScript/TypeScript, HTML, CSS, React.js, Git,
          Next.js, Jest, Redux, AWS, Ant Design, Figma
        </p>
      </div>
    </div>
  </header>
);
