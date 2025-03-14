import { v4 as uuidv4 } from 'uuid';

function createID(){ 
   return uuidv4(); 
}

export {createID}