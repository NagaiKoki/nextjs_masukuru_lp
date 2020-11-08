import React from 'react'
import { COLORS } from '../contants/Styles'
// import components
import StoreBatch from '../components/common/Store'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="Footer__Upper">
        <div className="Footer__Logo__Wrapper">
          <img src="/logo.png" width={50} height={50} className="Footer__Logo__Icon" />
          <p className="Footer__Logo__Name">マスクル</p>
        </div>
        <StoreBatch />
      </div>
      <div className="Footer__Lower">
        
      </div>
      <style jsx>{`
        footer {
          border-top: 1px solid ${COLORS.BASE_BORDER_COLOR};
          margin-top: 40px;
          padding: 50px;
        }
        .Footer__Upper {
          display: flex;
          align-items: center;
        }
        .Footer__Logo__Wrapper {
          display: flex;
          align-items: center;
          margin-right: 100px;
        }
        .Footer__Logo__Icon {
          border-radius: 60px;
          margin-right: 20px;
        }
        .Footer__Logo__Name {
          border-left: 2px solid ${COLORS.BASE_BORDER_COLOR};
          padding-left: 20px;
          color: ${COLORS.BASE_BLACK};
          font-size: 20px;
        }
      `}
      </style>
    </footer>
  )
}

export default Footer