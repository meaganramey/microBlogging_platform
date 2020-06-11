import { enhancer } from "./Messages.enhancer";
import { DisplayListOfMessages } from "./MessageFeed";
import { DisplayMessageMenu } from './MessageMenuContainer'


export const MessageContainer = enhancer(DisplayListOfMessages);
export const MessageMenuContainer = enhancer(DisplayMessageMenu);