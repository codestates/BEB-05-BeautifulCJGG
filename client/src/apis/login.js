// 아래는 예시 코드입니다.
import axios from 'axios';

export async function loginAPI(userID, password){
  try {
    const res = await axios.post("https://...", {
      params: { userID, password },
    });
  } catch (e) {
    throw new Error(e);
  }
}