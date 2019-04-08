import React from 'react';

class Controlled extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: 'yo',
      formList: [],
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    //   console.log(evt.target.value);
    this.setState({
      formValue: evt.target.value,
    });
  }

  handleClick(evt) {
    //   console.log(this.state.formValue);
    const { formValue, formList } = this.state;
    if(!formValue.length){
        return false;
    }
    if(formList.includes(formValue)){
      console.log('already commented');
      this.setState({
        error: 'already commented'
      })
      return false;
    }
    // console.log(formList, formValue);
    this.setState({
      formList: [...formList, formValue],
      formValue: '',
      error: ''
    });
  }

  renderComments(){
    const { formList } = this.state;
    return <div>
    {
      formList.map((val, index) => <li key={`${val}${index}`} >{val}</li>)
    }
  </div>
  }

  render() {
    const { formList, formValue } = this.state;

    return (
      <React.Fragment>
        <p>{this.state.error}</p>
      <div className="p-4 w-50 mx-0">
        {this.renderComments()}
        <label className="mr-2">Comments</label>
        <input className="w-100" type="text" value={this.state.formValue} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
      </div>
      </React.Fragment>
    );
  }
}

export default Controlled;
