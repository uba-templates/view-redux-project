// import axios from 'axios'

export const INCREASE = 'home_increase';
export const DECREASE = 'home_decrease';

export function increaseState() {
    return {
        type: INCREASE
    }
}

export function decreaseState() {
    return {
        type: DECREASE,
    }
}