import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: {
    biddingManager: false,
    contentManager: false,
    employeeManager: false,
    eventManager: false,
    generalManager: false,
    jobsManager: false,
    responseManager: false
  }
};

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {

    setRoles: (state, action) => {
      state.roles = action.payload;
    },

  toggleRole: (state, action) => {
    const role = action.payload;

    // 🟢 GENERAL MANAGER TOGGLED
    if (role === "generalManager") {
      const enabled = !state.roles.generalManager;

      // when turning ON → set ALL true
      if (enabled) {
        Object.keys(state.roles).forEach(r => {
          state.roles[r] = true;
        });
      } else {
        // when turning OFF → ONLY disable generalManager
        state.roles.generalManager = false;
      }

      return;
    }

      // 🟡 OTHER ROLES
      state.roles[role] = !state.roles[role];

      // if any role is false → GM must be false
      if (!state.roles[role]) {
        state.roles.generalManager = false;
      }

      // if ALL non-GM roles are true → GM auto true
      // const allTrue = Object.entries(state.roles)
      //   .filter(([r]) => r !== "generalManager")
      //   .every(([, v]) => v === true);

      // if (allTrue) {
      //   state.roles.generalManager = true;
      // }
    },
    
    resetRoles: (state) => {
      state.roles = initialState.roles;
    }
  }
});

export const { toggleRole, setRoles, resetRoles } = rolesSlice.actions;
export default rolesSlice.reducer;
