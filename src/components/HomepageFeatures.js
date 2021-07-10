import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'App Development',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    /* description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ), */
    description: (
      <>
        <a href="">Puff</a> - casual date app (coming soon!)
      </>
    ),
  },
  /* {
    title: 'Cool Items',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  }, */
  {
    title: 'Play Game',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We love Super Smash Bros.
        This is absolutely our job.
      </>
    ),
    /*
    This has nothing to do with our value.
        But it's certainly our job.
    */
  },
];

function Feature({ Svg, title, description }) {
  // <div className={clsx('col col--4')}>
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
