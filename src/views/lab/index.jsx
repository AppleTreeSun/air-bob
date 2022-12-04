import Indicator from "@/base-ui/indicator";
import React, { memo, useState } from "react";

import { LabStyle } from './style';

const Lab = memo(() => {

  const [selectIndex, setSelectIndex] = useState(0)


  const names = ['abc', 'cba', 'nba', 'mba', 'aaa', 'bbb', 'ccc', 'ddd']

  const handleItemClick = (isRight) => {
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1

    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex > names.length - 1) newIndex = 0

    setSelectIndex(newIndex)

    console.log(newIndex);
  }

  return (
    <LabStyle>
      <button onClick={() => handleItemClick(false)}>上一张</button>
      <button onClick={() => handleItemClick(true)}>下一张</button>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {
            names.map((item, index) => {
              return <button key={index}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </LabStyle>
  );
});

export default Lab;
