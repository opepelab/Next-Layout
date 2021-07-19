import Metatxt from './Metatxt'
import Footer from './Footer'
import Navbar from './Navbar'
import PictureHigh from './PictureHigh'
// すべての共通して使うコンポーネントはこのファイルを介して作動する starting components this file.
const Layout = ({ children }) => {
    return (
      <div className="resp">
        <Metatxt />
        <PictureHigh />
        <Navbar />
        { children }
        <Footer />
      </div> 
    );
}

export default Layout;
