import React, { Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render(){
    return (
    <Router>
          <div className="App">
            <NavBar/>
            <div id='page-body'>
            <Routes>
                <Route path="/" element={<HomePage/>} exact />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/articles-list" element={<ArticlesListPage/>} />
                <Route path="/article/:name" element={<ArticlePage/>} />
                <Route path= "*" element={<NotFoundPage/>} />
            </Routes>
            </div>
          </div>
    </Router>
    );
  }
}

export default App;
