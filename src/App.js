import React, {useRef, useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import Header from "./components/Header";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Content'},
        {id: 2, title: 'JavaScript 2', body: 'Content'},
        {id: 3, title: 'JavaScript 3', body: 'Content'}
        ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    //Получаем пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <Header/>
        <PostForm create={createPost}/>
        {posts.length
            ? <PostList remove={removePost} posts={posts} title="Список постов 1"/>
            :
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        }
    </div>
  );
}

export default App;
