import { createSlice } from '@reduxjs/toolkit'

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    value: 0
  },
  reducers: {
    increase: state => {
      state.value += 1
    },
    decrease: state => {
      state.value -= 1
    }
  }
})

// each case under reducers becomes an action
export const { increase, decrease } = peopleSlice.actions

export default peopleSlice.reducer