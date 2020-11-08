import React from 'react'
import Image from 'next/image'
// import common
import StoreBatch from '../common/Store'
import { COLORS } from '../../contants/Styles'

const ContentMain = () => {
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
      `}</style>
    </section>
  )
}

export default ContentMain