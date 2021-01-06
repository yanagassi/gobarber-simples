import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import {promisify} from 'util';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({ error: 'Token not provided'});
  }

  const [,token] = authHeader.split(' ');

  try{
    const decoded = await promissify(jwt.verify)(token, authConfig.secret);

    return next();
  }catch(err){
    return res.status(401).json({ error: 'Token error'})
  }
};
