import * as ActionTypes from './ActionTypes'

export const addHome = (image, description, title, name) => ({
    type: ActionTypes.ADD_TO_HOME,
    payload: {
        title: title,
        image: image,
        name: name,
        description: description
    }
});

export const addEducation = (major, name, school, date, description) => ({
    type: ActionTypes.ADD_TO_EDUCATION,
    payload: {
        major: major,
        school: school,
        name: name,
        description: description,
        date: date
    }
});

export const addAbout = (major, name, school, date, description) => ({
    type: ActionTypes.ADD_TO_ABOUT,
    payload: {
        major: major,
        school: school,
        name: name,
        description: description,
        date: date
    }
});
