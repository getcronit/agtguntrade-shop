import {navigate, PageProps} from 'gatsby'
import React, {useEffect} from 'react'

import {PageConfig} from '@atsnek/jaen'

const Page: React.FC<PageProps> = ({path}) => {
  useEffect(() => {
    navigate('/products')
  }, [path])

  return null
}

export default Page

export {Head} from '@atsnek/jaen'

export const pageConfig: PageConfig = {
  label: 'Onlineshop',
  icon: 'FaShopify',
  childTemplates: [],
  menu: {
    type: 'app'
  }
}
