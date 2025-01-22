// ==================================\\
//          FUNCTIONS
//\==================================/\\

export async function fetchApiData(input, token) {
    const URL = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://ipinfo.io/${input}?token=${token}`)}`;

    try {
        const response = await fetch(URL, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar informações. Verifique o IP.");
        }

        const data = await response.json();
        const jsonData = JSON.parse(data.contents);
        return jsonData;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao acessar a API.");
    }
}

export async function populateTable(input,token, tableBody) {
    try {
        const data = await fetchApiData(input, token);

        if (data) {
            const { ip, org, country, city } = data;

            const newRow = `
                <tr>
                    <td>${ip || "N/A"}</td>
                    <td>${org || "N/A"}</td>
                    <td>${country || "N/A"}</td>
                    <td>${city || "N/A"}</td>
                    <td><button type="button" class="btn btn-outline-danger delete-btn"> X </button></td>
                </tr>
            `;

            tableBody.insertAdjacentHTML("afterbegin", newRow);

            const deleteButtons = tableBody.querySelectorAll(".delete-btn");
            deleteButtons.forEach((button) => {
                button.addEventListener("click", (event) => {
                    const row = event.target.closest("tr");
                    row.remove();
                });
            });
        }
    } catch (error) {
        console.error("Erro ao popular a tabela:", error);
        throw new Error("Erro ao popular a tabela.");
    }
}
