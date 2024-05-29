import {uploadPhoto, createUser} from './utils';

export default async function handleProfileSignup() {
  try {
    const [profPic, userInfo] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${profPic.body} ${userInfo.firstName} ${userInfo.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
