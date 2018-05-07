// action creator fetchWeather을 다루기 위한 reducer

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			return [ action.payload.data, ...state ]; // ES6 문법임!
		//= return state.concat([ action.payload.data ]); 
			// concat으로 기존 배열 + 추가되는 배열 => 새로운 배열 반환 (절대 state 직접수정 X)
			// reducer에선 언제나 state의 새 instance를 반환해야 함.
	}
	return state;
}
