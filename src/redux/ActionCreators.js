import { HOME } from '../data/home';
import { EDUCATION } from '../data/education'
import { ABOUT } from '../data/about'

import * as ActionTypes from './ActionTypes'

// home actionCreator

export const fetchHome = () => dispatch => {
    dispatch(homeLoading());

    setTimeout(() => {
        dispatch(addHome(HOME));
    }, 1000)
}

export const homeLoading = () => ({
    type: ActionTypes.HOME_LOADING
});

export const homeFailed = errMess => ({
    type: ActionTypes.HOME_FAILED,
    payload: errMess
});

export const addHome = home => ({
    type: ActionTypes.ADD_TO_HOME,
    payload: home
})


// education actionCreator

export const fetchEducation = () => dispatch => {
    dispatch(educationLoading());

    setTimeout(() => {
        dispatch(addEducation(EDUCATION));
    }, 2000)
}

export const educationLoading = () => ({
    type: ActionTypes.EDUCATION_LOADING
});

export const educationFailed = errMess => ({
    type: ActionTypes.EDUCATION_FAILED,
    payload: errMess
});

export const addEducation = education => ({
    type: ActionTypes.ADD_TO_EDUCATION,
    payload: education
})

// about actionCreator

export const fetchAbout = () => dispatch => {
    dispatch(aboutLoading());

    setTimeout(() => {
        dispatch(addAbout(ABOUT));
    }, 2000)
}

export const aboutLoading = () => ({
    type: ActionTypes.ABOUT_LOADING
});

export const aboutFailed = errMess => ({
    type: ActionTypes.ABOUT_FAILED,
    payload: errMess
});

export const addAbout = about => ({
    type: ActionTypes.ADD_TO_ABOUT,
    payload: about
})
