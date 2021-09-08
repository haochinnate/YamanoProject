import axios from 'axios';
import { SERVERIP } from '../consts/url';

export default axios.create({
    baseURL: `http://${SERVERIP}:3001`
});
