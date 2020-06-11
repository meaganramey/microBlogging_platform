import React from "react";
import { MessageContainer } from "../components/messageFeed";
import { MessageMenuContainer } from '../components/messageFeed';

export const MessageScreen = () => (
  <>
    <MessageMenuContainer />
    <MessageContainer />
    <h2>Messages</h2>
  </>
);

