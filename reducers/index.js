// @flow

import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import GroupsReducer from './GroupsReducer';
import GroupReducer from './GroupReducer';
import TopicReducer from './TopicReducer';

export default function getRootReducer(navReducer) {
      return combineReducers({
          nav: navReducer,
          auth: UserReducer,
          groups: GroupsReducer,
          group: GroupReducer,
          topic: TopicReducer
      });
}
