import { timeEntriesService } from "../_services";
import { router } from "../_helpers";

const state = {
  all: {}
};

const user = JSON.parse(localStorage.getItem("user"));
const userStatus = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const actions = {
  saveTimeEntry({ dispatch, commit }, timeEntry) {
    var toSend = { timeEntry, user };
    timeEntriesService.addTimeEntry(timeEntry).then(
      timeEntry => {
        commit("timeEntrySuccess", timeEntry);
        console.log("Time logged!");
        router.push("/");
      },
      error => {
        commit("timeEntryFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  }
};

export const timeEntries = {
  namespaced: true,
  state,
  actions
};
