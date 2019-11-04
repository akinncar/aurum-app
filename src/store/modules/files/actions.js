export function addFile(id, file) {
  return {
    type: '@files/UPLOAD_FILE',
    payload: {id, file},
  };
}

export function uploadFileSuccess(file) {
  return {
    type: '@files/UPLOAD_FILE_SUCCESS',
    payload: file,
  };
}

export function removeFile(id) {
  return {
    type: '@files/REMOVE_FILE',
    payload: id,
  };
}
