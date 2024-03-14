import React from 'react'
import { Header, ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd';



const Layout = ({ children }: React.PropsWithChildren) => {//Define the props with TS
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
      >
       {children}
      </ThemedLayoutV2>
  )
}

export default Layout