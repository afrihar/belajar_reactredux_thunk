export const fecthUsers = () => {
 return (dispatch, setState) => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((data) => dispatch({
       type:'GET_USERS',
       users: data
      }))
 }
}