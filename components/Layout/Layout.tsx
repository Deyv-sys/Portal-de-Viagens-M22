import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.site}>
			<header className={styles.header}>
				<div className={styles.headerInner}>
					<Link href="/" className={styles.brand} aria-label="Rota Livre, página inicial">
						<span className={styles.brandMark} aria-hidden="true">RL</span>
						<span className={styles.brandName}>rota livre</span>
					</Link>
					<nav className={styles.navigation} aria-label="Navegação principal">
						<Link className={styles.navLink} href="/">Início</Link>
						<Link className={styles.navLink} href="/destinos">Destinos</Link>
					</nav>
				</div>
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<div className={styles.footerInner}>
					<span>Rota Livre</span>
					<span>Ideias para ir mais longe, por aqui mesmo.</span>
					<span>Feito para quem gosta de descobrir.</span>
				</div>
			</footer>
		</div>
	);
}
