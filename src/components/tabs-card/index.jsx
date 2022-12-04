import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from 'classnames'

import { TabsCardStyle } from './style';
import ScrollView from "@/base-ui/scroll-view";

const TabsCard = memo((props) => {
  const { tabNames = [], tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleTabClick = (item, index) => {
    setCurrentIndex(index)
    tabClick(item, index)
  }

  return (
    <TabsCardStyle>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div 
                className={classNames('item', { active: currentIndex === index })} 
                key={index}
                onClick={() => handleTabClick(item, index)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsCardStyle>
  );
});

TabsCard.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
};

export default TabsCard;
