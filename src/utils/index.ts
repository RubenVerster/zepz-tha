import { IUser, IExtractedUser } from '../types';

export const extractUserData = (dataSet: IUser[]): IExtractedUser[] => {
  const extractedSet: IExtractedUser[] = [];

  for (let i = 0; i < dataSet.length; i++) {
    let extractedUser: IExtractedUser = {
      profile_image: dataSet[i].profile_image,
      display_name: dataSet[i].display_name,
      reputation: dataSet[i].reputation,
      id: dataSet[i].user_id,
    };
    extractedSet.push(extractedUser);
  }
  return extractedSet;
};
