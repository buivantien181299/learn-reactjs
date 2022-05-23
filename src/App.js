import logo from './logo.svg';
import './App.css';
import ToDoFeatrue from './features/Todo';
import AlbumFeatrue from './features/Song';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';

function App() {

  const nameHuman = 'Vàng Văn Lợi';
  const bornYear = '06/05/1997';
  const isMale = true;
  const inforWife = {
    nameWife: 'Bùi Văn Tiến',
    ageWife: 23,
    birthDay: '18/12/1999',
  };

  const colorList = ['red', 'blue', 'green'];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />

        <p>
          Vợ {inforWife.nameWife} yêu chồng {nameHuman} rất nhiều.
        </p>
        <div>
          Chồng mình sinh năm {bornYear}, còn mình sinh năm {inforWife.birthDay}. Chúng mình không hợp tuổi
          nhau đúng không? Nhưng nó cũng không sao cả, dù có cãi nhau, giận nhau, nhưng chung mình vẫn rất yêu nhau,
          luôn nghĩ và tin tưởng nhau. Có một điều rất đặc biệt là mình là con {isMale ? 'trai' : 'gái'} và chồng mình
          tất nhiên cũng là con {isMale ? 'trai' : 'gái'}; có thú vị không các bạn.
        </div> */}
        {/* {colorList.map(value => (
          value + " "
        ))} */}
        <div>
          <ToDoFeatrue />
        </div>
      </header>
      {/* <AlbumFeatrue /> */}
      <div>
        {/* <p>useState</p>
        <ColorBox />
        <Counter /> */}
      </div>
    </div>
  );
}

export default App;
