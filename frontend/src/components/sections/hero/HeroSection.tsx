import styles from './HeroSection.module.css';

export interface IHeroSection {
  sampleTextProp: string;
}

const HeroSection: React.FC<IHeroSection> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default HeroSection;
