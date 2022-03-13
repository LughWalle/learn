import Navigation from '_components/navigation';
import Logo from '_assets/svg/pre-turma.svg';
import styles from './style.module.css';

export default function Header() {
    return (
        <header className={styles.container}>
          <Logo className={styles.logo} />
          <Navigation />
        </header>
    )
}