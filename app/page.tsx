import Image from "next/image";
import Link from "next/link";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export default function Home() {
  return (
          <>
            <section className={styles.hero}>
              <Image
                className={styles.heroImage}
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90"
                alt="Montanhas verdes refletidas em um lago ao amanhecer"
                fill
                priority
                sizes="100vw"
              />
              <div className={styles.heroShade} />
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>BRASIL, DE PONTA A PONTA</p>
                <h1>O caminho também faz parte da viagem.</h1>
                <p className={styles.heroDescription}>
                  Lugares para respirar fundo, mudar de paisagem e voltar com boas histórias.
                </p>
                <Link className={styles.heroLink} href="/destinos">
                  Explorar destinos <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <span className={styles.photoCredit}>Paisagem brasileira, sem pressa</span>
            </section>

            <section className={styles.intro} aria-labelledby="intro-title">
              <div className={styles.introHeading}>
                <p className={styles.sectionLabel}>UM BRASIL DE MUITOS RITMOS</p>
                <h2 id="intro-title">Escolha a paisagem. A gente inspira o resto.</h2>
              </div>
              <div className={styles.introAside}>
                <p>
                  De águas transparentes a trilhas no cerrado: encontre um lugar que combine
                  com o seu próximo capítulo.
                </p>
                <Link href="/destinos" className={styles.textLink}>
                  Ver os {destinos.length} destinos <span aria-hidden="true">→</span>
                </Link>
              </div>
            </section>

            <div className={styles.destinationLine} aria-label="Alguns destinos em destaque">
              {destinos.slice(0, 3).map((destino, index) => (
                <div className={styles.destinationItem} key={destino.id}>
                  <span className={styles.destinationNumber}>0{index + 1}</span>
                  <span>{destino.nome}</span>
                </div>
              ))}
            </div>
          </>
  );
}
