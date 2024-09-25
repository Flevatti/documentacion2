import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  url: string
};

const FeatureList: FeatureItem[] = [
  {
    title: "Javascript",
    url: "/javascript",
    Svg: require("@site/static/img/logo_js.svg").default,
    description: (
      <>
        Añade dinamica al sitio web.
        <br />
        Es un lenguaje de secuencias de comandos que te permite crear contenido
        de actualización dinámica, controlar multimedia, animar imágenes y
        prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente
        lo que puedes lograr con unas pocas líneas de código JavaScript).
      </>
    ),
  },
  
];

function Feature({title, Svg, description , url}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          {" "}
          <Link to={url}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
    <div className="container">
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
  );
}
