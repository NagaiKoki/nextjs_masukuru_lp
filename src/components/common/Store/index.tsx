import React, { useContext } from 'react'
// import context
import { AppContext } from '../../../../pages/_app'
import Image from 'next/image'
// import constants
import { URL } from '../../../contants/url'

type Props = {
  width?: number
  height?: number
}

const StoreBatch = (props: Props) => {
  const { width, height } = props
  const isMobile = useContext(AppContext)

  return (
    <div className="Content__Store__button">
      <a className="Content_Apple__Button" href={URL.APPLE_STORE} target="_blank" rel="noopener noreferrer">
        <Image src="/app_store_batch.svg" width={width || 200} height={height || 70} />
      </a>
      <a className="Content_Google__Button" href={URL.GOOGLE_STORE} target="_blank" rel="noopener noreferrer">
        <Image src="/google_store_batch.png" width={width ? width + 30 : 230} height={height ? height + 30 : 100} />
      </a>
      <style jsx>{`
        .Content__Store__button {
          display: flex;
          align-items: center;
          padding: ${isMobile && '0 10px'}
        }
        .Content_Apple__Button {

        }

        .Content_Google__Button {
          
        }
      `}</style>
    </div>
  )
}

export default StoreBatch