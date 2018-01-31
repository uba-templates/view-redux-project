// import axios from 'axios'

export const INCREASE = 'count_increase';
export const DECREASE = 'count_decrease';

export function increaseState() {
    return {
        type: INCREASE
    }
}

export function decreaseState() {
    return {
        type: DECREASE
    }
}