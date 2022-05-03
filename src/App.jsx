import { useState, useCallback } from 'react';
import { ChildArea } from './components/ChildArea';
import './styles.css';

export default function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  //usecallback関数で子コンポーネントにで関数が使用された場合に再レンダリング防止
  //[]の中のstateが変更された場合のみレンダリングすることができる
  const onClickClose = useCallback(
    () => setOpen(false),
    []
  );

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea
          open={open}
          onClickClose={onClickClose}
        />
      </div>
    </>
  );
}
