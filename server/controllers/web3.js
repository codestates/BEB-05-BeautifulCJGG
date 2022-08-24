// 예시 + 수정중
import createWallet from '../models/web3-createWallet.js';

const controller = {
  createWallet: {
    post: async (req, res) => {
      const { username, password } = req.body;
      try{
        const newAccount = await createWallet(username, password);
        return res.status(200).json({
          newAccount: newAccount,
          message: "🎉Success - Create Wallet"
        });
      } catch (e) {
        console.error(e);
        return res.status(500).send("⚠️Server ERROR!");
      }
    }
  },

  web3: {
    get: async (req, res) => {
      try{
        await signup(username, password);
        return res.status(200).send("🌊Write DONE");
      } catch (e) {
        console.error(e);
        return res.status(500).send("⚠️Server ERROR!");
      }
    },
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
