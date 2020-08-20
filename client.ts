const getUser = async (url: string): Promise<void> => {
  const data = await (await fetch(url)).json();

  return data;
}

console.log(getUser("http://localhost:3334/users"));

/*interface Employee {
  id: number
  employee_name: string
  employee_salary: number
  employee_age: number
  profile_image: string
}

const baseApi = "https://reqres.in/api/users?page=1";
const userApi = "https://reqres.in/api/user";

const fetchAllEmployees = async (url: string): Promise<Employee[]> => {
  const response = await fetch(url)
  const { data } = await response.json()
  console.log(data)
}

fetchAllEmployees(baseApi);
//console.log(fetchAllEmployees(baseApi));*/