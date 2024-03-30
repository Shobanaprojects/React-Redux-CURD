import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../pages/UserData'

export const userSlice = createSlice({
  name: 'users',
  initialState: UserData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userupdate = state.find(user => user.id == id);
      if (userupdate) {
        userupdate.name = name;
        userupdate.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const userupdate = state.find(user => user.id == id);
      if (userupdate) {
        return state.filter (f => f.id !== id)
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer