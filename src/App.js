import { useSelector } from 'react-redux';

import AddPost from './components/addPost/AddPost';
import View from './components/view/View';
import LoginView from './components/loginView/LoginView';

function App() {
  const auth = useSelector(state => state.singIn.auth)
  return (
    <>
      <AddPost />
      {auth ? <View /> : <LoginView />}
    </>
  );
}

export default App;
