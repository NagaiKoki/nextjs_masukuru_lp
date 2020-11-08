import React from 'react'
import { COLORS } from '../contants/Styles'
// import components
import StoreBatch from '../components/common/Store'
import { URL } from '../contants/url'

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
        <nav>
          <ul className="Footer__Nav">
            <a href={URL.INQUIRE_FORM} target="_blank" rel="noopener noreferrer">
              <li className="Footer__Nav__Item">お問い合わせ</li>
            </a>
            <a>
              <li className="Footer__Nav__Item">開発者について</li>
            </a>
          </ul>
        </nav>
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
        .Footer__Nav {
          display: flex;
          align-items: center;
        }
        .Footer__Nav__Item {
          padding-right: 20px;
          color: ${COLORS.BASE_BLACK};
          font-size: 14px;
        }
      `}
      </style>
    </footer>
  )
}

export default Footer