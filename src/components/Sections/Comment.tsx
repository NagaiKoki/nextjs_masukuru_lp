import React from 'react'
import Image from 'next/image'
import { COLORS } from '../../contants/Styles'

const ContentHome = () => {
  return (
    <section className="Content__Section__Wrapper">
      <Image src='/masukuru_comment.png' width={180} height={400} />
      <div className="Content__Section__Title__Wrapper">
        <h2 className='Content__Section__Title'>仲間と一緒だから続けられる</h2>
        <p className="Content__Section__Description">
          マスクルでは最大10人のグループで、トレーニングを共有できます。
        </p>
        <p className="Content__Section__Description">
          １人では続けることは難しくても、マスクルで仲間が頑張っている姿を見ることで自分も頑張ることができます。
        </p>
      </div>
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

export default ContentHome