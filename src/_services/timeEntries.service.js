import config from "config";

export const timeEntriesService = {
  addTimeEntry
};

function addTimeEntry(timeEntry) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(timeEntry)
  };
  console.log(timeEntry);
  return fetch(`${config.apiUrl}/timeEntries`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      /* if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              location.reload(true);
            } */

      const error = (data && data.message) || response.statusText;
      console.log(error);
      return Promise.reject(error);
    }

    return data;
  });
}
