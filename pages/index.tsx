import Head from 'next/head'
import Image from 'next/image'
// import components
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ContentMain from '../src/components/Sections/Top'
import ContentComment from '../src/components/Sections/Comment'
import ContentCGraph from '../src/components/Sections/Graph'
import ContentForm from '../src/components/Sections/Form'
// import constants
import { COLORS } from '../src/contants/Styles'

const Index: React.FC = () => {
  return (
    <div className="Container">
      <div className="Content__Wrapper">
        <Header />
        <ContentMain />
        <ContentComment />
        <ContentCGraph />
        <ContentForm />
        <Footer />
      </div>
      <style jsx>{`
        .Container {
          position: relative;
        }
        .Content__Wrapper {
          position: absolute;
          background-repeat: no-repeat;
          background-position: right top;
          background-image: url('/masukuru_background.png');
          width: 100%;
          overflow: hidden;
        }
        .Content_Main_Wrapper {
          display: flex;
          justify-content: center;
          margin-top: 100px;
        }
        .Content__Title__Wrapper {

        }
        .Content__Title {
          padding: 0 150px 40px 0;
          color: ${COLORS.BASE_BLACK};
          font-size: 40px;
        }
        .Content__Describe {
          padding-bottom: 80px;
          color: ${COLORS.BASE_BLACK};
          font-size: 16px;
        }
      `}
      </style>
    </div>
  )
}

export default Index