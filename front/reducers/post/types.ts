import { 
  addPostRequestAction,
  addPostSuccessAction,
  addPostFailureAction,

  postResetDoneAction,
  postDeleteDoneAction,

  removePostRequestAction, 
  removePostSuccessAction,
  removePostFailureAction,

  loadMainPostRequestAction,
  loadMainPostSuccessAction,
  loadMainPostFailureAction,

  loadSearchPostsRequestAction,
  loadSearchPostsSuccessAction,
  loadSearchPostsFailureAction,

  loadSinglePostRequestAction,
  loadSinglePostSuccessAction,
  loadSinglePostFailureAction,

  uploadImagesRequestAction,
  currentPageNumberAction,
  updateStartEndPageAction,

} from './actions';

// 액션 타입을 선언할 때 as const를 사용하여야 아래부분 사용가능
export type PostAction = 
| ReturnType<typeof addPostRequestAction>
| ReturnType<typeof addPostSuccessAction>
| ReturnType<typeof addPostFailureAction>

| ReturnType<typeof postResetDoneAction>
| ReturnType<typeof postDeleteDoneAction>

| ReturnType<typeof removePostRequestAction>
| ReturnType<typeof removePostSuccessAction>
| ReturnType<typeof removePostFailureAction>

| ReturnType<typeof loadMainPostRequestAction>
| ReturnType<typeof loadMainPostSuccessAction>
| ReturnType<typeof loadMainPostFailureAction>

| ReturnType<typeof loadSearchPostsRequestAction>
| ReturnType<typeof loadSearchPostsSuccessAction>
| ReturnType<typeof loadSearchPostsFailureAction>

| ReturnType<typeof loadSinglePostRequestAction>
| ReturnType<typeof loadSinglePostSuccessAction>
| ReturnType<typeof loadSinglePostFailureAction>

| ReturnType<typeof uploadImagesRequestAction>
| ReturnType<typeof currentPageNumberAction>
| ReturnType<typeof updateStartEndPageAction>





// 상태에서 사용할 데이터 타입 정의(initialState)
export type PostState = {
  mainPosts: any,
  mainPostsAll: string[],
  singlePost: any,
  postDeleted: boolean,
  imagePaths: string[],
  addingPostErrorReason: string,
  isAddingPost: boolean,
  postAdded: boolean,
  postLoaded: boolean,

  start: number,// pagination
  end: number,
  current: number,
  hasMorePost: boolean,
  lastId: number,
}




export type initialState = PostState[];