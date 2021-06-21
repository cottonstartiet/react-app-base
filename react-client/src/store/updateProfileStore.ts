import { createSlice } from "@reduxjs/toolkit";
import { defaultApiStatus, IApiStatus, IUserProfile } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit"
import apiUtil from "../utils/apiUtil";
import apiService from "../services/apiService";

interface UpdateUserProfileState {
    apiStatus: IApiStatus<IUserProfile>;
}

interface UpdateProfileParams {
    title: string;
    subtitle: string;
}

const initialState: UpdateUserProfileState = {
    apiStatus: defaultApiStatus.initial
}

const updateUserProfile = createAsyncThunk(
    'profile/updateUserProfile',
    async (payload: UpdateProfileParams, thunkApi) => {
        try {
            var response = await apiService.updateUserProfile<UpdateProfileParams, IUserProfile>(payload);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(apiUtil.getApiStatus('error', error.response));
        }
    }
);

export const updateProfileSlice = createSlice({
    name: 'profileSlice',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(updateUserProfile.pending, (state) => {
            state.apiStatus = apiUtil.getApiStatus('inprogress');
        });
        builder.addCase(updateUserProfile.fulfilled, (state, { payload }) => {
            state.apiStatus = apiUtil.getApiStatus('success', payload)
        });
        builder.addCase(updateUserProfile.rejected, (state, { payload }: any) => {
            state.apiStatus = payload;
        });
    },
    reducers: {},
});

export {
    updateUserProfile
}

// Action creators are generated for each case reducer function
export default updateProfileSlice.reducer;

