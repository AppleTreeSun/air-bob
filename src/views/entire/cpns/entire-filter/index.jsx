import React, { memo, useState } from "react";
import { FilterStyle } from "./style";
import classNames from 'classnames';

import filterData from '@/assets/data/filter_data.json';

const EntireFilter = memo(() => {

  const [selected, setSelected] = useState([]);

  const itemClick = (item) => {
    const newData = [...selected]
    if (newData.includes(item)) {
      newData.splice(newData.findIndex(name => name === item), 1)
    } else {
      newData.push(item)
    }
    setSelected(newData)
  }

  return (
    <FilterStyle>
      {
        filterData.map((item, index) => {
          return (
            <div 
              className={classNames('item', { active: selected.includes(item) })}
              key={index}
              onClick={() => itemClick(item)}
            >
              {item}
            </div>
          )
        })
      }
    </FilterStyle>
  );
});

export default EntireFilter;
