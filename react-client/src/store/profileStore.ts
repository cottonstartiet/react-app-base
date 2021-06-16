import { createSlice } from "@reduxjs/toolkit";
import { defaultApiStatus, IApiStatus, IUserProfile } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit"
import apiUtil from "../utils/apiUtil";
import apiService from "../services/apiService";

interface UserProfileState {
    apiStatus: IApiStatus<IUserProfile>;
}

const initialState: UserProfileState = {
    apiStatus: defaultApiStatus.initial
}

const fetchUserProfile = createAsyncThunk(
    'profile/fetchByProfileId',
    async (_, thunkApi) => {
        try {
            var response = await apiService.fetchUserProfile<IUserProfile>();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(apiUtil.getApiStatus('error', error.response));
        }
    }
)

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.apiStatus = apiUtil.getApiStatus('inprogress');
        });
        builder.addCase(fetchUserProfile.fulfilled, (state, { payload }) => {
            state.apiStatus = apiUtil.getApiStatus('success', payload)
        });
        builder.addCase(fetchUserProfile.rejected, (state, { payload }: any) => {
            state.apiStatus = payload;
        });
    },
    reducers: {},
})

export {
    fetchUserProfile
}

// Action creators are generated for each case reducer function
export default profileSlice.reducer;

