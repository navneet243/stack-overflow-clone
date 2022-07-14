import * as api from '../api/api'

export const getAllUsers = () => async (dispatch) => {
    try {
        const {data} = await api.getAllUsers()
        dispatch({type: 'FETCH_USERS' ,payload: data})
    } catch (err) {
        console.log(err);
    }
}

export const updateProfile = (id,updateData) => async (dispatch) => {
    try {
        const {data} = await api.updateProfile(id,updateData)
        dispatch({type : 'UPDATE_CURRENT_USER' , payload:data})
    } catch (err) {
        console.log(err);
    }
}