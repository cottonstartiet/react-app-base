import { createSlice } from "@reduxjs/toolkit";
import { defaultApiStatus, IApiStatus, IUserProfile } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit"
import apiUtil from "../utils/apiUtil";
import apiService from "../services/apiService";

interface UserProfileState {
    profile?: IUserProfile;
    apiStatus: IApiStatus<IUserProfile>;
}

const initialState: UserProfileState = {
    profile: undefined,
    apiStatus: defaultApiStatus.initial
}

const fetchUserProfile = createAsyncThunk(
    'profile/fetchByProfileId',
    async (_, thunkApi) => {
        try {
            var response = await apiService.fetchUserProfile<IUserProfile>();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response);
        }
    }
)

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.profile = undefined;
            state.apiStatus = apiUtil.getApiStatus('inprogress');
        });
        builder.addCase(fetchUserProfile.fulfilled, (state, { payload }) => {
            state.profile = payload.data;
            state.apiStatus = apiUtil.getApiStatus('success', payload)
        });
        builder.addCase(fetchUserProfile.rejected, (state, { payload }: any) => {
            state.profile = undefined;
            console.log(payload);
            state.apiStatus = apiUtil.getApiStatus('error', payload);
        });
    },
    reducers: {},
})

export {
    fetchUserProfile
}

// Action creators are generated for each case reducer function
export default profileSlice.reducer;

