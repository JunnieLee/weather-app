import axios from 'axios'; // 브라우저에서 ajax 리퀘스트를 만들 수 있는 라이브러리 axios

const API_KEY = '883115dbaa365418e471b700819f14ba';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator function
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);   // 기본적으로 axios 사용하는 방법. 얜 promise값을 반환함.

	return {
		type: FETCH_WEATHER, 
		payloaad: request    // 백엔드로 API 요청을 보내는 action
	};
}