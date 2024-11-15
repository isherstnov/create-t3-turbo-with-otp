import * as SecureStore from "expo-secure-store";

import { EXPO_STORAGE_PREFIX } from "~/utils/auth";

const KEY = `${EXPO_STORAGE_PREFIX}_cookie`;

export const getCookiesFromStore = () => SecureStore.getItemAsync(KEY);
export const deleteCookiesFromStore = () => SecureStore.deleteItemAsync(KEY);
export const setCookiesToStore = (v: string) =>
  SecureStore.setItemAsync(KEY, v);
