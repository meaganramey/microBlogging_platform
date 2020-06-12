import React from "react";
import { MessageContainer } from "../components/messageFeed";
import { MenuContainer } from "../components";

export const MessageScreen = () => (
  <>
    <MenuContainer />
    <h2>Messages</h2>
    <MessageContainer />
  </>
);

