import config from "config";

export const timeEntriesService = {
  addTimeEntry,
  getUserTimeEntries,
  getById,
  update,
  delete: _delete
};

function addTimeEntry(timeEntry) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(timeEntry)
  };
  console.log(timeEntry);
  return fetch(`${config.apiUrl}/time-entries`, requestOptions)
    .then(handleResponse)
    .then(timeEntry => {
      localStorage.setItem("timeEntry", JSON.stringify(timeEntry));
      console.log(timeEntry);
      return timeEntry;
    });
}

function getUserTimeEntries(user) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  return fetch(
    `${config.apiUrl}/time-entries?user=${user}`,
    requestOptions
  ).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET"
  };

  return fetch(`${config.apiUrl}/time-entries/${id}`, requestOptions).then(
    handleResponse
  );
}

function update(timeEntry) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(timeEntry)
  };

  return fetch(
    `${config.apiUrl}/time-entries/${timeEntry.id}`,
    requestOptions
  ).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE"
  };

  return fetch(`${config.apiUrl}/timeEntries/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      console.log(error);
      return Promise.reject(error);
    }

    return data;
  });
}
