import React from 'react'
import Image from 'next/image'
import { COLORS } from '../../contants/Styles'

const ContentGraph = () => {
  return (
    <section className="Content__Section__Wrapper">
      <div className="Content__Section__Title__Wrapper">
        <h2 className='Content__Section__Title'>自分の体型をグラフで管理</h2>
        <p className="Content__Section__Description">
          マスクルは「体重」と「歩数」をグラフで確認することができます。
        </p>
        <p className="Content__Section__Description">
          どれだけカラダが変わったのか、マスクルのグラフを見ればすぐに分かるので、モチベーションが維持できます。
        </p>
      </div>
      <Image src='/weight_screenshot.png' width={180} height={400} />
      <style jsx>{`
        .Content__Section__Wrapper {
          display: flex;
          justify-content: space-around;
          margin-top: 200px;
          padding: 0 100px;
        }
        .Content__Section__Title__Wrapper {
          width: 500px;
          margin-left: 50px;
        }
        .Content__Section__Title {
          color: ${COLORS.BASE_BLACK};
          font-size: 30px;
          margin-bottom: 30px;
        }
        .Content__Section__Description {
          margin-top: 10px;
        }
      `}</style>
    </section>
  )
}

export default ContentGraph