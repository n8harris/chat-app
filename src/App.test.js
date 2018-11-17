import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Firebase from './utils/Firebase';
jest.mock('./utils/Firebase', () => {
  return jest.fn().mockImplementation(() => {
    return { getMembers: () => {
      return new Promise((resolve) => {
        return resolve([
          {
            name: "Jim"
          },
          {
            name: "Bob Smith"
          },
          {
            name: "Nathan Harris"
          },
          {
            name: "John"
          }
        ]);
      })
    }};
  });
});

describe('App', () => {
  describe('getCurrentChatRoomName', () => {
    it('creates room name with two full names', () => {
      const wrapper = shallow(<App />);
      wrapper.setState(() => { return { currentUser: "Nathan Harris", currentChatUser: "Bob Smith" } });
      expect(wrapper.instance().getCurrentChatRoomName()).toEqual("bobsmith-nathanharris");
    });
    it('creates room name with one full name and one first name', () => {
      const wrapper = shallow(<App />);
      wrapper.setState(() => { return { currentUser: "Nathan Harris", currentChatUser: "Bob" } });
      expect(wrapper.instance().getCurrentChatRoomName()).toEqual("bob-nathanharris");
    });
    it('creates room name with name and undefined', () => {
      const wrapper = shallow(<App />);
      wrapper.setState(() => { return { currentUser: "Nathan Harris", currentChatUser: undefined } });
      expect(wrapper.instance().getCurrentChatRoomName()).toEqual("nathanharris-");
    });
    it('creates room name with ids instead of names', () => {
      const wrapper = shallow(<App />);
      wrapper.setState(() => { return { currentUser: 1, currentChatUser: 2 } });
      expect(wrapper.instance().getCurrentChatRoomName()).toEqual("1-2");
    });
    it('creates room name from names with multiple spaces', () => {
      const wrapper = shallow(<App />);
      wrapper.setState(() => { return { currentUser: "Nathan   Har ris", currentChatUser: "Bo b  Smith" } });
      expect(wrapper.instance().getCurrentChatRoomName()).toEqual("bobsmith-nathanharris");
    });
  });

  describe('createInitials', () => {
    it('returns empty string when undefined is passed in', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.instance().createInitials()).toEqual('');
    });
    it('returns empty string when non-string is passed in', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.instance().createInitials(3)).toEqual('');
    });
    it('returns single letter when no space', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.instance().createInitials("Jim")).toEqual('J');
    });
    it('returns capital letter when first letter is lower case', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.instance().createInitials("jim")).toEqual('J');
    });
    it('returns two capital letters when there is a space', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.instance().createInitials("Nathan Harris")).toEqual('NH');
    });
  });
});
