// Types
import * as types from './types';

export const setFileSystem: types.SetFileSystemContract = (__, action) => {
    return action.payload;
};

export const setActiveFile: types.SetActiveFileFullPath = (state, action) => {
    state.activePath = action.payload.fullPath;
};

export const createNewFile: types.AddFileToFileSystemContract = (state, action) => {
    const { payload: { name, type }} = action;
    const created = new Date().toLocaleString();

    const createdFile: types.File | types.Directory = type === 'directory'
        ? {
            changed:  created,
            created,
            content:  [],
            fullPath: `${state.activePath}${name}/`,
            name,
            type,
        } : {
            changed:  created,
            created,
            content:  '',
            fullPath: `${state.activePath}${name}/`,
            name,
            type,
        };

    const crumbsPath = state.activePath.split('/').slice(1);

    let activeDirectory = state.fs;

    (function addFile() {
        const crumb = crumbsPath.shift();

        if (crumb && activeDirectory.length) {
            const foundDirectory = activeDirectory.find((dir) => {
                return dir.name === crumb;
            });

            if (foundDirectory) {
                if (typeof foundDirectory.content !== 'string') {
                    activeDirectory = foundDirectory.content;
                    addFile();
                }
            }
        } else if (crumb && !activeDirectory) {
            //TODO Create additional directories
        } else if (!activeDirectory.find((file) => file.name === createdFile.name)) {
            activeDirectory.push(createdFile);
        }
    }());
};

export const saveFile: types.SaveFileTextContentFileSystemContract = (state, action) => {
    const { payload: { fullPath, content }} = action;
    const changed = new Date().toLocaleString();

    const crumbsPath = fullPath.split('/');
    let activeDirectory = state.fs;

    (function changeFile() {
        const crumb = crumbsPath.shift();

        if (crumb && activeDirectory) {
            const foundDirectory = activeDirectory.find((dir) => {
                return dir.name === crumb;
            });

            if (foundDirectory) {
                if (typeof foundDirectory.content === 'string') {
                    activeDirectory = [];

                    foundDirectory.content = content;
                    foundDirectory.changed = changed;
                } else {
                    activeDirectory = foundDirectory.content;
                }
            } else {
                activeDirectory = [];
            }

            changeFile();
        }
    }());
};
