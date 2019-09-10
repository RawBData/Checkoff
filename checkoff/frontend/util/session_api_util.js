export const login = (user) => {  
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  });
};

export const signUp = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user}
  });
};

export const logout = () => 
{
  //debugger
  return(
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);};