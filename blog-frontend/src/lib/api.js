/*
    클라이언트에서 API를 호출하는 함수를 만드세요.
    앞으로 사용할 REST API 함수들은 모두 src/lib/api.js에 만듭니다.
    우선 writePost 함수를 만들고 내보내세요.
*/

import axios from 'axios';

// 글 작성 API 함수 생성
export const writePost = ({title, body, tags}) => axios.post('/api/posts', {title, body, tags });

// 포스트 읽기 API 함수 생성
export const getPost = (id) => axios.get(`/api/posts/${id}`);