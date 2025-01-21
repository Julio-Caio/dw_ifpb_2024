import { populateTable } from "./api/api.js";

// ==================================\\
//      DOM ELEMENTS VARIABLES
//\==================================/\\

const TOKEN = "SEU TOKEN AQUI";

const searchButton = document.querySelector("#btnGetIp");
const inputIpAddress = document.querySelector("#inputIpAddress");
const ipTable = document.querySelector("#ipTable");
const alertInfo = document.querySelector("#alert-info");

function createTableHeaders() {
    const headers = `
        <thead>
            <tr>
                <th scope="col">IP</th>
                <th scope="col">Organização</th>
                <th scope="col">País</th>
                <th scope="col">Cidade</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    ipTable.innerHTML = headers;
}

function showAlert(message, type = "danger") {
    alertInfo.innerHTML = `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
    `;
    setTimeout(() => (alertInfo.innerHTML = ""), 3000);
}

createTableHeaders();

searchButton.addEventListener("click", async () => {
    const input = inputIpAddress.value.trim();

    if (!input) {
        showAlert("Por favor, insira um endereço IP!", "warning");
        return;
    }

    try {
        alertInfo.innerHTML = "";

        const tableBody = ipTable.querySelector("tbody");
        await populateTable(input, TOKEN, tableBody);

        showAlert("Dados carregados com sucesso!", "success");
    } catch (error) {
        console.error("Erro:", error);
        showAlert("Erro ao buscar dados. Tente novamente.", "danger");
    }
});