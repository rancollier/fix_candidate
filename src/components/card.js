import React, { PureComponent } from "react";
import { number, string } from "prop-types";
import {Provider, defaultTheme} from '@adobe/react-spectrum';
import { Heading } from "@adobe/react-spectrum";
import Heart from '@spectrum-icons/workflow/Heart';
import Preference from "./preference";
import { USER_LIKE } from "./constans";
import { LikesContext } from "../likes-context";

class Card extends PureComponent {
  render() {
    const { author, bookId, coverImage, isLiked, price, title } = this.props;
    let likes = this.context;

    this.updateLikes = () => {
      this.setState(state => ({
        // Update list with bookId
      }));

    return (
      <Provider theme={defaultTheme}>
        <div className="book-card">
          <div className="heading-card">
            <Preference preferenceSelected={updateLikes} />
          </div>
          <div className="body-card">
            <img src={coverImage} alt="book cover" />
          </div>
          <div className="footer-card">
            <Heading level={3}>{title}</Heading>
            <Heading level={3}><i>By</i> {author} </Heading>
            <Heading level={3}>$ {price}</Heading>
            {isLiked === USER_LIKE && <Heart alt="I like this book"/> }
          </div>
        </div>
      </Provider>
    );
  }
}

Card.defaultProps = {
  author: "",
  coverImage: "https://via.placeholder.com/150",
  isLiked: 25,
  price: 0,
  title: "",
};

Card.propTypes = {
  author: string,
  coverImage: string,
  isLiked: number,
  price: number,
  title: string,
};

Card.contextType = LikesContext;

export default Card;
