import React, { useContext } from 'react'
import Image from 'next/image'
// import context
import { AppContext } from '../../../pages/_app'
// import common
import StoreBatch from '../common/Store'
import { COLORS } from '../../contants/Styles'

const ContentMain = () => {
  const isMobile = useContext(AppContext)

  return (
    <section className="Content_Main_Wrapper">
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
      <style jsx>{`
        .Content_Main_Wrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 100px;
          }
          .Content__Title__Wrapper {

          }
          .Content__Title {
            padding: ${isMobile ? `0 15px 40px 15px` : `0 150px 40px 0`};
            color: ${COLORS.BASE_BLACK};
            font-size: 40px;
          }
          .Content__Describe {
            padding: ${isMobile && '0 10px'};
            padding-bottom: ${isMobile ? '40px' : '80px'};
            color: ${COLORS.BASE_BLACK};
            font-size: 16px;
          }
      `}</style>
    </section>
  )
}

export default ContentMain