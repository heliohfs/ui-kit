import uniqid from 'uniqid';

export const DummyUploader = setFiles => (uid, dummyError) => {
  const timer = setInterval(
    () =>
      setFiles(prevFiles => {
        const copyFiles = { ...prevFiles };

        if (copyFiles[uid] === null) {
          return prevFiles;
        }

        copyFiles[uid] = {
          data: copyFiles[uid].data,
          file: copyFiles[uid].file,

          // Only update completed when there isn't an error, otherwise it
          // will continue to load the bar in an error state though.
          completed:
            copyFiles[uid].completed > 50 && dummyError
              ? copyFiles[uid].completed
              : copyFiles[uid].completed + Math.random() * 10,

          uploader: timer,

          // Verify if this dummy example should enter in an error state
          error:
            copyFiles[uid].completed > 50 && dummyError ? 'Dummy error' : null,
        };

        if (copyFiles[uid].completed >= 100) {
          clearInterval(timer);
        }

        return copyFiles;
      }),
    800
  );
};

export const onAccept = (files, setFiles, setOpen) => newFiles => {
  setOpen(true);
  const copyFiles = { ...files };

  newFiles.forEach(file => {
    const reader = new FileReader();
    const uid = uniqid();

    // Set state after reading async the files
    reader.onload = event => {
      copyFiles[uid] = {
        file,
        data: event.target.result,
        completed: 0,
        uploader: null,
        error: null,
      };
      setFiles(copyFiles);

      // Dummy uploader update the file upload values and fake a
      // a error when it has added more than 2 files
      DummyUploader(setFiles)(uid, Object.keys(copyFiles).length > 2);
    };
    reader.readAsDataURL(file);
  });
};

export const onReject = (files, setFiles, setOpen) => newFiles => {
  setOpen(true);
  const copyFiles = { ...files };

  newFiles.forEach(fileObj => {
    const uid = uniqid();

    copyFiles[uid] = {
      file: fileObj.file,
      data: null,
      completed: 0,
      uploader: null,
      error: fileObj.error,

      // NOTE: It must set this as true, to avoid two snackbar,
      // given that onReject error is handle by uploader.
      noShowSnack: true,
    };
    setFiles(copyFiles);

    // Dummy uploader update the file upload values and fake a
    // a error when it has added more than 2 files
    // if (!fileObj.error) DummyUploader(uid, Object.keys(copyFiles).length > 2);
  });
};

export const onDeleteFiles = (files, setFiles) => fileUID => {
  const copyFiles = { ...files };

  // Note: Before update the state (excluding),
  // this example should stop the upload process (dummy here)
  clearInterval(copyFiles[fileUID].uploader);

  // Update state
  delete copyFiles[fileUID];
  setFiles(copyFiles);
};
