import { GETCATEGORIES, GETPOSTS } from "./actionTypes";

export function getCategoriesAction() {
    return {
      type: GETCATEGORIES,
    };
  }
export function getPostsAction() {
  return{
    type: GETPOSTS,
  };
}
