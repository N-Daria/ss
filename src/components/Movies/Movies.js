import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';

export default React.memo(function Movies(props) {
  const buttonClass = window.location.pathname === '/movies' && props.addCardButton && props.moviesBlock ? 'content__button_open button' : 'content_none';
  const moviesClass = props.moviesBlock ? 'content_open' : 'content_none';

  function showContent() {
    props.togglePreloaderBlock(true);
    props.getBeatFilms()
      .then(() => {
        localStorage.setItem('isShortMovie', props.isShortMovie);
        localStorage.setItem('searchWord', props.searchWord);
      })
  }

  return (
    <>
      <SearchForm
        changeSearchWord={props.changeSearchWord}
        toggleIsShortMovie={props.toggleIsShortMovie}
        isShortMovie={props.isShortMovie}
        showContent={showContent}
        searchWord={props.searchWord}
      />

      <main className={`${moviesClass} content`}>

        < MoviesCardList
          renderedCards={props.renderedCards}
        />

        <button type='button' className={`${buttonClass} content__button`} onClick={props.openMoreCards}>еще</button>
      </main>
    </>
  )
});