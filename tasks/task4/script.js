function myFunction() {
    var id, name, email, avatar;
    id = document.getElementById("user-id");
    name = document.getElementById("name");
    filter = input.value.toUpperCase();
    email = document.getElementsByid("user-email");
    avatar = document.getElementById("avatar");
    for (i = 0; i < name.length; i++) {
        a = name[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            name[i].style.display = "";
        } else {
            name[i].style.display = "none";
        }
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
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 6,
      name: "Jessica Garcia",
      email: "jessica@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 7,
      name: "Daniel Rodriguez",
      email: "daniel@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 8,
      name: "Ashley Martinez",
      email: "ashley@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 9,
      name: "Kevin Anderson",
      email: "kevin@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 10,
      name: "Brittany Thomas",
      email: "brittany@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
  ];