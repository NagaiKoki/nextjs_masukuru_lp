import React from 'react'
import Image from 'next/image'
import { COLORS } from '../../contants/Styles'

const ContentForm = () => {
  return (
    <section className="Content__Section__Wrapper">
      <Image src='/form_screenshot.png' width={180} height={400} />
      <div className="Content__Section__Title__Wrapper">
        <h2 className='Content__Section__Title'>シンプルかんたんな記録フォーム</h2>
        <p className="Content__Section__Description">
          マスクルの記録フォームはシンプルです。
        </p>
        <p className="Content__Section__Description">
          シンプルなデザイン、過去のトレーニングの引用で、めんどくさいトレーニングの記録をストレスなく行なえます。
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

export default ContentForm