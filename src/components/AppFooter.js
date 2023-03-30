import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; 2023 REAL 11 All rights reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
