import styles from "./search_header.module.css";
import React, { memo, useRef } from "react";

// memo : 전달되는 props이 바뀌면 리-랜더링 된다. 지금 실행해보면 memo를 썼음에도 리랜더링 되고 있는데 이것은 props이 바뀌었다는 의미!
const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Yotube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        {/* 내 습관은 (e) => this.onClick(e) event를 함수로 넘겨줘서 그걸 받아서 e.key를 찾았을텐데 이렇게도 되는구나!!! */}
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
