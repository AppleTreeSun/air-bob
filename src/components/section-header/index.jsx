import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionHeaderStyle } from "./style";

const SectionHeader = memo((props) => {

  const { title = '默认的标题', subtitle = '默认的副标题' } = props

  return (
    <SectionHeaderStyle>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </SectionHeaderStyle>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader