import {SET_SOCIAL_NETWORK} from './types';

export const setSocialNetwork = (socialNetwork) => {
    return ({
        type:SET_SOCIAL_NETWORK,
        socialNetwork
    })
}