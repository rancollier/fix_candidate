import React, { PureComponent } from "react";
import { array } from "prop-types";
import Card from "./card";

class BookList extends PureComponent {
  render() {
    const { dbBooks } = this.props;
    return (
      <div>
        {dbBooks.map((book) => {
          <Card />;
        })}
      </div>
    );
  }
}

BookList.defaultProps = {
  dbBooks: []
};

BookList.propTypes = {
  dbBooks: array
};

export default BookList;
