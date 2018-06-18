import * as types from '../types'
 
export const checkAttendance = (clubid, uid) => {
    return {
        type: types.CHECK_ATTENDANCE,
        clubid,
        uid
    }
}
