function showUsers(formId) {
  var forms = document.querySelectorAll('.user-list');
  forms.forEach(function(form) {
    form.style.display = 'none';
  });
  var users = document.getElementById(userList);
  if (users) {
    users.style.display = 'block';
  }
}
const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
  ];
  