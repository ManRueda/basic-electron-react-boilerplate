import { TOOGLE } from '../actions/app-action'

export default function common (state = true, action) {
  switch (action.type) {
    case TOOGLE:
      return !state
    default:
      return state
  }
}
