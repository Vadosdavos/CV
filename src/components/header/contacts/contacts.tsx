/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './contacts.module.css';
import sprite from '../../../assets/icons/sprite.svg';

export const Contacts = () => {
  const socials = [
    { text: 'github', link: 'https://github.com/Vadosdavos' },
    { text: 'linkedin', link: 'https://www.linkedin.com/in/vadim-bezymiannyi' },
    { text: 'telegram', link: 'https://t.me/inemidavos' },
    { text: 'instagram', link: 'https://www.instagram.com/vadosbezimeni' }] as const;

  return (
    <section className={styles.contacts}>
      <div className={styles.socials}>
        {socials.map((el) => (
          <a
            key={el.text}
            href={el.link}
            className={styles.socialLink}
          >
            <svg className={styles.socialImg}>
              <use xlinkHref={`${sprite}#${el.text}`} />
            </svg>
          </a>
        ))}
      </div>
      <a className={styles.email} href="mailto:bezbvap@gmail.com">bezbvap@gmail.com</a>
    </section>
  );
};
