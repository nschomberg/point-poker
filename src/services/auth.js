import { getUUID, setUUID } from 'services/storage';
import uuid from 'uuid/v4';

/**
 * Returns a unique ID for current user.
 * ID can either be new, or be pulled from storage if returning user
 */
export const getUserId = () => {
  // If UUID doesn't exist in storage
  if (!getUUID()) {
    // Generate new UUID and set it in storage
    setUUID(uuid());
  }
  // Return UUID in storage
  return getUUID();
};
