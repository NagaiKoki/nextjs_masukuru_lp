import Head from 'next/head'
import Image from 'next/image'
// import components
import Header from '../src/components/Header'
// import constants
import { COLORS } from '../src/contants/Styles'

const Index: React.FC = () => {
  return (
    <div className="Container">
      <div className="Content__Wrapper">
        <Header />
        <div className="Content_Main_Wrapper">
          <h1 className="Content_Title">
            仲間とトレーニング
            <br/>
            仲間と理想のカラダへ
          </h1>
          <Image src="/masukuru_screenshot.png" height={500} width={500} />
        </div>
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
        .Content_Title {
          padding-right: 200px;
          color: ${COLORS.BASE_BLACK};
          font-size: 30px;
        }
      `}
      </style>
    </div>
  )
}

export default Index