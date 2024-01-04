import { Header } from './components/Header'
import { Post } from './Post';


import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      
      <Post 
        author="Jefferson Monteiro" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio accusantium fugiat tempore recusandae! Beatae eum voluptatem at quidem, nesciunt provident quaerat harum mollitia ex est eius ab sint facere?" 
      />
      <Post
        author="Giovanni Monteiro"
        content="This text is just to validate my code."
      />
    </div>
  )
}
