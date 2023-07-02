import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={366}
    viewBox="0 0 280 366"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="2" y="326" rx="20" ry="20" width="110" height="35" />
    <circle cx="134" cy="103" r="100" />
    <rect x="0" y="213" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="246" rx="5" ry="5" width="280" height="60" />
    <rect x="129" y="319" rx="30" ry="30" width="150" height="44" />
  </ContentLoader>
);

export default Skeleton;
