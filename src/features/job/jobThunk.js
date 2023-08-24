import { hideLoading, showLoading, getAllJobs } from '../allJobs/allJobsSlice';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { clearValues } from './jobSlice';
import authHeader from '../../utils/authHeader';

export const createJobThunk = async (job, thunkAPI) => {
    try {
        const resp = await customFetch.post('/jobs', job, authHeader(thunkAPI));
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    console.log(jobId);

    try {
        const resp = await customFetch.delete(`jobs/${jobId}`, {
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        thunkAPI.dispatch(getAllJobs());
        return resp.data.msg;
    } catch (error) {
        thunkAPI.dispatch(hideLoading());
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};
