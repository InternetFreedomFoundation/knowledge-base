import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  // {
  //   title: 'Easy to Use',
  //   Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  {
    title: 'Welcome to the IFF Wiki!',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       The right to information and knowledge is intrinsically tied to the right to free speech and expression, and together these rights form the bedrock of a democratic society. In such a society, citizens are empowered to stand up for themselves, their communities, along with those who have been systematically oppressed as well as denied their rights within society and politics. Team IFF’s ardent hope is that knowledge doesn’t remain concealed or consolidated by the privileged few in power and that it benefits all who seek it.
      </>
    ),
  },
  // {
  //   title: 'Powered by React',
  //   Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
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
