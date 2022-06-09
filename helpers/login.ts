// import post from './post';

async function login(username: string, password: string) {
  return { status: 200, responseData: { username, password } }
}

export default login
