import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from './peopleSlice'

export function People() {
  const people = useSelector(state => state.people.value)

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(increase())}>
          Increase
        </button>
        <p>{people}</p>
        <button onClick={() => dispatch(decrease())}>
          Decrease
        </button>
    </div>
  )
}