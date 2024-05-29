import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (
  firstName,
  lastName,
  fileName,
) => {
  const res = [];
  try {
    const userDetails = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: userDetails });
    await uploadPhoto(fileName);
  } catch (error) {
    result.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return res;
};

export default handleProfileSignup;
