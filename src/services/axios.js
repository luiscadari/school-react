import axios from 'axios';
import 'dotenv/config';

export default axios.create({
  baseURL: process.env.LOCAL_URL || "",
})
