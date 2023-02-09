
export interface IMainHeader {
  sampleTextProp: string;
}

const MainHeader: React.FC<IMainHeader> = ({ sampleTextProp }) => {
  console.log(sampleTextProp);//Temporary logging
  return <div className="flex justify-between gap-2 mx-4 mt-4 items-center">
    <div>
    <img src="/img/seoBarista_black.svg" alt="SEOBarista Logo"/>
      </div>
    <div className="navigation flex gap-2 items-center">
        <ul className="flex gap-8 text-xs items-center">
        <li>Blog</li>
        <li>Pricing</li>
        <li>Login</li>
        <li className="bg-yellow-400 p-2">Try for free</li>
        </ul>
    </div>
   
    
    </div>;
};

export default MainHeader;
