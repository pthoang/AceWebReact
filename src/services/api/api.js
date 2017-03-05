import axios from 'axios'
import * as globals from '../globals'



const headers = {
  'x-access-token': globals.token
}

export const get = (apiPath) => axios.get(`${globals.api}${apiPath}`, {headers: headers})
export const put = (apiPath, data) => axios.put(`${globals.api}${apiPath}`, data, {headers: headers})
