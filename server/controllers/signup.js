// 예시 + 수정중
import { signup } from '../models/signup.js';

const controller = {
  signup: {
    post: async (req, res) => {
      const { username, password } = req.body;
      try{
        await signup(username, password);
        return res.status(200).send("🌊Write DONE");
      } catch (e) {
        console.error(e);
        return res.status(500).send("⚠️Server ERROR!");
      }
    }
  },
};

export { controller };
