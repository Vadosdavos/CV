/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './footer.module.css';

export const Footer = () => {
  const socials = [
    { text: 'github', link: 'https://github.com/Vadosdavos' },
    { text: 'linkedin', link: 'https://www.linkedin.com/in/vadim-bezymiannyi' },
    { text: 'telegram', link: 'https://t.me/inemidavos' },
    { text: 'instagram', link: 'https://www.instagram.com/vadosbezimeni' }] as const;
  return (
    <section className={styles.footer}>
      <div>
        ©2023
        {' '}
        <a href="mailto:bezbvap@gmail.com">bezbvap@gmail.com</a>
      </div>
      <div className={styles.divider} />
      <div className={styles.socials}>
        {socials.map((el) => (
          <a
            key={el.text}
            href={el.link}
            className={styles.socialLink}
            style={{ backgroundImage: `url(img/icons/${el.text}.svg` }}
          />
        ))}
      </div>
    </section>
  );
};
