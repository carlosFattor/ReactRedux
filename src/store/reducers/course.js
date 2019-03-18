const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com react",
      lessons: [
        { id: 1, title: "Promeira Aula" },
        { id: 2, title: "segunda Aula" }
      ]
    },
    {
      id: 2,
      title: "Iniciando com Redux",
      lessons: [
        { id: 3, title: "terceira Aula" },
        { id: 4, title: "quarta Aula" }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type) {
    switch (action.type) {
      case 'TOGGLE_LESSON':
        return {
          ...state,
          activeLesson: action.lesson,
          activeModule: action.module
        }

      default:
        break;
    }
  }
  return state;
}