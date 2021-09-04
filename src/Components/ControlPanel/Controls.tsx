/* global chrome */
import { ControlButton } from '../Types/ControlButton';

export const Controls : Array<ControlButton> = [
  {
    name: 'Cat pics only',
    description: 'Swap all images to cats',
    buttonAction: () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id ? tabs[0].id : 0;
        chrome.tabs.sendMessage(tabId, { control: 'catPic' });
      });
    },
    uid: 'catpics001',
  },
  {
    name: 'Inspirational message',
    description: 'Get an inspirational message ',
    buttonAction: () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id ? tabs[0].id : 0;
        chrome.tabs.sendMessage(tabId, { control: 'insp' });
      });
    },
    uid: 'insp001',
  },
  {
    name: 'Full send',
    description: 'For cat entusiasts only',
    buttonAction: () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id ? tabs[0].id : 0;
        chrome.tabs.sendMessage(tabId, { control: 'sendIt' });
      });
    },
    uid: 'fullsend001',
  },
];

export default Controls;
