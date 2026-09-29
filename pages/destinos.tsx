import Head from "next/head";
import CardDestino from "@/components/CardDestino/CardDestino";
import Layout from "@/components/Layout/Layout";
import { destinos } from "@/data/destinos";
import styles from "./destinos.module.css";

export default function Destinos() {
	return (
		<Layout>
			<Head>
				<title>Destinos | Rota Livre</title>
				<meta
					name="description"
					content="Conheça lugares especiais para sua próxima viagem pelo Brasil."
				/>
			</Head>
			<section className={styles.page}>
				<div className={styles.heading}>
					<p className={styles.eyebrow}>SEU PRÓXIMO CAPÍTULO</p>
					<h1>Destinos para sentir o Brasil de perto.</h1>
					<p className={styles.description}>
						Cenários diferentes, o mesmo convite: sair um pouco do caminho conhecido.
					</p>
				</div>
				<div className={styles.resultCount}>
					<span>{destinos.length} lugares para descobrir</span>
					<span className={styles.countRule} aria-hidden="true" />
					<span>Brasil</span>
				</div>
				<div className={styles.grid}>
					{destinos.map((destino) => (
						<CardDestino key={destino.id} destino={destino} />
					))}
				</div>
			</section>
		</Layout>
	);
}
