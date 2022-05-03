import React from 'react';
import { memo } from 'react';

const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki'
};

//メモを入れてすべて囲むことで再レンダリングを防止できる
//基本的には全部入れ込むのがおすすめ
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
