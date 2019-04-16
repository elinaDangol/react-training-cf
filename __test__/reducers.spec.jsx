import listReducers from '../src/Reducers/index';
import {initialState} from '../src/Reducers/index';

describe('reducers', () => {
  test('FETCH_DATA_SUCCESS should initialize lists', () => {
    expect(listReducers(initialState, { type: 'FETCH_DATA_SUCCESS', payload: ['Super'] })).toEqual({ lists: ['Super'] });
  });
  test('ADD_SUPER_HERO should update lists', () => {
    const state = initialState;
    state.lists = ['Batman'];
    expect(listReducers(state, { type: 'ADD_HERO', payload: 'Superman' })).toEqual({ lists: ['Batman', 'Superman'] });
  });
});