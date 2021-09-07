const userUrl = 'https://reservate-api.herokuapp.com/v1/users';
const sessionsUrl = 'https://reservate-api.herokuapp.com/v1/sessions';

const addUser = async user => {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const resp = await fetch(userUrl, options);
  localStorage.setItem('user', resp);
  return resp;
};

const createSession = async user => {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const resp = await fetch(sessionsUrl, options);
  return resp;
};

export { addUser, createSession };
