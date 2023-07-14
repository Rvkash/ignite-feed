import { Post } from './Post'
import { Header } from './components/Header';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Rafael Linhares"
        content="Testando qualquer coisa para lorem ipsulum aond ipsuum shfido ipslugum ipslugumispugm ughs lorem lorem ipg"
      />
    </div>
  )
}

export default App
