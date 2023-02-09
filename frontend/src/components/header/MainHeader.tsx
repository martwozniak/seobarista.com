
export interface IMainHeader {
  sampleTextProp: string;
}

const MainHeader: React.FC<IMainHeader> = ({ sampleTextProp }) => {
  return <div className="bg-red-600">{sampleTextProp}</div>;
};

export default MainHeader;
