import {SET_SOCIAL_NETWORK} from '../actions/types';
import socialNetwork from '../../socialNetworks/index'; 


const defaultState = {
    background: socialNetwork.defaultStyle.background,
    color: socialNetwork.defaultStyle.color,
    selected: socialNetwork.defaultStyle.logo
}

export default function rootReducer(state = defaultState, action){
    switch(action.type){
        case SET_SOCIAL_NETWORK:
            return Object.assign({}, state, { background: action.socialNetwork.background, color: action.socialNetwork.color, selected: action.socialNetwork.logo});
        default:
            return state;
    }   
}