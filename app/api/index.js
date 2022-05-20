import { request } from "./request";
import * as URLS from "./urls";
export const API = {
    getTopStories: (onResponse, data) => {
      request(onResponse, data, "GET", URLS.GET_TOP_STORIES);
    },
    getNewStories: (onResponse, data) => {
      request(onResponse, data, "GET", URLS.GET_NEW_STORIES);
    },
    getStoryById: (onResponse, data) => {
      request(
        onResponse,
        data,
        "GET",
        `${URLS.GET_BY_ID}${data.id}.json`,
      );
    },
};