type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  // Оновлення користувача
  console.log(initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
