import Head from 'next/head'
import Image from 'next/image'
// import components
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import StoreBatch from '../src/components/common/Store'
// import constants
import { COLORS } from '../src/contants/Styles'
import { STORE_URL } from '../src/contants/url'

const Index: React.FC = () => {
  return (
    <div className="Container">
      <div className="Content__Wrapper">
        <Header />
        <div className="Content_Main_Wrapper">
          <div className="Content__Title__Wrapper">
            <h1 className="Content__Title">
              仲間とトレーニング
              <br/>
              仲間と理想のカラダへ
            </h1>
            <p className="Content__Describe">マスクルは友達や恋人とトレーニングを共有できるアプリです</p>
            <StoreBatch />
          </div>
          <Image src="/masukuru_screenshot.png" height={500} width={500} />
        </div>
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