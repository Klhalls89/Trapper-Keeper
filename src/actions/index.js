export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
})

export const setNoteTitle = (title) => ({
  type: 'SET_NOTE_TITLE',
  title
})

export const setListItem = (item) => ({
  type: 'SET_LIST_ITEM',
  item
})

export const toggleComplete = (bool) => ({
  type: 'TOGGLE_COMPLETE',
  complete: bool
})