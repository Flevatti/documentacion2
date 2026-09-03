import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Javascript",
    url: "/javascript",
    Svg: require("@site/static/img/logo_js.svg").default,
    description: (
      <>
         Es el lenguaje de programación que hace que una página web sea interactiva (que pueda interactuar con el usuario). Permite ejecutar código en respuesta a las acciones del usuario, cambiar el contenido de la página, validar formularios, crear animaciones y comunicarse con servidores.
      </>
    ),
  },
  {
    title: "Python",
    url: "/docs/docPython",
    Svg: require("@site/static/img/logo_python.svg").default,
    description: (
      <>
        Es un lenguaje versátil y poderoso que facilita la creación de
        aplicaciones, el manejo de datos, la automatización de tareas y mucho
        más.
      </>
    ),
  },
];

function Feature({ title, Svg, description, url }: FeatureItem) {
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
