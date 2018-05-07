import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
// 아래 애들은 본 컴포넌트를 컨데이터로 만들기 위해 반드시 import해줘야하는 아이들!!
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }; // state 초기화 

		this.onInputChange = this.onInputChange.bind(this); // 콜백함수에서 this.를 참조할 시 반드시 context binding!
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

// this is a 'callback' function. + an 'event handler'
	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });  // 얜 콜백 함수니까 this. 참조하려면 바인딩 필수!
	}  

// this is a 'callback' function. + an 'event handler'
	onFormSubmit(event) {
		event.preventDefault();  // tells the browser not to submit the form.
		this.props.fetchWeather(this.state.term);  // 얜 콜백 함수니까 this. 참조하려면 바인딩 필수!
		// this.state.term이 바로 action creator에 전달될 city값임.
		this.setState({ term: '' });  //검색 끝난후에 인풋 초기화시켜주기
	}  

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group"> 
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term} // state 초기화
					onChange={this.onInputChange} // 콜백함수 활용- state 재설정
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch); 
}
// action creator인 fetchWeather을 본 컨테이너에 연결시키기 위한 함수

export default connect(null, mapDispatchToProps)(SearchBar); 
// SearchBar 컴포넌트를 fetchWeather action creator를 사용할 수 있게 만든 컨테이너로 만들어서 반환~!