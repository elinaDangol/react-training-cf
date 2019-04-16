import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions/index';

const mockStore = configureMockStore([thunk]);
describe('actions',()=> {
  beforeEach(() => {
    moxios.install();
    });
    
    afterEach(() => {
    moxios.uninstall();
    });
  describe('getSuperHeroList',() =>{
    const store = mockStore ({ lists : []});
    test('should fetch list on success',()=> {
      moxios.wait(() => {
        const request = moxios.requests.at(0);
        request.respondWith({
          status : 200,
          response: 'HAPPY',
        });
      });

      return store.dispatch(actions.getSuperHeroList())
        .then(() =>{
        expect(store.getActions()[1]).toEqual({
          type: 'FETCH_DATA_SUCCESS',
          payload: 'HAPPY',
        });
      });
    });
  });
});