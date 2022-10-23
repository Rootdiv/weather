import style from './App.module.scss';
import { Container } from './module/Container/Container';
import { Result } from './module/Result/Result';
import { Search } from './module/Search/Search';

const App = () => (
  <div className={style.app}>
    <Container>
      <Search />
      <Result />
    </Container>
  </div>
);

export default App;
