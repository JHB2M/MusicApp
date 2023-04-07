export default function reducers(state, action) {
  switch (action.type) {
    case "SAVE_USER":
      const { user } = action.payloads;
     
      return { ...state, user: action.payloads.user };
    case "SAVE_FAV":
      var isInclude = false;
      state.favList.map(function (item, index) {
        item.id == action.payloads.itemRed.id
          ? (isInclude = true)
          : (isInclude = isInclude);
      });
      if (!isInclude) {
        const item = action.payloads.itemRed;
        return { ...state, favList: [...state.favList, item] };
      } else {
        return state;
      }

    case "SAVE_BUY":
      var isIncludeBuy = false;
      state.buyList.map(function (item, index) {
        item.id == action.payloads.itemBuy.id
          ? (isIncludeBuy = true)
          : (isIncludeBuy = isIncludeBuy);
      });
      if (!isIncludeBuy) {
        const itemBuy = action.payloads.itemBuy;
        return { ...state, buyList: [...state.buyList, itemBuy] };
      } else {
        return state;
      }

    case "DELETE_FAV":
      const idRemoveFav = action.payloads.removeIdFav;
      const filteredListFav = state.favList.filter(
        (index) => index.id !== idRemoveFav
      );
      return { ...state, favList: filteredListFav };
    case "DELETE_BUY":
      const idRemove = action.payloads.removeId;
      const filteredList = state.buyList.filter(
        (index) => index.id !== idRemove
      );
      return { ...state, buyList: filteredList };
    case "SAVE_COURSE":
      var isIncludeCourse = false;
      state.courseList.map(function (item, index) {
        if (item.id == action.payloads.itemCourse.id) {
          isIncludeCourse = true;
        }
      });
      if (!isIncludeCourse) {
        const item = action.payloads.itemCourse;
        return { ...state, courseList: [...state.courseList, item] };
      } else {
        return state;
      }
    default:
      return state;
  }
}
