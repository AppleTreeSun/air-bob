import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from 'react-router-dom'

import { SectionFooterStyle } from './style';

const SectionFooter = memo((props) => {

  const { name } = props

  const showText = name ? `显示${name}房源` : `显示全部`

  const navigate = useNavigate()
  const moreClick = () => {
    navigate('/entire')
  }

  return (
    <SectionFooterStyle color={name ? '#008484' : '#000'} onClick={moreClick}>
      <div className="text">
        {showText}
      </div>
      <div className="icon">
        <IconMoreArrow/>
      </div>
    </SectionFooterStyle>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
