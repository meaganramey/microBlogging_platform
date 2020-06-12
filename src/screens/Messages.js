import React from "react";
import { MessageContainer } from "../components/messageFeed";
import { MenuContainer } from "../components";
import { NewMessageFormContainer } from "../components/createMessage"

export const MessageScreen = () => (
  <>
    <MenuContainer />
    <h2>Messages</h2>
    <NewMessageFormContainer />
    <MessageContainer />
  </>
);

