import queryString from 'query-string';
import { useEffect, useState } from 'react';
import './App.css';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';
import Pagiantion from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import PostList from './components/PostList';

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

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'I',
    },
    {
      id: 2,
      title: 'Love',
    },
    {
      id: 3,
      title: 'You',
    }
  ])

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const respone = await fetch(requestUrl);
        const responeJSON = await respone.json();
        // console.log(responeJSON);
        const { data, pagination } = responeJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    })


  }

  function handleTodoClick(todo) {
    const ind = todoList.findIndex(x => x.id === todo.id);
    if (ind < 0) return;
    const newList = [...todoList];
    newList.splice(ind, 1);
    setTodoList(newList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log("adsadsa " + formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFilterChange(newFilter) {
    console.log("newFilter" + newFilter);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    })
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
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
      {/* <div>
          <ToDoFeatrue />
        </div> */}
      {/* </header> */}
      {/* <AlbumFeatrue /> */}
      <div>
        {/* <p>useState</p>
        <Counter /> 
        <ColorBox />*/}
        <h1>React-hooks-magic box</h1>

        <MagicBox />

        {/* {showClock && <Clock />}
        <BetterClock />
        <button onClick={() => setShowClock(false)}>Hide clock</button> */}
        {/* <PostFilterForm onSubmit={handleFilterChange} />
        <PostList posts={postList} />
        <Pagiantion pagiantion={pagination} onPageChange={handlePageChange} /> */}
        {/* <TodoForm onSubmit={handleTodoFormSubmit} />
        <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      </div>
    </div>
  );
}

export default App;
