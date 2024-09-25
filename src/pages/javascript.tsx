import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from '../components/HomepageFeatures/styles.module.css';
import stylesPage from './index.module.css';
import Link from '@docusaurus/Link';

interface FeatureType {
  title: string;
  url: string;
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: JSX.Element;
}

const FeatureList: FeatureType[] = [
   
  {
    title: 'Nest.js',
    url: '/docs/nest',
    Svg: require('@site/static/img/nestjs.svg').default,
    description: (
      <>
       Nest.js es un framework backend para Node.js que utiliza TypeScript, enfocado en construir aplicaciones escalables y mantenibles mediante una arquitectura modular y basada en inyección de dependencias.
      </>
    ),
  },
];

function HomepageHeader(): JSX.Element {
  return (
    <header className={clsx('hero hero--primary', stylesPage.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Javascript</h1>
        <p className="hero__subtitle">Opciones a Elegir:</p>
      </div>
    </header>
  );
}

interface FeatureProps {
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: JSX.Element;
  url: string;
}

function Feature({ Svg, title, description, url }: FeatureProps): JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={url}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
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

export default function Javascript(): JSX.Element {
  return (
    <Layout title={``} description="Documentacion de Federico Levatti">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
