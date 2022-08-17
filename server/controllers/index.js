// 예시코드입니다.
import { writeNftData, readAllNftData } from '../models/Firestore.js';

const controller = {
  login: {
    get: async (req, res) => {
      try{

        return res.status(200).send(result);
      } catch (e) {
        return res.status(500).send('Server ERROR!');
      }
    },
    post: async (req, res) => {
      const { tokenId, name, imageUrl, description, owner } = req.body;
      try{
        await writeNftData(tokenId, name, imageUrl, description, owner);
        return res.status(200).send("🌊Write DONE");
      } catch (e) {
        console.error(e);
        return res.status(500).send("⚠️Server ERROR!");
      }
    }
  },
};

export { controller };
