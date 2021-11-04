import React, { PureComponent, Fragment } from "react";
import { ActionButton, Flex, View } from "@adobe/react-spectrum";
import ThumbDown from "@spectrum-icons/workflow/ThumbDown";
import ThumbUp from "@spectrum-icons/workflow/ThumbUp";
import { LikesContext } from "../likes-context";
import { USER_LIKE, USER_DISLIKE } from "./constans";

class Preference extends PureComponent {
  render() {
    return (
      <LikesContext.Consumer>
        {({ likes, updateLikes }) => (
          <Fragment>
            <Flex wrap gap="size-10">
              <View backgroundColor="static-red-700" padding="size-350">
                <ActionButton
                  staticColor="white"
                  aria-label="Preference Dislike this Book"
                  onPress={updateLikes(USER_DISLIKE)}
                >
                  <ThumbDown />
                </ActionButton>
              </View>
              <View backgroundColor="static-green-700" padding="size-350">
                <ActionButton
                  staticColor="white"
                  aria-label="Preference Like this Book"
                  onPress={updateLikes(USER_LIKE)}
                >
                  <ThumbUp aria-label="ThumbDown" />
                </ActionButton>
              </View>
            </Flex>
          </Fragment>
        )}
      </LikesContext.Consumer>
    );
  }
}

export default Preference;
