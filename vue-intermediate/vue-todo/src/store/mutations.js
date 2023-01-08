const addOneItem = (state, todoItem) => {
  // 완료 했는지 상태 여부 JSON으로 저장
  let obj = { completed: false, item: todoItem };
  // 로컬스토리지에 저장
  localStorage.setItem(todoItem, JSON.stringify(obj));
  // todoItems에 추가해줌으로써 새로고침하지 않고도 최신 데이터가 반영
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
};

const toggleOneItem = (state, index) => {
  state.todoItems[index].completed = !state.todoItems[index].completed;
  // localStorage에는 update 기능이 없어서 삭제 후 등록을 해줘야함
  localStorage.removeItem(state.todoItems[index].item);
  localStorage.setItem(
    state.todoItems[index].item,
    JSON.stringify(state.todoItems[index])
  );
};
const clearAllItems = (state) => {
  // 로컬스토리지 초기화
  localStorage.clear();
  // todoItems 초기화
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
