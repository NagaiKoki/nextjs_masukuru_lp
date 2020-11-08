import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header>
      <div className="ImageWrapper">
        <Image src="/masukuru_name.png" width={280} height={50} />
      </div>

      <style jsx>{`
        header {
          padding: 20px;
        }
        .ImageWrapper {
          margin-left: 10px;
        }
      `}
      </style>
    </header>
  )
}

export default Header
