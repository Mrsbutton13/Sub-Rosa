import { csrfFetch } from "./csrf"

const GET_DASHBOARDS = 'dashboards/GET_DASHBOARDS'
const GET_DASHBOARD = 'dashboard/GET_DASHBOARD'


const getDashboard = (dashboard) => ({
    type: GET_DASHBOARD,
    payload: dashboard
})

const getDashboards = (dashboards) => ({
    type: GET_DASHBOARDS,
    payload: dashboards
})



export const fetchDashboard = (id) => async(dispatch) => {
    const response = await fetch(`/api/dashboard/${id}`)
    const data = await response.json()
    dispatch(getDashboard(data.dashboard))
    return response
}

export const fetchDashboards = () => async(dispatch) => {
    const response = await fetch('/api/dashboard')
    const data = await response.json()
    dispatch(getDashboards(data.dashboards))
    return response
}

const initialState = {}

function dashboardReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_DASHBOARDS:
            newState = Object.assign({}, state, {[action.payload]: action.payload})
            return newState
        case GET_DASHBOARD:
            newState = Object.assign({}, state, {[action.payload.id]: action.payload})
            return newState
        default:
            return state
    }
}

export default dashboardReducer