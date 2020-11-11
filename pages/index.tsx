import { useContext } from 'react'
// import context
import { AppContext } from '../pages/_app'
// import components
import Head from '../src/components/common/Head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ContentMain from '../src/components/Sections/Top'
import ContentComment from '../src/components/Sections/Comment'
import ContentCGraph from '../src/components/Sections/Graph'
import ContentForm from '../src/components/Sections/Form'
// import constants
import { COLORS } from '../src/contants/Styles'

const Index: React.FC = () => {
  const isMobile = useContext(AppContext)
  
  return (
    <div>
      <Head
        title="マスクル"
        description="友達や恋人とトレーニングや筋トレを共有できるアプリです。"
        keyword="筋トレ,トレーニング,友達,恋人,リモート,遠距離,アプリ"
        image="https://firebasestorage.googleapis.com/v0/b/musclew-47ec1.appspot.com/o/masukuru_og.png?alt=media&token=777de944-cee8-4c62-a4d7-15acf0212914"
        url="https://masukuru.com"
      />
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
            background-size: ${isMobile ? '100%' : '70%' };
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
    </div>
  )
}

export default Index