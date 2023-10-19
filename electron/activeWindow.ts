import activeWin from 'active-win';

/**
 * Gets a list of all open windows
 * @returns Array of all open windows
 */
export const getAll = () => {
  return activeWin.getOpenWindows();
};

/**
 * Gets the current active window
 * @returns Active window
 */
const getCurrent = async () => {
  return activeWin.sync();
};

const activeWindow = {
  getCurrent,
  getAll,
};
export default activeWindow;
