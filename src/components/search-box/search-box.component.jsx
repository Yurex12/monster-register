import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeHolder, classname }) => (
  <div>
    <input
      type="search"
      className={`search-box ${classname}`}
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
