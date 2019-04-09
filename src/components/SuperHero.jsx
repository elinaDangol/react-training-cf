import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getHeroLists } from '../Actions';

const HooksExample = (props) => {
  
  useEffect(() =>{
    props.dispatch(getHeroLists())
  }, [])

  return (
    
      <div>
          <table border='1px'>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Hero</th>
                  <th>Power</th>
                  <th>Weakness</th>
              </tr>
              </thead>
              <tbody>
              {
                props.list.map((element,index) => {
                  return (
                      <tr key={index}>
                          <td>{element.name}</td>
                          <td>{element.hero_name}</td>
                          <td>{element.power}</td>
                          <td>{element.weakness}</td>
                      </tr>
                  )
              })
              }
              </tbody>

          </table>
      </div>
  );
}

const mapStateToProps = store => ({
  list: store.lists
});


export default connect(mapStateToProps)(HooksExample);
