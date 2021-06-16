import { AsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
import apiUtil from "../utils/apiUtil";
import { AxiosResponse } from "axios";
import { IApiStatus } from "../types";

function createGetApiThunk<T>(id: string, getApiCall: Promise<AxiosResponse<T>>) {
    return createAsyncThunk(
        id,
        async (_, thunkApi): Promise<IApiStatus<T>> => {
            try {
                var response = await getApiCall;
                return apiUtil.getApiStatus('success', response);
            } catch (error) {
                return thunkApi.rejectWithValue<IApiStatus<any>>(apiUtil.getApiStatus('error', error.response));
            }
        }
    );
}

function createGetApiSlice<T>(name: string, initialState: IApiStatus<T>, thunk: AsyncThunk<IApiStatus<T>, void, {}>) {
    return createSlice({
        name: name,
        initialState: initialState,
        extraReducers: (builder) => {
            builder.addCase(thunk.pending, (state) => {
                state.status = 'inprogress';
            });
            builder.addCase(thunk.fulfilled, (state, { payload }) => {
                state.status = 'success';
                state.statusCode = payload.statusCode;
                state.data = payload.data as Draft<T>;
            });
            builder.addCase(thunk.rejected, (state, { payload }) => {
                state.status = 'error';
                state.statusCode = payload
            });
        },
        reducers: {},
    });
}


export {
    createGetApiSlice,
    createGetApiThunk
}

// Action creators are generated for each case reducer function
export default profileSlice.reducer;

