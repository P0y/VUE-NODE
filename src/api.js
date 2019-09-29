const users = [
  {id: 1, email: 'poy@gmail.com', pass: 'poypass'},
  {id: 2, email: 'admin@gmail.com', pass: 'adminpass'}
];

export default {
  getUsers() {
    return { users }
  }
}
