import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionHeaderStyle } from "./style";

const SectionHeader = memo((props) => {

  const { title, subtitle } = props

  return (
    <SectionHeaderStyle>
      <div className="title">{title}</div>
      { !!subtitle && <div className="subtitle">{subtitle}</div> }
    </SectionHeaderStyle>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader