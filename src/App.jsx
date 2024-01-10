import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
            author="Jefferson Monteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Giovanni Monteiro"
            content="Tudo muito novo por aqui, e eu gosto disso."
          />
        </main>
      </div>
      
    </div>
  )
}
