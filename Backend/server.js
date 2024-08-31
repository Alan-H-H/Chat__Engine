import cors from 'cors'
import express from 'express'
import axios from 'axios'

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/', 
        {username: username, secret: username},
        {headers: {"private-key": "de30140e-c17b-4d2d-8166-73f4e7e07470"}}
    )
    return res.status(r.status).json(r.data)
  }catch (e){
    console.log(e)
  }
});

app.listen(3001);