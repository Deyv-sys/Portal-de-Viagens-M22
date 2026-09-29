import Image from "next/image";
import type { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
	destino: Destino;
};

export default function CardDestino({ destino }: CardDestinoProps) {
	return (
		<article className={styles.card}>
			<div className={styles.imageFrame}>
				<Image
					className={styles.image}
					src={destino.imagem}
					alt={`Paisagem de ${destino.nome}`}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
				/>
				<span className={styles.region}>{destino.regiao}</span>
			</div>
			<div className={styles.content}>
				<h2 className={styles.name}>{destino.nome}</h2>
				<p className={styles.description}>{destino.descricao}</p>
			</div>
		</article>
	);
}
