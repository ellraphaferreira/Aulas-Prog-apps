const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
    ];

    

const filters = {
    "Usuários Ativos": users.filter(u => u.active),
    "Usuários Inativos": users.filter(u => !u.active),
    "Desenvolvedores": users.filter(u => u.role === "dev"),
    "Designers": users.filter(u => u.role === "designer"),
    "Managers": users.filter(u => u.role === "manager"),
    "Analistas de Dados": users.filter(u => u.role === "data_analyst"),
    "Salário > 5000": users.filter(u => u.salary > 5000),
    "Salário < 4000": users.filter(u => u.salary < 4000),
    "Maiores de 30 anos": users.filter(u => u.age > 30),
    "Menores de 25 anos": users.filter(u => u.age < 25),
    "Analistas de Dados Ativos": users.filter(u => u.role === "data_analyst" && u.active),
    "Devs com salário > 4000": users.filter(u => u.role === "dev" && u.salary > 4000),
    "Managers com mais de 30 anos": users.filter(u => u.role === "manager" && u.age > 30)
  };
  
  const resultsDiv = document.getElementById("results");
  
  for (let title in filters) {
    const section = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = title;
    section.appendChild(heading);
  
    const list = document.createElement("ul");
    
    filters[title].forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} | Idade: ${user.age} | Salário: R$${user.salary} | Cargo: ${user.role} | Ativo: ${user.active}`;
      list.appendChild(li);
    });
  
    if (filters[title].length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nenhum usuário encontrado.";
      list.appendChild(li);
    }
  
    section.appendChild(list);
    resultsDiv.appendChild(section);
  }